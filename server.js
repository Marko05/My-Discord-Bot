const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '*';
const token = 'NzA1OTA3NjQ2NDgxNDMyNjA4.XsAHqA.CkCaTIa-gZq0iXwUFrzAsX8f-Zw';
 
bot.on('ready', () => {
    console.log(`${bot.user.tag} successfully logged in!`)
    bot.user.setActivity('*help', ({type: "PLAYING"}))
})

bot.on("messageReactionAdd", async (reaction, user) => {
  // If a message gains a reaction and it is uncached, fetch and cache the message.
  // You should account for any errors while fetching, it could return API errors if the resource is missing.
  if (reaction.message.partial) await reaction.message.fetch(); // Partial messages do not contain any content so skip them.
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return; // If the user was a bot, return.
  if (!reaction.message.guild) return; // If the user was reacting something but not in the guild/server, ignore them.
  if (reaction.message.guild.id !== "YOUR_SERVER_ID") return; // Use this if your bot was only for one server/private server.
  
  if (reaction.message.channel.id === "SELF_ROLES_CHANNEL_ID") { // This is a #self-roles channel.
    if (reaction.emoji.name === "1️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("ROLE_ID1") // Minecraft role.
      return user.send("Minecraft role was given!").catch(() => console.log("Failed to send DM."));
    }
    
    if (reaction.emoji.name === "2️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("ROLE_ID2"); // Roblox role.
      return user.send("Roblox role was given!").catch(() => console.log("Failed to send DM."));
    }
  } else {
    return; // If the channel was not a #self-roles, ignore them.
  }
})

bot.on("messageReactionRemove", async (reaction, user) => {
  // We're gonna make a trigger, if the user remove the reaction, the bot will take the role back.
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.guild.id !== "YOUR_SERVER_ID") return;
  
  if (reaction.message.channel.id === "SELF_ROLES_CHANNEL_ID") {
    if (reaction.emoji.name === "1️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("ROLE_ID1") // Minecraft role removed.
      return user.send("Minecraft role was taken!").catch(() => console.log("Failed to send DM."));
    }
    
    if (reaction.emoji.name === "2️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("ROLE_ID2") // Roblox role removed.
      return user.send("Roblox role was taken!").catch(() => console.log("Failed to send DM."));
    }
  } else {
    return;
  }
})

bot.on('message', async message => {
  if (message.author.bot) return; // Ignore if the user is a bot.
  
  let pref = db.get(`prefix.${message.guild.id}`);
  let prefix;
  
  if (!pref) {
    prefix = "*"; // If the server doesn't have any custom prefix, return default.
  } else {
    prefix = pref;
  }
  
  if (!message.content.startsWith(prefix)) return; // use this. so your bot will be only executed with prefix.
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();
  
  if (msg.startsWith(prefix + "reaction-roles-embed")) {
    let channel = client.channels.cache.get("SELF_ROLES_CHANNEL_ID"); // We want to sent the embed, directly to this channel.
    const embed = new Discord.MessageEmbed()
    .setColor(0xffffff)
    .setTitle("Pick your roles!")
    .setDescription(`1️⃣ Minecraft \n\n2️⃣ Roblox`) // We're gonna try an unicode emoji. Let's find it on emojipedia.com !
    channel.send(embed).then(async msg => {
      await msg.react("1️⃣");
      await msg.react("2️⃣");
      // We're gonna using an await, to make the react are right in order.
    });
  };
});
 
bot.on('message', message => {

})
 
bot.login(token);