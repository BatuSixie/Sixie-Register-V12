const Discord = require('discord.js')
const db  = require('quick.db')

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin ``Yönetici`` İznine Sahip Olmalısın.`))
let kayıtalınacak = message.mentions.roles.first()
if(!kayıtalınacak) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Rol Etiketlemelisin.`))
db.set(`alınacak_${message.guild.id}`, kayıtalınacak.id)
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Başarılı Kayıt Alınacak Rolü Ayarladınız.\n Ayarlanan Rol : **${kayıtalınacak}**`))
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3,
   };
   
   exports.help = {
    name: 'kayıt-alınacak-rol',
    description: 'Birini Kaydettiğinizde Üzerinden Alınacağı Rolü Belirlersiniz.',
    usage: 'kayıt-alınacak-rol'
   };