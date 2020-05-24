var Discord = require('discord.js');
var prefix = `*`;
var here = `https://discord.com/api/oauth2/authorize?client_id=705907646481432608&permissions=8&scope=bot`;

exports.run = async(client, msg, args) => {


   const embed = new Discord.MessageEmbed()
    .setTitle('Aperace')
    .setDescription (`**Commands**`)
    .setThumbnail (`http://1.bp.blogspot.com/-zHadsvGwqEM/T48RSwyXEII/AAAAAAAAAOk/GrsTqyDwKWM/s1600/Crying-Anime-Girl-anime-girls-7642956-800-600.jpg`)
    .addField(`**Administrator**`, `**${prefix}ban @user <reason> - Bans a user from the Server.\n\n${prefix}kick @user <reason> - Kicks a user from the Server.\n\n${prefix}mute @user <time> <reason> - Mutes a user for a specific time.(The Server needs a mute role!) \n\n${prefix}warn @user <reason> - Warns a user. \n\n${prefix}clear | purge <amount of messages> - Clears a amount of messages.(Max. 100)\n\n${prefix}giveaway <time> #channel <prize> - Creates a Giveaway.**`)
    .addField('**Infos**', `**${prefix}covid - Gives you Informations about Corona in the world.\n\n${prefix}covidstate <state> - Gives you Informations about Corona from a state.\n\n${prefix}pokemon <pokemon> - Gives you Informations about the pokemon.\n\n${prefix}user-info - Gives you Informations about your Account.\n\n${prefix}server-info - Gives you some Informations about the Server.\n\n${prefix}youtube - Shows Magg´s Youtube Channel.**`)
    .addField(`**Fun**`, `**${prefix}meme - Shows you a random meme.\n\n${prefix}random - Shows a random number from 1 to ∞.\n\n${prefix}joke - Tells you a joke.\n\n${prefix}cnjoke - Tells you a Chuck Norris joke.\n\n${prefix}8ball <question> - Answers a question from you.\n\n${prefix}love <person/object> - Shows the love to the person/object.**`)
    .addField(`**Timer**`, `**${prefix}timer <time> - Sets a Timer for a specific time.**`)
    .setColor(0xff0000)
    .setFooter(`Created by Magg#0001`, `https://media.giphy.com/media/fGGV7FeScq2s/giphy.gif`)
    msg.channel.send(embed);

}
