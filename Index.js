const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'YOUR_SERVER_IP',
    port: 25565,
    username: 'AFK_Bot'
  })

  bot.on('spawn', () => {
    console.log('Bot joined!')

    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 20000)
  })

  bot.on('end', () => {
    setTimeout(createBot, 5000)
  })
}

createBot()
