module.exports = {
    name: 'save',
    aliases: ['sv', 'salvar'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não tem musicas tocando ${message.author}. ❌`);

        message.author.send(`Você salvou a faixa: ${queue.current.title} | ${queue.current.author} no servidor: ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Eu te enviei na DM o Titulo da musica ✅`);
        }).catch(error => {
            message.channel.send(`Não consegui te enviar a DM com as musicas ${message.author}, Verifique se sua DM esta aberta e tente novamente. ❌`);
        });
    },
};