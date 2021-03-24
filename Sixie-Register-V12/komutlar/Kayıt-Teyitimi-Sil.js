const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Tüm Teyitleriniz Silindi.`))
message.react('✅')
db.delete(`sixieerkek_${message.author.id}`)
db.delete(`sixiebayan_${message.author.id}`)
db.delete(`say.toplam.${message.author.id}`)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'teyitimisil',
    description: 'Kendi Teyitlerinizi Sıfırlarsınız.',
    usage: 'teyitimisil',
}