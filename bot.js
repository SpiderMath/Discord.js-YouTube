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
	if(!message.content.startsWith(prefix)) return;

	const stuff = message.content.slice(prefix.length);
	const args = stuff.trim().split(/ +/g);
	const command = args[0].toLowerCase();


	if(command === "ping") {
		return message.channel.send("Pong!");
	}

	else if(command === "coinflip") {
		return message.channel.send(`On tossing the coin, the coin landed on ${(Math.random() < 0.5) ? "Heads" : "Tails"}`);
	}

	else if(command === "8ball") {
		if(!args[1]) return message.channel.send("Please provide a question my child");
		const answers = [
			"It is certain",
			"You may rely on it",
			"Ask again later",
			"Concentrate and ask again",
			"My reply is no",
			"My sources say no",
		];

		return message.channel.send(answers[Math.floor(Math.random() * answers.length)]);
	}
});

bot.login("Nzg5NDQyNDQxNjkwMjE4NTE2.X9yHkQ.vdHsGYAbS8HnIFhYOkdcUvz7NE0");