const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(client)
    console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(' - ' + guild.name + ':')
        guild.channels.cache.forEach((channel) => {
            console.log(`   • ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
})
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
    else if (receivedMessage.content.includes('bruh')) {
         receivedMessage.channel.send("**BRUH**")
    }
})

client.login(process.env.BOT_TOKEN);
