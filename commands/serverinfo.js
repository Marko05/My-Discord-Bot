var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

let embed = new Discord.MessageEmbed()
.setTitle("__Server-Information__")
.setColor("0ED4DA")
.setThumbnail(`http://1.bp.blogspot.com/-zHadsvGwqEM/T48RSwyXEII/AAAAAAAAAOk/GrsTqyDwKWM/s1600/Crying-Anime-Girl-anime-girls-7642956-800-600.jpg`)
.addField('**Server-Name**', `**${msg.guild.name}**`, true)
.addField('**Server-Owner:**', `**${msg.guild.owner.user.tag}**`, true)
.addField("**Member-Count:**", `**${msg.guild.memberCount}**`, true)


msg.channel.send(embed);
}
