const fs = require("fs");
module.exports.config = {
	name: "Siddik-10",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SIDDIK", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "siddik-10",
    cooldowns: 5, 
};
 
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😥")==0 || event.body.indexOf("😥😥")==0 || event.body.indexOf("😥😥😥")==0 || event.body.indexOf("😥😥😥😥")==0) {
		var msg = {
				body: "╭─────•◈•─────╮\n         🅂🄸🄳🄳🄸🄺🄱🄾🅃       \n\n─•মানুষ_দুনিয়ার অতিথি মাত্র-😅🩷🪽🩵🪽\n\n         𝗦𝗞.𝗦𝗜𝗗𝗗𝗜𝗞.𝗞𝗛𝗔𝗡       \n╰─────•◈•─────╯",
				attachment: fs.createReadStream(__dirname + `/Siddik/siddik-10.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {
 
          }
 
