var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

if (!msg.member.permissions.has("ADMINISTRATOR"))
return msg.channel.send(
  `You do not have admin, ${msg.author.username}`
);
const channel =
msg.mentions.channels.first() ||
msg.guild.channels.cache.get(args[0]);
if (!channel) {
return msg.channel.send(
  `You did not mention / give the id of your channel!`
);
}
let question = msg.content.slice(client.prefix.length+5+channel.id.length+3)

if (!question)
return msg.channel.send(`You did not specify your question!`);
const Embed = new Discord.MessageEmbed()
.setTitle(`New poll!`)
.setDescription(`${question}`)
.setFooter(`${msg.author.username} created this poll.`)
.setColor(`GREEN`);
await msg.react("👍");
await msg.react("👎");

await client.channels.cache.get(channel.id).send(Embed);



}
