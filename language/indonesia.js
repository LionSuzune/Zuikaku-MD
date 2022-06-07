exports.private = () =>{
	return`_The feature can only be used in private chat_`
	}
exports.wait = () => {
    return `_Wait a moment_`
}
exports.ok = () => {
    return `_Here its finished_`
}

exports.err = () => {
    return `_Features Moderate Error_`
}
exports.erorLink = () => {
    return `_Link Error_`
}
exports.media = () => {
    return `_Please select the media you want to download_`
}
exports.replyImg = (prefix, command) => {
    return `_Send/Reply Photo With Caption  ${prefix + command}_`
}

exports.wrongFormat = (prefix) => {
    return `_This feature is not listed in ${prefix}allmenu, please check again in the menu_`
}

exports.emptyMess = () => {
    return `_Please enter the message you want to convey_`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `_Command ${cmd} is not listed in ${prefix}allmenu_`
}

exports.ownerOnly = () => {
    return `_Sorry, youre not my owner 🥺_`
}

exports.doneOwner = () => {
    return `_Yeey Is Done As Owner of Sensei😉_`
}

exports.groupOnly = () => {
    return `_One of these commands can only be in a group_`
}

exports.adminOnly = () => {
    return `_This command can only be used by group admins_`
}

exports.nhFalse = () => {
    return `_Invalid Code_`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `_User is not an admin_`
}

exports.adminAlready = () => {
    return `_Cannot promote a user who is an admin_`
}

exports.botNotAdmin = () => {
    return `_Please make admin for other group features_`
}

exports.received = (pushname) => {
    return `
_Hi ${pushname}!
Thank you for reporting, we will receive your report soon_`
}

exports.videoLimit = () => {
    return `_File Size is too big_`
}

