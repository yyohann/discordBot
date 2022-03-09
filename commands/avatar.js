const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('utilisateur').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
		const user = interaction.options.getMember('utilisateur');
        var role= user.guild.roles.cache.find(role => role.name === "testRole");
        user.roles.add(role);
		if (user) return interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
		return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL({ dynamic: true })}`);
	},
};