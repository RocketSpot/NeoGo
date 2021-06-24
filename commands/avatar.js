module.exports = {
    name: 'avatar',
    description: "Displays your avatar",
    async execute(message, args, Discord){
        let avatarEmbed = new Discord.MessageEmbed()
        .setTitle("Profile Picture")
        .setImage(message.author.displayAvatarURL())
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("You have a nice taste of design!")
        message.channel.send(avatarEmbed)
    }
}