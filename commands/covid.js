var Discord = require('discord.js');
var api = require(`covidapi`)

exports.run = async(client, msg, args) => {

    api.all().then(console.log)

    const data = await api.all()
    const coronaembed = new Discord.MessageEmbed()
    .setColor("ff2050")
    .setTitle("**Global Covid-19 Informations**")
    .setDescription("Number of cases may differ from other sources")
    .addField("**Cases**", data.cases, true)
    .addField("**Active**", data.active, true)
    .addField("**Cases Today**", data.todayCases, true)
    .addField("**Critical Cases**", data.critical, true)
    .addField("**Deaths**", data.deaths, true)
    .addField("**Recovered**", data.recovered, true)
    msg.channel.send(coronaembed)

}
