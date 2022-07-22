module.exports = {
    app: {
        px: '!',
        token: '', //token do bot
        playing: 'prefixo: !', //status do bot
        startalert: '', //canal para o bot enviar alertas automaticos
        errorsalert: '', // canal para o bot enviar os erros
        logsalert: ''  // canal para o bot enviar registro dos logs
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};

