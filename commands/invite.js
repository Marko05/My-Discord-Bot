var Discord = require('discord.js');
var getJSON = require (`get-json`)

exports.run = async(client, msg, args) => {

const embed = new Discord.MessageEmbed()

.setTitle (`__**Invite Link**__`)
.setDescription (`**BOT INVITE LINK:**\nhttps://discord.com/api/oauth2/authorize?client_id=705907646481432608&permissions=8&scope=bot`) 
.setColor (0xff0000)
.setThumbnail (`http://1.bp.blogspot.com/-zHadsvGwqEM/T48RSwyXEII/AAAAAAAAAOk/GrsTqyDwKWM/s1600/Crying-Anime-Girl-anime-girls-7642956-800-600.jpg`)

msg.channel.send(embed);

}
