const qrcode = require("qrcode-terminal");

function setupLogin(client) {
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", () => {
    console.log("Bot Sudah Ready Untuk Dipakai");
  });
}

module.exports = { setupLogin };
