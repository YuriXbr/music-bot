const Discord = module.require("discord.js");
const { Snake } = require("discord-gamecord")

module.exports = {
  name: "snake",
  description: "snake in discord!",
  async execute(client, message, args) {
          new Snake({
        message: message,
        embed: {
        title: 'Jogo da cobrona',
        color: '#5865F2',
        OverTitle: "Acabou o joguin",
        },
        snake: { head: '😀', body: '🟩', tail: '🟢' },
        emojis: {
          board: '⬛',
          food: '🥩',
          up: '⬆️',
          right: '➡️',
          down: '⬇️',
          left: '⬅️',
        },
        othersMessage: 'Você não pode fazer isso',
      }).startGame();
  },
};