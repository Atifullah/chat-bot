const express = require('express');
require('dotenv').config();
const My_token = process.env.My_token;
const fs = require('fs');
const jsonData = fs.readFileSync('chatflow.json', 'utf8');
const telegramBot = require('node-telegram-bot-api');

const bot=new telegramBot(My_token,{polling: true});
const PORT = process.env.PORT || 4040 
const app= express();
const data = JSON.parse(jsonData);
// Event listener for incoming messages
bot.on('message', (message) => {
  console.log(message)
  const chatId = message.chat.id;
  const userText = message.text.toLowerCase(); // Only convert user text to lowercase

  // Flag to check if any answer is sent
  let answerSent = false;

  data.forEach(item => {
    if (item.type === 'question') {
      const keywords = userText.toLowerCase().split(' '); // Split item text into words
      const matchedKeyword = keywords.find(keyword => item.text.includes(keyword));
      
      if (!matchedKeyword) {
        answerSent = true; // Set flag to true if keyword not found
      } else {
        bot.sendMessage(chatId, item.answer);
        answerSent = true; // Set flag to true if answer is sent
      }
    } else if (item.type === "greeting" && userText === "/start") {
      bot.sendMessage(chatId, item.answer);
      answerSent = true; // Set flag to true if answer is sent
    }
  });

  // If no answer is sent, send "Sorry, I can't understand"
  if (!answerSent) {
    bot.sendMessage(chatId, "Sorry, I can't understand.");
  }
});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("server hosted on localhost:", PORT);
});