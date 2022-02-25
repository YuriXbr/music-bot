# Music-bot

Bot completo focado em musica para discord.js V13 🎧



### 📑 Instalação

Dependencias e ferramentas que você precisará para fazer o bot funcionar corretamente

[FFmpeg](https://www.ffmpeg.org) (para processamento de audio)

[Node JS](https://nodejs.org/en/) (v16)


### ⚙ Configuração

- Abra o arquivo `config.js`, e altere as seguintes opções.
- *Se você não tem nenhum conhecimento em programação, sinta-se a vontade para me chamar na [DM](https://twitter.com/YuriXbr) para tirar duvidas.*

Configuração Basica

- `app/px`, Prefixo que sera usado no bot
- `app/token`, Token do bot, é possivel conseguilo no site [Discord Developers](https://discordapp.com/developers/applications), se você não tem um bot, basta seguir as intruções (lembre-se de ativar os intents)
- `app/playing`, atividade do bot
 🎧 Configuração do modo de DJ

- `opt/DJ/enabled`, Altere entre true/false para ativar o cargo de DJ
- `opt/DJ/roleName`, O nome do cargo de DJ
- `opt/DJ/commands`, Comandos limitados as pessoas com cargo de DJ

🏸 configurações Avançadas

- `opt/maxVol`, Altera o volume maximo do comando VOLUME
- `opt/loopMessage`, Altere se a mensagem que diz a musica que esta tocando deve ficar em loop ou não
- `opt/discordPlayer`, opções usadas pelo discord-player, não altere se você nã osabe para que serve
