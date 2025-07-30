const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'trashcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJ4TWl1SjB1ck9aMWFDa2RzVTVCMnNWMklDeDg5VlFtbnl3Tm13UVFuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXUzUEJ1STE1VW9Rem9TbjV5YUVXN0NHN2ZVdFhTMFJWQWQwQ042dlowTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSDQrWkJ0eUpzZVJmR0NwaERLeGpWaWZCclpDcjdqMnJ4dnJCclUyK1c0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQmVFUUFnUFBGZEZUZnpEVU4yRDJUMTd1Qmo5YmhMRk5kLzBHZkNnL0c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9KMW5lTWZhUis5MjRnZGEyeWpqcERYN0NjNWhtNDE5UW00dHhyb0gwRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktHUnRGYWdqZXlXaVZBOEhuU1N1UjIyU0RjU0lzSlRUM0hCYUlLekVoUnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk55eldKeU1FRFRUNkpiSjI1bTlkaUgwQ1JjWExPVEo1MDBqSHh2SWVtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHJ6VG9VUEc2NkdEQnVlUXlwNlpnN3JlenhWRnJRdWZwaTdTUFJXNTJWcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFPd2lYWm9zU1JvcW9scm1hSmhsWGprSlVUNXFqU2Qydmg0VEFydEdTaHpyTTZCd0ozZEJ0cWxuYmZNbTRGN1pvMU1tcCtVSzhOTm1ybzkyak02S2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJ4d2xPU2hxZ2NaNnFNRmZGUmdzSnZyK1Vwb3p6VGxuT29PdzJEMzJLKzV3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1ZUxlcWdqUFN2T3ZrcTZZdlU0azdBIiwicGhvbmVJZCI6ImZmZjJhZTk1LWVmMmItNGQ2ZC04MzUzLWZlOTI0OTQxNGQwMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRNCt3MUlrL3RYeXc0UndmQjJhNDd3NC9XZnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2RKZEtCckFuYXpvemtJaDRHbENHdWQ3NHo0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRSQVNIQk9UIiwibWUiOnsiaWQiOiIyMzI3NDQ0ODEzMDo5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQxMzUyMDA0MjI3MTAzOjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLR284Vk1Rbk8yVXhBWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOVG9nN3A4cHNFWmlOaUxyM2xqTDFnaVovTkI2ZVppbmhLUzlPaU9xUmlvPSIsImFjY291bnRTaWduYXR1cmUiOiJ2NHp0VExDTldsdDN2ditvVWRkUHZJVklqb1lZSVkwdW9ia0lEMkxBZTM4OVY2TFNCcjdsNmdyQXpIa0NKMEZCS2YyTnBUU09zZURlNC9zLzZxZ1NCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidjJOa0d1dTFlRXc5VklsNElDWEVpQm9HTERzK0lQSFROaDFZd2E5SlhvS0JEREFUV3FkV1lCa2ZHWDBZNGVEdEkrejZXYlQ2cUFSY1pldk9pNDk3Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzI3NDQ0ODEzMDo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRVNklPNmZLYkJHWWpZaTY5NVl5OVlJbWZ6UWVubVlwNFNrdlRvanFrWXEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MzU2MDc0NSwibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtpaSJ9' 
// Owner Setting
global.prefix = process.env.BOT_PREFIX ||'.'
global.owner = ["23274448130",]
global.error = ["6666",]
global.ownername = process.env.OWNER_NAME ||'Take Tee'
global.antidelete = process.env.ANTI_DELETE || true
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Bot Setting
global.botname = "Trashcore"
global.botversion = "1.4.0"
global.typebot = "Plugin"
global.session = "trashsession"
global.connect = true
global.statusview = process.env.AUTO_STATUS || true
global.antilinkgc = process.env.ANTILINK_GROUP || true
global.autoTyping = process.env.AUTO_TYPE || false
global.autoRecord = process.env.AUTO_RECORD || false
global.thumb = "https://files.catbox.moe/4ryp6k.jpg"
global.wagc = "https://chat.whatsapp.com/BPyIptm3ZH68y4pSPrLMyq?mode=r_t"
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
