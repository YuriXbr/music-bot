const Discord = require('discord.js');
const Client = require('discord.js');
const MessageEmbed = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
require('dotenv').config();


module.exports = {
    name: 'delplaylist',
    aliases: ['dellplaylist', 'removeplaylist'],
    utilisation: '{prefix}',
        
        async execute(client, message, args) {
        
            connection = await require('../../database/db');
            
            [verificationquery] = await connection.query(
                `SELECT playlistname FROM playlists WHERE playlistname = '${args[0]}'`
            ),
            [statuslevel] = await connection.query(
                `SELECT * FROM staffid WHERE id = '${message.author.id}'`
            )
                

            if (statuslevel[0] === '[]' || statuslevel === '[]' || statuslevel === undefined) return message.reply('Você não tem permissão para fazer isso.');
            if (statuslevel[0].id == '297905031171145751') _isowner = true;
            const _isdj = statuslevel[0].dj;
            const _permissionlevel = statuslevel[0].permissionlevel;
            const _v = verificationquery.map(({ playlistname }) => playlistname);
            if (!args[0]) return message.reply('Você preisa usar a seguinte sintaxe: !delplaylist [nomeDaPlaylist], onde o nome não pode conter espaço')
            if (_v != args[0]) return message.reply('Essa playlist não existe ou ja foi deletada')
            if (args[0] == 'help') return message.reply('Sintaxe: !delplaylist [nomeDaPlaylist], onde o nome não pode conter espaço')
            if (_permissionlevel != '3' && _isowner != true) return message.reply('Você não tem permissão para fazer isso.')

            
            await connection.query(
                `DELETE FROM playlists WHERE playlistname = '${args[0]}'`
            )
        
        message.reply(`Playlist ${args[0]} deletada com sucesso.   (você usou seu cartão de acesso nivel ${_permissionlevel})`);
    },
};