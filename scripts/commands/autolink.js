module.exports = {
  config:{
    name: "autolink",
    version: "0.0.2",
    permission: 0,
    prefix: true,
    credits: "𝗥𝗔𝗛𝗔𝗧 𝗞𝗛𝗔𝗡",
    description: "𝑨𝒍𝒍 𝑽𝒊𝑑𝑒𝒐 𝑫𝒐𝒘𝒏𝒍𝒐𝑎𝑑𝑒𝒓",
    category: "𝗼𝘁𝗵𝗲𝗿𝘀",
    usages: "𝗔𝗹𝗹 𝗩𝗶𝗱𝗲𝗼 𝗟𝗶𝗻𝗸",
    cooldowns: 5,
},
start: async function({ nayan, events, args }) {},
handleEvent: async function ({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const {alldown} = require("nayan-media-downloader")
  if (body.startsWith("https://")) {
  api.setMessageReaction("🔍", event.messageID, (err) => {}, true);
const data = await alldown(content);
  console.log(data)
  const {low, high, title} = data.data;
    api.setMessageReaction("✔️", event.messageID, (err) => {}, true);
  const video = (await axios.get(high, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/cache/auto.mp4", Buffer.from(video, "utf-8"))

        return api.sendMessage({
            body: `《TITLE》: ${title}`,
            attachment: fs.createReadStream(__dirname + "/cache/auto.mp4")

        }, event.threadID, event.messageID);
    }
}
}
