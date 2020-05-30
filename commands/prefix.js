var Discord = require('discord.js');
var db = require(`quick.db`)

exports.run = async(client, msg, args) => {


  if (!msg.member.hasPermission("MANAGE_GUILD")) return msg.channel.send("You don't have any permissions to do this!");
  let data = db.get(`prefix.${msg.guild.id}`);
  if (msg.flags[0] === "default") {
    await db.delete(`prefix.${msg.guild.id}`);
    return msg.channel.send("The server prefix has been changed into default.");
  }
  
  let symbol = args.join(" ");
  if (!symbol) return msg.channel.send("Please input the prefix.");
  
  db.set(`prefix.${msg.guild.id}`, symbol);
  return msg.channel.send(`The server prefix has been changed to **${symbol}**`);
}
