const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'trashcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk0rQVNPWHJSU2V3NjRBK01OVDJXRnIyRzh1cHpIcWF0WHdLL2w4N0RFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWNQRjg5UThndHl0T1dSSDlsZUhtUVV2WXAxWU1ETkVMRERGeWtyMkduND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TGdNUzYreXlPRCt0QzMyOS8vOEVPdWRIMzAwaTBnOERyY1k0UHRmQ0ZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2aGZDUjJiSkYyQ1dOQWxrZU91bWo5aDdleVB0ZkpPa1BTcUtuQ2hFL1VBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklFMzIwM002VEsvRVNreFN5Sk93UW9zclpDVmdYTWZuclFkS2RGRmpYRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ1TkpSckxkaEZBOXdLeERpNEZON1p2Y051QlM5a3VaajNRazZiS3VVbDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRkVHV4T1hVVzE5bTVpbzFSdUp5UWNxU3U2dTJUbkFLMmVmMmhPcElXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialkwbDRVNE9HTnVCUVB6a0NEeklrZEFzLzNua1M1cVR5cFZ4SjBjNm5DQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVOUUl6K1RRUFZISDZEWHZXMllEOEhRbnpjTDhTV1FVQXA3STFQSnczcHZOQWsrc2piYmxTampxaGRNbWljT2lMZXJLdkQvaDV5WW96WUN1aXVMV2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6IkgwVXF2VjNJbVNJdTY1WVlZUUh4ZGRlaFU2UitldkpiN0pURFh4R2p5dDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImR6czEycVN2UkVhdGtkdl9nV21oVEEiLCJwaG9uZUlkIjoiOWExOTBjOTEtOThhZS00OWI3LThhNzAtY2U1OTJlNGEwNTMzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp5Um92dnZmV0NldGY1OWoxc0pqWEhFbmtMOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6VkRsTlptSXdHaWxiNGJkWGpQOHRHSUJMdHM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFJBU0hCT1QiLCJtZSI6eyJpZCI6IjMyNDkxOTQyNzQ0OjU1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQ4ODI1NTE1ODA2OTMwOjU1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2YyeGZZQ0VMbTVxTVFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM0pUT0oxYmZDbkhUeFNIbGlMOXlLMUtRVWpYdnFiR2d3RlB6clRCRnNEbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ1FrVWNrcTJHV1l5a0dMSzRFKzlPUThXOWxuR3VQb2FESjlhK1hjREwycE5jRmFxYmwyeDM3eE9vWlkrZ3dhRU5rTzM2b3Z2RDFIWDkweXk0alZyQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkxBU3JUb2dSRk1wSUdzR0FUOXFVTW8yMHlZcWdSOVpIL0twS0lQY0U1N3E5RG9tQVMwd0ZaQ0VaK3VRSnoxS1JuV0RZK3pLWFl1NWJUOVBEazVJY2lBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzI0OTE5NDI3NDQ6NTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHlVemlkVzN3cHgwOFVoNVlpL2NpdFNrRkkxNzZteG9NQlQ4NjB3UmJBNiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzODgxNzk4LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVB0MiJ9' 
// Owner Setting
global.xprefix = process.env.BOT_PREFIX ||'.'
global.owner = ["254104245659",]
global.error = ["6666",]
global.ownername = process.env.OWNER_NAME ||'Trashcore'
global.antidelete = process.env.ANTI_DELETE || true
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Bot Setting
global.botname = "Trashcore"
global.botversion = "1.6.0"
global.typebot = "Plugin"
global.session = "trashsession"
global.connect = true
global.statusview = process.env.AUTO_STATUS || true
global.antilinkgc = process.env.ANTILINK_GROUP || true
global.autoTyping = process.env.AUTO_TYPE || false
global.autoRecord = process.env.AUTO_RECORD || false
global.thumb = "https://files.catbox.moe/4ryp6k.jpg"
global.wagc = "https://chat.whatsapp.com/BPyIptm3ZH68y4pSPrLMyq?mode=r_t"
global.caption = "Trashcore media"
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Sticker Marker
global.packname = process.env.PACK_NAME ||'𝐓𝐑𝐀𝐒𝐇𝐂𝐎𝐑𝐄'
global.packname = process.env.AUTHOR||'𝐏𝐀𝐂𝐊𝐒'
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Respon Message
global.mess = {
    success: '✅ Done.',
    admin: '🚨 Admin only.',
    premium: '🆘must be a premium user.',
    botAdmin: '🤖 Make me admin first.',
    owner: '👑 Owner only.',
    OnlyGrup: '👥 Group only.',
    private: '📩 Private chat only.',
    wait: '⏳ Processing...',
    error: '⚠️ Error occurred.',
}
//━━━━━━━━━━━━━━━━━━━━━━━━//
// File Update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update File 📁 : ${__filename}`)
delete require.cache[file]
require(file)
})
