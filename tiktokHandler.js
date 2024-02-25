const { TiktokDL } = require("@tobyg74/tiktok-api-dl");

async function handleDownload(args, msg) {
  const phoneNumber = await msg.getContact();
  const timeStamp = new Date().toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
  });
  msg.reply("Loading...");
  await TiktokDL(args, { version: "v2" }).then((result) => {
    msg.reply(result.result.video);
    console.log(
      `[${timeStamp}] ${phoneNumber.number} Memakai Bot Tiktok Downloader`
    );
  });
}

module.exports = { handleDownload };
