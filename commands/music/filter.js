const { QueryType } = require('discord-player');
const { discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');

const embednmusic = new MessageEmbed()
    .setTitle('FILTER')
    .setColor('DARK_RED')
    .setDescription('❌ | Não existe musicas tocando.')
module.exports = {
    name: 'filter',
    aliases: ['filtro', 'filtrar'],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({embeds:[embednmusic]});

        const actualFilter = queue.getFiltersEnabled()[0];

        const embedinvfilter = new MessageEmbed()
         .setTitle('FILTER')
         .setColor('DARK_RED')
         .setDescription(`❌ | Filtro Invalido, por favor escolha um filtro disponivel: **bassboost_low, bassboost, bassboost_high, 8D, vaporwave, nightcore, phaser, tremolo, vibrato, reverse, treble, normalizer, normalizer2, surrounding, pulsator, subboost, karaoke, flanger, gate, haas, mcompand, mono, mstlr, mstrr, compressor, expander, softlimiter, chorus, chorus2d, chorus3d, fadein, dim, earrape.** `)
        if (!args[0]) return message.channel.send({embeds:[embedinvfilter]});

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send({embeds:[embedinvfilter]});

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        const embedsuccessful = new MessageEmbed()
        .setTitle('FILTER')
        .setColor('GREEN')
        .setDescription(`✅ | O filtro ${filter} esta agora **${queue.getFiltersEnabled().includes(filter) ? 'ativo' : 'desativo'}**.  Lembre-se, quanto maior a musica mais tempo demora para o filtro ser aplicado.`)

        message.channel.send({embeds:[embedsuccessful]});
    },
};