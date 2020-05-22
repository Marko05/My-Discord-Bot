var Discord = require('discord.js');
var db = require (`quickdb`)

exports.run = async(client, msg, args) => {


let user = msg.mentions.users.first() || msg.author
let money = db.fetch(`money_${user.id}`)

if (money === null) money = 0

msg.channel.send(`${user} you have ${money} coins`)
}