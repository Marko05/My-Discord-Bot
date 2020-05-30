var Discord = require('discord.js');
var prefix = `*`;
var here = `https://discord.com/api/oauth2/authorize?client_id=705907646481432608&permissions=8&scope=bot`;

exports.run = async(client, msg, args) => {

    const embed = new Discord.MessageEmbed()
     
    .setTitle('Aperace')
    .setDescription (`**Commands**`)
    .setThumbnail (`http://1.bp.blogspot.com/-zHadsvGwqEM/T48RSwyXEII/AAAAAAAAAOk/GrsTqyDwKWM/s1600/Crying-Anime-Girl-anime-girls-7642956-800-600.jpg`)
    .addField(`**Moderation**`, `**${prefix}ban @user <reason> - Bans a user from the Server.\n${prefix}kick @user <reason> - Kicks a user from the Server.\n${prefix}warn @user <reason> - Warns a user. \n${prefix}clear | purge <amount of messages> - Clears a amount of messages.(Max. 100)**`)
    .addField('**Infos**', `**${prefix}weather <city> - Gives you Informations about the weather in the city.\n${prefix}covid - Gives you Informations about Corona in the world.\n${prefix}covidstate <state> - Gives you Informations about Corona from a state.\n${prefix}pokemon <pokemon> - Gives you Informations about the pokemon.\n${prefix}emoji - Provides an overwiew of all Emojis on the server.\n${prefix}userinfo - Gives you Informations about your Account.\n${prefix}serverinfo - Gives you some Informations about the Server.\n${prefix}youtube - Shows Magg´s Youtube Channel.**`)
    .addField(`**Economy**`, `**${prefix}bank - Shows your coins.\n${prefix}daily - Gives you 100 coins.**`)
    .addField(`**Fun**`, `**${prefix}giveaway <time> #channel <prize> - Creates a Giveaway.\n${prefix}meme - Shows you a random meme.\n${prefix}random <number 1> <number 2> - Shows a random number from 1 to ∞.\n${prefix}joke - Tells you a joke.\n${prefix}cnjoke - Tells you a Chuck Norris joke.\n${prefix}8ball <question> - Answers a question from you.\n${prefix}love <person/object> - Shows the love to the person/object.**`)
    .addField(`**Timer**`, `**${prefix}timer <time> - Sets a Timer for a specific time.**`)
    .addField(`**Utility**`, `**${prefix}invite - Invites the bot to your server.**`)
    .setColor(0xff0000)
    .setFooter(`Created by Magg#0001`, `https://media.giphy.com/media/fGGV7FeScq2s/giphy.gif`)
    msg.react("✅")
    msg.channel.send(embed);
    

}
