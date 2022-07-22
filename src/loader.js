const { readdirSync } = require('fs');
const { Collection } = require('discord.js');
const chalk = require('chalk');
const c = chalk;
const arrow = c.bold.cyan('LOG -> ')
const alerta = c.yellowBright.bold;
const verde = c.greenBright;

const fs = require('fs');
var today = new Date();
var data = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

var logger = fs.createWriteStream('./logs/log.txt', {
    flags: 'a'
})

logger.write(`\n`)
logger.write(`\n`)

client.commands = new Collection();

const events = readdirSync('./events/').filter(file => file.endsWith('.js'));

console.log('');
console.log(alerta(`Carregando eventos... \n`));
logger.write(`${data} INFO: Carregando eventos... \n`)

for (const file of events) {
    const event = require(`../events/${file}`);
    console.log(arrow + alerta(`Evento `) + verde(`${file.split('.')[0]} `) + alerta("carregado."));
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`../events/${file}`)];
};
console.log('');
console.log(alerta(`Carregando comandos...`));
logger.write(`${data} INFO Eventos carregados.\n`)
logger.write(`${data} INFO Carregando comandos...\n`)
logger.write('\n');

readdirSync('./commands/').forEach(dirs => {
    const commands = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`../commands/${dirs}/${file}`);
        console.log(arrow + alerta(`Comando `) + verde(`${command.name.toLowerCase()} `) + alerta("carregado"));
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`../commands/${dirs}/${file}`)];
    };
    console.log();
});
logger.write(`${data} INFO Comandos carregados.\n`);