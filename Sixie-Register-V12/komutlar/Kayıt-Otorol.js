const fs = require ('fs')
const Discord = require('discord.js')

exports.run = async (bot, message, args) =>

{
  if(message.channel.type == "dm")  return;
      let profil = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(new Discord.MessageEmbed().setColor('0x36393E').setDescription('❌ Yetkiniz Bulunmamaktadır!'));
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription("❌ Örnek Kullanım Şekli: **b!otorol @Üye #otorol**")) 

  if (message.guild.member(message.author.id).hasPermission(0x8));
    
    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription("**❌ !otorol @<roladı> #<metinkanalı>**".then(msg => msg.delete(5000))))
    

    if(!profil[message.guild.id]){
    
        profil[message.guild.id] = {
      
            sayi: mentionedRole.id,
      kanal: mentionedChannel.id
        };
    }
    
    profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id
    
    fs.writeFile("./otorol.json", JSON.stringify(profil), (err) => {
        console.log(err)

    })

    const embed = new Discord.MessageEmbed()
        .setDescription(`✅ Otorol Başarılıyla ${args[0]} Olarak Ayarlanmıştır. \nOtorol Mesaj Kanalı Başarılıyla ${mentionedChannel} Olarak Ayarlanmıştır.`)
        .setColor('0x36393E')
        .setTimestamp()
    message.channel.send({embed})
    message.react('✅')
}

}



exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"]
}

exports.help =
{
  name: 'otorolayarla',
  description: '',
  usage: 'otorolayarla'
}