module.exports = {
    name: 'shuffle',
    aliases: ['sh', 'embaralhar'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não tem musicas tocando ${message.author}. ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Não tem outras musicas tocando ${message.author}. ❌`);

        await queue.shuffle();
        
        return message.channel.send(`Fila embaralhada **${queue.tracks.length}** musicas! ✅`);
    },
};