const { QueryType } = require('discord-player');
const Discord = require('discord.js');
const Client = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
require('dotenv').config();
qtype = 0;

module.exports = {
    name: 'playlist',
    aliases: ['pl', 'playlists'],
    utilisation: '{prefix}playlist',
        
    async execute(client, message, args) {
        
        connection = await require('../../database/db');
        if(args[0] == 'info') {
            if(!args[1]) message.reply('Você tem que informar uma playlist para mostrarmos as informações, lembre-se, você sempre pode ver a lista com !playlist list')
            qtype = 1;
        }
        [playlistname] = await connection.query(
            `SELECT playlistname FROM playlists ORDER BY playlistlink ASC`
            ),
         
        [result] = await connection.query(
            `SELECT * FROM playlists WHERE playlistname = '${args[qtype]}'`
         )
         
        if (result === '[]' || result[0] === '[]' || result[0] === undefined) return message.reply('Essa playlist não existe.');
        var _playlistnamelist = playlistname.map(({ playlistname }) => playlistname).join(', ');
        if (!args[0]) return message.reply(`Escolha uma das nossas playlists pré-definidas: \`\` ${_playlistnamelist} \`\` \n Lembre-se, você pode pegar informações sobe a playlist digitando !playlist info [nomeDaPlaylist]`);
        if (args[0] == 'list') return message.reply(` \'\' ${_playlistnamelist} \'\'`);
        var _playlistname = result[0].playlistname;
        var _playlistlink = result[0].playlistlink;
        var _playlistdesc = result[0].description;
        
        if(args[0] == 'info') {
            
            return message.reply(`INFORMAÇÕES DA PLAYLIST ${_playlistname} \n Nome: ${_playlistname} \n Link: ${_playlistlink} \n Descrição: ${_playlistdesc}`)
        }
        
        const res = await player.search(_playlistlink, {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch(err) {
            console.log(err);
        }
        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing){
            await queue.shuffle();
            await queue.play();  
        } 
        
        const sucess = new MessageEmbed()
            .setTitle('PLAY')
            .setColor('GREEN')
            .setTitle(`✅ | PLAYLIST ${_playlistname} carregada com sucesso.`)
            .setDescription(`${_playlistdesc}`)
        return message.reply({embeds:[sucess]})
 
    }
};