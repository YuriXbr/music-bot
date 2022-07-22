const Discord = require('discord.js');
const Client = require('discord.js');
const MessageEmbed = require('discord.js');
const chalk = require('chalk');
const c = chalk;
const arrow = c.bold.cyan('LOG -> ')
const alerta = c.yellowBright.bold;
const verde = c.greenBright;


module.exports = async (client) => {
    console.log(arrow + alerta(`Logado em: `) + verde(`${client.user.username}`));
    console.log(arrow + alerta(`Ativo em: `) + verde(`${client.guilds.cache.size} `) + alerta("servidor(es) com um total de: ") + verde(`${client.users.cache.size} `) + alerta("usuários"));
    console.log('');
    client.user.setActivity(client.config.app.playing);

    
    const start = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('LOG -> BOT INICIANDO')
    .setDescription("O bot logou com sucesso ao token informado.")
    .addField("BOT SUBSYSTEM", "Musics")
    .setTimestamp()
    client.users.fetch('297905031171145751', false).then((user) => {
        user.send('bot funcional, chefia!');
       });
    client.channels.cache.get(client.config.app.startalert).send({embeds: [start]});
    
};