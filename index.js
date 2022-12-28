// Entrypoint script of ZodaBot
const { Client, GatewayIntentBits } = require('discord.js')

// Get the configuration JSON
const configuration = require('./config.json');

// Grab the token from the configuration file.
const token = configuration.token;

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

function clientInit(client) {
    // Ready message
    client.once("ready", readyClient => {
        console.info(`Connected to Discord with ${readyClient.user.tag}`)
    })    
}

function main() {
    clientInit(client)
    client.login(token);
}

main();

module.exports = {
    configuration
}