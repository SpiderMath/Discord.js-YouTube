const chalk = require("chalk");
const Discord = require("discord.js");
const bot = new Discord.Client({
	ws: {
		intents: Discord.Intents.ALL,
	},
	disableMentions: "everyone",
});
const prefix = "`";


bot.on("ready", () => {
	console.log(chalk.green("The bot has logged in!"));
});

bot.on("message", (message) => {
	if(message.author.bot) return;
	if(message.content.startsWith(prefix)) return;

	const stuff = message.content.slice(prefix.length);
	const args = stuff.trim().split(/ +/g);
	const command = args[0].toLowerCase();


	if(command === "ping") {
		return message.channel.send("Pong!");
	}

});

bot.login("Nzg5NDQyNDQxNjkwMjE4NTE2.X9yHkQ.VVux55ghdll_HlBpfHrod3QDaMM");