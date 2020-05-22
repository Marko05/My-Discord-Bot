var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply(':x: **You can\'t use this command!**');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply(':x: **You didn\'t mention anyone!**');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply(':x: **They aren\'t in the server!**');

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('**Please give a reason!**');

    var channel = msg.guild.channels.cache.find(c => c.name === 'potato');

    var log = new Discord.MessageEmbed()
    .setTitle('__**User Warned**__')
    .addField('**User:**', user, true)
    .addField('**By:**', msg.author, true)
    .addField('**Reason:**', reason)
    msg.channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('**You were warned!**')
    .setDescription(reason);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }


}