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
    return `_Sorry, youre not my owner π₯Ί_`
}

exports.doneOwner = () => {
    return `_Yeey Is Done As Owner of Senseiπ_`
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
    return `*ββ γ HALL OF SHAME γ ββ*
    
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
	return`Hello ${pushname} π safe  ${salam} , 
i ${botname}, this bot is Whatsapp Multi-Device Beta. 
 And my owner's name is ${ownername} 
 This menu is really small or the features sometimes error or run out of apikey π₯²
 If you want to use it, go ahead but dont spam the features 
 Thank you for using the Zuikaku Command π
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*βTime Server : ${time}*
*π List-Menu ${botname}*
*π Ownername : ${ownername}*

βͺ γ Bot Info γ 
γ ${prefix}owner
γ ${prefix}rules
γ ${prefix}sc
γ ${prefix}ping
γ ${prefix}runtime
γ ${prefix}botstatus
γ ${prefix}donate


βͺ γ Owner γ 
γ < evaluate
γ > evaluate
γ $ exec
γ => exec
γ ${prefix}setmenu [query]
γ ${prefix}setmenu templateLocation
γ ${prefix}setmenu templateTenor
γ ${prefix}setmenu katalog
γ ${prefix}setmenu katalog2
γ ${prefix}setmenu list
γ ${prefix}setwm packname|author
γ ${prefix}sendsesi
γ ${prefix}listpc
γ ${prefix}listgc
γ ${prefix}broadcast [text]
γ ${prefix}bc [text]
γ ${prefix}bcgc [text]
γ ${prefix}nsfw [on/off]
γ ${prefix}autorespond [on/off]
γ ${prefix}antiviewonce [on/off]
γ ${prefix}join [link]
γ ${prefix}self
γ ${prefix}public [only bot]
γ ${prefix}del [reply pesan bot]
γ ${prefix}setppbot [reply image]


βͺ γ Database γ 
γ ${prefix}setcmd [reply stiker]
γ ${prefix}delcmd [reply stiker]
γ ${prefix}listcmd
γ ${prefix}absen
γ ${prefix}cekabsen
γ ${prefix}deleteabsen
γ ${prefix}absenstart
γ ${prefix}addmsg [nama file]
γ ${prefix}getmsg [nama file]
γ ${prefix}listmsg
γ ${prefix}delmsg [nama file]

βͺγ Store Menu γ
γ ${prefix}list
γ ${prefix}addlist [key|respond]
γ ${prefix}dellist [key]
γ ${prefix}update [key|respond]
γ ${prefix}store
γ ${prefix}kali
γ ${prefix}bagi
γ ${prefix}tambah
γ ${prefix}kurang
γ ${prefix}kalkulator
γ ${prefix}proses
γ ${prefix}done [surah|ayat]

βͺ γ Group γ 
γ ${prefix}listonline
γ ${prefix}sider
γ ${prefix}wm packname|author
γ ${prefix}infochat
γ ${prefix}setdesk [text]
γ ${prefix}setppgrup [reply image]
γ ${prefix}antilink [on/off]
γ ${prefix}revoke
γ ${prefix}leave
γ ${prefix}add [62***]
γ ${prefix}kick @tag
γ ${prefix}leave
γ ${prefix}linkgc
γ ${prefix}take packname|author
γ ${prefix}group [open/close]
γ ${prefix}tagall [text]
γ ${prefix}hidetag [text]

βͺ γ Anime γ 
γ ${prefix}quotesanime
γ ${prefix}anime [query]
γ ${prefix}manga [query]
γ ${prefix}character [query]

βͺ γ Tag γ 
γ ${prefix}stickertag
γ ${prefix}videotag [query]
γ ${prefix}vntag [query]
γ ${prefix}imagetag [query]

βͺ γ Stalking γ 
γ ${prefix}igstalk [username]
γ ${prefix}ghstalk [username]
γ ${prefix}ytstalk [channel]


βͺ γ Search γ 
γ ${prefix}ytsearch [query]
γ ${prefix}wallpaper [query]
γ ${prefix}wikimedia [query]
γ ${prefix}hentai
γ ${prefix}wattpad [query]
γ ${prefix}webtoons [query]
γ ${prefix}drakor [query]
γ ${prefix}pinterest [query]


βͺ γ Converter γ
γ ${prefix}toaudio [video]
γ ${prefix}tomp3 [video]
γ ${prefix}tovn [video]
γ ${prefix}stiker [reply image]
γ ${prefix}tourl [image/video/stiker]
γ ${prefix}togif [sticker]
γ ${prefix}tomp4 [sticker]
γ ${prefix}toimg [reply sticker]


βͺ γ Image Effect γ 
γ ${prefix}wanted [reply image/stiker]
γ ${prefix}utatoo [reply image/stiker]
γ ${prefix}unsharpen [reply image/stiker]
γ ${prefix}thanos [reply image/stiker]
γ ${prefix}sniper [reply image/stiker]
γ ${prefix}sharpen [reply image/stiker]
γ ${prefix}sepia [reply image/stiker]
γ ${prefix}scary [reply image/stiker]
γ ${prefix}rip [reply image/stiker]
γ ${prefix}redple [reply image/stiker]
γ ${prefix}rejected [reply image/stiker]
γ ${prefix}posterize [reply image/stiker]
γ ${prefix}ps4 [reply image/stiker]
γ ${prefix}pixelize [reply image/stiker]
γ ${prefix}missionpassed [reply image/stiker]
γ ${prefix}moustache [reply image/stiker]
γ ${prefix}lookwhatkarenhave [reply image/stiker]
γ ${prefix}jail [reply image/stiker]
γ ${prefix}invert [reply image/stiker]
γ ${prefix}instagram [reply image/stiker]
γ ${prefix}greyscale [reply image/stiker]
γ ${prefix}glitch [reply image/stiker]
γ ${prefix}gay [reply image/stiker]
γ ${prefix}frame [reply image/stiker]
γ ${prefix}fire [reply image/stiker]
γ ${prefix}distort [reply image/stiker]
γ ${prefix}dictator [reply image/stiker]
γ ${prefix}deepfry [reply image/stiker]
γ ${prefix}ddungeon [reply image/stiker]
γ ${prefix}circle [reply image/stiker]
γ ${prefix}challenger [reply image/stiker]
γ ${prefix}burn [reply image/stiker]
γ ${prefix}brazzers [reply image/stiker]
γ ${prefix}beautiful [reply image/stiker]


βͺ γ Sticker Effect γ 
γ ${prefix}jail [reply image/stiker]
γ ${prefix}red [reply image/stiker]
γ ${prefix}gay [reply image/stiker]
γ ${prefix}bloo [reply image/stiker]
γ ${prefix}blue [reply image/stiker]
γ ${prefix}sepia [reply image/stiker]
γ ${prefix}green [reply image/stiker]
γ ${prefix}glass [reply image/stiker]
γ ${prefix}invert [reply image/stiker]
γ ${prefix}blurple [reply image/stiker]
γ ${prefix}blurple2 [reply image/stiker]
γ ${prefix}wasted [reply image/stiker]
γ ${prefix}passed [reply image/stiker]
γ ${prefix}triggered [reply image/stiker]
γ ${prefix}comrade [reply image/stiker]
γ ${prefix}greyscale [reply image/stiker]
γ ${prefix}threshold [reply image/stiker]
γ ${prefix}brightness [reply image/stiker]
γ ${prefix}invertgreyscale [reply image/stiker]


βͺ γ Download γ 
γ ${prefix}tiktok [link]
γ ${prefix}tiktoknowm [link]
γ ${prefix}tiktokwm [link]
γ ${prefix}tiktokaudio [link]
γ ${prefix}ytdl [link]
γ ${prefix}play [query]
γ ${prefix}ytmp3 [link]
γ ${prefix}ytshortmp3 [link]
γ ${prefix}ytmp4 [link]
γ ${prefix}ytshorts [link]
γ ${prefix}facebook [link]
γ ${prefix}facebooksd [link]
γ ${prefix}facebookhd [link]
γ ${prefix}fbaudio [link]
γ ${prefix}igstory [username]
γ ${prefix}igdl [link]
γ ${prefix}igphoto [link]
γ ${prefix}igvideo [link]
γ ${prefix}igreels [link]
γ ${prefix}igtv [link]
γ ${prefix}soundcloud [link]
γ ${prefix}gitclone [link repo]
γ ${prefix}gitrepo [username repo branch]
γ ${prefix}mediafire [link]
γ ${prefix}twitter link

βͺ γ Primbon γ
γ ${prefix}nomorhoki 887435047326
γ ${prefix}artimimpi [query]
γ ${prefix}artinama [query]
γ ${prefix}ramaljodoh
γ ${prefix}ramaljodohbali
γ ${prefix}suamiistri
γ ${prefix}ramalcinta
γ ${prefix}cocoknama
γ ${prefix}pasangan
γ ${prefix}jadiannikah
γ ${prefix}sifatusaha
γ ${prefix}rezeki
γ ${prefix}pekerjaan
γ ${prefix}nasib
γ ${prefix}penyakit
γ ${prefix}tarot
γ ${prefix}fengshui
γ ${prefix}haribaik
γ ${prefix}harisangar
γ ${prefix}harisial
γ ${prefix}nagahari
γ ${prefix}arahrezeki
γ ${prefix}peruntungan
γ ${prefix}weton
γ ${prefix}karakter
γ ${prefix}keberuntungan
γ ${prefix}memancing
γ ${prefix}masasubur
γ ${prefix}zodiak 
γ ${prefix}shio [query]

βͺ γ Random Anime γ
γ ${prefix}loli
γ ${prefix}neko
γ ${prefix}waifu
γ ${prefix}shinobu
γ ${prefix}megumin
γ ${prefix}bully
γ ${prefix}cuddle
γ ${prefix}cry
γ ${prefix}hug
γ ${prefix}awoo
γ ${prefix}kiss
γ ${prefix}lick
γ ${prefix}pat
γ ${prefix}smug
γ ${prefix}bonk
γ ${prefix}yeet
γ ${prefix}blush
γ ${prefix}smile
γ ${prefix}wave
γ ${prefix}highfive
γ ${prefix}handhold
γ ${prefix}nom
γ ${prefix}bite
γ ${prefix}glomp
γ ${prefix}slap
γ ${prefix}kill
γ ${prefix}happy
γ ${prefix}wink
γ ${prefix}poke
γ ${prefix}dance
γ ${prefix}cringe

βͺ γ Nsfw & Sfw γ
γ ${prefix}ahegao
γ ${prefix}ass
γ ${prefix}bdsm
γ ${prefix}blowjob
γ ${prefix}cuckold
γ ${prefix}cum
γ ${prefix}ero
γ ${prefix}femdom
γ ${prefix}foot
γ ${prefix}gangbang
γ ${prefix}glasses
γ ${prefix}jahy
γ ${prefix}manga
γ ${prefix}masturbation
γ ${prefix}neko
γ ${prefix}orgy
γ ${prefix}panties
γ ${prefix}pussy
γ ${prefix}tentacles
γ ${prefix}thighs
γ ${prefix}yuri
γ ${prefix}feet
γ ${prefix}lewdkemo
γ ${prefix}woof
γ ${prefix}gasm
γ ${prefix}solo
γ ${prefix}8ball
γ ${prefix}goose
γ ${prefix}avatar
γ ${prefix}hololewd
γ ${prefix}gecg
γ ${prefix}holo
γ ${prefix}fox_girl
γ ${prefix}tits
γ ${prefix}eroyuri
γ ${prefix}holoyero
γ ${prefix}lizard
γ ${prefix}keta
γ ${prefix}eron
γ ${prefix}erok
γ ${prefix}kemonomimi
γ ${prefix}cum_jpg
γ ${prefix}nsfw_avatar
γ ${prefix}erofeet
γ ${prefix}meow
γ ${prefix}wallpaper
γ ${prefix}waifu
γ ${prefix}trap
γ ${prefix}lewd
γ ${prefix}pussy_jpg
γ ${prefix}futanari
γ ${prefix}lewdk
γ ${prefix}solog
γ ${prefix}smug
γ ${prefix}cum
γ ${prefix}slap
γ ${prefix}les
γ ${prefix}erokemo
γ ${prefix}bj
γ ${prefix}pwankg
γ ${prefix}pat
γ ${prefix}poke
γ ${prefix}feed
γ ${prefix}nsfw_neko_gif
γ ${prefix}pussy
γ ${prefix}feetg
γ ${prefix}baka
γ ${prefix}hug
γ ${prefix}kiss
γ ${prefix}tickle
γ ${prefix}spank
γ ${prefix}kuni
γ ${prefix}classic
γ ${prefix}boobs
γ ${prefix}anal
γ ${prefix}ngif
γ ${prefix}cuddle
γ ${prefix}zettai

βͺ γ Ephoto360 Menu γ
γ ${prefix}youtubegold
γ ${prefix}youtubesilver
γ ${prefix}facebookgold
γ ${prefix}facebooksilver
γ ${prefix}instagramgold
γ ${prefix}instagramsilver
γ ${prefix}twittergold
γ ${prefix}twittersilver
γ ${prefix}retrotext
γ ${prefix}halloweenbats
γ ${prefix}texthalloween
γ ${prefix}cardhalloween
γ ${prefix}birthdaycake
γ ${prefix}thundertext
γ ${prefix}icetext
γ ${prefix}milkcake
γ ${prefix}snowontext
γ ${prefix}metalstar
γ ${prefix}dragonfire
γ ${prefix}zombie3d
γ ${prefix}merrycard
γ ${prefix}generalexam 
γ ${prefix}viettel
γ ${prefix}embroider
γ ${prefix}graffititext
γ ${prefix}graffititext2
γ ${prefix}graffititext3
γ ${prefix}covergraffiti
γ ${prefix}moderngold
γ ${prefix}capercut
γ ${prefix}lovecard
γ ${prefix}heartflashlight
γ ${prefix}heartcup
γ ${prefix}sunglightshadow
γ ${prefix}graffiti3d
γ ${prefix}moderngoldsilver
γ ${prefix}moderngold2
γ ${prefix}moderngold3
γ ${prefix}fabrictext
γ ${prefix}masteryavatar
γ ${prefix}messagecoffee
γ ${prefix}announofwin
γ ${prefix}writeblood
γ ${prefix}horrorletter
γ ${prefix}writehorror
γ ${prefix}shirtclub
γ ${prefix}angelwing
γ ${prefix}christmasseason
γ ${prefix}projectyasuo
γ ${prefix}lovelycute
γ ${prefix}womansday
γ ${prefix}covergamepubg
γ ${prefix}nameonheart
γ ${prefix}funnyhalloween
γ ${prefix}lightningpubg
γ ${prefix}greetingcardvideo 
γ ${prefix}christmascard 
γ ${prefix}galaxybat
γ ${prefix}writegalaxy
γ ${prefix}starsnight
γ ${prefix}noeltext
γ ${prefix}textcakes
γ ${prefix}pubgbirthday
γ ${prefix}galaxywallpaper
γ ${prefix}pubgglicthvideo 
γ ${prefix}pubgmascotlogo
γ ${prefix}realembroidery
γ ${prefix}vintagetelevision
γ ${prefix}funnyanimations
γ ${prefix}glowingtext
γ ${prefix}textonglass
γ ${prefix}cartoonstyle
γ ${prefix}multicolor
γ ${prefix}watercolor2
γ ${prefix}textsky
γ ${prefix}summerbeach
γ ${prefix}1917text
γ ${prefix}puppycute
γ ${prefix}rosebirthday


βͺ γ Textpro Menu γ
γ ${prefix}halloween2 text|text2
γ ${prefix}horror text|text2
γ ${prefix}game8bit text|text2
γ ${prefix}layered text|text2
γ ${prefix}glitch2 text|text2
γ ${prefix}coolg text|text2
γ ${prefix}coolwg text|text2
γ ${prefix}realistic text|text2
γ ${prefix}space3d text|text2
γ ${prefix}gtiktok text|text2
γ ${prefix}stone text|text2
γ ${prefix}marvel text|text2
γ ${prefix}marvel2 text|text2
γ ${prefix}pornhub text|text2
γ ${prefix}avengers text|text2
γ ${prefix}metalr text|text2
γ ${prefix}metalg text|text2
γ ${prefix}metalg2 text|text2
γ ${prefix}halloween2 text|text2
γ ${prefix}lion text|text2
γ ${prefix}wolf_bw text|text2
γ ${prefix}wolf_g text|text2
γ ${prefix}ninja text|text2
γ ${prefix}3dsteel text|text2
γ ${prefix}horror2 text|text2
γ ${prefix}lava text|text2
γ ${prefix}bagel text|text2
γ ${prefix}blackpink text
γ ${prefix}rainbow2 text
γ ${prefix}water_pipe text
γ ${prefix}halloween text
γ ${prefix}sketch text
γ ${prefix}sircuit text
γ ${prefix}discovery text
γ ${prefix}metallic2 text
γ ${prefix}fiction text
γ ${prefix}demon text
γ ${prefix}transformer text
γ ${prefix}berry text
γ ${prefix}thunder text
γ ${prefix}magma text
γ ${prefix}3dstone text
γ ${prefix}neon text
γ ${prefix}glitch text
γ ${prefix}harry_potter text
γ ${prefix}embossed text
γ ${prefix}broken text
γ ${prefix}papercut text
γ ${prefix}gradient text
γ ${prefix}glossy text
γ ${prefix}watercolor text
γ ${prefix}multicolor text
γ ${prefix}neon_devil text
γ ${prefix}underwater text
γ ${prefix}bear text
γ ${prefix}wonderfulg text
γ ${prefix}christmas text
γ ${prefix}neon_light text
γ ${prefix}snow text
γ ${prefix}cloudsky text
γ ${prefix}luxury2 text
γ ${prefix}gradient2 text
γ ${prefix}summer text
γ ${prefix}writing text
γ ${prefix}engraved text
γ ${prefix}summery text
γ ${prefix}3dglue text
γ ${prefix}metaldark text
γ ${prefix}neonlight text
γ ${prefix}oscar text
γ ${prefix}minion text
γ ${prefix}holographic text
γ ${prefix}purple text
γ ${prefix}glossyb text
γ ${prefix}deluxe2 text
γ ${prefix}glossyc text
γ ${prefix}fabric text
γ ${prefix}neonc text
γ ${prefix}newyear text
γ ${prefix}newyear2 text
γ ${prefix}metals text
γ ${prefix}xmas text
γ ${prefix}blood text
γ ${prefix}darkg text
γ ${prefix}joker text
γ ${prefix}wicker text
γ ${prefix}natural text
γ ${prefix}firework text
γ ${prefix}skeleton text
γ ${prefix}balloon text
γ ${prefix}balloon2 text
γ ${prefix}balloon3 text
γ ${prefix}balloon4 text
γ ${prefix}balloon5 text
γ ${prefix}balloon6 text
γ ${prefix}balloon7 text
γ ${prefix}steel text
γ ${prefix}gloss text
γ ${prefix}denim text
γ ${prefix}decorate text
γ ${prefix}decorate2 text
γ ${prefix}peridot text
γ ${prefix}rock text
γ ${prefix}glass text
γ ${prefix}glass2 text
γ ${prefix}glass3 text
γ ${prefix}glass4 text
γ ${prefix}glass5 text
γ ${prefix}glass6 text
γ ${prefix}glass7 text
γ ${prefix}glass8 text
γ ${prefix}captain_as2 text
γ ${prefix}robot text
γ ${prefix}equalizer text
γ ${prefix}toxic text
γ ${prefix}sparkling text
γ ${prefix}sparkling2 text
γ ${prefix}sparkling3 text
γ ${prefix}sparkling4 text
γ ${prefix}sparkling5 text
γ ${prefix}sparkling6 text
γ ${prefix}sparkling7 text
γ ${prefix}decorative text
γ ${prefix}chocolate text
γ ${prefix}strawberry text
γ ${prefix}koifish text
γ ${prefix}bread text
γ ${prefix}matrix text
γ ${prefix}blood2 text
γ ${prefix}neonligth2 text
γ ${prefix}thunder2 text
γ ${prefix}3dbox text
γ ${prefix}neon2 text
γ ${prefix}roadw text
γ ${prefix}bokeh text
γ ${prefix}gneon text
γ ${prefix}advanced text
γ ${prefix}dropwater text
γ ${prefix}wall text
γ ${prefix}chrismast text
γ ${prefix}honey text
γ ${prefix}drug text
γ ${prefix}marble text
γ ${prefix}marble2 text
γ ${prefix}ice text
γ ${prefix}juice text
γ ${prefix}rusty text
γ ${prefix}abstra text
γ ${prefix}biscuit text
γ ${prefix}wood text
γ ${prefix}scifi text
γ ${prefix}metalr text
γ ${prefix}purpleg text
γ ${prefix}shiny text 
γ ${prefix}jewelry text
γ ${prefix}jewelry2 text
γ ${prefix}jewelry3 text
γ ${prefix}jewelry4 text
γ ${prefix}jewelry5 text
γ ${prefix}jewelry6 text
γ ${prefix}jewelry7 text
γ ${prefix}jewelry8 text
γ ${prefix}metalh text
γ ${prefix}golden text
γ ${prefix}glitter text
γ ${prefix}glitter2 text
γ ${prefix}glitter3 text
γ ${prefix}glitter4 text
γ ${prefix}glitter5 text
γ ${prefix}glitter6 text
γ ${prefix}glitter7 text
γ ${prefix}metale text
γ ${prefix}carbon text
γ ${prefix}candy text
γ ${prefix}metalb text
γ ${prefix}gemb text
γ ${prefix}3dchrome text
γ ${prefix}metalb2 text
γ ${prefix}metalg text
γ ${prefix}metalg text


βͺ γ Others γ
γ ${prefix}afk [reason]
γ ${prefix}translate kode_bahasa text
γ ${prefix}kalkulator [query]
γ ${prefix}smeme [text]
γ ${prefix}smeme2 [text|text]
γ ${prefix}memegen [text|text]

βͺ γ Game Menu γ
γ ${prefix}kuismath
γ ${prefix}tebak [option]
γ ${prefix}tekateki
γ ${prefix}susunkata
γ ${prefix}caklontong


βͺ γ Asupan Menu γ
γ ${prefix}chika
γ ${prefix}delvira
γ ${prefix}ayu
γ ${prefix}bunga
γ ${prefix}aura
γ ${prefix}nisa
γ ${prefix}ziva
γ ${prefix}yana
γ ${prefix}viona
γ ${prefix}syania
γ ${prefix}riri
γ ${prefix}syifa
γ ${prefix}mama_gina
γ ${prefix}alcakenya
γ ${prefix}mangayutri
γ ${prefix}rikagusriani
γ ${prefix}asupan
γ ${prefix}bocil
γ ${prefix}geayubi
γ ${prefix}santuy
γ ${prefix}ukhty
γ ${prefix}syifa

βͺ γ Telegram Sticker γ
γ ${prefix}awoawo
γ ${prefix}benedict
γ ${prefix}chat
γ ${prefix}dbfly
γ ${prefix}dino_kuning
γ ${prefix}doge
γ ${prefix}gojosatoru
γ ${prefix}hope_boy
γ ${prefix}jisoo
γ ${prefix}kr_robot
γ ${prefix}kucing
γ ${prefix}lonte
γ ${prefix}manusia_lidi
γ ${prefix}menjamet
γ ${prefix}meow
γ ${prefix}nicholas
γ ${prefix}patrick
γ ${prefix}popoci
γ ${prefix}sponsbob
γ ${prefix}kawan_sponsbob
γ ${prefix}tyni
,
βͺ γ Random Cewe γ
γ ${prefix}china 
γ ${prefix}indonesia 
γ ${prefix}malaysia 
γ ${prefix}thailand 
γ ${prefix}korea 
γ ${prefix}japan 
γ ${prefix}vietnam 
γ ${prefix}jenni 
γ ${prefix}jiso 
γ ${prefix}lisa  
γ ${prefix}rose

βͺ γ TqTo γ 
γ My God
γ My Parents
γ Fatih A.
γ Ferdi
γ DikaArdnt
γ Mhankbarbar
γ Nurutomo
γ LionSuzune
γ Rashid
γ ZeeoneOfc
γ Penyedia Module
γ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*ββ γ RULES AND FAQ γ ββ*

1. Dont spam bots . π
Sanksi: *β WARN/SOFT BLOCK*

2. Dont call bot . βοΈ
Sanksi: *β SOFT BLOCK*

3. Dont be too rude to Zuikaku bot .π
Sanksi: *PERMANENT BLOCK*
ββββββββββββββββ
if the symbol π£ this is what you said!
if the symbol π this is the owner who spoke!
βββββββββββββββββ
π£ Bot not or slow to respond  ?
π Maybe it's affected by Bad Signal or Off Bot, and maybe the bot fix βΌοΈ

π£ Where can I get the script from this bot  ?
π This script is still private and has never been traded, be wise in knowing fraudsters 

π£ Can I add Zuikaku to the group? 
π its okay but you have to ask permission first from the owner of Zuikaku π₯΄

π£ Whats the prefix? 
π This bot uses a free prefix but it has to be all symbols 

π£ Sis, how come the chat owner is not responding? 
π Owner Only responds to your question or wants to save the owner contact. if you save the contact, you cant ppp, you have to say hello to the owner if you don't answer it may be off or better Zuikaku bot 


If you understand my rules, please type #menu to see Zuikaku Features 

β οΈ All policies and conditions of ${botname} are held by the owner and all policy changes, at any time the owner has the right to revoke, block users (*οΉ*) 

Thank you for Supporting ${ownername}, and Zuikaku, and all of you for Supporting ${ownername} 
ππ
`
}
exports.welcome = () =>{
	return`Dont forget to introduce if youre a new member π³
	
γName :
γAge 
γascot :
γgender :
γYour country :
βͺ Thank you. Filled in`
}
exports.leave = () =>{
	return`Well, how come youre 
running away or do you know metal >_<
`
}
exports.source = () =>{
return`*------γ SOURCE CODE γ ------*

sc? https://github.com/LionSuzune/Zuikaku-MD
`
}
exports.tos = (ownernomer) => {
    return `
*-------γ DONATE γ -------*

Hi, thank you for supporting Zuikaku or my donation.
If you want anything, say it to the owner of Zuikaku 

Byeee!!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`
βͺ γ Bot Info γ 
γ ${prefix}owner
γ ${prefix}rules
γ ${prefix}sc
γ ${prefix}ping
γ ${prefix}runtime
γ ${prefix}botstatus
γ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`
βͺ γ Owner γ 
γ < evaluate
γ > evaluate
γ $ exec
γ => exec
γ ${prefix}setmenu [query]
γ ${prefix}setmenu templateLocation
γ ${prefix}setmenu templateTenor
γ ${prefix}setmenu katalog
γ ${prefix}setmenu katalog2
γ ${prefix}setmenu list
γ ${prefix}setwm packname|author
γ ${prefix}sendsesi
γ ${prefix}listpc
γ ${prefix}listgc
γ ${prefix}broadcast [text]
γ ${prefix}bc [text]
γ ${prefix}bcgc [text]
γ ${prefix}nsfw [on/off]
γ ${prefix}autorespond [on/off]
γ ${prefix}antiviewonce [on/off]
γ ${prefix}join [link]
γ ${prefix}self
γ ${prefix}public [only bot]
γ ${prefix}del [pesan bot]
γ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`
βͺ γ Database γ 
γ ${prefix}setcmd [reply stiker]
γ ${prefix}delcmd [reply stiker]
γ ${prefix}listcmd
γ ${prefix}absen
γ ${prefix}cekabsen
γ ${prefix}deleteabsen
γ ${prefix}absenstart
γ ${prefix}addmsg [nama file]
γ ${prefix}getmsg [nama file]
γ ${prefix}listmsg
γ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`
βͺ γ Group γ 
γ ${prefix}listonline
γ ${prefix}sider
γ ${prefix}wm packname|author
γ ${prefix}infochat
γ ${prefix}setdesk [text]
γ ${prefix}setppgrup [reply image]
γ ${prefix}antilink [on/off]
γ ${prefix}revoke
γ ${prefix}leave
γ ${prefix}add [62***]
γ ${prefix}kick @tag
γ ${prefix}leave
γ ${prefix}linkgc
γ ${prefix}take packname|author
γ ${prefix}group [open/close]
γ ${prefix}tagall [text]
γ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`
βͺ γ Anime γ 
γ ${prefix}quotesanime
γ ${prefix}anime [query]
γ ${prefix}manga [query]
γ${prefix}couple
γ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`
βͺ γ Tag γ 
γ ${prefix}stickertag
γ ${prefix}videotag [query]
γ ${prefix}vntag [query]
γ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`
βͺ γ Stalking γ 
γ ${prefix}igstalk [username]
γ ${prefix}ghstalk [username]
γ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`
βͺ γ Search γ 
γ ${prefix}ytsearch [query]
γ ${prefix}wallpaper [query]
γ ${prefix}wikimedia [query]
γ ${prefix}hentai
γ ${prefix}wattpad [query]
γ ${prefix}webtoons [query]
γ ${prefix}drakor [query]
γ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`
βͺ γ Converter γ 
γ ${prefix}toaudio [video]
γ ${prefix}tomp3 [video]
γ ${prefix}tovn [video]
γ ${prefix}stiker [reply image]
γ ${prefix}tourl [image/video]
γ ${prefix}togif [sticker]
γ ${prefix}tomp4 [sticker]
γ${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`
βͺ γ Image Effect γ 
γ ${prefix}wanted [reply image/stiker]
γ ${prefix}utatoo [reply image/stiker]
γ ${prefix}unsharpen [reply image/stiker]
γ ${prefix}thanos [reply image/stiker]
γ ${prefix}sniper [reply image/stiker]
γ ${prefix}sharpen [reply image/stiker]
γ ${prefix}sepia [reply image/stiker]
γ ${prefix}scary [reply image/stiker]
γ ${prefix}rip [reply image/stiker]
γ ${prefix}redple [reply image/stiker]
γ ${prefix}rejected [reply image/stiker]
γ ${prefix}posterize [reply image/stiker]
γ ${prefix}ps4 [reply image/stiker]
γ ${prefix}pixelize [reply image/stiker]
γ ${prefix}missionpassed [reply image/stiker]
γ ${prefix}moustache [reply image/stiker]
γ ${prefix}lookwhatkarenhave [reply image/stiker]
γ ${prefix}jail [reply image/stiker]
γ ${prefix}invert [reply image/stiker]
γ ${prefix}instagram [reply image/stiker]
γ ${prefix}greyscale [reply image/stiker]
γ ${prefix}glitch [reply image/stiker]
γ ${prefix}gay [reply image/stiker]
γ ${prefix}frame [reply image/stiker]
γ ${prefix}fire [reply image/stiker]
γ ${prefix}distort [reply image/stiker]
γ ${prefix}dictator [reply image/stiker]
γ ${prefix}deepfry [reply image/stiker]
γ ${prefix}ddungeon [reply image/stiker]
γ ${prefix}circle [reply image/stiker]
γ ${prefix}challenger [reply image/stiker]
γ ${prefix}burn [reply image/stiker]
γ ${prefix}brazzers [reply image/stiker]
γ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`
βͺ γ Sticker Effect γ 
γ ${prefix}jail [reply image/stiker]
γ ${prefix}red [reply image/stiker]
γ ${prefix}gay [reply image/stiker]
γ ${prefix}bloo [reply image/stiker]
γ ${prefix}blue [reply image/stiker]
γ ${prefix}sepia [reply image/stiker]
γ ${prefix}green [reply image/stiker]
γ ${prefix}glass [reply image/stiker]
γ ${prefix}invert [reply image/stiker]
γ ${prefix}blurple [reply image/stiker]
γ ${prefix}blurple2 [reply image/stiker]
γ ${prefix}wasted [reply image/stiker]
γ ${prefix}passed [reply image/stiker]
γ ${prefix}triggered [reply image/stiker]
γ ${prefix}comrade [reply image/stiker]
γ ${prefix}greyscale [reply image/stiker]
γ ${prefix}threshold [reply image/stiker]
γ ${prefix}brightness [reply image/stiker]
γ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`
βͺ γ Download γ 
γ ${prefix}tiktok [link]
γ ${prefix}tiktoknowm [link]
γ ${prefix}tiktokwm [link]
γ ${prefix}tiktokaudio [link]
γ ${prefix}ytdl [link]
γ ${prefix}play [query]
γ ${prefix}ytmp3 [link]
γ ${prefix}ytshortmp3 [link]
γ ${prefix}ytmp4 [link]
γ ${prefix}ytshorts [link]
γ ${prefix}facebook [link]
γ ${prefix}facebooksd [link]
γ ${prefix}facebookhd [link]
γ ${prefix}fbaudio [link]
γ ${prefix}igstory [username]
γ ${prefix}igdl [link]
γ ${prefix}igphoto [link]
γ ${prefix}igvideo [link]
γ ${prefix}igreels [link]
γ ${prefix}igtv [link]
γ ${prefix}soundcloud [link]
γ ${prefix}gitclone [link repo]
γ ${prefix}gitrepo [username repo branch]
γ ${prefix}mediafire [link]
γ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`
βͺ γ Random Anime γ
γ ${prefix}loli
γ ${prefix}neko
γ ${prefix}waifu
γ ${prefix}shinobu
γ ${prefix}megumin
γ ${prefix}bully
γ ${prefix}cuddle
γ ${prefix}cry
γ ${prefix}hug
γ ${prefix}awoo
γ ${prefix}kiss
γ ${prefix}lick
γ ${prefix}pat
γ ${prefix}smug
γ ${prefix}bonk
γ ${prefix}yeet
γ ${prefix}blush
γ ${prefix}smile
γ ${prefix}wave
γ ${prefix}highfive
γ ${prefix}handhold
γ ${prefix}nom
γ ${prefix}bite
γ ${prefix}glomp
γ ${prefix}slap
γ ${prefix}kill
γ ${prefix}happy
γ ${prefix}wink
γ ${prefix}poke
γ ${prefix}dance
γ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`
βͺ γ Nsfw & Sfw γ
γ ${prefix}ahegao
γ ${prefix}ass
γ ${prefix}bdsm
γ ${prefix}blowjob
γ ${prefix}cuckold
γ ${prefix}cum
γ ${prefix}ero
γ ${prefix}femdom
γ ${prefix}foot
γ ${prefix}gangbang
γ ${prefix}glasses
γ ${prefix}jahy
γ ${prefix}manga
γ ${prefix}masturbation
γ ${prefix}neko
γ ${prefix}orgy
γ ${prefix}panties
γ ${prefix}pussy
γ ${prefix}tentacles
γ ${prefix}thighs
γ ${prefix}yuri
γ ${prefix}feet
γ ${prefix}lewdkemo
γ ${prefix}woof
γ ${prefix}gasm
γ ${prefix}solo
γ ${prefix}8ball
γ ${prefix}goose
γ ${prefix}avatar
γ ${prefix}hololewd
γ ${prefix}gecg
γ ${prefix}holo
γ ${prefix}fox_girl
γ ${prefix}tits
γ ${prefix}eroyuri
γ ${prefix}holoyero
γ ${prefix}lizard
γ ${prefix}keta
γ ${prefix}eron
γ ${prefix}erok
γ ${prefix}kemonomimi
γ ${prefix}cum_jpg
γ ${prefix}nsfw_avatar
γ ${prefix}erofeet
γ ${prefix}meow
γ ${prefix}wallpaper
γ ${prefix}waifu
γ ${prefix}trap
γ ${prefix}lewd
γ ${prefix}pussy_jpg
γ ${prefix}futanari
γ ${prefix}lewdk
γ ${prefix}solog
γ ${prefix}smug
γ ${prefix}cum
γ ${prefix}slap
γ ${prefix}les
γ ${prefix}erokemo
γ ${prefix}bj
γ ${prefix}pwankg
γ ${prefix}pat
γ ${prefix}poke
γ ${prefix}feed
γ ${prefix}nsfw_neko_gif
γ ${prefix}pussy
γ ${prefix}feetg
γ ${prefix}baka
γ ${prefix}hug
γ ${prefix}kiss
γ ${prefix}tickle
γ ${prefix}spank
γ ${prefix}kuni
γ ${prefix}classic
γ ${prefix}boobs
γ ${prefix}anal
γ ${prefix}ngif
γ ${prefix}cuddle
γ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`
βͺ γ Textpro Menu γ
γ ${prefix}halloween2 text|text2
γ ${prefix}horror text|text2
γ ${prefix}game8bit text|text2
γ ${prefix}layered text|text2
γ ${prefix}glitch2 text|text2
γ ${prefix}coolg text|text2
γ ${prefix}coolwg text|text2
γ ${prefix}realistic text|text2
γ ${prefix}space3d text|text2
γ ${prefix}gtiktok text|text2
γ ${prefix}stone text|text2
γ ${prefix}marvel text|text2
γ ${prefix}marvel2 text|text2
γ ${prefix}pornhub text|text2
γ ${prefix}avengers text|text2
γ ${prefix}metalr text|text2
γ ${prefix}metalg text|text2
γ ${prefix}metalg2 text|text2
γ ${prefix}halloween2 text|text2
γ ${prefix}lion text|text2
γ ${prefix}wolf_bw text|text2
γ ${prefix}wolf_g text|text2
γ ${prefix}ninja text|text2
γ ${prefix}3dsteel text|text2
γ ${prefix}horror2 text|text2
γ ${prefix}lava text|text2
γ ${prefix}bagel text|text2
γ ${prefix}blackpink text
γ ${prefix}rainbow2 text
γ ${prefix}water_pipe text
γ ${prefix}halloween text
γ ${prefix}sketch text
γ ${prefix}sircuit text
γ ${prefix}discovery text
γ ${prefix}metallic2 text
γ ${prefix}fiction text
γ ${prefix}demon text
γ ${prefix}transformer text
γ ${prefix}berry text
γ ${prefix}thunder text
γ ${prefix}magma text
γ ${prefix}3dstone text
γ ${prefix}neon text
γ ${prefix}glitch text
γ ${prefix}harry_potter text
γ ${prefix}embossed text
γ ${prefix}broken text
γ ${prefix}papercut text
γ ${prefix}gradient text
γ ${prefix}glossy text
γ ${prefix}watercolor text
γ ${prefix}multicolor text
γ ${prefix}neon_devil text
γ ${prefix}underwater text
γ ${prefix}bear text
γ ${prefix}wonderfulg text
γ ${prefix}christmas text
γ ${prefix}neon_light text
γ ${prefix}snow text
γ ${prefix}cloudsky text
γ ${prefix}luxury2 text
γ ${prefix}gradient2 text
γ ${prefix}summer text
γ ${prefix}writing text
γ ${prefix}engraved text
γ ${prefix}summery text
γ ${prefix}3dglue text
γ ${prefix}metaldark text
γ ${prefix}neonlight text
γ ${prefix}oscar text
γ ${prefix}minion text
γ ${prefix}holographic text
γ ${prefix}purple text
γ ${prefix}glossyb text
γ ${prefix}deluxe2 text
γ ${prefix}glossyc text
γ ${prefix}fabric text
γ ${prefix}neonc text
γ ${prefix}newyear text
γ ${prefix}newyear2 text
γ ${prefix}metals text
γ ${prefix}xmas text
γ ${prefix}blood text
γ ${prefix}darkg text
γ ${prefix}joker text
γ ${prefix}wicker text
γ ${prefix}natural text
γ ${prefix}firework text
γ ${prefix}skeleton text
γ ${prefix}balloon text
γ ${prefix}balloon2 text
γ ${prefix}balloon3 text
γ ${prefix}balloon4 text
γ ${prefix}balloon5 text
γ ${prefix}balloon6 text
γ ${prefix}balloon7 text
γ ${prefix}steel text
γ ${prefix}gloss text
γ ${prefix}denim text
γ ${prefix}decorate text
γ ${prefix}decorate2 text
γ ${prefix}peridot text
γ ${prefix}rock text
γ ${prefix}glass text
γ ${prefix}glass2 text
γ ${prefix}glass3 text
γ ${prefix}glass4 text
γ ${prefix}glass5 text
γ ${prefix}glass6 text
γ ${prefix}glass7 text
γ ${prefix}glass8 text
γ ${prefix}captain_as2 text
γ ${prefix}robot text
γ ${prefix}equalizer text
γ ${prefix}toxic text
γ ${prefix}sparkling text
γ ${prefix}sparkling2 text
γ ${prefix}sparkling3 text
γ ${prefix}sparkling4 text
γ ${prefix}sparkling5 text
γ ${prefix}sparkling6 text
γ ${prefix}sparkling7 text
γ ${prefix}decorative text
γ ${prefix}chocolate text
γ ${prefix}strawberry text
γ ${prefix}koifish text
γ ${prefix}bread text
γ ${prefix}matrix text
γ ${prefix}blood2 text
γ ${prefix}neonligth2 text
γ ${prefix}thunder2 text
γ ${prefix}3dbox text
γ ${prefix}neon2 text
γ ${prefix}roadw text
γ ${prefix}bokeh text
γ ${prefix}gneon text
γ ${prefix}advanced text
γ ${prefix}dropwater text
γ ${prefix}wall text
γ ${prefix}chrismast text
γ ${prefix}honey text
γ ${prefix}drug text
γ ${prefix}marble text
γ ${prefix}marble2 text
γ ${prefix}ice text
γ ${prefix}juice text
γ ${prefix}rusty text
γ ${prefix}abstra text
γ ${prefix}biscuit text
γ ${prefix}wood text
γ ${prefix}scifi text
γ ${prefix}metalr text
γ ${prefix}purpleg text
γ ${prefix}shiny text 
γ ${prefix}jewelry text
γ ${prefix}jewelry2 text
γ ${prefix}jewelry3 text
γ ${prefix}jewelry4 text
γ ${prefix}jewelry5 text
γ ${prefix}jewelry6 text
γ ${prefix}jewelry7 text
γ ${prefix}jewelry8 text
γ ${prefix}metalh text
γ ${prefix}golden text
γ ${prefix}glitter text
γ ${prefix}glitter2 text
γ ${prefix}glitter3 text
γ ${prefix}glitter4 text
γ ${prefix}glitter5 text
γ ${prefix}glitter6 text
γ ${prefix}glitter7 text
γ ${prefix}metale text
γ ${prefix}carbon text
γ ${prefix}candy text
γ ${prefix}metalb text
γ ${prefix}gemb text
γ ${prefix}3dchrome text
γ ${prefix}metalb2 text
γ ${prefix}metalg text
γ ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`
βͺ γ Others γ
γ ${prefix}ttp [text]
γ ${prefix}attp [text]
γ ${prefix}afk [reason]
γ ${prefix}translate kode_bahasa text
γ ${prefix}kalkulator [query]
γ ${prefix}smeme [text]
γ ${prefix}smeme2 [text|text]
γ ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`
βͺ γ Game Menu γ
γ ${prefix}kuismath
γ ${prefix}tebak [option]
γ ${prefix}tekateki
γ ${prefix}susunkata
γ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`
βͺ γ Asupan Menu γ
γ ${prefix}chika
γ ${prefix}delvira
γ ${prefix}ayu
γ ${prefix}bunga
γ ${prefix}aura
γ ${prefix}nisa
γ ${prefix}ziva
γ ${prefix}yana
γ ${prefix}viona
γ ${prefix}syania
γ ${prefix}riri
γ ${prefix}syifa
γ ${prefix}mama_gina
γ ${prefix}alcakenya
γ ${prefix}mangayutri
γ ${prefix}rikagusriani
γ ${prefix}asupan
γ ${prefix}bocil
γ ${prefix}geayubi
γ ${prefix}santuy
γ ${prefix}ukhty
γ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`
βͺ γ Random Cewe γ
γ ${prefix}china 
γ ${prefix}indonesia 
γ ${prefix}malaysia 
γ ${prefix}thailand 
γ ${prefix}korea 
γ ${prefix}japan 
γ ${prefix}vietnam 
γ ${prefix}jenni 
γ ${prefix}jiso 
γ ${prefix}lisa  
γ ${prefix}rose
`
}

