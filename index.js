
// TO-DO : Find users by Discord_ID
// CreatedBy : admin@notforstyle.ru
// Discord : notforstyle#4555

const Discord = require('discord.js')
const bot = new Discord.Client()
require('dotenv').config()

bot.login(process.env.DISCORD_ACCESS_TOKEN)

function Guilds_ID(){
	var guildID = bot.guilds.cache.map(guild => guild.id);
	console.log(guildID)
}

function Guilds_Name(){
	var guildName = bot.guilds.cache.map(guild => guild.name);
	console.log(guildName)
}


function Guilds_Pool(){
	var guildInfo = bot.guilds.cache.map(guild => guild.members);
	console.log(guildInfo)
}

function Guilds_Size(){
	var guild_size = bot.guilds.cache.map(guild => guild.size);
	console.log(guild_size)
}

function Guilds_Channels(){
	var guilds_channels = bot.channels.cache.map(c => `
			Channel_ : ${c.name}\n
			Channel_ID : ${c.id}\n
			Channel_TYPE : ${c.type}\n
		`)
	console.log(guilds_channels)
}

function Guilds_Users(){
	var guild_users = bot.users.cache.map(u =>

		`User_ : ${u.tag}\n
		User_ID : ${u.id}\n
		User_STATUS : ${u.presence.status}\n
		User_BOT : ${u.bot}\n
		User_createdAT : ${u.createdAt}\n`

	).join('\n');
	console.log(guild_users)
}

const readline = require('readline')

const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
})

rl.on('line', (line) => {
	switch (line.trim()) {

		case 'pool':
			Guilds_Pool()
		break;

		case 'test':
			console.log('Yes, Im working')
		break;

		case 'channels':
			Guilds_Channels()
		break;

		case 'size':
			Guilds_Size()
		break;

		case 'names':
			Guilds_Name()
		break;

		case 'id':
			Guilds_ID()
		break;

		case 'users':
			Guilds_Users()
		break;

		case 'end':
			console.log('Bye-bye mate')
			process.exit(0);
		break;
	}
})

bot.on('ready', ready => {
	console.log('Ready to work.\nUse rl commands to output information.\nUsefull commands: users, id, size, pool.\n')
})

bot.on('message', message => {
	console.log(message)
})
