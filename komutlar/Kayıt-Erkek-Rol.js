const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin ``Yönetici`` İznine Sahip Olmalısın.`))
let rolerkek = message.mentions.roles.first()
if(!rolerkek) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Rol Etiketlemelisin.`))

db.set(`erkekrol_${message.guild.id}`, rolerkek.id)
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Erkek Rolü Başarıyla Ayarlandı \n Ayarlanan Rol: **${rolerkek}**`))
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3,
   };
   
   exports.help = {
    name: 'erkek-rol',
    description: 'Erkek Rolünü Ayarlarsınız.',
    usage: 'erkek-rol'
   };