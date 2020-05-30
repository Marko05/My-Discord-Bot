var Discord = require('discord.js');
let queue = {};
let ytdl = require(`ytdl-core`)
let prefix = `*`

exports.run = async(client, msg, args) => {
    if (queue[msg.guild.id] === undefined) return msg.channel.send(`Add some songs to the queue first with ${prefix}add`);
    let tosend = [];
    queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
    msg.channel.send(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);

}