const dotenv = require("dotenv");
const Discord = require("discord.js");
const helper = require("./helper");
const craftingCost = require("./craftingCosts");

dotenv.config();

const prefix = "!";
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on("message", async (message) => {
  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();
  switch (command) {
    case "help":
      message.channel.send(
        helper.generateEmbed("#FFFFFF", "Bot Commands", helper.commands)
      );
      break;
    case "ping":
      message.channel.send("Pong.");
      break;
    case "costs":
      message.channel.send("...Loading Auction House Data...");
      let serverName = "Bleeding";
      if (args.length) {
        serverName = args[0];
      }
      try {
        message.channel.send(await craftingCost.isWorthToCraft(serverName));
      } catch (e) {
        message.channel.send(e.message);
      }
      break;
  }
});