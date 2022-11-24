import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *𝒞𝒽𝑜𝒸𝑜𝓁𝒶𝓉𝒾𝓃-𝐵𝑜𝓉* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Editor:* 𝑱𝒖𝒂𝒏 𝑪𝒂𝒓𝒍𝒐𝒔
║➤ *Numero:* wa.me/50241033780
║➤ *Fecha:* ${date}
║➤ *Tiempo activo:* ${uptime}
║➤ *Usuarios:* ${rtotalreg}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ Nivel:* ${level}
┣ *🧰 Experiencia:* ${exp}
┣ *⚓ Rango:* ${role}
┣ *💎 Diamantes:* ${limit}
┣ *👾 MysticCoins:* ${money}
┣ *🪙 Tokens:* ${joincount}
┣ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : '❌'}
┗━━━━━━━━━━━━━━━━━━━┛
${readMore}

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💟 _${usedPrefix}grupos_
┣ ඬ⃟ 💟 _${usedPrefix}estado_
┣ ඬ⃟ 💟 _${usedPrefix}infobot_
┣ ඬ⃟ 💟 _${usedPrefix}speedtest_
┣ ඬ⃟ 💟 _${usedPrefix}grouplist_
┣ ඬ⃟ 💟 _${usedPrefix}owner_
┣ ඬ⃟ 💟 _${usedPrefix}script_
┣ ඬ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕁𝕌𝔼𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}love *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pregunta *<texto>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}suitpvp *<@tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}slot *<apuesta>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}ttt *<nombre sala>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}delttt_
┣ ඬ⃟ 🎖️ _${usedPrefix}top *<texto>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}verdad_
┣ ඬ⃟ 🎖️ _${usedPrefix}reto_
┣ ඬ⃟ 🎖️ _${usedPrefix}cancion_
┣ ඬ⃟ 🎖️ _${usedPrefix}pista_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _${usedPrefix}enable *welcome*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *welcome*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antilink*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antilink*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antilink2*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antilink2*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *detect*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *audios*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *audios*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *autosticker*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antiviewonce*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antiviewonce*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *modoadmin*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *modoadmin*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┣ *< ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔰 _${usedPrefix}reporte *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}gdrive *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}twitter *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}fb *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}fb2 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}fb3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}fb4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}fb5 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}play *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.1 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playdoc *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playlist *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playlist2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}spotify *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}stickerly *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}ringtone *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}soundcloud *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}imagen *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}pinteret *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}wallpaper *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}wallpaper2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
┣ ඬ⃟ 📥 _${usedPrefix}igstalk *<nombre de usuario>*_
┣ ඬ⃟ 📥 _${usedPrefix}igstory *<nombre de usuario>*_
┣ ඬ⃟ 📥 _${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔾ℝ𝕌ℙ𝕆𝕊 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 _${usedPrefix}add *<numero>*_
┣ ඬ⃟ 💎 _${usedPrefix}kick *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}kick2 *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ඬ⃟ 💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ ඬ⃟ 💎 _${usedPrefix}promote *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}infogroup_
┣ ඬ⃟ 💎 _${usedPrefix}resetlink_
┣ ඬ⃟ 💎 _${usedPrefix}link_
┣ ඬ⃟ 💎 _${usedPrefix}setname *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setdesc *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}invocar *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setwelcome *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setbye *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}hidetag *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}warn *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}unwarn *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}listwarn_
┣ ඬ⃟ 💎 _${usedPrefix}fantasmas_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 _${usedPrefix}togifaud *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toimg *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<nota de voz>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toptt *<video / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tovideo *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tts es *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ _${usedPrefix}mensajefalso *<nombre|mensaje>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}phmaker *<opcion> <imagen>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logos *<efecto> <texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logochristmas *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logocorazon *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}ytcomment *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}hornycard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}simpcard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}lolice *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}itssostupid_
┣ ඬ⃟ 🖍️ _${usedPrefix}pixelar_
┣ ඬ⃟ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🥀 _${usedPrefix}piropo_
┣ ඬ⃟ 🥀 _${usedPrefix}consejo_
┣ ඬ⃟ 🥀 _${usedPrefix}fraseromantica_
┣ ඬ⃟ 🥀 _${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👾 _${usedPrefix}meme_
┣ ඬ⃟ 👾 _${usedPrefix}navidad_
┣ ඬ⃟ 👾 _${usedPrefix}wpmontaña_
┣ ඬ⃟ 👾 _${usedPrefix}wpgaming_
┣ ඬ⃟ 👾 _${usedPrefix}wallhp_
┣ ඬ⃟ 👾 _${usedPrefix}wpvehiculo_
┣ ඬ⃟ 👾 _${usedPrefix}wpmoto_
┣ ඬ⃟ 👾 _${usedPrefix}coffee_
┣ ඬ⃟ 👾 _${usedPrefix}caricatura_
┣ ඬ⃟ 👾 _${usedPrefix}ciberespacio_
┣ ඬ⃟ 👾 _${usedPrefix}technology_
┣ ඬ⃟ 👾 _${usedPrefix}doraemon_
┣ ඬ⃟ 👾 _${usedPrefix}hacker_
┣ ඬ⃟ 👾 _${usedPrefix}planeta_
┗━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ඬ⃟ 🎤 _${usedPrefix}bass_
┣ ඬ⃟ 🎤 _${usedPrefix}blown_
┣ ඬ⃟ 🎤 _${usedPrefix}deep_
┣ ඬ⃟ 🎤 _${usedPrefix}earrape_
┣ ඬ⃟ 🎤 _${usedPrefix}fast_
┣ ඬ⃟ 🎤 _${usedPrefix}fat_
┣ ඬ⃟ 🎤 _${usedPrefix}nightcore_
┣ ඬ⃟ 🎤 _${usedPrefix}reverse_
┣ ඬ⃟ 🎤 _${usedPrefix}robot_
┣ ඬ⃟ 🎤 _${usedPrefix}slow_
┣ ඬ⃟ 🎤 _${usedPrefix}smooth_
┣ ඬ⃟ 🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📳 _${usedPrefix}start_
┣ ඬ⃟ 📳 _${usedPrefix}next_
┣ ඬ⃟ 📳 _${usedPrefix}leave_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔍 _${usedPrefix}stickersearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}stickersearch2 *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}animeinfo *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}google *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}letra *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}wikipedia *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}ytsearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}apkdone *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}apkgoogle *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}hostapk *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}revdl *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}toraccino *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}uapkpro *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}afk *<motivo>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}ocr *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}calc *<operacion math>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}del *<mensaje>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}whatmusic *<audio>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}qrcode *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}styletext *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}traducir *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}zoom *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}nowa *<numero>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}horario_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💵 _${usedPrefix}adventure_
┣ ඬ⃟ 💵 _${usedPrefix}cazar_
┣ ඬ⃟ 💵 _${usedPrefix}cofre_
┣ ඬ⃟ 💵 _${usedPrefix}balance_
┣ ඬ⃟ 💵 _${usedPrefix}claim_
┣ ඬ⃟ 💵 _${usedPrefix}heal_
┣ ඬ⃟ 💵 _${usedPrefix}lb_
┣ ඬ⃟ 💵 _${usedPrefix}levelup_
┣ ඬ⃟ 💵 _${usedPrefix}myns_
┣ ඬ⃟ 💵 _${usedPrefix}perfil_
┣ ඬ⃟ 💵 _${usedPrefix}work_
┣ ඬ⃟ 💵 _${usedPrefix}minar_
┣ ඬ⃟ 💵 _${usedPrefix}minar2_
┣ ඬ⃟ 💵 _${usedPrefix}buy_
┣ ඬ⃟ 💵 _${usedPrefix}buyall_
┣ ඬ⃟ 💵 _${usedPrefix}verificar_
┣ ඬ⃟ 💵 _${usedPrefix}robar *<cantidad> <@tag>*_
┣ ඬ⃟ 💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣ ඬ⃟ 💵 _${usedPrefix}unreg *<numero de serie>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}sfull *<imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟ 👽 _${usedPrefix}scircle *<imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}sremovebg *<imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp2 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp3 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp2 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp3 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp4 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp5 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}pat *<@tag>*_
┣ ඬ⃟ 👽 _${usedPrefix}slap *<@tag>*_
┣ ඬ⃟ 👽 _${usedPrefix}kiss *<@tag>*_
┣ ඬ⃟ 👽 _${usedPrefix}dado_
┣ ඬ⃟ 👽 _${usedPrefix}wm *<packname> <author>*_
┣ ඬ⃟ 👽 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━┓
┃ *< 𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👑 > *<funcion>*
┣ ඬ⃟ 👑 => *<funcion>*
┣ ඬ⃟ 👑 $ *<funcion>*
┣ ඬ⃟ 👑 _${usedPrefix}setprefix *<prefijo>*_
┣ ඬ⃟ 👑 _${usedPrefix}resetprefix_
┣ ඬ⃟ 👑 _${usedPrefix}autoadmin_
┣ ඬ⃟ 👑 _${usedPrefix}leavegc_
┣ ඬ⃟ 👑 _${usedPrefix}cajafuerte_
┣ ඬ⃟ 👑 _${usedPrefix}blocklist_
┣ ඬ⃟ 👑 _${usedPrefix}block *<@tag / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}unblock *<@tag / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *public*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *public*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}msg *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}banchat_
┣ ඬ⃟ 👑 _${usedPrefix}unbanchat_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}dardiamantes *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}añadirxp *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}bc *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcchats *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcbot *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}cleartpm_
┣ ඬ⃟ 👑 _${usedPrefix}restart_
┣ ඬ⃟ 👑 _${usedPrefix}update_
┣ ඬ⃟ 👑 _${usedPrefix}banlist_
┣ ඬ⃟ 👑 _${usedPrefix}addprem *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}delprem *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}listprem_
┣ ඬ⃟ 👑 _${usedPrefix}listcmd_
┣ ඬ⃟ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┗━━━━━━━━━━━━━━━━━━━┛
`.trim()
let buttons = [
{ buttonId: '#owner', buttonText: { displayText: '🌹 𝙾𝚆𝙽𝙴𝚁 🌹' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '𝒞𝒽𝑜𝒸𝑜𝓁𝒶𝓉𝒾𝓃-𝐵𝑜𝓉',
body: null`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
