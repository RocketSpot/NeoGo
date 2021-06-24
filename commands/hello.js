module.exports = {
    name: 'hello',
    description: 'Just wanted to say hi to you!',
    execute(message, args, Discord){
        message.channel.send("Hi").then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            let exampleEmbed = new Discord.MessageEmbed()
            .setTitle("👋 **Thanks for using NeoGo!** 👋")
            .setDescription(`How are you?`)
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter("<3")
            message.channel.send(exampleEmbed);
        })
    }
}