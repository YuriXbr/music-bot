module.exports = {
    name: 'filter',
    aliases: ['filtro', 'filtrar'],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não tem musicas tocando ${message.author}. ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`por favor escolha um filtro valido ${message.author}. ❌\n${actualFilter ? `Filtro ativo ${actualFilter} (${client.config.app.px}filter ${actualFilter} para desativa-lo).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Esse filtro não existe ${message.author}... tente novamente ? ❌\n${actualFilter ? `Filtro ativo ${actualFilter}.\n` : ''}lista de filtros disponiveis: ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`O filtro ${filter} esta agora **${queue.getFiltersEnabled().includes(filter) ? 'ativo' : 'desativo'}** ✅\n*Lembre-se, quanto maior a musica maior sera o filtro`);
    },
};