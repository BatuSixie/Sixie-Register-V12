const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin ``Yönetici`` İznine Sahip Olmalısın.`))
let rolbayan = message.mentions.roles.first()
if (!rolbayan) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Rol Etiketlemelisin.`))

db.set(`bayanrol_${message.guild.id}`, rolbayan.id)
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Bayan Rolü Başarıyla Ayarlandı. \n Ayarlanan Rol: **${rolbayan}**`))
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3,
   };
   
   exports.help = {
    name: 'bayan-rol',
    description: 'Bayan Rolünü Ayarlarsınız.',
    usage: 'bayan-rol'
   };