module.exports.config = {
	name: "status",
  version: "1.0.0",
  permission: 0,
  credits: "SIDDIK",
  description: "STATUS VEDIO",
  prefix: true, 
  category: "Random short", 
  usages: "short",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
 
module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["___জীবন সুন্দর! যদি তুমি সঠিক মানুষ এর সাথে থাকো:-)💚🌻🌺",
"🍄🥭কিছু সম্পর্ক স্মৃতির জন্য তৈরি হয়🙂 \n ভবিষ্যতের জন্য না..!💔🌸",
" ─❥🦋🍀আমি কারো জন্য পারফেক্ট হতে চাই  না...!!❤️ 🥀🥀 ツ🥺 \n যে আমার হবে সে আমাকে পারফেক্ট  বানিয়ে নিবে...!!❥🦋🍀 ",
"•─❥🦋🍀আমি কারো জন্য পারফেক্ট হতে চাই  না...!!❤️ 🥀🥀 ツ🥺 \n যে আমার হবে সে আমাকে পারফেক্ট  বানিয়ে নিবে...!!❥🦋🍀 ",
"•🥀🌺গল্পটা তখনই ভালো ছিলো \n যখন তুমি ছিলে অপরিচিত আর আমি \n ছিলাম আমার আমিতে সীমাবদ্ধ•🥀🌺",
"___ইস কেউ যদি বলতো বড্ড ভালোবাসি তোমায়🍒🖤🤍🪽 ",
"🩷🫰🏻-𝐁𝐥𝐚𝐜𝐤 𝐢𝐬 𝐛𝐞𝐬𝐭🖤🥰 \n কালো জিনিস সবার পছন্দ \n -𝐁𝐥𝐚𝐜𝐤 𝐦𝐞𝐧 𝐧𝐨𝐭 perfect \n কালো মানুৃষটা কারো পছন্দ না_🙂💔",
"- 𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲-!! 😽🧡✨ \n ____۵-🌺 না পাইলাম কারো বিশ্বাস \n না পাইলাম কারো কাছে মূল্য ─•💚 \n ____ღ۵-🌺সবার জায়গায় সবাই সঠিক    \n মাঝখানে আমি শুন্য─•💔 ",
"_𝗧𝗿𝘂𝘀𝘁 𝗺𝗲𝗛 🔐💚 \n°- 𝗜 𝗮𝗹𝘄𝗮𝘆𝘀 𝗯𝗲𝗹𝗶𝗲𝘃𝗲 𝘁𝗵𝗮𝘁)🐰\n __!!>☁️✨🌻--ভালোবাসি বলেই কি পেতে হবে,,!!🥀  \n                  --থাকুক না কিছু ভালোবাসা অপূণঁতা..!!💔🔐💜🙂",
">🐰✨𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞!-🌸🍒 \n __💙🌻আগলে রাখুন সেই মানুষটাকে__🌺 \n 🌺__ যে স্বার্থ ছাড়াই আপনাকে ভালোবাসে__🌻 ",
"__অল্প বয়সে বড্ড ক্লান্ত আমি-!!🙂💚 \n ♡__۵🐰🩷🪶۵__♡",
"-🐰♡︎𝗕𝗲✨🍥𝗠𝗶𝗻𝗲-!<😻🍭 \n -!🧚‍♀️𝗜🐼-𝗪𝗶𝗹𝗹✨🍒𝗸𝗲𝗲𝗽😽𝘆𝗼𝘂-🧸💜-𝗙𝗼𝗿𝗲𝘃𝗲𝗿:) \n🌈 🍒তুমি আমার সাধ্যের বাহিরে চাওয়া এক সুন্দর মানুষ।।🙂💔🥀",  
"-🐰♡︎︵ 𝘿𝙤𝙣'𝙏 𝙂𝙚𝙏 𝙈𝙚𝙚 𝙒𝙧𝙤𝙣𝙂 𝙅𝙪𝙨𝙏 𝙍𝙚𝙢𝙚𝙢𝘽𝙚𝙧 𝙇𝙤𝙑𝙚!ᵉ🌻💭💟🍒 \n 🌊💚☔  বুজতে হবে নাহহ্' 🙂 শুধু মনে রেখো ভালোবাসি!-🥺🍇🔐🌈",
"—🦋𝗟𝗲𝘁 𝗧𝗵𝗲 𝗠𝗮𝗻 𝗶𝗡-!!👀🌼🍓✨𝗬𝗼𝘂𝗿 𝗜𝗺𝗮𝗴𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗕𝗲 𝗬𝗼𝘂𝗿𝘀-!!🥺💙 \n🌸🐰!!-  বেঙ্গে দেও সব আড়ি....🍒🌺 বলে দেও ভালোবাসি-!!😌🌻 ",
"💚🌸𝐈𝐭'𝐬 𝐌𝐲 𝐋𝐢𝐟𝐞  ツ🥀 \n 🌺 -হ্যাঁ আমি সেই!!- বোঝার মতো কোনো মানুষ নেই.!🙂 🍂 মানুষ নেই.!🙂 🍂",
"-!<𝘁𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲🌻🍒🤐 \n︵💚_😇যাকে তুমি যত বেশি চাইবে-🥀-সে তোমাকে ততো বেশি_𝙞𝙜𝙣𝙤𝙧𝙚_করবে_😊 ",
"🙂🥀𝘽𝙚𝙨𝙩 𝙢𝙤𝙩𝙞𝙫𝙖𝙩𝙚𝙙 𝙡𝙞𝙣𝙚 𝙞𝙣 𝙩𝙝𝙚 𝙬𝙝𝙤𝙡𝙚 𝙒𝙤𝙧𝙡𝙙>!😅✨🥺  \n 𝙏𝙝𝙞𝙣𝙠𝙞𝙣𝙜 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚__😇😞✨ \n ✨🍒উফফ লাইফে একটা রিয়েল মানুষ পাইলাম না ★-😅😞💔",
"🐰🌼-𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞..!-🌸🖇️🍒 \n ♥︎╣[-🙂-]╠♥︎ 🌦️🐰🍭🍒 𝙞 𝙬𝙖𝙣𝙩 𝙮𝙤𝙪 𝙛𝙤𝙧 𝙖 𝙬𝙝𝙞𝙡𝙚 𝙉𝙤𝙩 𝙛𝙤𝙧 𝙡𝙞𝙛𝙚—🐰✨-!<🌸🍓🌈- \n __ আমি তোমাকে চাই ক্ষনিকের জন্য নয় সারা জীবনের জন্য.🙂🌺🌼🌺 ",
"-:🌈✨🐼🍒🌻:𝗟𝗼𝘃𝗲 𝘁𝗵𝗮𝘁 𝗰𝗵𝗮𝗻𝗴𝗲𝘀 𝗶𝗳 𝗻𝗼𝘁 𝘀𝗽𝗼𝗸𝗲𝗻 \n 𝗧𝗵𝗮𝘁'𝘀 𝗻𝗼𝘁 𝗹𝗼𝘃𝗲🐼🍒🤍 \n _-✨🌻🖤-কথা না হলে যে ভালোবাসা বদলে যায়💚🍒 -সেটা কোনো ভালোবাসা না।💜🐼🍒",
"🙂𝐈𝐌 𝐖𝐄𝐈𝐑𝐃, 𝐁𝐔𝐓 𝐍𝐎𝐓 𝐏𝐎𝐋𝐘𝐌𝐎𝐑𝐏𝐎𝐔𝐒𝐈-!!🙂 \n ⊱ আমি অদ্ভুত, তবে বহুরূপী নই-!!🙂",
">🐰✨𝗧𝗵𝗶𝘀 𝗔𝗯𝘂𝘁 𝗟𝗶𝗻𝗲 ! 💜🍒 \n☄️🥀💓স্বপ্নে দেখি তুমি পাশে, রোজ নিশিতেই পাই- ছুঁতে গেলেই হারাও তুমি,ঘুম ভাঙ্গিলে নাই- ",
"🍓🍄তুমি শেষ বিকেলের  বিশঘ্ন মেঘে জমা আকাশের \n মতো ভয়ংকর সুন্দর—: ›🩷🪄🫰 ",
"💙🦋🌿__𝐓𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞_🐰🍒💫🌼 \n ☞--🌸চোখের মায়া পোইড়া আইয়া পড়ো  দিলটা তোমারে  দিয়া দিমু..!!<3 🦋🙈_🖤🌼",
"🦋🥺 _𝐓𝐡𝐨𝐬𝐞 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐞𝐱𝐩𝐫𝐞𝐬𝐬𝐞𝐝..🤍🌸 – 𝐍𝐨𝐭 𝐚 𝐛𝐢𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥…🥺 .💥🐰🙂 \n —সব অনুভূতি হয়না প্রকাশিত। 🙂 ❤︎  \n —থাক না কিছুটা ব্যক্তিগত। 🌸🙂🙂 ",
"❥━!!নিজের!!-🥀🖤🦋 \n অনুভূতি গুলো কাউকে বোঝানো \n                    সত্যিই খুব কঠিনツ",
"--তোমার মতো অন্য কাউকে না🙂 শুধু তোমাকে চাই--❀😇🤍 --🖤🤍-- ",
"︿🦋🌺___ I ωish .. \n ___ღღ||- একদিন কেউ এসে বলবে🙂🥀🍁 \n প্রিয়__🙂 ❀--তোমাকে মেনে নিতে নয় মানিয়ে নিতে চাই🙃🦋",
"✨💚𝗗𝗶𝘀𝘁𝗮𝗻𝗰𝗲 𝗱𝗼𝗲𝘀𝗻'𝘁 𝗺𝗮𝘁𝘁𝗲𝗿 𝗶𝗳 𝘁𝘄𝗼 𝗵𝗲𝗮𝗿𝘁'𝘀 𝗮𝗿𝗲 𝗹𝗼𝘆𝗮𝗹 𝘁𝗼𝗲 𝗲𝗮𝗰𝗵 𝗢𝘁𝗵𝗲𝗿<🐼🍒🌈🌻 \n 🦋🔐--- শত জন চাই নাহ,শুধু তুমি আমার হও, দেখিয়ে দেবো শত রকমভাবে একজনকে ভালোবাসা যায়!😊🖤 ",
"°-(🍒🦋Time changes But some💚...Fillings Never change💫🦋,!) \n 😊)সময় বদলাই কিন্ত কিছু অনুভূতি বদলাই না 💫💚",
"__🌺𝐇𝐞𝐚𝐫𝐭 𝐅𝐞𝐞𝐥𝐢𝐧𝐠𝐬🙂🥀__ \n ۵🦋কবরে ঘুমিয়ে থাকা মানুষ গুলোর ও অনেক স্বপ্ন ছিল🌸"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=1nbQ1w8Cgk2PRVzh--jHMWPOCN0LzDpAk",
"https://drive.google.com/uc?id=1nOnUSQW9R7YcP10fhBzkr70r_8Yds9nx",
"https://drive.google.com/uc?id=1njqyhcXZ1aR0JAc6Nqt8438MZjRa3IC_",
"https://drive.google.com/uc?id=1mIt5sgjGQFgxFLV1uFiSJpBzgDcqtZLU",
"https://drive.google.com/uc?id=1ijt1aqEfEFVcdmORUe3XjDKbpP1AS0hK",
"https://drive.google.com/uc?id=1nsHZnlzkJSMxr-MWST5XvpK_SWi2Ch4Q",
"https://drive.google.com/uc?id=1jlQE4IaFPe_lqgoCnYXzbhYVoc9_jSZG",
"https://drive.google.com/uc?id=1ju0kg-pD-42jJJQtCfFNtGt1YDNa9Hpl",
"https://drive.google.com/uc?id=1nOmAarQMK4VPC3XKY1LgzPCT2iMvYjLJ",
"https://drive.google.com/uc?id=1o0mHkJwVbnO-jTP7uYEYAtAnZghHEKtV",
"https://drive.google.com/uc?id=1m0CPbJf7EQNJ5GM_3599DXjVzA98mTxs",
"https://drive.google.com/uc?id=1iZbQkab0LG8bFVW83B_K5Ykzg-peX3Pz",
"https://drive.google.com/uc?id=1k6Jfvchwa7xIWW4uyYOklm6PMqIl2-eo",
"https://drive.google.com/uc?id=1iiSUhPWjuCjdqeMVPTi0usS7zPjt6YmN",
"https://drive.google.com/uc?id=1nivRH7LbJhdcf0ZPDtyFNTeurUfOfDtj",
"https://drive.google.com/uc?id=1lqyV5G_VZC4mqCrGS1krRg6ZzvBif1jE",
"https://drive.google.com/uc?id=1m499vVXtOSaVBhv91U4ImMTPZdluA6sR",
"https://drive.google.com/uc?id=1nwgx9uFMYWjNDZUbPQ7z9XDcdKApWoUw",
"https://drive.google.com/uc?id=1iADVeBrDaBYr6wSdVL8ihsVpNwn0ikCW",
"https://drive.google.com/uc?id=1j6YnRXbYruS3AzQUrlLR9784H-4x5PCS",
"https://drive.google.com/uc?id=1hGbsG4zI1vP7YnwlEzouEGtwJseF-qeP",
"https://drive.google.com/uc?id=1itcCoNhk_KECC-ghZWSIvfE2q0ruJ49N",
"https://drive.google.com/uc?id=1inKHaC-HTNQTpQ-RiJhkBGhrWeFC-LE8",
"https://drive.google.com/uc?id=1mUplbIHxFRVO88arglVAZckaEYwVf5_o",
"https://drive.google.com/uc?id=1hMj_sn4NC2j3Rp1A2WvNBzQrpcR-02HJ",
"https://drive.google.com/uc?id=1hLoVW9jrc7H9s7INt5S4kA4ctTLIr9aR",
"https://drive.google.com/uc?id=1hJvEXQI8ZqDEQperfect8qc_A6-PVBlW",
"https://drive.google.com/uc?id=1hHjL5BEtC-PfOUiLRQe3IFcZQ33qe9Dj",
"https://drive.google.com/uc?id=1npLTn9wDbEQ-U_oS-bPkgpoiL3BPj7ky",
"https://drive.google.com/uc?id=1k3HSCeVGmgklSugiYl1GRng21OmMh18X"];
   var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