exports.tqto = () =>{
	return`
βͺ γ TqTo γ 
γ My God
γ My Parents
γ Fatih A.
γ Ferdi
γ DikaArdnt
γ Mhankbarbar
γ Nurutomo
γ Rashid
γ LionSuzune
γ ZeeoneOfc
γ Penyedia Module
γ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`
βͺ γ Primbon γ
γ ${prefix}nomorhoki 887435047326
γ ${prefix}artimimpi [query]
γ ${prefix}artinama [query]
γ ${prefix}ramaljodoh
γ ${prefix}ramaljodohbali
γ ${prefix}suamiistri
γ ${prefix}ramalcinta
γ ${prefix}cocoknama
γ ${prefix}pasangan
γ ${prefix}jadiannikah
γ ${prefix}sifatusaha
γ ${prefix}rezeki
γ ${prefix}pekerjaan
γ ${prefix}nasib
γ ${prefix}penyakit
γ ${prefix}tarot
γ ${prefix}fengshui
γ ${prefix}haribaik
γ ${prefix}harisangar
γ ${prefix}harisial
γ ${prefix}nagahari
γ ${prefix}arahrezeki
γ ${prefix}peruntungan
γ ${prefix}weton
γ ${prefix}karakter
γ ${prefix}keberuntungan
γ ${prefix}memancing
γ ${prefix}masasubur
γ ${prefix}zodiak 
γ ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`
βͺ γ Telegram Sticker γ
γ ${prefix}awoawo
γ ${prefix}benedict
γ ${prefix}chat
γ ${prefix}dbfly
γ ${prefix}dino_kuning
γ ${prefix}doge
γ ${prefix}gojosatoru
γ ${prefix}hope_boy
γ ${prefix}jisoo
γ ${prefix}kr_robot
γ ${prefix}kucing
γ ${prefix}lonte
γ ${prefix}manusia_lidi
γ ${prefix}menjamet
γ ${prefix}meow
γ ${prefix}nicholas
γ ${prefix}patrick
γ ${prefix}popoci
γ ${prefix}sponsbob
γ ${prefix}kawan_sponsbob
γ ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`
βͺ γ Ephoto360 Menu γ
γ ${prefix}youtubegold text
γ ${prefix}youtubesilver text
γ ${prefix}facebookgold text
γ ${prefix}facebooksilver text
γ ${prefix}instagramgold text
γ ${prefix}instagramsilver text
γ ${prefix}twittergold text
γ ${prefix}twittersilver text
γ ${prefix}retrotext text
γ ${prefix}halloweenbats text
γ ${prefix}texthalloween text
γ ${prefix}cardhalloween text
γ ${prefix}birthdaycake text
γ ${prefix}thundertext text
γ ${prefix}icetext text
γ ${prefix}milkcake text
γ ${prefix}snowontext text
γ ${prefix}metalstar text
γ ${prefix}dragonfire text
γ ${prefix}zombie3d text
γ ${prefix}merrycard text
γ ${prefix}generalexam text 
γ ${prefix}viettel text
γ ${prefix}embroider text
γ ${prefix}graffititext text
γ ${prefix}graffititext2 text
γ ${prefix}graffititext3 text
γ ${prefix}covergraffiti text
γ ${prefix}moderngold text
γ ${prefix}capercut text
γ ${prefix}lovecard text
γ ${prefix}heartflashlight text
γ ${prefix}heartcup text
γ ${prefix}sunglightshadow text
γ ${prefix}graffiti3d text
γ ${prefix}moderngoldsilver text
γ ${prefix}moderngold2 text
γ ${prefix}moderngold3 text
γ ${prefix}fabrictext text
γ ${prefix}masteryavatar text
γ ${prefix}messagecoffee text
γ ${prefix}announofwin text
γ ${prefix}writeblood text
γ ${prefix}horrorletter text
γ ${prefix}writehorror text
γ ${prefix}shirtclub text
γ ${prefix}angelwing text
γ ${prefix}christmasseason text
γ ${prefix}projectyasuo text
γ ${prefix}lovelycute text
γ ${prefix}womansday text
γ ${prefix}covergamepubg text
γ ${prefix}nameonheart text
γ ${prefix}funnyhalloween text
γ ${prefix}lightningpubg text
γ ${prefix}greetingcardvideo text 
γ ${prefix}christmascard text 
γ ${prefix}galaxybat text
γ ${prefix}writegalaxy text
γ ${prefix}starsnight text
γ ${prefix}noeltext text
γ ${prefix}textcakes text
γ ${prefix}pubgbirthday text
γ ${prefix}galaxywallpaper text
γ ${prefix}pubgglicthvideo text 
γ ${prefix}pubgmascotlogo text
γ ${prefix}realembroidery text
γ ${prefix}vintagetelevision text
γ ${prefix}funnyanimations text
γ ${prefix}glowingtext text
γ ${prefix}textonglass text
γ ${prefix}cartoonstyle text
γ ${prefix}multicolor text
γ ${prefix}watercolor2 text
γ ${prefix}textsky text
γ ${prefix}summerbeach text
γ ${prefix}1917text text
γ ${prefix}puppycute text
γ ${prefix}rosebirthday text
γ ${prefix}steellettering text|text2
γ ${prefix}letterstext text|text2
γ ${prefix}barcashirt text|text2
γ ${prefix}premiercup text|text2
γ ${prefix}stylepoligon text|text2
γ ${prefix}lifebuoys text|text2
γ ${prefix}juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`
βͺ γ Logo Menu γ
γ ${prefix}coverbannerlol text|heroes
γ ${prefix}pubglogomaker text|style
γ ${prefix}colorfulpubg text|color
γ ${prefix}astronotspace text|style
γ ${prefix}wallpaperaov text|heroes
γ ${prefix}maketeamlogo text|style
γ ${prefix}circlemarcotteam text|logo
γ ${prefix}wallpaperml text|heroes
γ ${prefix}dragonballfb text|character
γ ${prefix}bannerofaov text|character
γ ${prefix}effect3donbeach text|background
γ ${prefix}cutegirlgamer text|logo
γ ${prefix}footballteam text|logo
γ ${prefix}beautifulshimmering text|champion
γ ${prefix}pubgcutelogo text|logo
γ ${prefix}elegantrotation text|logo
γ ${prefix}logogamingassasin text|logo
γ ${prefix}introvideomaker text|logo
γ ${prefix}gaminglogo4fvs text|logo
γ ${prefix}blueneon text|logo
γ ${prefix}metalmascot text|logo
γ ${prefix}anonymous text|style
γ ${prefix}lolpentakill text|style
γ ${prefix}avatarleagueofking text|style
γ ${prefix}avatarff text|character
γ ${prefix}overwatchwallpaper text|character
γ ${prefix}rovwallpaperhd text|hero
γ ${prefix}rovwallpaper text|avatar
γ ${prefix}beautifulgalaxylol text|style
γ ${prefix}crossfirecover text|character
γ ${prefix}lolwallpaper text|wallpaper
γ ${prefix}coverdota2 text|heroes
γ ${prefix}coverleagueofking text|character
γ ${prefix}avatar3q360 text|avatar
γ ${prefix}coverofwarface text|character
γ ${prefix}newlolavatar text|avatar
γ ${prefix}csgocover text|background
γ ${prefix}coverloknew text|hero
γ ${prefix}coverfblol text|letters
γ ${prefix}overwatchcover text|hero
γ ${prefix}crossfirestyle text|avatar
γ ${prefix}avatarlolbyname text|style
γ ${prefix}lolcoverbyname text|avatar
γ ${prefix}cyberhunterfb text|character
γ ${prefix}coverfreefirefb text|character
γ ${prefix}gamingmascot text|style
γ ${prefix}coveronepiecefb text|character
γ ${prefix}bannerytcsgo text|banner
γ ${prefix}fbgamepubgcover text|template
γ ${prefix}banneroflol text|text2|banner
γ ${prefix}bannerofaov2 text|text2|banner
γ ${prefix}teamlogo text|text2|background
γ ${prefix}companylogo2 text|text2|background
γ ${prefix}companylogo text|text2|background
γ ${prefix}gradientlogo text|text2|background
γ ${prefix}pencilsketch text|text2|icon
γ ${prefix}gunlogogaming text|text2|background
γ ${prefix}banneroffreefire text|text2|background
γ ${prefix}letterlogos text|text2|thumb
γ ${prefix}bannerofoverwatch text|text2|background
γ ${prefix}bannerofapex text|text2|background
γ ${prefix}bannerofpubg text|text2|background
γ ${prefix}mascotstyle text|text2|thumb
γ ${prefix}logoaccording text|text2|thumb
γ ${prefix}avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`
βͺ γ Islamic Menu γ
γ ${prefix}asmaulhusna
γ ${prefix}kisahnabi [nabi]
γ ${prefix}jadwalshalat [daerah]
γ ${prefix}randomquran
γ ${prefix}randomquran2
γ ${prefix}listsurah
γ ${prefix}tafsirsurah [surah]
γ ${prefix}alquranaudio [surah|ayat]
`
}

exports.soundmenu = (prefix) =>{
return`
βͺ γ Sound Menu γ
γ ${prefix}sound1
γ ${prefix}sound2
γ ${prefix}sound3
γ ${prefix}sound4
γ ${prefix}sound5
γ ${prefix}sound6
γ ${prefix}sound7
γ ${prefix}sound8
γ ${prefix}sound9
γ ${prefix}sound10
γ ${prefix}sound11
γ ${prefix}sound12
γ ${prefix}sound13
γ ${prefix}sound14
γ ${prefix}sound15
γ ${prefix}sound16
γ ${prefix}sound17
γ ${prefix}sound18 
γ ${prefix}sound19
γ ${prefix}sound20
γ ${prefix}sound21
γ ${prefix}sound22
γ ${prefix}sound23
γ ${prefix}sound24
γ ${prefix}sound25
γ ${prefix}sound26
γ ${prefix}sound27
γ ${prefix}sound28
γ ${prefix}sound29
γ ${prefix}sound30
γ ${prefix}sound31
γ ${prefix}sound32
γ ${prefix}sound33
γ ${prefix}sound34
γ ${prefix}sound35
γ ${prefix}sound36
γ ${prefix}sound37
γ ${prefix}sound38
γ ${prefix}sound39
γ ${prefix}sound40
γ ${prefix}sound41
γ ${prefix}sound42
γ ${prefix}sound43
γ ${prefix}sound44
γ ${prefix}sound45
γ ${prefix}sound46
γ ${prefix}sound47
γ ${prefix}sound48
γ ${prefix}sound49
γ ${prefix}sound50
γ ${prefix}sound51
γ ${prefix}sound52
γ ${prefix}sound53
γ ${prefix}sound54
γ ${prefix}sound55
γ ${prefix}sound56
γ ${prefix}sound57
γ ${prefix}sound58
γ ${prefix}sound59
γ ${prefix}sound60
γ ${prefix}sound61
γ ${prefix}sound62
γ ${prefix}sound63
γ ${prefix}sound64
γ ${prefix}sound65
γ ${prefix}sound66
γ ${prefix}sound67
γ ${prefix}sound68
γ ${prefix}sound69
γ ${prefix}sound70
`
}
