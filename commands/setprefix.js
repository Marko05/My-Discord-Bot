var Discord = require('discord.js');
var prefix = `*`;


exports.run = async(client, msg, args) => {

    if (!args[1]) {
        return msg.channel.send('Please include the new prefix.')
    }
    guildConf[msg.channel.id].prefix = (args[1]).toLowerCase();
    fs.writeFile('./guildConf.json', JSON.stringify(guildConf, null, 2), (err) => {
        if (err) console.log(err);
    })
    return msg.channel.send('The new prefix for this server is "' + (args[1]).toLowerCase() + '"')
}



