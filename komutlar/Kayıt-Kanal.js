const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin ``Yönetici`` İznine Sahip Olmalısın.`))
let kayıtkanal = message.mentions.channels.first()
if (!kayıtkanal) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Kanal Etiketlemelisin.`))

db.set(`kayıtkanalı_${message.guild.id}`, kayıtkanal.id)

message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Kayıt Kanalı Başarıyla Ayarlandı. \n Ayarlanan Kanal: **${kayıtkanal}**`))
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3,
   };
   
   exports.help = {
    name: 'kayıt-kanal',
    description: 'Kayıt Kanalını Belirlersiniz.',
    usage: 'kayıt-kanal'
   };