exports.notNum = (q) => {
    return `"${q}", not a number`
}
exports.menunya = (salam, pushname, botname, ownername) =>{
	return`Hello ${pushname} 👋 safe  ${salam} , 
i ${botname}, this bot is Whatsapp Multi-Device Beta. 
 And my owner's name is ${ownername} 
 This menu is really small or the features sometimes error or run out of apikey 🥲
 If you want to use it, go ahead but dont spam the features 
 Thank you for using the Zuikaku Command 😉
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu ${botname}*
*👑 Ownername : ${ownername}*

◪ 「 Bot Info 」 
〉 ${prefix}owner
〉 ${prefix}rules
〉 ${prefix}sc
〉 ${prefix}ping
〉 ${prefix}runtime
〉 ${prefix}botstatus
〉 ${prefix}donate


◪ 「 Owner 」 
〉 < evaluate
〉 > evaluate
〉 $ exec
〉 => exec
〉 ${prefix}setmenu [query]
〉 ${prefix}setmenu templateLocation
〉 ${prefix}setmenu templateTenor
〉 ${prefix}setmenu katalog
〉 ${prefix}setmenu katalog2
〉 ${prefix}setmenu list
〉 ${prefix}setwm packname|author
〉 ${prefix}sendsesi
〉 ${prefix}listpc
〉 ${prefix}listgc
〉 ${prefix}broadcast [text]
〉 ${prefix}bc [text]
〉 ${prefix}bcgc [text]
〉 ${prefix}nsfw [on/off]
〉 ${prefix}autorespond [on/off]
〉 ${prefix}antiviewonce [on/off]
〉 ${prefix}join [link]
〉 ${prefix}self
〉 ${prefix}public [only bot]
〉 ${prefix}del [reply pesan bot]
〉 ${prefix}setppbot [reply image]


◪ 「 Database 」 
〉 ${prefix}setcmd [reply stiker]
〉 ${prefix}delcmd [reply stiker]
〉 ${prefix}listcmd
〉 ${prefix}absen
〉 ${prefix}cekabsen
〉 ${prefix}deleteabsen
〉 ${prefix}absenstart
〉 ${prefix}addmsg [nama file]
〉 ${prefix}getmsg [nama file]
〉 ${prefix}listmsg
〉 ${prefix}delmsg [nama file]

◪「 Store Menu 」
〉 ${prefix}list
〉 ${prefix}addlist [key|respond]
〉 ${prefix}dellist [key]
〉 ${prefix}update [key|respond]
〉 ${prefix}store
〉 ${prefix}kali
〉 ${prefix}bagi
〉 ${prefix}tambah
〉 ${prefix}kurang
〉 ${prefix}kalkulator
〉 ${prefix}proses
〉 ${prefix}done [surah|ayat]

◪ 「 Group 」 
〉 ${prefix}listonline
〉 ${prefix}sider
〉 ${prefix}wm packname|author
〉 ${prefix}infochat
〉 ${prefix}setdesk [text]
〉 ${prefix}setppgrup [reply image]
〉 ${prefix}antilink [on/off]
〉 ${prefix}revoke
〉 ${prefix}leave
〉 ${prefix}add [62***]
〉 ${prefix}kick @tag
〉 ${prefix}leave
〉 ${prefix}linkgc
〉 ${prefix}take packname|author
〉 ${prefix}group [open/close]
〉 ${prefix}tagall [text]
〉 ${prefix}hidetag [text]

◪ 「 Anime 」 
〉 ${prefix}quotesanime
〉 ${prefix}anime [query]
〉 ${prefix}manga [query]
〉 ${prefix}character [query]

◪ 「 Tag 」 
〉 ${prefix}stickertag
〉 ${prefix}videotag [query]
〉 ${prefix}vntag [query]
〉 ${prefix}imagetag [query]

◪ 「 Stalking 」 
〉 ${prefix}igstalk [username]
〉 ${prefix}ghstalk [username]
〉 ${prefix}ytstalk [channel]


◪ 「 Search 」 
〉 ${prefix}ytsearch [query]
〉 ${prefix}wallpaper [query]
〉 ${prefix}wikimedia [query]
〉 ${prefix}hentai
〉 ${prefix}wattpad [query]
〉 ${prefix}webtoons [query]
〉 ${prefix}drakor [query]
〉 ${prefix}pinterest [query]


◪ 「 Converter 」
〉 ${prefix}toaudio [video]
〉 ${prefix}tomp3 [video]
〉 ${prefix}tovn [video]
〉 ${prefix}stiker [reply image]
〉 ${prefix}tourl [image/video/stiker]
〉 ${prefix}togif [sticker]
〉 ${prefix}tomp4 [sticker]
〉 ${prefix}toimg [reply sticker]


◪ 「 Image Effect 」 
〉 ${prefix}wanted [reply image/stiker]
〉 ${prefix}utatoo [reply image/stiker]
〉 ${prefix}unsharpen [reply image/stiker]
〉 ${prefix}thanos [reply image/stiker]
〉 ${prefix}sniper [reply image/stiker]
〉 ${prefix}sharpen [reply image/stiker]
〉 ${prefix}sepia [reply image/stiker]
〉 ${prefix}scary [reply image/stiker]
〉 ${prefix}rip [reply image/stiker]
〉 ${prefix}redple [reply image/stiker]
〉 ${prefix}rejected [reply image/stiker]
〉 ${prefix}posterize [reply image/stiker]
〉 ${prefix}ps4 [reply image/stiker]
〉 ${prefix}pixelize [reply image/stiker]
〉 ${prefix}missionpassed [reply image/stiker]
〉 ${prefix}moustache [reply image/stiker]
〉 ${prefix}lookwhatkarenhave [reply image/stiker]
〉 ${prefix}jail [reply image/stiker]
〉 ${prefix}invert [reply image/stiker]
〉 ${prefix}instagram [reply image/stiker]
〉 ${prefix}greyscale [reply image/stiker]
〉 ${prefix}glitch [reply image/stiker]
〉 ${prefix}gay [reply image/stiker]
〉 ${prefix}frame [reply image/stiker]
〉 ${prefix}fire [reply image/stiker]
〉 ${prefix}distort [reply image/stiker]
〉 ${prefix}dictator [reply image/stiker]
〉 ${prefix}deepfry [reply image/stiker]
〉 ${prefix}ddungeon [reply image/stiker]
〉 ${prefix}circle [reply image/stiker]
〉 ${prefix}challenger [reply image/stiker]
〉 ${prefix}burn [reply image/stiker]
〉 ${prefix}brazzers [reply image/stiker]
〉 ${prefix}beautiful [reply image/stiker]


◪ 「 Sticker Effect 」 
〉 ${prefix}jail [reply image/stiker]
〉 ${prefix}red [reply image/stiker]
〉 ${prefix}gay [reply image/stiker]
〉 ${prefix}bloo [reply image/stiker]
〉 ${prefix}blue [reply image/stiker]
〉 ${prefix}sepia [reply image/stiker]
〉 ${prefix}green [reply image/stiker]
〉 ${prefix}glass [reply image/stiker]
〉 ${prefix}invert [reply image/stiker]
〉 ${prefix}blurple [reply image/stiker]
〉 ${prefix}blurple2 [reply image/stiker]
〉 ${prefix}wasted [reply image/stiker]
〉 ${prefix}passed [reply image/stiker]
〉 ${prefix}triggered [reply image/stiker]
〉 ${prefix}comrade [reply image/stiker]
〉 ${prefix}greyscale [reply image/stiker]
〉 ${prefix}threshold [reply image/stiker]
〉 ${prefix}brightness [reply image/stiker]
〉 ${prefix}invertgreyscale [reply image/stiker]


◪ 「 Download 」 
〉 ${prefix}tiktok [link]
〉 ${prefix}tiktoknowm [link]
〉 ${prefix}tiktokwm [link]
〉 ${prefix}tiktokaudio [link]
〉 ${prefix}ytdl [link]
〉 ${prefix}play [query]
〉 ${prefix}ytmp3 [link]
〉 ${prefix}ytshortmp3 [link]
〉 ${prefix}ytmp4 [link]
〉 ${prefix}ytshorts [link]
〉 ${prefix}facebook [link]
〉 ${prefix}facebooksd [link]
〉 ${prefix}facebookhd [link]
〉 ${prefix}fbaudio [link]
〉 ${prefix}igstory [username]
〉 ${prefix}igdl [link]
〉 ${prefix}igphoto [link]
〉 ${prefix}igvideo [link]
〉 ${prefix}igreels [link]
〉 ${prefix}igtv [link]
〉 ${prefix}soundcloud [link]
〉 ${prefix}gitclone [link repo]
〉 ${prefix}gitrepo [username repo branch]
〉 ${prefix}mediafire [link]
〉 ${prefix}twitter link

◪ 「 Primbon 」
〉 ${prefix}nomorhoki 887435047326
〉 ${prefix}artimimpi [query]
〉 ${prefix}artinama [query]
〉 ${prefix}ramaljodoh
〉 ${prefix}ramaljodohbali
〉 ${prefix}suamiistri
〉 ${prefix}ramalcinta
〉 ${prefix}cocoknama
〉 ${prefix}pasangan
〉 ${prefix}jadiannikah
〉 ${prefix}sifatusaha
〉 ${prefix}rezeki
〉 ${prefix}pekerjaan
〉 ${prefix}nasib
〉 ${prefix}penyakit
〉 ${prefix}tarot
〉 ${prefix}fengshui
〉 ${prefix}haribaik
〉 ${prefix}harisangar
〉 ${prefix}harisial
〉 ${prefix}nagahari
〉 ${prefix}arahrezeki
〉 ${prefix}peruntungan
〉 ${prefix}weton
〉 ${prefix}karakter
〉 ${prefix}keberuntungan
〉 ${prefix}memancing
〉 ${prefix}masasubur
〉 ${prefix}zodiak 
〉 ${prefix}shio [query]

◪ 「 Random Anime 」
〉 ${prefix}loli
〉 ${prefix}neko
〉 ${prefix}waifu
〉 ${prefix}shinobu
〉 ${prefix}megumin
〉 ${prefix}bully
〉 ${prefix}cuddle
〉 ${prefix}cry
〉 ${prefix}hug
〉 ${prefix}awoo
〉 ${prefix}kiss
〉 ${prefix}lick
〉 ${prefix}pat
〉 ${prefix}smug
〉 ${prefix}bonk
〉 ${prefix}yeet
〉 ${prefix}blush
〉 ${prefix}smile
〉 ${prefix}wave
〉 ${prefix}highfive
〉 ${prefix}handhold
〉 ${prefix}nom
〉 ${prefix}bite
〉 ${prefix}glomp
〉 ${prefix}slap
〉 ${prefix}kill
〉 ${prefix}happy
〉 ${prefix}wink
〉 ${prefix}poke
〉 ${prefix}dance
〉 ${prefix}cringe

◪ 「 Nsfw & Sfw 」
〉 ${prefix}ahegao
〉 ${prefix}ass
〉 ${prefix}bdsm
〉 ${prefix}blowjob
〉 ${prefix}cuckold
〉 ${prefix}cum
〉 ${prefix}ero
〉 ${prefix}femdom
〉 ${prefix}foot
〉 ${prefix}gangbang
〉 ${prefix}glasses
〉 ${prefix}jahy
〉 ${prefix}manga
〉 ${prefix}masturbation
〉 ${prefix}neko
〉 ${prefix}orgy
〉 ${prefix}panties
〉 ${prefix}pussy
〉 ${prefix}tentacles
〉 ${prefix}thighs
〉 ${prefix}yuri
〉 ${prefix}feet
〉 ${prefix}lewdkemo
〉 ${prefix}woof
〉 ${prefix}gasm
〉 ${prefix}solo
〉 ${prefix}8ball
〉 ${prefix}goose
〉 ${prefix}avatar
〉 ${prefix}hololewd
〉 ${prefix}gecg
〉 ${prefix}holo
〉 ${prefix}fox_girl
〉 ${prefix}tits
〉 ${prefix}eroyuri
〉 ${prefix}holoyero
〉 ${prefix}lizard
〉 ${prefix}keta
〉 ${prefix}eron
〉 ${prefix}erok
〉 ${prefix}kemonomimi
〉 ${prefix}cum_jpg
〉 ${prefix}nsfw_avatar
〉 ${prefix}erofeet
〉 ${prefix}meow
〉 ${prefix}wallpaper
〉 ${prefix}waifu
〉 ${prefix}trap
〉 ${prefix}lewd
〉 ${prefix}pussy_jpg
〉 ${prefix}futanari
〉 ${prefix}lewdk
〉 ${prefix}solog
〉 ${prefix}smug
〉 ${prefix}cum
〉 ${prefix}slap
〉 ${prefix}les
〉 ${prefix}erokemo
〉 ${prefix}bj
〉 ${prefix}pwankg
〉 ${prefix}pat
〉 ${prefix}poke
〉 ${prefix}feed
〉 ${prefix}nsfw_neko_gif
〉 ${prefix}pussy
〉 ${prefix}feetg
〉 ${prefix}baka
〉 ${prefix}hug
〉 ${prefix}kiss
〉 ${prefix}tickle
〉 ${prefix}spank
〉 ${prefix}kuni
〉 ${prefix}classic
〉 ${prefix}boobs
〉 ${prefix}anal
〉 ${prefix}ngif
〉 ${prefix}cuddle
〉 ${prefix}zettai

◪ 「 Ephoto360 Menu 」
〉 ${prefix}youtubegold
〉 ${prefix}youtubesilver
〉 ${prefix}facebookgold
〉 ${prefix}facebooksilver
〉 ${prefix}instagramgold
〉 ${prefix}instagramsilver
〉 ${prefix}twittergold
〉 ${prefix}twittersilver
〉 ${prefix}retrotext
〉 ${prefix}halloweenbats
〉 ${prefix}texthalloween
〉 ${prefix}cardhalloween
〉 ${prefix}birthdaycake
〉 ${prefix}thundertext
〉 ${prefix}icetext
〉 ${prefix}milkcake
〉 ${prefix}snowontext
〉 ${prefix}metalstar
〉 ${prefix}dragonfire
〉 ${prefix}zombie3d
〉 ${prefix}merrycard
〉 ${prefix}generalexam 
〉 ${prefix}viettel
〉 ${prefix}embroider
〉 ${prefix}graffititext
〉 ${prefix}graffititext2
〉 ${prefix}graffititext3
〉 ${prefix}covergraffiti
〉 ${prefix}moderngold
〉 ${prefix}capercut
〉 ${prefix}lovecard
〉 ${prefix}heartflashlight
〉 ${prefix}heartcup
〉 ${prefix}sunglightshadow
〉 ${prefix}graffiti3d
〉 ${prefix}moderngoldsilver
〉 ${prefix}moderngold2
〉 ${prefix}moderngold3
〉 ${prefix}fabrictext
〉 ${prefix}masteryavatar
〉 ${prefix}messagecoffee
〉 ${prefix}announofwin
〉 ${prefix}writeblood
〉 ${prefix}horrorletter
〉 ${prefix}writehorror
〉 ${prefix}shirtclub
〉 ${prefix}angelwing
〉 ${prefix}christmasseason
〉 ${prefix}projectyasuo
〉 ${prefix}lovelycute
〉 ${prefix}womansday
〉 ${prefix}covergamepubg
〉 ${prefix}nameonheart
〉 ${prefix}funnyhalloween
〉 ${prefix}lightningpubg
〉 ${prefix}greetingcardvideo 
〉 ${prefix}christmascard 
〉 ${prefix}galaxybat
〉 ${prefix}writegalaxy
〉 ${prefix}starsnight
〉 ${prefix}noeltext
〉 ${prefix}textcakes
〉 ${prefix}pubgbirthday
〉 ${prefix}galaxywallpaper
〉 ${prefix}pubgglicthvideo 
〉 ${prefix}pubgmascotlogo
〉 ${prefix}realembroidery
〉 ${prefix}vintagetelevision
〉 ${prefix}funnyanimations
〉 ${prefix}glowingtext
〉 ${prefix}textonglass
〉 ${prefix}cartoonstyle
〉 ${prefix}multicolor
〉 ${prefix}watercolor2
〉 ${prefix}textsky
〉 ${prefix}summerbeach
〉 ${prefix}1917text
〉 ${prefix}puppycute
〉 ${prefix}rosebirthday


◪ 「 Textpro Menu 」
〉 ${prefix}halloween2 text|text2
〉 ${prefix}horror text|text2
〉 ${prefix}game8bit text|text2
〉 ${prefix}layered text|text2
〉 ${prefix}glitch2 text|text2
〉 ${prefix}coolg text|text2
〉 ${prefix}coolwg text|text2
〉 ${prefix}realistic text|text2
〉 ${prefix}space3d text|text2
〉 ${prefix}gtiktok text|text2
〉 ${prefix}stone text|text2
〉 ${prefix}marvel text|text2
〉 ${prefix}marvel2 text|text2
〉 ${prefix}pornhub text|text2
〉 ${prefix}avengers text|text2
〉 ${prefix}metalr text|text2
〉 ${prefix}metalg text|text2
〉 ${prefix}metalg2 text|text2
〉 ${prefix}halloween2 text|text2
〉 ${prefix}lion text|text2
〉 ${prefix}wolf_bw text|text2
〉 ${prefix}wolf_g text|text2
〉 ${prefix}ninja text|text2
〉 ${prefix}3dsteel text|text2
〉 ${prefix}horror2 text|text2
〉 ${prefix}lava text|text2
〉 ${prefix}bagel text|text2
〉 ${prefix}blackpink text
〉 ${prefix}rainbow2 text
〉 ${prefix}water_pipe text
〉 ${prefix}halloween text
〉 ${prefix}sketch text
〉 ${prefix}sircuit text
〉 ${prefix}discovery text
〉 ${prefix}metallic2 text
〉 ${prefix}fiction text
〉 ${prefix}demon text
〉 ${prefix}transformer text
〉 ${prefix}berry text
〉 ${prefix}thunder text
〉 ${prefix}magma text
〉 ${prefix}3dstone text
〉 ${prefix}neon text
〉 ${prefix}glitch text
〉 ${prefix}harry_potter text
〉 ${prefix}embossed text
〉 ${prefix}broken text
〉 ${prefix}papercut text
〉 ${prefix}gradient text
〉 ${prefix}glossy text
〉 ${prefix}watercolor text
〉 ${prefix}multicolor text
〉 ${prefix}neon_devil text
〉 ${prefix}underwater text
〉 ${prefix}bear text
〉 ${prefix}wonderfulg text
〉 ${prefix}christmas text
〉 ${prefix}neon_light text
〉 ${prefix}snow text
〉 ${prefix}cloudsky text
〉 ${prefix}luxury2 text
〉 ${prefix}gradient2 text
〉 ${prefix}summer text
〉 ${prefix}writing text
〉 ${prefix}engraved text
〉 ${prefix}summery text
〉 ${prefix}3dglue text
〉 ${prefix}metaldark text
〉 ${prefix}neonlight text
〉 ${prefix}oscar text
〉 ${prefix}minion text
〉 ${prefix}holographic text
〉 ${prefix}purple text
〉 ${prefix}glossyb text
〉 ${prefix}deluxe2 text
〉 ${prefix}glossyc text
〉 ${prefix}fabric text
〉 ${prefix}neonc text
〉 ${prefix}newyear text
〉 ${prefix}newyear2 text
〉 ${prefix}metals text
〉 ${prefix}xmas text
〉 ${prefix}blood text
〉 ${prefix}darkg text
〉 ${prefix}joker text
〉 ${prefix}wicker text
〉 ${prefix}natural text
〉 ${prefix}firework text
〉 ${prefix}skeleton text
〉 ${prefix}balloon text
〉 ${prefix}balloon2 text
〉 ${prefix}balloon3 text
〉 ${prefix}balloon4 text
〉 ${prefix}balloon5 text
〉 ${prefix}balloon6 text
〉 ${prefix}balloon7 text
〉 ${prefix}steel text
〉 ${prefix}gloss text
〉 ${prefix}denim text
〉 ${prefix}decorate text
〉 ${prefix}decorate2 text
〉 ${prefix}peridot text
〉 ${prefix}rock text
〉 ${prefix}glass text
〉 ${prefix}glass2 text
〉 ${prefix}glass3 text
〉 ${prefix}glass4 text
〉 ${prefix}glass5 text
〉 ${prefix}glass6 text
〉 ${prefix}glass7 text
〉 ${prefix}glass8 text
〉 ${prefix}captain_as2 text
〉 ${prefix}robot text
〉 ${prefix}equalizer text
〉 ${prefix}toxic text
〉 ${prefix}sparkling text
〉 ${prefix}sparkling2 text
〉 ${prefix}sparkling3 text
〉 ${prefix}sparkling4 text
〉 ${prefix}sparkling5 text
〉 ${prefix}sparkling6 text
〉 ${prefix}sparkling7 text
〉 ${prefix}decorative text
〉 ${prefix}chocolate text
〉 ${prefix}strawberry text
〉 ${prefix}koifish text
〉 ${prefix}bread text
〉 ${prefix}matrix text
〉 ${prefix}blood2 text
〉 ${prefix}neonligth2 text
〉 ${prefix}thunder2 text
〉 ${prefix}3dbox text
〉 ${prefix}neon2 text
〉 ${prefix}roadw text
〉 ${prefix}bokeh text
〉 ${prefix}gneon text
〉 ${prefix}advanced text
〉 ${prefix}dropwater text
〉 ${prefix}wall text
〉 ${prefix}chrismast text
〉 ${prefix}honey text
〉 ${prefix}drug text
〉 ${prefix}marble text
〉 ${prefix}marble2 text
〉 ${prefix}ice text
〉 ${prefix}juice text
〉 ${prefix}rusty text
〉 ${prefix}abstra text
〉 ${prefix}biscuit text
〉 ${prefix}wood text
〉 ${prefix}scifi text
〉 ${prefix}metalr text
〉 ${prefix}purpleg text
〉 ${prefix}shiny text 
〉 ${prefix}jewelry text
〉 ${prefix}jewelry2 text
〉 ${prefix}jewelry3 text
〉 ${prefix}jewelry4 text
〉 ${prefix}jewelry5 text
〉 ${prefix}jewelry6 text
〉 ${prefix}jewelry7 text
〉 ${prefix}jewelry8 text
〉 ${prefix}metalh text
〉 ${prefix}golden text
〉 ${prefix}glitter text
〉 ${prefix}glitter2 text
〉 ${prefix}glitter3 text
〉 ${prefix}glitter4 text
〉 ${prefix}glitter5 text
〉 ${prefix}glitter6 text
〉 ${prefix}glitter7 text
〉 ${prefix}metale text
〉 ${prefix}carbon text
〉 ${prefix}candy text
〉 ${prefix}metalb text
〉 ${prefix}gemb text
〉 ${prefix}3dchrome text
〉 ${prefix}metalb2 text
〉 ${prefix}metalg text
〉 ${prefix}metalg text


◪ 「 Others 」
〉 ${prefix}afk [reason]
〉 ${prefix}translate kode_bahasa text
〉 ${prefix}kalkulator [query]
〉 ${prefix}smeme [text]
〉 ${prefix}smeme2 [text|text]
〉 ${prefix}memegen [text|text]

◪ 「 Game Menu 」
〉 ${prefix}kuismath
〉 ${prefix}tebak [option]
〉 ${prefix}tekateki
〉 ${prefix}susunkata
〉 ${prefix}caklontong


◪ 「 Asupan Menu 」
〉 ${prefix}chika
〉 ${prefix}delvira
〉 ${prefix}ayu
〉 ${prefix}bunga
〉 ${prefix}aura
〉 ${prefix}nisa
〉 ${prefix}ziva
〉 ${prefix}yana
〉 ${prefix}viona
〉 ${prefix}syania
〉 ${prefix}riri
〉 ${prefix}syifa
〉 ${prefix}mama_gina
〉 ${prefix}alcakenya
〉 ${prefix}mangayutri
〉 ${prefix}rikagusriani
〉 ${prefix}asupan
〉 ${prefix}bocil
〉 ${prefix}geayubi
〉 ${prefix}santuy
〉 ${prefix}ukhty
〉 ${prefix}syifa

◪ 「 Telegram Sticker 」
〉 ${prefix}awoawo
〉 ${prefix}benedict
〉 ${prefix}chat
〉 ${prefix}dbfly
〉 ${prefix}dino_kuning
〉 ${prefix}doge
〉 ${prefix}gojosatoru
〉 ${prefix}hope_boy
〉 ${prefix}jisoo
〉 ${prefix}kr_robot
〉 ${prefix}kucing
〉 ${prefix}lonte
〉 ${prefix}manusia_lidi
〉 ${prefix}menjamet
〉 ${prefix}meow
〉 ${prefix}nicholas
〉 ${prefix}patrick
〉 ${prefix}popoci
〉 ${prefix}sponsbob
〉 ${prefix}kawan_sponsbob
〉 ${prefix}tyni
,
◪ 「 Random Cewe 」
〉 ${prefix}china 
〉 ${prefix}indonesia 
〉 ${prefix}malaysia 
〉 ${prefix}thailand 
〉 ${prefix}korea 
〉 ${prefix}japan 
〉 ${prefix}vietnam 
〉 ${prefix}jenni 
〉 ${prefix}jiso 
〉 ${prefix}lisa  
〉 ${prefix}rose

◪ 「 TqTo 」 
〉 My God
〉 My Parents
〉 Fatih A.
〉 Ferdi
〉 DikaArdnt
〉 Mhankbarbar
〉 Nurutomo
〉 LionSuzune
〉 Rashid
〉 ZeeoneOfc
〉 Penyedia Module
〉 And All Support
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Dont spam bots . 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Dont call bot . ☎️
Sanksi: *❎ SOFT BLOCK*

3. Dont be too rude to Zuikaku bot .😖
Sanksi: *PERMANENT BLOCK*
────────────────
if the symbol 🗣 this is what you said!
if the symbol 👑 this is the owner who spoke!
─────────────────
🗣 Bot not or slow to respond  ?
👑 Maybe it's affected by Bad Signal or Off Bot, and maybe the bot fix ‼️

🗣 Where can I get the script from this bot  ?
👑 This script is still private and has never been traded, be wise in knowing fraudsters 

🗣 Can I add Zuikaku to the group? 
👑 its okay but you have to ask permission first from the owner of Zuikaku 🥴

🗣 Whats the prefix? 
👑 This bot uses a free prefix but it has to be all symbols 

🗣 Sis, how come the chat owner is not responding? 
👑 Owner Only responds to your question or wants to save the owner contact. if you save the contact, you cant ppp, you have to say hello to the owner if you don't answer it may be off or better Zuikaku bot 


If you understand my rules, please type #menu to see Zuikaku Features 

⚠️ All policies and conditions of ${botname} are held by the owner and all policy changes, at any time the owner has the right to revoke, block users (*﹏*) 

Thank you for Supporting ${ownername}, and Zuikaku, and all of you for Supporting ${ownername} 
😖🙏
`
}
exports.welcome = () =>{
	return`Dont forget to introduce if youre a new member 😳
	
〉Name :
〉Age 
〉ascot :
〉gender :
〉Your country :
◪ Thank you. Filled in`
}
exports.leave = () =>{
	return`Well, how come youre 
running away or do you know metal >_<
`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

sc? Chat with Beloved Owner  wa.me/62887433094409
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hi, thank you for supporting Zuikaku or my donation.
If you want anything, say it to the owner of Zuikaku 

Byeee!!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`
◪ 「 Bot Info 」 
〉 ${prefix}owner
〉 ${prefix}rules
〉 ${prefix}sc
〉 ${prefix}ping
〉 ${prefix}runtime
〉 ${prefix}botstatus
〉 ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`
◪ 「 Owner 」 
〉 < evaluate
〉 > evaluate
〉 $ exec
〉 => exec
〉 ${prefix}setmenu [query]
〉 ${prefix}setmenu templateLocation
〉 ${prefix}setmenu templateTenor
〉 ${prefix}setmenu katalog
〉 ${prefix}setmenu katalog2
〉 ${prefix}setmenu list
〉 ${prefix}setwm packname|author
〉 ${prefix}sendsesi
〉 ${prefix}listpc
〉 ${prefix}listgc
〉 ${prefix}broadcast [text]
〉 ${prefix}bc [text]
〉 ${prefix}bcgc [text]
〉 ${prefix}nsfw [on/off]
〉 ${prefix}autorespond [on/off]
〉 ${prefix}antiviewonce [on/off]
〉 ${prefix}join [link]
〉 ${prefix}self
〉 ${prefix}public [only bot]
〉 ${prefix}del [pesan bot]
〉 ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`
◪ 「 Database 」 
〉 ${prefix}setcmd [reply stiker]
〉 ${prefix}delcmd [reply stiker]
〉 ${prefix}listcmd
〉 ${prefix}absen
〉 ${prefix}cekabsen
〉 ${prefix}deleteabsen
〉 ${prefix}absenstart
〉 ${prefix}addmsg [nama file]
〉 ${prefix}getmsg [nama file]
〉 ${prefix}listmsg
〉 ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`
◪ 「 Group 」 
〉 ${prefix}listonline
〉 ${prefix}sider
〉 ${prefix}wm packname|author
〉 ${prefix}infochat
〉 ${prefix}setdesk [text]
〉 ${prefix}setppgrup [reply image]
〉 ${prefix}antilink [on/off]
〉 ${prefix}revoke
〉 ${prefix}leave
〉 ${prefix}add [62***]
〉 ${prefix}kick @tag
〉 ${prefix}leave
〉 ${prefix}linkgc
〉 ${prefix}take packname|author
〉 ${prefix}group [open/close]
〉 ${prefix}tagall [text]
〉 ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`
◪ 「 Anime 」 
〉 ${prefix}quotesanime
〉 ${prefix}anime [query]
〉 ${prefix}manga [query]
〉${prefix}couple
〉${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`
◪ 「 Tag 」 
〉 ${prefix}stickertag
〉 ${prefix}videotag [query]
〉 ${prefix}vntag [query]
〉 ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`
◪ 「 Stalking 」 
〉 ${prefix}igstalk [username]
〉 ${prefix}ghstalk [username]
〉 ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`
◪ 「 Search 」 
〉 ${prefix}ytsearch [query]
〉 ${prefix}wallpaper [query]
〉 ${prefix}wikimedia [query]
〉 ${prefix}hentai
〉 ${prefix}wattpad [query]
〉 ${prefix}webtoons [query]
〉 ${prefix}drakor [query]
〉 ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`
◪ 「 Converter 」 
〉 ${prefix}toaudio [video]
〉 ${prefix}tomp3 [video]
〉 ${prefix}tovn [video]
〉 ${prefix}stiker [reply image]
〉 ${prefix}tourl [image/video]
〉 ${prefix}togif [sticker]
〉 ${prefix}tomp4 [sticker]
〉${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`
◪ 「 Image Effect 」 
〉 ${prefix}wanted [reply image/stiker]
〉 ${prefix}utatoo [reply image/stiker]
〉 ${prefix}unsharpen [reply image/stiker]
〉 ${prefix}thanos [reply image/stiker]
〉 ${prefix}sniper [reply image/stiker]
〉 ${prefix}sharpen [reply image/stiker]
〉 ${prefix}sepia [reply image/stiker]
〉 ${prefix}scary [reply image/stiker]
〉 ${prefix}rip [reply image/stiker]
〉 ${prefix}redple [reply image/stiker]
〉 ${prefix}rejected [reply image/stiker]
〉 ${prefix}posterize [reply image/stiker]
〉 ${prefix}ps4 [reply image/stiker]
〉 ${prefix}pixelize [reply image/stiker]
〉 ${prefix}missionpassed [reply image/stiker]
〉 ${prefix}moustache [reply image/stiker]
〉 ${prefix}lookwhatkarenhave [reply image/stiker]
〉 ${prefix}jail [reply image/stiker]
〉 ${prefix}invert [reply image/stiker]
〉 ${prefix}instagram [reply image/stiker]
〉 ${prefix}greyscale [reply image/stiker]
〉 ${prefix}glitch [reply image/stiker]
〉 ${prefix}gay [reply image/stiker]
〉 ${prefix}frame [reply image/stiker]
〉 ${prefix}fire [reply image/stiker]
〉 ${prefix}distort [reply image/stiker]
〉 ${prefix}dictator [reply image/stiker]
〉 ${prefix}deepfry [reply image/stiker]
〉 ${prefix}ddungeon [reply image/stiker]
〉 ${prefix}circle [reply image/stiker]
〉 ${prefix}challenger [reply image/stiker]
〉 ${prefix}burn [reply image/stiker]
〉 ${prefix}brazzers [reply image/stiker]
〉 ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`
◪ 「 Sticker Effect 」 
〉 ${prefix}jail [reply image/stiker]
〉 ${prefix}red [reply image/stiker]
〉 ${prefix}gay [reply image/stiker]
〉 ${prefix}bloo [reply image/stiker]
〉 ${prefix}blue [reply image/stiker]
〉 ${prefix}sepia [reply image/stiker]
〉 ${prefix}green [reply image/stiker]
〉 ${prefix}glass [reply image/stiker]
〉 ${prefix}invert [reply image/stiker]
〉 ${prefix}blurple [reply image/stiker]
〉 ${prefix}blurple2 [reply image/stiker]
〉 ${prefix}wasted [reply image/stiker]
〉 ${prefix}passed [reply image/stiker]
〉 ${prefix}triggered [reply image/stiker]
〉 ${prefix}comrade [reply image/stiker]
〉 ${prefix}greyscale [reply image/stiker]
〉 ${prefix}threshold [reply image/stiker]
〉 ${prefix}brightness [reply image/stiker]
〉 ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`
◪ 「 Download 」 
〉 ${prefix}tiktok [link]
〉 ${prefix}tiktoknowm [link]
〉 ${prefix}tiktokwm [link]
〉 ${prefix}tiktokaudio [link]
〉 ${prefix}ytdl [link]
〉 ${prefix}play [query]
〉 ${prefix}ytmp3 [link]
〉 ${prefix}ytshortmp3 [link]
〉 ${prefix}ytmp4 [link]
〉 ${prefix}ytshorts [link]
〉 ${prefix}facebook [link]
〉 ${prefix}facebooksd [link]
〉 ${prefix}facebookhd [link]
〉 ${prefix}fbaudio [link]
〉 ${prefix}igstory [username]
〉 ${prefix}igdl [link]
〉 ${prefix}igphoto [link]
〉 ${prefix}igvideo [link]
〉 ${prefix}igreels [link]
〉 ${prefix}igtv [link]
〉 ${prefix}soundcloud [link]
〉 ${prefix}gitclone [link repo]
〉 ${prefix}gitrepo [username repo branch]
〉 ${prefix}mediafire [link]
〉 ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`
◪ 「 Random Anime 」
〉 ${prefix}loli
〉 ${prefix}neko
〉 ${prefix}waifu
〉 ${prefix}shinobu
〉 ${prefix}megumin
〉 ${prefix}bully
〉 ${prefix}cuddle
〉 ${prefix}cry
〉 ${prefix}hug
〉 ${prefix}awoo
〉 ${prefix}kiss
〉 ${prefix}lick
〉 ${prefix}pat
〉 ${prefix}smug
〉 ${prefix}bonk
〉 ${prefix}yeet
〉 ${prefix}blush
〉 ${prefix}smile
〉 ${prefix}wave
〉 ${prefix}highfive
〉 ${prefix}handhold
〉 ${prefix}nom
〉 ${prefix}bite
〉 ${prefix}glomp
〉 ${prefix}slap
〉 ${prefix}kill
〉 ${prefix}happy
〉 ${prefix}wink
〉 ${prefix}poke
〉 ${prefix}dance
〉 ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`
◪ 「 Nsfw & Sfw 」
〉 ${prefix}ahegao
〉 ${prefix}ass
〉 ${prefix}bdsm
〉 ${prefix}blowjob
〉 ${prefix}cuckold
〉 ${prefix}cum
〉 ${prefix}ero
〉 ${prefix}femdom
〉 ${prefix}foot
〉 ${prefix}gangbang
〉 ${prefix}glasses
〉 ${prefix}jahy
〉 ${prefix}manga
〉 ${prefix}masturbation
〉 ${prefix}neko
〉 ${prefix}orgy
〉 ${prefix}panties
〉 ${prefix}pussy
〉 ${prefix}tentacles
〉 ${prefix}thighs
〉 ${prefix}yuri
〉 ${prefix}feet
〉 ${prefix}lewdkemo
〉 ${prefix}woof
〉 ${prefix}gasm
〉 ${prefix}solo
〉 ${prefix}8ball
〉 ${prefix}goose
〉 ${prefix}avatar
〉 ${prefix}hololewd
〉 ${prefix}gecg
〉 ${prefix}holo
〉 ${prefix}fox_girl
〉 ${prefix}tits
〉 ${prefix}eroyuri
〉 ${prefix}holoyero
〉 ${prefix}lizard
〉 ${prefix}keta
〉 ${prefix}eron
〉 ${prefix}erok
〉 ${prefix}kemonomimi
〉 ${prefix}cum_jpg
〉 ${prefix}nsfw_avatar
〉 ${prefix}erofeet
〉 ${prefix}meow
〉 ${prefix}wallpaper
〉 ${prefix}waifu
〉 ${prefix}trap
〉 ${prefix}lewd
〉 ${prefix}pussy_jpg
〉 ${prefix}futanari
〉 ${prefix}lewdk
〉 ${prefix}solog
〉 ${prefix}smug
〉 ${prefix}cum
〉 ${prefix}slap
〉 ${prefix}les
〉 ${prefix}erokemo
〉 ${prefix}bj
〉 ${prefix}pwankg
〉 ${prefix}pat
〉 ${prefix}poke
〉 ${prefix}feed
〉 ${prefix}nsfw_neko_gif
〉 ${prefix}pussy
〉 ${prefix}feetg
〉 ${prefix}baka
〉 ${prefix}hug
〉 ${prefix}kiss
〉 ${prefix}tickle
〉 ${prefix}spank
〉 ${prefix}kuni
〉 ${prefix}classic
〉 ${prefix}boobs
〉 ${prefix}anal
〉 ${prefix}ngif
〉 ${prefix}cuddle
〉 ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`
◪ 「 Textpro Menu 」
〉 ${prefix}halloween2 text|text2
〉 ${prefix}horror text|text2
〉 ${prefix}game8bit text|text2
〉 ${prefix}layered text|text2
〉 ${prefix}glitch2 text|text2
〉 ${prefix}coolg text|text2
〉 ${prefix}coolwg text|text2
〉 ${prefix}realistic text|text2
〉 ${prefix}space3d text|text2
〉 ${prefix}gtiktok text|text2
〉 ${prefix}stone text|text2
〉 ${prefix}marvel text|text2
〉 ${prefix}marvel2 text|text2
〉 ${prefix}pornhub text|text2
〉 ${prefix}avengers text|text2
〉 ${prefix}metalr text|text2
〉 ${prefix}metalg text|text2
〉 ${prefix}metalg2 text|text2
〉 ${prefix}halloween2 text|text2
〉 ${prefix}lion text|text2
〉 ${prefix}wolf_bw text|text2
〉 ${prefix}wolf_g text|text2
〉 ${prefix}ninja text|text2
〉 ${prefix}3dsteel text|text2
〉 ${prefix}horror2 text|text2
〉 ${prefix}lava text|text2
〉 ${prefix}bagel text|text2
〉 ${prefix}blackpink text
〉 ${prefix}rainbow2 text
〉 ${prefix}water_pipe text
〉 ${prefix}halloween text
〉 ${prefix}sketch text
〉 ${prefix}sircuit text
〉 ${prefix}discovery text
〉 ${prefix}metallic2 text
〉 ${prefix}fiction text
〉 ${prefix}demon text
〉 ${prefix}transformer text
〉 ${prefix}berry text
〉 ${prefix}thunder text
〉 ${prefix}magma text
〉 ${prefix}3dstone text
〉 ${prefix}neon text
〉 ${prefix}glitch text
〉 ${prefix}harry_potter text
〉 ${prefix}embossed text
〉 ${prefix}broken text
〉 ${prefix}papercut text
〉 ${prefix}gradient text
〉 ${prefix}glossy text
〉 ${prefix}watercolor text
〉 ${prefix}multicolor text
〉 ${prefix}neon_devil text
〉 ${prefix}underwater text
〉 ${prefix}bear text
〉 ${prefix}wonderfulg text
〉 ${prefix}christmas text
〉 ${prefix}neon_light text
〉 ${prefix}snow text
〉 ${prefix}cloudsky text
〉 ${prefix}luxury2 text
〉 ${prefix}gradient2 text
〉 ${prefix}summer text
〉 ${prefix}writing text
〉 ${prefix}engraved text
〉 ${prefix}summery text
〉 ${prefix}3dglue text
〉 ${prefix}metaldark text
〉 ${prefix}neonlight text
〉 ${prefix}oscar text
〉 ${prefix}minion text
〉 ${prefix}holographic text
〉 ${prefix}purple text
〉 ${prefix}glossyb text
〉 ${prefix}deluxe2 text
〉 ${prefix}glossyc text
〉 ${prefix}fabric text
〉 ${prefix}neonc text
〉 ${prefix}newyear text
〉 ${prefix}newyear2 text
〉 ${prefix}metals text
〉 ${prefix}xmas text
〉 ${prefix}blood text
〉 ${prefix}darkg text
〉 ${prefix}joker text
〉 ${prefix}wicker text
〉 ${prefix}natural text
〉 ${prefix}firework text
〉 ${prefix}skeleton text
〉 ${prefix}balloon text
〉 ${prefix}balloon2 text
〉 ${prefix}balloon3 text
〉 ${prefix}balloon4 text
〉 ${prefix}balloon5 text
〉 ${prefix}balloon6 text
〉 ${prefix}balloon7 text
〉 ${prefix}steel text
〉 ${prefix}gloss text
〉 ${prefix}denim text
〉 ${prefix}decorate text
〉 ${prefix}decorate2 text
〉 ${prefix}peridot text
〉 ${prefix}rock text
〉 ${prefix}glass text
〉 ${prefix}glass2 text
〉 ${prefix}glass3 text
〉 ${prefix}glass4 text
〉 ${prefix}glass5 text
〉 ${prefix}glass6 text
〉 ${prefix}glass7 text
〉 ${prefix}glass8 text
〉 ${prefix}captain_as2 text
〉 ${prefix}robot text
〉 ${prefix}equalizer text
〉 ${prefix}toxic text
〉 ${prefix}sparkling text
〉 ${prefix}sparkling2 text
〉 ${prefix}sparkling3 text
〉 ${prefix}sparkling4 text
〉 ${prefix}sparkling5 text
〉 ${prefix}sparkling6 text
〉 ${prefix}sparkling7 text
〉 ${prefix}decorative text
〉 ${prefix}chocolate text
〉 ${prefix}strawberry text
〉 ${prefix}koifish text
〉 ${prefix}bread text
〉 ${prefix}matrix text
〉 ${prefix}blood2 text
〉 ${prefix}neonligth2 text
〉 ${prefix}thunder2 text
〉 ${prefix}3dbox text
〉 ${prefix}neon2 text
〉 ${prefix}roadw text
〉 ${prefix}bokeh text
〉 ${prefix}gneon text
〉 ${prefix}advanced text
〉 ${prefix}dropwater text
〉 ${prefix}wall text
〉 ${prefix}chrismast text
〉 ${prefix}honey text
〉 ${prefix}drug text
〉 ${prefix}marble text
〉 ${prefix}marble2 text
〉 ${prefix}ice text
〉 ${prefix}juice text
〉 ${prefix}rusty text
〉 ${prefix}abstra text
〉 ${prefix}biscuit text
〉 ${prefix}wood text
〉 ${prefix}scifi text
〉 ${prefix}metalr text
〉 ${prefix}purpleg text
〉 ${prefix}shiny text 
〉 ${prefix}jewelry text
〉 ${prefix}jewelry2 text
〉 ${prefix}jewelry3 text
〉 ${prefix}jewelry4 text
〉 ${prefix}jewelry5 text
〉 ${prefix}jewelry6 text
〉 ${prefix}jewelry7 text
〉 ${prefix}jewelry8 text
〉 ${prefix}metalh text
〉 ${prefix}golden text
〉 ${prefix}glitter text
〉 ${prefix}glitter2 text
〉 ${prefix}glitter3 text
〉 ${prefix}glitter4 text
〉 ${prefix}glitter5 text
〉 ${prefix}glitter6 text
〉 ${prefix}glitter7 text
〉 ${prefix}metale text
〉 ${prefix}carbon text
〉 ${prefix}candy text
〉 ${prefix}metalb text
〉 ${prefix}gemb text
〉 ${prefix}3dchrome text
〉 ${prefix}metalb2 text
〉 ${prefix}metalg text
〉 ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`
◪ 「 Others 」
〉 ${prefix}ttp [text]
〉 ${prefix}attp [text]
〉 ${prefix}afk [reason]
〉 ${prefix}translate kode_bahasa text
〉 ${prefix}kalkulator [query]
〉 ${prefix}smeme [text]
〉 ${prefix}smeme2 [text|text]
〉 ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`
◪ 「 Game Menu 」
〉 ${prefix}kuismath
〉 ${prefix}tebak [option]
〉 ${prefix}tekateki
〉 ${prefix}susunkata
〉 ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`
◪ 「 Asupan Menu 」
〉 ${prefix}chika
〉 ${prefix}delvira
〉 ${prefix}ayu
〉 ${prefix}bunga
〉 ${prefix}aura
〉 ${prefix}nisa
〉 ${prefix}ziva
〉 ${prefix}yana
〉 ${prefix}viona
〉 ${prefix}syania
〉 ${prefix}riri
〉 ${prefix}syifa
〉 ${prefix}mama_gina
〉 ${prefix}alcakenya
〉 ${prefix}mangayutri
〉 ${prefix}rikagusriani
〉 ${prefix}asupan
〉 ${prefix}bocil
〉 ${prefix}geayubi
〉 ${prefix}santuy
〉 ${prefix}ukhty
〉 ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`
◪ 「 Random Cewe 」
〉 ${prefix}china 
〉 ${prefix}indonesia 
〉 ${prefix}malaysia 
〉 ${prefix}thailand 
〉 ${prefix}korea 
〉 ${prefix}japan 
〉 ${prefix}vietnam 
〉 ${prefix}jenni 
〉 ${prefix}jiso 
〉 ${prefix}lisa  
〉 ${prefix}rose
`
}

