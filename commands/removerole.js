const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, msg, args) => {

if(msg.member.hasPermission("ADMINISTRATOR")) {
  let member = msg.mentions.members.first();
  if(!member) return msg.reply(":x: " + "| You need to mention a user/member!");

  let muteRole = msg.mentions.roles.first();
  if(!muteRole) return msg.reply(":x: " + `| There is no such thing as a \"${muteRole.name}\" role!`);

  member.removeRole(muteRole.id);
  msg.channel.send(member + ` you have lost the role: ` + muteRole.name + `!`);

  }else {
    return msg.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission")
  };
}