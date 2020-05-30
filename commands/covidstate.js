var Discord = require('discord.js');
var prefix = `*`
var api = require(`covidapi`)

exports.run = async(client, msg, args) => {

var countrycovid = msg.content.slice(prefix.length).split(' ')
var countrydata = await api.countries({country: countrycovid})

const countryembed = new Discord.MessageEmbed()
.setColor("ff2050")
.setTitle(`**Covid-19 Informations of ${countrycovid[1]}**`)
.setDescription("Number of cases may differ from other sources")
.addField("**Cases**", countrydata.cases, true)
.addField("**Active**", countrydata.active, true)
.addField("**Cases Today**", countrydata.todayCases, true)
.addField("**Critical Cases**", countrydata.critical, true)
.addField("**Deaths**", countrydata.deaths, true)
.addField("**Recovered**", countrydata.recovered, true)

msg.channel.send(countryembed)

}