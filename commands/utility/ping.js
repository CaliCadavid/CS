const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Checks to see if bot is active.'),
	async execute(interaction) {
		await interaction.reply('Bot is active!');
	},
};