module.exports = {
    name: 'pause',
    aliases: ['pausar'],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Não tem musicas tocando ${message.author}. ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `A musica tocando: ${queue.current.title} foi pausada ✅` : `Algo deu errado ${message.author}. ❌`);
    },
};