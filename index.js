require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});

client.login(process.env.NjY2MDQ2NDAyOTI4ODM2NjU4.XhueDQ.wLtkQs_kCwxa9lWlLQQDx6oyh2Y);
