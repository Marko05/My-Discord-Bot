var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    if(!args[0]) return msg.reply("**You didn't specify args 1**")
    if(!args[1]) return msg.reply("**You didn't specify args 2**")
    msg.channel.send("Your random number is: " + Math.floor(Math.random() * args[1] + args[0]));
}
