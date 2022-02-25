player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Tocando agora ${track.title} em: **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    console.log(`A musica ${track.title} foi adicionada a fila✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Fui desconectado do canal, limpando a fila... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('O canal esta vazio, saindo ❌');
});

player.on('queueEnd', (queue) => {
    console.log('Fila carregada ✅');
});