module.exports = {
    name: 'back',
    aliases: ['previous', 'voltar'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não tem musicas tocando ${message.author}. ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Não existe faixas anteriores a essa ${message.author}. ❌`);

        await queue.back();

        message.channel.send(`Indo para a faixa **anterior** ✅`);
    },
};