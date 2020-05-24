var Discord = require('discord.js');
var prefix = `*`
var yt = require('ytdl-core');
let queue = {};

exports.run = async(client, msg, args) => {
    
    let url = msg.content.split(' ')[1];
    if (url == '' || url === undefined) return msg.channel.send(`You must add a YouTube video url, or id after ${prefix}add`);
    yt.getInfo(url, (err, info) => {
        if(err) return msg.channel.send('Invalid YouTube Link: ' + err);
        if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
        queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
        msg.channel.send(`added **${info.title}** to the queue`);
    })
}