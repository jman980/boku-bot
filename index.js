const { BedrockPortal, Modules } = require('bedrock-portal');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bot is online!');
});

app.listen(PORT, () => {
    console.log(`Web server listening on port ${PORT}`);
});

const portal = new BedrockPortal({
    authOptions: {
        cacheDir: './data/.profiles'
    }
});

portal.use(Modules.AutoFriendAccept, {
    inviteOnAdd: false,
    conditionToMeet: (player) => true
});

console.log("Starting Bedrock Portal bot...");

portal.start().then(() => {
    console.log("Bot successfully authenticated and listening!");
}).catch(err => {
    console.error("Startup error:", err);
});
