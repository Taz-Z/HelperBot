import { command, generateEmbed } from "../../helper.js";

const execute = (message, args) => {
  message.channel.send("Erik is fabulously gay!");
};

export default command("erik", execute);