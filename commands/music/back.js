const { QueryType } = require('discord-player');
const { discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');

const embednmusic = new MessageEmbed()
    .setTitle('BACK')
    .setColor('DARK_RED')
    .setDescription('❌ | Não existe musicas tocando.')
const embedntrack = new MessageEmbed()
    .setTitle('BACK')
    .setColor('DARK_RED')
    .setDescription('❌ | Não existe faixas anteriores a essa.')
const embedsuccessful = new MessageEmbed()
    .setTitle('BACK')
    .setColor('GREEN')
    .setDescription('✅ | Indo para a faixa anterior.')

module.exports = {
    name: 'back',
    aliases: ['previous', 'voltar'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return  message.channel.send({embeds:[embednmusic]});

        if (!queue.previousTracks[1]) return  message.channel.send({embeds:[embedntrack]});

        await queue.back();

        message.channel.send({embeds:[embedsuccessful]});
    },
};