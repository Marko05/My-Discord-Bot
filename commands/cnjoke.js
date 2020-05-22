var Discord = require('discord.js');
var giveMeAJoke = require (`discord-jokes`)

exports.run = async(client, msg, args) => {

giveMeAJoke.getRandomCNJoke (function(joke) {
    msg.channel.send(joke)

    })
}