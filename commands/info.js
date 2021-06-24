module.exports = {
    name: 'info',
    description: 'bot info',
    execute(message, args, Discord){
        let exampleEmbed = new Discord.MessageEmbed()
        .setTitle("Info")
        .setDescription("Hi there, i'm a bot programmed in *discord.js* by Discord user RocketSpot#9395.\nThis is a solo project made to develop RocketSpot's *JS* and *discord.js* skills.\n\n**While you are here, check this out.**")
        .addFields(
            { name: 'Help Server', value: '[**Join**](https://discord.gg/yzngJZ7GEF)', inline: true },
            { name: 'Website', value: '[**Owner\s Website**](https://rocketspot.repl.co)', inline: true },
            { name: 'Invite Me', value: '[**Click**](https://discord.com/oauth2/authorize?client_id=840235326407704576&permissions=8&scope=bot)', inline: true },
        )
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/773912088677449771/850426720545013810/info-icon--6.png')
        .setTimestamp()
        .setFooter("That's some info! Hope it helps.")
        message.channel.send(exampleEmbed);
    }
}