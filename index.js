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

const TG = require('telegram-bot-api')

const api = new TG({
    token: process.env.TELEGRAM_API_TOKEN
})

api.getMe()
.then(console.log)
.catch(console.err)

// Define your message provider
const mp = new TG.GetUpdateMessageProvider()

// Set message provider and start API
api.setMessageProvider(mp)
api.start()
.then(() => {
  console.log('API is started -BS')
})
.catch(console.err)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});