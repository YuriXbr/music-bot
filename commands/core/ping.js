const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: ['ms'],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Ping Médio: ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} ago **${client.ws.ping}ms** 🛰️`);
    },
};