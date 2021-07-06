var express = require("express");
const axios = require("axios");
var bodyParser = require("body-parser");
require("dotenv").config();

var app = express();


const port = process.env.LOCAL_PORT
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_API_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// const TG = require('telegram-bot-api')

// const api = new TG({
//     token: process.env.TELEGRAM_API_TOKEN
// })

// api.getMe()
// .then(console.log)
// .catch(console.err)

// // Define your message provider
// const mp = new TG.GetUpdateMessageProvider()

// // Set message provider and start API
// api.setMessageProvider(mp)
// api.start()
// .then(() => {
//   console.log('API is started -BS')
// })
// .catch(console.err)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});