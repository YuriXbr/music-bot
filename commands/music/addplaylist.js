const Discord = require('discord.js');
const Client = require('discord.js');
const MessageEmbed = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
require('dotenv').config();


module.exports = {
    name: 'addplaylist',
    aliases: ['addpl', 'pladd'],
    utilisation: '{prefix}',
        
        async execute(client, message, args) {
        
            connection = await require('../../database/db');
            
            [verificationquery] = await connection.query(
                `SELECT playlistname FROM playlists WHERE playlistname = '${args[0]}'`
            ),
            [statuslevel] = await connection.query(
                `SELECT * FROM staffid WHERE id = '${message.author.id}'`
            )
                

            if (statuslevel[0] === '[]' || statuslevel === '[]' || statuslevel === undefined) return message.reply('você não é DJ nem administrador do bot.');
            if (statuslevel[0].id == '297905031171145751') _isowner = true;
            const _isdj = statuslevel[0].dj;
            const _permissionlevel = statuslevel[0].permissionlevel;
            const _v = verificationquery.map(({ playlistname }) => playlistname);
            const _playlistdesc = args.slice(2).join(" ");

            if (!args[0]) return message.reply('Você preisa usar a seguinte sintaxe: !addplaylist [nomeDaPlaylist] [linkDaPlaylist] [Descrição Da Playlist], onde o nome e o link não podem conter espaço')
            if (args[0] == _v) return message.reply('Uma playlist com esse já existe, se você quiser ver a sintaxe, use !addplaylist help')
            if (!args[1]) return message.reply('Você precisa adicionar um link valido para sua playlist')
            if (!args[2]) return message.reply('Você precisa adicionar uma descrição para sua playlist')
            if (args[0] == 'help') return message.reply('Sintaxe: !addplaylist [nomeDaPlaylist] [linkDaPlaylist] [Descrição Da Playlist], onde o nome e o link não podem conter espaço')
            if (_isdj != 1 && _permissionlevel != '3' && _isowner != true) return message.reply('Você não é DJ nem administrador do bot.')

            
            await connection.query(
                `INSERT IGNORE INTO playlists VALUES('${args[0]}', '${args[1]}', '${_playlistdesc}')`
            )
        
        message.reply(`Playlist criada com sucesso, com as seguintes informações:\n Nome: ${args[0]}\n Link: ${args[1]}\n Descrição: ${_playlistdesc}`);
    },
};