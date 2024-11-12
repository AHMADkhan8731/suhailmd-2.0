const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_16_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICA3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NixcbiAgICAgICAgMTkxLFxuICAgICAgICA2NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICA3NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0LFxuICAgICAgICA0NixcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxODksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQxLFxuICAgICAgICA5MixcbiAgICAgICAgODgsXG4gICAgICAgIDY5LFxuICAgICAgICA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIko4R0lHWjhGVHEzZXVFUENtNkNjZUFDTDhsT0RvQ2NaTHdqOG1WU0Z3U0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklsM1ROYVFIUkUtLWQ1OFVMSmY0RHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTgyMzUwYTMtMDZiNi00ZDhjLWIwNGMtNDBkNDAwMjMzYjEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDE5MCxcbiAgICAgIDE5NixcbiAgICAgIDE2OCxcbiAgICAgIDIzNSxcbiAgICAgIDM0LFxuICAgICAgMTIzLFxuICAgICAgMTY2LFxuICAgICAgMjI0LFxuICAgICAgODEsXG4gICAgICAxNTgsXG4gICAgICA1MixcbiAgICAgIDc1LFxuICAgICAgMjUyLFxuICAgICAgNDIsXG4gICAgICAyMzIsXG4gICAgICAxNDEsXG4gICAgICAxMjAsXG4gICAgICAyMzgsXG4gICAgICA0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDEwNSxcbiAgICAgIDk5LFxuICAgICAgNTIsXG4gICAgICA4MyxcbiAgICAgIDUwLFxuICAgICAgOTMsXG4gICAgICA4MSxcbiAgICAgIDExOSxcbiAgICAgIDEyLFxuICAgICAgMjE4LFxuICAgICAgNzIsXG4gICAgICAxMCxcbiAgICAgIDE0MSxcbiAgICAgIDEyNixcbiAgICAgIDE0MSxcbiAgICAgIDEzMyxcbiAgICAgIDE2MyxcbiAgICAgIDMzLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVNUWkZTRzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE0NDM4MDkxNDo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAxMDQ3OTg5NTU1Mjc3OjYwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t2MjY4c0JFS0R5ekxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibURGOTl6TWxOZ05PUDljWGlCM21MVDl2ZVBaNGNQczZDN0s4ZiszeW5uOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjYXB0V3JsZ1o0alUvL1AwZWgwWGlwWGtaL1orRDQ3aCtyZ3JoV3A5ZHVlY2NJdVJhYzFwamluMHhUdU00K3RCaE5OWlhONEt4ZG9WNFladWMvelhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoNnRMbmFBcGlqMEV0SFZLSDkvcWdqMXlrSk5kQVQyYjl4b0tack5zTG1Cc0U0S0dHOFdMeVBCenpjcWd3TW9wMTNOV0FtdVY4M2laKzZmcFoxUVpqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNDQzODA5MTQ6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNDEwMjExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHZ6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEdnouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpb0NFVVhOVUxENm1MN1I3bWRUZkpKZlZoV05DUnFmclg5OUpGMUpQMGprPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyNzQ5MDA5MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMTQxMDEzMzI0OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Nawab-XMD",
  ownername:process.env.OWNER_NAME|| "Nawab-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
