let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 EDITOR 𝙴𝚂 wa.me/50241033780*
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/JuanDelValle18/ChocolatinBot` },
'mimetype': `application/${document}`,
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/JuanDelValle18/ChocolatinBot',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm}},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '👾 𝙼𝙴𝙽𝚄 👾'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝑱𝒖𝒂𝒏 𝑪𝒂𝒓𝒍𝒐𝒔;;;\nFN:𝑱𝒖𝒂𝒏 𝑪𝒂𝒓𝒍𝒐𝒔\nORG:𝑱𝒖𝒂𝒏 𝑪𝒂𝒓𝒍𝒐𝒔\nTITLE:\nitem1.TEL;waid=50241033780:+502 4103 3780\nitem1.X-ABLabel:𝑱𝒖𝒂𝒏 𝑪𝒂𝒓𝒍𝒐𝒔\nX-WA-BIZ-DESCRIPTION:[❗] ᴄᴏɴᴛᴀᴄᴛᴀ ᴀ ᴇsᴛᴇ ɴᴜᴍ ᴘᴀʀᴀ ᴄᴏsᴀs ɪᴍᴘᴏʀᴛᴀɴᴛᴇs.\nX-WA-BIZ-NAME:𝑱𝒖𝒂𝒏 𝑪𝒂𝒓𝒍𝒐𝒔\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: '𝑱𝒖𝒂𝒏 𝑪𝒂𝒓𝒍𝒐𝒔', contacts: [{ vcard }] }}, {quoted: m})
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
