'use strict'

const Telegraf = require('telegraf')
const botCore = require('pinyin-bot-core')

const BOT_TOKEN = process.env.PINYIN_TELEGRAM_TOKEN

const bot = new Telegraf(BOT_TOKEN)

bot.command('start', ctx => {
	console.log('Bot started')
	const text = '你好'
	ctx.reply(text)
})

bot.on('text', ctx => {
	const text = ctx.update.message.text
	console.log('Received:', text)
	botCore.processMessage(text)
	.then(ctx.reply)
	.catch(console.error)
})

bot.catch(err => {
	console.error('Error:', err.message || err)
})

bot.startPolling()
