var Discord = require('discord.js');
var randomPuppy = require (`random-puppy`)

exports.run = async(client, msg, args) => {

    var subReddits = ["dankmeme", "meme", "memes"]
    var random = subReddits[Math.floor(Math.random() * subReddits.length)];

    var img = await randomPuppy(random);
    var embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`From ${random}`)
    .setURL(`https://reddit.com/r/${random}`);
    msg.channel.send(embed)
}
