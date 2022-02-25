module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Não tem musicas tocando ❌`, ephemeral: true, components: [] });

            int.member.send(`Você salvou a musica: ${queue.current.title} | ${queue.current.author} do servidor: ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `Eu enviei a musica para você por DM ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Não é possivel enviar DM para você, verifique suas opções de privacidade ❌`, ephemeral: true, components: [] });
            });
        }
    }
};