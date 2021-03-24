const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
    const kayıtkanal = await db.fetch(`kayıtkanalı_${message.guild.id}`)
    if(message.channel.id !== kayıtkanal) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Sadece Kayıt Kanalında Kullanabilirsiniz.`))

    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin Kayıt Yetkilisi Rolünü Üzerinde Bulundurmalısın.`))
    
let erkek = message.mentions.users.first() || client.users.get(args.join(' '))
if(!erkek) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Kullanıcı Etiketlemelisin.`))
const kullanıcı = message.guild.member(erkek)
const isim = args[1];
const yas = args[2];
if(!isim) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir İsim Belirtmelisin.`))
if(!yas) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Yaş Belirtmelisin.`))
setTimeout(function(){kullanıcı.roles.add(db.fetch(`erkekrol_${message.guild.id}`))},3000) //Anlıyorsanız Ayarlayın Anlamıyor iseniz Ellemeyin. !  Sixie ✘#0001
setTimeout(function(){kullanıcı.roles.remove(db.fetch(`alınacak_${message.guild.id}`))},3000)
kullanıcı.setNickname(`${isim} | ${yas}`) ///Burayı Dilediğiniz Gibi Ayarlayabilirsiniz ${isim} ve ${yas} hariç. !  Sixie ✘#0001
const serkek = new Discord.MessageEmbed()
.setAuthor("✅ Erkek Üyenin Kaydı Başarıyla Gerçekleşti")
.setColor('0x36393E')
.addField(`Kaydı Yapılan Üye \n`,`${kullanıcı.user.tag}`)
.addField(`Kaydı Yapan Yetkili \n`,`${message.author.tag}`)
.addField(`Üyenin İsmi`,`${isim}`)
.addField(`Üyenin Yaşı`,`${yas}`)
.setFooter('Sixie Kayıt Sistemi')
message.channel.send(serkek)
message.react('✅')
db.add(`sixieerkek_${message.author.id}.${message.guild.id}`, 1)
db.add(`say.toplam.${message.author.id}.${message.guild.id}`, 1)
message.guild.channels.cache.get(db.fetch(`kayıtlog_${message.guild.id}`)).send(new Discord.MessageEmbed().setColor('0x36393E').setFooter('Sixie Kayıt Sistemi').setDescription(`✅ Bir Erkek Üyenin Kaydı Gerçekleşti!\n Kaydedilen Üye: **${kullanıcı.user.tag}** \n Kaydı Yapan Yetkili: **${message.author.tag}**`))
};


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['e','man'],
    permLevel: 3,
   };
   
   exports.help = {
    name: 'erkek',
    description: 'Erkek kullanıcıyı kaydedersiniz.',
    usage: 'erkek'
   };