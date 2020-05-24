var Discord = require('discord.js');
var db = require (`quick.db`)

exports.run = async(client, msg, args) => {


let user = msg.mentions.users.first() || msg.author
let money = db.fetch(`money_${user.id}`)
let avatar = user.avatarURL({size: 2048});


let embed = new Discord.MessageEmbed()

.setTitle(`**Bank**`)
.setDescription(`**Your Coins:\n**${money}`)
.setColor(0xff0000)
.setThumbnail(avatar)

msg.channel.send(embed);

}
