const { clientId } = require('./config.json');
const DiscordRPC = require('discord-rpc');

const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: 'Competitive',
        state: 'Playing Solo',
        partySize: 1,
        partyMax: 5,
        startTimestamp: Date.now(),
        largeImageKey: 'icon',
        largeImageText: 'Large image',
        smallImageKey: 'icon',
        smallImageText: 'Small image',
        instance: false,
        buttons: [
            {
                label: 'Website',
                url: 'https://fjrodafo.vercel.app/',
            },
            {
                label: 'Repository',
                url: 'https://github.com/FJrodafo/DiscordCRPS',
            },
        ],
    }).catch(console.error);
}

RPC.on('ready', async () => {
    console.log('Ready!');
    setActivity();
    setInterval(() => {
        setActivity();
    }, 86_400_000);
});

async function login() {
    try {
        await RPC.login({ clientId });
        console.log('Logged in to Discord!');
    }
    catch (error) {
        console.error('Failed to connect to Discord:', error);
        // Retry in 15 seconds
        setTimeout(login, 15_000);
    }
}

login();
