var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
  
    if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('**:x: | You can\'t use this command!**');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('**Please mention someone!**');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(member){
        
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('**:x: | You cannot ban this person!**');
    }

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('**Please give a reason!**');

    var channel = msg.guild.channels.cache.find(c => c.name === 'potato');

    var log = new Discord.MessageEmbed()
    .setTitle('__**User Banned**__')
    .addField('**User:**', user, true)
    .addField('**By:**', msg.author, true)
    .addField('**Reason:**', reason)
    msg.channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('**You were banned!**')
    .addField(`**Reason:**`, reason, true)
    .addField('**By:**', msg.author, true)

    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    msg.guild.members.ban(user); // This should not be user.id like I said in my video. I made a mistake. Sorry! :)

  
}