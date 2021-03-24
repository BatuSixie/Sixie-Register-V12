const Discord = require('discord.js')

    exports.run = (client, message, args) =>{
        if(message.channel.type == "dm")  return;
        let kullanıcı = message.mentions.members.first();

        if(kullanıcı){
            const avatar = new Discord.MessageEmbed()
            .setColor('0x36393E')
            .setImage(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            .setFooter(`${message.author.username} Tarafından Kullanıldı`)
            message.channel.send(avatar)
            message.react('✅')
        } else {
            const avatar = new Discord.MessageEmbed()
            .setColor('0x36393E')
            .setImage(message.author.avatarURL({dynamic: true, size: 2048}))
            .setFooter(`${message.author.username} Tarafından Kullanıldı`)
            message.channel.send(avatar)
            message.react('✅')
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Avatar','pp','Pp','icon','İcon'],
    permLevel : 0
}

exports.help = {
    name: 'avatar',
    usage: '!avatar'
}