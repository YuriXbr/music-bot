const { Player } = require('discord-player');
const { Client, Intents} = require('discord.js');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
require ('dotenv').config();
const fs = require('fs');
var today = new Date();
var data = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

var logger = fs.createWriteStream('./logs/log.txt', {
    flags: 'a'
})

global.connection;

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});
logger.write(`${data} INFO: Configurando Intents\n`)
client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');


global.client.on('guildCreate', async (guild) => {
    logger.write(`${data} INFO: Comucação com o banco de dados estabelecida pelo guildCreate.\n`)
    try {
    let owner = guild.ownerId;
    logger.write(`${data} SQL : Inserindo em ${guild.id} valor ${owner} na tabela guilds\n`)
    await connection.query(
        `INSERT IGNORE INTO guilds VALUES('${guild.id}', '${owner}')`
    );
    logger.write(`${data} SQL : Inserindo em ${guild.id} valor ${guild.id} na tabela guildconfigurable\n`)
    await connection.query(
        `INSERT IGNORE INTO guildconfigurable (guildId) VALUES ('${guild.id}')`
    );
    logger.write(`${data} SQL : Inserindo em ${guild.id} valor ${guild.id} na tabela queuemessagetoggle\n`)
    await connection.query(
        `INSERT IGNORE INTO quuemessagetoggle (guildId) VALUES ('${guild.id}')`
    );
    } catch(err) {
        console.log(err);
        logger.write(`<<---------------- NEW ERROR ----------------->>\n`);
        logger.write(`>> ERROR TRIGGER:  DataBase\n`);
        logger.write(`>> ERROR GUILDID:  ${guild.id}\n`)
        logger.write(`>> ERROR MESSAGE:  ${err}\n`);
        logger.write(`>> ERROR GENERAL:  ${Error}\n`)
        logger.write(`\n`)
    }
});


( async () => {
    connection = await require('./database/db');
    logger.write(`${data} INFO: Logando...\n`)
    client.login(client.config.app.token);
})();