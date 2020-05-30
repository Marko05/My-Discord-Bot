const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, msg, args) => {

  let Timer = args[0];

  if(!args[0]){
    return msg.channel.send(":x: " + "| Please Enter a time period followed by \"**s or m or h**\"");
  }

  if(args[0] <= 0){
    return msg.channel.send(":x: " + "| Please Enter a time period followed by \**Seconds (s), Minutes (m) or Hours(h).**\"");
  }

  msg.channel.send(":white_check_mark: " + "| Timer Started for: " + `**${ms(ms(Timer), {long: true})}**`)

  setTimeout(function(){
    msg.channel.send(msg.author.toString() + ` The Timer Has **FINISHED!** | Lasted: **${ms(ms(Timer), {long: true})}** | ⏱`)

  }, ms(Timer));
}