const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin ``Yönetici`` İznine Sahip Olmalısın.`))
let logkayıt = message.mentions.channels.first()
if (!logkayıt) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Kanal Etiketlemelisin.`))   

db.set(`kayıtlog_${message.guild.id}`, logkayıt.id)
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Log Kanalı Başarıyla Ayarlandı. \n Log Kanalı: **${logkayıt}**`))
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3,
   };
   
   exports.help = {
    name: 'kayıt-log',
    description: 'Kayıt log Kanalını Belirlersiniz.',
    usage: 'kayıt-log'
   };