const { Client, LocalAuth } = require("whatsapp-web.js");
const loginHandler = require("./loginHandler");
const mentionHandler = require("./mentionHandler");
const messageHandler = require("./messageHandler");
const tiktokHandler = require("./tiktokHandler");
require("dotenv").config(); // Load environment variables from .env file

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ["--no-sandbox"],
  },
});

// Set up login event handling
loginHandler.setupLogin(client);

// Set up mention event handling
mentionHandler.setupMention(client);

// Set up message event handling
messageHandler.setupMessageListener(client, tiktokHandler);

// Initialize the WhatsApp client
client.initialize();
