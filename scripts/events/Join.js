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
    return api.sendMessage("╰┈➤চলে এসেছি আমি পিচ্চি সিদ্দিক তোমাদের মাঝে🤭!", event.threadID, () => api.sendMessage({body:`🤖-BOT CONNECTED-🤖
  
╰┈➤চলে আসলাম তোমাদের মাঝে 🥀
 
╰┈➤আপনাকে অনেক ধন্যবাদ আমাকে এড দেওয়ার জন্য,❤️‍🔥
 
╰┈➤কিন্তু আমাকে কন্ট্রোল করার জন্য প্রয়োজন আমার বস এসকে সিদ্দিক কে🤙
 
╰┈➤মেম্বারদের সব কমান্ড আমার পক্ষে পালনকরা সম্ভব না 😔
 
╰┈➤আমার বস এসকে সিদ্দিক কে এড দিতে প্রথমে টাইপ করুন /add তারপর একটা স্পেস দিয়ে বস এর Uid 100059026788061 দিন ☺️
 
╰┈➤ফেসবুক লিংক ☞ https://www.facebook.com/profile.php?id=10001795024562
 
╰┈➤ 2nd লিংক ☞ https://www.facebook.com/khan.rahulrk.127 🐰😗 
`, attachment: fs.createReadStream(__dirname + "/Siddik/join.jpeg")} ,threadID));
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
