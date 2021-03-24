const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin ``Yönetici`` İznine Sahip Olmalısın.`))
  let kayitcirol = message.mentions.roles.first()
  if (!kayitcirol) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(':x: Bir Rol Etiketlemelisin.'))
   
  db.set(`yetkilikayıt_${message.guild.id}`, kayitcirol.id)
  message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Yetkili Rolünü Başarıyla Ayarladınız. \n Ayarlanan Rol: **${kayitcirol}**`))
message.react('✅') 
};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: [],
 permLevel: 3,
};

exports.help = {
 name: 'kayıt-yetkili-rol',
 description: '',
 usage: 'kayıt-yetkili-rol'
};