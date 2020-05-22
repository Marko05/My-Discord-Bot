var Discord = require('discord.js');
var ms = require('ms');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply(':x: **You can\'t use that!**');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('**Please mention someone!**');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply(':x: **They aren\'t in the server!**');
    if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply(':x: **You cannot mute that person!**');

    var rawTime = args[1];
    var time = ms(rawTime);
    if(!time) return msg.reply(':alarm_clock: **You didn\'t specify a time!**');

    var reason = args.splice(2).join(' ');
    if(!reason) return msg.reply('**Please give a reason!**');

    var channel = msg.guild.channels.cache.find(c => c.name === 'kanal-logs');

    var log = new Discord.MessageEmbed()
    .setTitle('__**Mute**__')
    .addField('**User:**', user, true)
    .addField('**By:**', msg.author, true)
    .addField('**Expires:**', rawTime)
    .addField('**Reason:**', reason)
    msg.channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('**You were muted!**')
    .addField('**Expires:**', rawTime, true)
    .addField('**Reason:**', reason, true);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    var role = msg.guild.roles.cache.find(r => r.name === 'Muted');

    member.roles.add(role);

    setTimeout(async() => {
        member.roles.remove(role);
    }, time);


}