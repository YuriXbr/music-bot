module.exports = {
    name: 'skip',
    aliases: ['sk', 'pular', 'proximo'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não tem musicas tocando ${message.author}. ❌`);

        const success = queue.skip();

        return message.channel.send(success ? ` A musica ${queue.current.title} foi pulada ✅` : `algo deu errado ${message.author}. ❌`);
    },
};