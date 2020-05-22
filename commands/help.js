var Discord = require('discord.js');
var prefix = `*`

exports.run = async(client, msg, args) => {


   const embed = new Discord.MessageEmbed()
    .setTitle('Aperace')
    .setDescription (`**Commands**`)
    .setThumbnail (`http://1.bp.blogspot.com/-zHadsvGwqEM/T48RSwyXEII/AAAAAAAAAOk/GrsTqyDwKWM/s1600/Crying-Anime-Girl-anime-girls-7642956-800-600.jpg`)
    .addField(`**Administrator**`, `**${prefix}ban <user> <reason> - Ban a user from the Server.\n${prefix}kick <user> <reason> - Kick a user from the Server.\n${prefix}mute <user> <time> <reason> - Mute a user for a specific time.(The Server needs a mute role!) \n ${prefix}warn <user> <reason> - Warn a user. \n${prefix}clear | purge <amount of messages> - Clears a amount of messages.(Max. 100)\n${prefix}giveaway <time> <channel> <prize> - Create a Giveaway.**`)
    .addField('**Infos**', `**${prefix}covid - Give you Informations about Corona.\n${prefix}covidstate <state> - Give you Informations about Corona from a state.\n${prefix}user-info - Give you Informations about your Account.\n${prefix}youtube - Shows Magg´s Youtube Channel.\n${prefix}server-info - Give you some Informations about the Server.**`)
    .addField(`**Fun**`, `**${prefix}meme - Shows you a random meme.\n${prefix}random - Shows a random number from 1 to ∞.\n ${prefix}joke - Tells you a joke.\n ${prefix}cnjoke - Tells you a Chuck Norris joke.**`)
    .setColor(0xff0000)
    .setFooter(`Created by Magg#0001`, `https://media.giphy.com/media/fGGV7FeScq2s/giphy.gif`)
    msg.channel.send(embed);

}
