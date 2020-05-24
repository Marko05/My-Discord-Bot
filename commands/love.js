const Discord = module.require('discord.js');

var Responses = [
    "yes",
    "no",
    "maybe",
    "dont know, try again",
    "Of course no, try again maybe",
    "i mean, i guess so",
    "if you say so",
    "im not saying anything but you know the answer",
    "definately not",
    "its a possibility",
    "a huge chance",
    "a small chance",
    "you better hope so",
    "you better not hope so"
];

module.exports.run = async (bot, msg, args) => {

    if(!args[0]){
        return msg.channel.send(":x: " + " Please Enter a person/object")
    }

    if (args[0]) {
        msg.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
    }

}