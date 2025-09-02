const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'trashcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOENhZ2lWQnNHQTU1b2k3WmdpSHljUERXaW1PK3M5U3RiRzgxYmlleFdsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNi9kZGRiZ0tSbWY1dzUxUzYwWEhTSWp2eDMvMWdIZlc1RWZzYnVKMm9SYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRTlES3gvcjBIS2Fha1FYdzBaQUdaYWd0SlRBa0MzeUwrWnJDQnk5SW1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKais3c3NJeGNEWU9zcHlDbERnTzN5SVNuV2RKSDlGWERwQXlWU2xHOGpzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFBL3pFdURCNE5rNkRYcFUwSUJ6d3RFdTUwbGdKVEZNOVRvckdwZmN6MHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVsSlBIQ1VxdjlvS0lTUUYrNERUSi9QeFFjcHB4bVNURnYzR2tOY0lhbXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tOUmtaSGgyRDRuUnVkL1o2NjdHSkJsM3FKcTAzSzFndWdKUFdaY1AxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGloRG8yZDlQTFA1MjBvMGlaeEFIUDAweHEvN2E2dE9Fc3htSlFqQXduTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZVUllaK0xBMDdCaXV3KzAvYWlYNVBPMUxzdXFQQU4rRUVXeGtwYWpDd2tTSFRnVTg3YzhnNzVFYkpwU0RsdlVka2gza0YvbVViSXhZWU5ScVAyZUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6InVjQmQ3OEZSOG1zeUxMcWJzczA5RE1ucW0yay83Zjd1ZmJ3bWE3VCtYQjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNzWHhIeWZ4Um1XQm91aFJEcktPVnciLCJwaG9uZUlkIjoiYTNlNDViOWMtZTRmMC00OWNhLWEyM2UtNGY5OGJhMjNlZDJjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZjUnhRMnphZlhOOVFGaTFQdWlnKzFyK20xQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEZ2RIb1djY1hSQmZ2QVdmREI4N3huWHo3L009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFJBU0hCT1QiLCJtZSI6eyJpZCI6IjIzMjc0NDQ4MTMwOjEyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQxMzUyMDA0MjI3MTAzOjEyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0tvOFZNUXJlM2R4UVlZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTlRvZzdwOHBzRVppTmlMcjNsakwxZ2laL05CNmVaaW5oS1M5T2lPcVJpbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTnJQVjlidWdBMFhUemp6SWF3MnBqNDJTK24ra0VSZ2lneDg0L2NEbWVLM09FRVBLM3dPSHNoRUJRNUdnRE5ITkZ2ZXpmL1RoNjhPYXc0UitNQVYwQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkRWVVhUY2xXOEZiWlg5Q1dYZC9vZmFCNHpXMkFnYmlsOXc4SHpkQ29Pa1l0S1c1RnhkZnJLMStsaWw1bVpZTGZUUG1XYjRHTzNjNmNhUVQwM0hlbEJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMyNzQ0NDgxMzA6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFU2SU82ZktiQkdZallpNjk1WXk5WUltZnpRZW5tWXA0U2t2VG9qcWtZcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2ODUzOTQ3LCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRjlWIn0=' 
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
