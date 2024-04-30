{
    const { SlashCommandBuilder } = require('discord.js');
	const zones = require('../../zone-list.json');
	console.log(typeof(zones));
	let values = Array.from(Object.values(zones));
	//console.log(values);
	const allzones = Object.keys(zones);//.toString().replace(/,/g, '');
	console.log(allzones[0])
module.exports = {
	data: new SlashCommandBuilder()
		.setName('getbossinfo')
		.setDescription('It shows all the zones in game')
		.addStringOption((option)=>	
		option
			.setName('zone')
			.setDescription('pick the zone')
			.setChoices(
			{
				name: 'Commonlands',
				value: allzones[0]
			 },
			{
				name: 'Kithichor Forest',
				value: allzones[1]
			  },
			 {
				name: 'South Karana',
				value: allzones[2]
			 },
			{
				name: 'Nagafens Lair',
				value: allzones[3]
			  },	
			  {
				name: 'Misty Thicket',
				value: allzones[4]
			 },
			{
				name: 'Everfrost Peaks',
				value: allzones[5]
			  },
			 {
				name: 'Permafrost Keep',
				value: allzones[6]
			 },
			{
				name: 'West Karana',
				value: allzones[7]
			  },
			  {
				name: 'North Karana',
				value: allzones[8]
			 },
			{
				name: 'Highpass Hold',
				value: allzones[9]
			  },
			 {
				name: 'Butcherblock Mountains',
				value: allzones[10]
			 },
			{
				name: 'Crushbone',
				value: allzones[11]
			  },	
			  {
				name: 'Runnyeye Citadel',
				value: allzones[12]
			 },
			{
				name: 'Innothule Swamp',
				value: allzones[13]
			  },
		
			{
				name: 'Erudin',
				value: allzones[14]
			  },
			  {
				name: 'East Karan',
				value: allzones[15]
			 },
			{
				name: 'Paineel',
				value: allzones[16]
			  },
			 {
				name: 'Toxxulia Forest',
				value: allzones[17]
			 },
			{
				name: 'Oggok',
				value: allzones[18]
			  },	
			  {
				name: 'Rivervale',
				value: allzones[19]
			 },
			{
				name: 'Grob',
				value: allzones[20]
			  },
			 {
				name: 'AkAnon',
				value: allzones[21]
			 },
			{
				name: 'North Kaladim',
				value: allzones[22]
			  },
			  {
				name: 'South Kaladim',
				value: allzones[23]
			  },
			 {
				name: 'Northern Felwithe',
				value: allzones[24]
			 },
			
		)
	),
	async execute(interaction) {
		const zone = interaction.options.get('zone').value;
		await interaction.reply(allzones.toString().replace(/,/g, '') + '\n' + zones[zone]); 
		
	},
};
}