exports.tqto = () =>{
	return`
◪ 「 TqTo 」 
〉 My God
〉 My Parents
〉 Fatih A.
〉 Ferdi
〉 DikaArdnt
〉 Mhankbarbar
〉 Nurutomo
〉 Rashid
〉 LionSuzune
〉 ZeeoneOfc
〉 Penyedia Module
〉 And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`
◪ 「 Primbon 」
〉 ${prefix}nomorhoki 887435047326
〉 ${prefix}artimimpi [query]
〉 ${prefix}artinama [query]
〉 ${prefix}ramaljodoh
〉 ${prefix}ramaljodohbali
〉 ${prefix}suamiistri
〉 ${prefix}ramalcinta
〉 ${prefix}cocoknama
〉 ${prefix}pasangan
〉 ${prefix}jadiannikah
〉 ${prefix}sifatusaha
〉 ${prefix}rezeki
〉 ${prefix}pekerjaan
〉 ${prefix}nasib
〉 ${prefix}penyakit
〉 ${prefix}tarot
〉 ${prefix}fengshui
〉 ${prefix}haribaik
〉 ${prefix}harisangar
〉 ${prefix}harisial
〉 ${prefix}nagahari
〉 ${prefix}arahrezeki
〉 ${prefix}peruntungan
〉 ${prefix}weton
〉 ${prefix}karakter
〉 ${prefix}keberuntungan
〉 ${prefix}memancing
〉 ${prefix}masasubur
〉 ${prefix}zodiak 
〉 ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`
◪ 「 Telegram Sticker 」
〉 ${prefix}awoawo
〉 ${prefix}benedict
〉 ${prefix}chat
〉 ${prefix}dbfly
〉 ${prefix}dino_kuning
〉 ${prefix}doge
〉 ${prefix}gojosatoru
〉 ${prefix}hope_boy
〉 ${prefix}jisoo
〉 ${prefix}kr_robot
〉 ${prefix}kucing
〉 ${prefix}lonte
〉 ${prefix}manusia_lidi
〉 ${prefix}menjamet
〉 ${prefix}meow
〉 ${prefix}nicholas
〉 ${prefix}patrick
〉 ${prefix}popoci
〉 ${prefix}sponsbob
〉 ${prefix}kawan_sponsbob
〉 ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`
◪ 「 Ephoto360 Menu 」
〉 ${prefix}youtubegold text
〉 ${prefix}youtubesilver text
〉 ${prefix}facebookgold text
〉 ${prefix}facebooksilver text
〉 ${prefix}instagramgold text
〉 ${prefix}instagramsilver text
〉 ${prefix}twittergold text
〉 ${prefix}twittersilver text
〉 ${prefix}retrotext text
〉 ${prefix}halloweenbats text
〉 ${prefix}texthalloween text
〉 ${prefix}cardhalloween text
〉 ${prefix}birthdaycake text
〉 ${prefix}thundertext text
〉 ${prefix}icetext text
〉 ${prefix}milkcake text
〉 ${prefix}snowontext text
〉 ${prefix}metalstar text
〉 ${prefix}dragonfire text
〉 ${prefix}zombie3d text
〉 ${prefix}merrycard text
〉 ${prefix}generalexam text 
〉 ${prefix}viettel text
〉 ${prefix}embroider text
〉 ${prefix}graffititext text
〉 ${prefix}graffititext2 text
〉 ${prefix}graffititext3 text
〉 ${prefix}covergraffiti text
〉 ${prefix}moderngold text
〉 ${prefix}capercut text
〉 ${prefix}lovecard text
〉 ${prefix}heartflashlight text
〉 ${prefix}heartcup text
〉 ${prefix}sunglightshadow text
〉 ${prefix}graffiti3d text
〉 ${prefix}moderngoldsilver text
〉 ${prefix}moderngold2 text
〉 ${prefix}moderngold3 text
〉 ${prefix}fabrictext text
〉 ${prefix}masteryavatar text
〉 ${prefix}messagecoffee text
〉 ${prefix}announofwin text
〉 ${prefix}writeblood text
〉 ${prefix}horrorletter text
〉 ${prefix}writehorror text
〉 ${prefix}shirtclub text
〉 ${prefix}angelwing text
〉 ${prefix}christmasseason text
〉 ${prefix}projectyasuo text
〉 ${prefix}lovelycute text
〉 ${prefix}womansday text
〉 ${prefix}covergamepubg text
〉 ${prefix}nameonheart text
〉 ${prefix}funnyhalloween text
〉 ${prefix}lightningpubg text
〉 ${prefix}greetingcardvideo text 
〉 ${prefix}christmascard text 
〉 ${prefix}galaxybat text
〉 ${prefix}writegalaxy text
〉 ${prefix}starsnight text
〉 ${prefix}noeltext text
〉 ${prefix}textcakes text
〉 ${prefix}pubgbirthday text
〉 ${prefix}galaxywallpaper text
〉 ${prefix}pubgglicthvideo text 
〉 ${prefix}pubgmascotlogo text
〉 ${prefix}realembroidery text
〉 ${prefix}vintagetelevision text
〉 ${prefix}funnyanimations text
〉 ${prefix}glowingtext text
〉 ${prefix}textonglass text
〉 ${prefix}cartoonstyle text
〉 ${prefix}multicolor text
〉 ${prefix}watercolor2 text
〉 ${prefix}textsky text
〉 ${prefix}summerbeach text
〉 ${prefix}1917text text
〉 ${prefix}puppycute text
〉 ${prefix}rosebirthday text
〉 ${prefix}steellettering text|text2
〉 ${prefix}letterstext text|text2
〉 ${prefix}barcashirt text|text2
〉 ${prefix}premiercup text|text2
〉 ${prefix}stylepoligon text|text2
〉 ${prefix}lifebuoys text|text2
〉 ${prefix}juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`
◪ 「 Logo Menu 」
〉 ${prefix}coverbannerlol text|heroes
〉 ${prefix}pubglogomaker text|style
〉 ${prefix}colorfulpubg text|color
〉 ${prefix}astronotspace text|style
〉 ${prefix}wallpaperaov text|heroes
〉 ${prefix}maketeamlogo text|style
〉 ${prefix}circlemarcotteam text|logo
〉 ${prefix}wallpaperml text|heroes
〉 ${prefix}dragonballfb text|character
〉 ${prefix}bannerofaov text|character
〉 ${prefix}effect3donbeach text|background
〉 ${prefix}cutegirlgamer text|logo
〉 ${prefix}footballteam text|logo
〉 ${prefix}beautifulshimmering text|champion
〉 ${prefix}pubgcutelogo text|logo
〉 ${prefix}elegantrotation text|logo
〉 ${prefix}logogamingassasin text|logo
〉 ${prefix}introvideomaker text|logo
〉 ${prefix}gaminglogo4fvs text|logo
〉 ${prefix}blueneon text|logo
〉 ${prefix}metalmascot text|logo
〉 ${prefix}anonymous text|style
〉 ${prefix}lolpentakill text|style
〉 ${prefix}avatarleagueofking text|style
〉 ${prefix}avatarff text|character
〉 ${prefix}overwatchwallpaper text|character
〉 ${prefix}rovwallpaperhd text|hero
〉 ${prefix}rovwallpaper text|avatar
〉 ${prefix}beautifulgalaxylol text|style
〉 ${prefix}crossfirecover text|character
〉 ${prefix}lolwallpaper text|wallpaper
〉 ${prefix}coverdota2 text|heroes
〉 ${prefix}coverleagueofking text|character
〉 ${prefix}avatar3q360 text|avatar
〉 ${prefix}coverofwarface text|character
〉 ${prefix}newlolavatar text|avatar
〉 ${prefix}csgocover text|background
〉 ${prefix}coverloknew text|hero
〉 ${prefix}coverfblol text|letters
〉 ${prefix}overwatchcover text|hero
〉 ${prefix}crossfirestyle text|avatar
〉 ${prefix}avatarlolbyname text|style
〉 ${prefix}lolcoverbyname text|avatar
〉 ${prefix}cyberhunterfb text|character
〉 ${prefix}coverfreefirefb text|character
〉 ${prefix}gamingmascot text|style
〉 ${prefix}coveronepiecefb text|character
〉 ${prefix}bannerytcsgo text|banner
〉 ${prefix}fbgamepubgcover text|template
〉 ${prefix}banneroflol text|text2|banner
〉 ${prefix}bannerofaov2 text|text2|banner
〉 ${prefix}teamlogo text|text2|background
〉 ${prefix}companylogo2 text|text2|background
〉 ${prefix}companylogo text|text2|background
〉 ${prefix}gradientlogo text|text2|background
〉 ${prefix}pencilsketch text|text2|icon
〉 ${prefix}gunlogogaming text|text2|background
〉 ${prefix}banneroffreefire text|text2|background
〉 ${prefix}letterlogos text|text2|thumb
〉 ${prefix}bannerofoverwatch text|text2|background
〉 ${prefix}bannerofapex text|text2|background
〉 ${prefix}bannerofpubg text|text2|background
〉 ${prefix}mascotstyle text|text2|thumb
〉 ${prefix}logoaccording text|text2|thumb
〉 ${prefix}avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`
◪ 「 Islamic Menu 」
〉 ${prefix}asmaulhusna
〉 ${prefix}kisahnabi [nabi]
〉 ${prefix}jadwalshalat [daerah]
〉 ${prefix}randomquran
〉 ${prefix}randomquran2
〉 ${prefix}listsurah
〉 ${prefix}tafsirsurah [surah]
〉 ${prefix}alquranaudio [surah|ayat]
`
}

exports.soundmenu = (prefix) =>{
return`
◪ 「 Sound Menu 」
〉 ${prefix}sound1
〉 ${prefix}sound2
〉 ${prefix}sound3
〉 ${prefix}sound4
〉 ${prefix}sound5
〉 ${prefix}sound6
〉 ${prefix}sound7
〉 ${prefix}sound8
〉 ${prefix}sound9
〉 ${prefix}sound10
〉 ${prefix}sound11
〉 ${prefix}sound12
〉 ${prefix}sound13
〉 ${prefix}sound14
〉 ${prefix}sound15
〉 ${prefix}sound16
〉 ${prefix}sound17
〉 ${prefix}sound18 
〉 ${prefix}sound19
〉 ${prefix}sound20
〉 ${prefix}sound21
〉 ${prefix}sound22
〉 ${prefix}sound23
〉 ${prefix}sound24
〉 ${prefix}sound25
〉 ${prefix}sound26
〉 ${prefix}sound27
〉 ${prefix}sound28
〉 ${prefix}sound29
〉 ${prefix}sound30
〉 ${prefix}sound31
〉 ${prefix}sound32
〉 ${prefix}sound33
〉 ${prefix}sound34
〉 ${prefix}sound35
〉 ${prefix}sound36
〉 ${prefix}sound37
〉 ${prefix}sound38
〉 ${prefix}sound39
〉 ${prefix}sound40
〉 ${prefix}sound41
〉 ${prefix}sound42
〉 ${prefix}sound43
〉 ${prefix}sound44
〉 ${prefix}sound45
〉 ${prefix}sound46
〉 ${prefix}sound47
〉 ${prefix}sound48
〉 ${prefix}sound49
〉 ${prefix}sound50
〉 ${prefix}sound51
〉 ${prefix}sound52
〉 ${prefix}sound53
〉 ${prefix}sound54
〉 ${prefix}sound55
〉 ${prefix}sound56
〉 ${prefix}sound57
〉 ${prefix}sound58
〉 ${prefix}sound59
〉 ${prefix}sound60
〉 ${prefix}sound61
〉 ${prefix}sound62
〉 ${prefix}sound63
〉 ${prefix}sound64
〉 ${prefix}sound65
〉 ${prefix}sound66
〉 ${prefix}sound67
〉 ${prefix}sound68
〉 ${prefix}sound69
〉 ${prefix}sound70
`
}