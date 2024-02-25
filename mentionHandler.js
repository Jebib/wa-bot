const { MessageMedia } = require("whatsapp-web.js");

async function setupMention(client) {
  client.on("message", async (msg) => {
    const phoneNumber = await msg.getContact();
    const timeStamp = new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
    });
    if (msg.body === "!everyone") {
      const chat = await msg.getChat();
      let text = "";
      let mentions = [];

      for (let participant of chat.participants) {
        const contact = await client.getContactById(participant.id._serialized);
        mentions.push(contact);
        text += `@${participant.id.user} `;
      }

      await chat.sendMessage(text, { mentions });
      console.log(
        `[${timeStamp}] ${phoneNumber.number} Memanggil Semua Anggota`
      );
    }
  });
}

module.exports = { setupMention };
