const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Townsmp2.aternos.me',
    port: 23938,
    username: 'Townsmp2'
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
