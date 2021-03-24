const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanmak İçin ``Yönetici`` İznine Sahip Olmalısın.`))
if(!db.fetch(`kayıtkanalı_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Özellik Zaten Kapalı.`))


message.reply(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Kayıt Sisteminin Tüm Ayarları Devre Dışı Bırakılmıştır.`))
message.react('✅')
db.delete(`alınacak_${message.guild.id}`)
db.delete(`bayanrol_${message.guild.id}`)
db.delete(`erkekrol_${message.guild.id}`)
db.delete(`girişmesajı_${message.guild.id}`)
db.delete(`kayıtkanalı_${message.guild.id}`)
db.delete(`kayıtlog_${message.guild.id}`)
db.delete(`yetkilikayıt_${message.guild.id}`)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ayarlarısıfırla'],
    permLevel: 3
};

exports.help = {
    name: 'kayıt-sıfırla',
    description: 'Tüm Kayıt Ayarlarını Sıfırlar.',
    usage: 'kayıt-sıfırla'
}