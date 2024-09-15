module.exports.config = {
  name: "join2",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "SIDDIK",
  description: "Notify bot or group member with random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "Siddik", "font");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "Siddik", "font");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    const fs = require("fs");
    return api.sendMessage("চলে এসেছি আমি এসকে সিদ্দিক তোমাদের মাঝে🤭", event.threadID, () => api.sendMessage({body:`╔════•| ✿ |•════╗\nআ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ\n╚════•| ✿ |•════╝
________________________
𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐬𝐨 𝐦𝐮𝐜𝐡 𝐟𝐨𝐫 𝐚𝐝𝐝𝐢𝐧𝐠 𝐦𝐞 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐢-𝐠𝐫𝐨𝐮𝐩-🖤🤗\n𝐈 𝐰𝐢𝐥𝐥 𝐚𝐥𝐰𝐚𝐲𝐬 𝐬𝐞𝐫𝐯𝐞 𝐲𝐨𝐮 𝐢𝐧𝐚𝐡𝐚𝐥𝐥𝐚𝐡 🌺❤️-!!
________________________\n\n𝐓𝐨 𝐯𝐢𝐞𝐰 𝐚𝐧𝐲 𝐜𝐨𝐦𝐦𝐚𝐧𝐝

${global.config.PREFIX}Help\n${global.config.PREFIX}Info\n${global.config.PREFIX}Admin
________________________\n★যে্ঁকো্ঁনো্ঁ অ্ঁভি্ঁযো্ঁগ্ঁ অ্ঁথ্ঁবা্ৃ হে্ঁল্প্ঁ এ্ঁর্ঁ জ্ঁন্য্ঁ এ্ঁড্ঁমি্ঁন্ঁ 𝐒𝐈𝐃𝐃𝐈𝐊 কে্ঁ ন্ঁক্ঁ ক্ঁর্ঁতে্ঁ পা্ঁরে্ঁন্ঁ★\n𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦:  https://t.me/rdxprem12\n𝐈𝐦𝐨 𝐎𝐫 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: 01831773688
⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆`, attachment: fs.createReadStream(__dirname + "/Siddik/join.jpeg")} ,threadID));
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);

      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "Siddik", "font");
      const pathGif = join(path, `${threadID}.gif`);

      var mentions = [], nameArray = [], memLength = [], i = 0;

      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName;
        nameArray.push(userName);
        mentions.push({ tag: userName, id });
        memLength.push(participantIDs.length - i++);
      }
      memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "আসসালামু আলাইকুম➤⃚💕\n\n➤⃚💕{name}➤⃚💕\nবন্ধু তুমি গ্রুপের {soThanhVien} নাম্বার সদস্য➤⃚💕.\n\n➤⃚💕{threadName}➤⃚💕\n\n➤⃚͜💕 গ্রুঁপেঁরঁ পঁক্ষঁ থেঁকেঁ আঁপঁনাঁকেঁ স্বাঁগঁতঁমঁ➤💕\n\n💕𝐖𝐄𝐋𝐂𝐎𝐌𝐄 💕" : msg = threadData.customJoin;
      msg = msg
      .replace(/\{name}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);

      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "Siddik", "font"));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "Siddik", "font", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
      }
      else formPush = { body: msg, mentions }

      return api.sendMessage(formPush, threadID);
    } catch (e) { return console.log(e) };
  }
        }
