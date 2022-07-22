const { QueryType } = require('discord-player');
const { discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');

const embednmusic = new MessageEmbed()
    .setTitle('CLEAR')
    .setColor('DARK_RED')
    .setDescription('❌ | Não existe musicas tocando.')
const embedntrack = new MessageEmbed()
    .setTitle('CLEAR')
    .setColor('DARK_RED')
    .setDescription('❌ | Não existe musicas na fila após esta (este comando limpa apenas as proximas musicas que tocarão.)')
const embedsuccessful = new MessageEmbed()
    .setTitle('CLEAR')
    .setColor('GREEN')
    .setDescription('🗑️ | A fila foi limpa, o bot sairá do canal após a próxima musica caso a fila siga vazia.')

module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({embeds:[embednmusic]});

        if (!queue.tracks[0]) return message.channel.send({embeds:[embedntrack]});

        await queue.clear();

        message.channel.send({embeds:[embedsuccessful]});
    },
};