let Discord = require("discord.js");
let db = require("quick.db")
module.exports.run = async (client, message, args) => {
  if(message.channel.type == "dm") return;
            let sayici = await db.fetch(`say.toplam.${message.author.id}.${message.guild.id}`)

  let erkek = await db.fetch(`sixieerkek_${message.author.id}.${message.guild.id}`)
  let kadın = await db.fetch(`sixiebayan_${message.author.id}.${message.guild.id}`)

  if(!erkek || !kadın) {
    let embed1 = new Discord.MessageEmbed()
    .setTitle("HATA!")
    .addField(`Erkek Ve Kayıt Bilginiz Bulunmamakta.!`, `Hemen Birini Kaydet Ve Öyle Dene!`)
    .setColor('0x36393E')
    message.channel.send(embed1)
    message.react('❌')
    return
  };



  let embed = new Discord.MessageEmbed()

  .addField(`**Erkek Kayıt Sayısı:** `, `\`${erkek ? erkek : 'veri yok.'}\``)
  .addField(`**Kadın Kayıt Sayısı:** `, `\`${kadın ? kadın : 'veri yok.'}\``)
    .addField(`**Toplam Kayıt Sayısı:** `, `\`${sayici ? sayici : 'veri yok.'}\``)
    .setColor('0x36393E')
  .setTitle(`Teyit Bilgileri!`)
  message.channel.send(embed)
  message.react('✅')
  return
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['teyit','teyitbilgi'],
    permLevel: 0
}

exports.help = {
    name: 'teyit',
    description: 'Bir Kullanıcının Veya Kendinizin Teyit Bilgisine Bakarsınız.',
    usage: 'teyit',
}


