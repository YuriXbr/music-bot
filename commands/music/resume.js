module.exports = {
    name: 'resume',
    aliases: ['rs', 'retomar'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Não tem musicas tocando ${message.author}. ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `A musica ${queue.current.title} foi retomada retomada ✅` : `Algo deu errado ${message.author}. ❌`);
    },
};