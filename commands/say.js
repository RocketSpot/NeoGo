const Discord = require('discord.js');

module.exports = {
    name: 'say',
    description: "Says a message that a user states.",
    async execute(message, args, client, Discord){
        const messageToSay = args.join(" ");
        let sayEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag} says:`)
        .setDescription(`${messageToSay}`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        .setColor("RANDOM");
        try {
            await message.channel.send(sayEmbed)
        }
        catch (err) {
            console.log(err);
            message.channel.send("I am not able to say the message. This might be an error, please try again.")
        }
    }
}