module.exports = {
    name: 'ping',
    description: 'Gives you the bot\'s latency',
    execute(message, args, Discord){
        message.channel.send("Running through bot\'s database...").then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            let exampleEmbed = new Discord.MessageEmbed()
            .setTitle("🏓 **Pong!** 🏐")
            .setDescription(`The bot\'s ping is ${ping}! Now let\'s continue playing out game of Ping Pong!'`)
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter("The bot is running fine and smoothly!")
            message.channel.send(exampleEmbed);
        })
    }
}