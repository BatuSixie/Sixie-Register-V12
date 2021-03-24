const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin ``Yönetici`` İznine Sahip Olmalısın.`))
let girişmesajkanal = message.mentions.channels.first()
if(!girişmesajkanal) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Kanal Etiketlemelisin.`))

db.set(`girişmesajı_${message.guild.id}`, girişmesajkanal.id)
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Giriş Mesaj Kanalı Ayarlandı \n Kanal : **${girişmesajkanal}**`))
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kayıtmesaj'],
    permLevel: 3
};

exports.help = {
    name: 'girişmesaj',
    description: 'Giriş Mesajının Gönderileceği Kanalı Ayarlarsınız.',
    usage: 'girişmesaj'
}