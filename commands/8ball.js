const Discord = module.require('discord.js');

var fortunes = [
    "yes",
    "no",
    "maybe",
    "dont know, try again",
    "of course",
    "possibly"
];


module.exports.run = async (client, msg, args) => {

if(!args[0]){
  return msg.channel.send(":x: " + "| Please Enter a Question you would like answered")
}
if (args[0]) msg.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
else msg.channel.send(":x: " + "| **I wasnt able to read that :(**");
}