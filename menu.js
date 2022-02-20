const help = (p, date, user, wame) => {
return `
╭━━━━━━━━━━━━━━━━━━━╮
┃☄️✨𝑩𝑹⃟𝑰𝒁𝑨𝑺 𝑶⃟𝑹𝑰𝑶𝑵✨☄️
┃  
┃ 🕐 𝐃𝐚𝐭𝐚 𝐞 𝐡𝐨𝐫𝐚: ${date}
┃ 🙂 𝐔𝐬𝐮𝐚́𝐫𝐢𝐨: ${user}
┃ 🌎 𝐖𝐚𝐦𝐞: 
┃ ${wame}                                       
┃
┣━━ 🤩 𝑹𝑬𝑫𝑬𝑺 𝑺𝑶𝑪𝑰𝑨𝑰𝑺 🤩 ━╮
┃
┃ 📷 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: @brizasbot01
┃
┃ 🤖𝐆𝐢𝐭𝐡𝐮𝐛:
┃ 🌐https://suaurl.com/f31687
┃
┃ 🪀𝐆𝐫𝐮𝐩𝐨:
┃ 🌐https://suaurl.com/Brizas-grupo
┃
┃ 📹𝐘𝐨𝐮𝐭𝐮𝐛𝐞:
┃ 🌐https://suaurl.com/c12fe7
┃
┃ 🤑𝐁𝐫𝐢𝐳𝐚𝐬-𝐚𝐩𝐢:
┃ 🌐https://suaurl.com/e55630
┃
┣━━━⚡ 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙄𝙎 ⚡━━━╮
┃ ${p}listblockcmd
┃ ${p}listpalavra
┃ ${p}del
┃ ${p}delete
┃ ${p}ajuda
┃ ${p}help
┃ ${p}comandos
┃ ${p}menulite
┃ ${p}menu
┃ ${p}ping
┃ ${p}destrava
┃ ${p}sugerircmd (txt)
┃ ${p}blocklist
┃ ${p}blacklist
┃ ${p}criador
┃ ${p}toimg (leg, resp img)
┣━━━━✨ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ✨━━━━╮
┃ ${p}stiker (leg, resp img)
┃ ${p}sticker (leg, resp img)
┃ ${p}csticker (leg, resp img)
┃ ${p}cstiker (leg, resp img)
┃ ${p}fstiker (leg, resp img)
┃ ${p}fsticker (leg, resp img)
┃ ${p}nstiker (pack) (author)
┃ ${p}nsticker (pack) (author)
┃ ${p}nfstiker (pack) (author)
┃ ${p}nfsticker (pack) (author)
┃ ${p}nfsticker (pack) (author)
┃ ${p}rename (pack) (author)
┣━━━━😎 𝘾𝙍𝙄𝘼𝘿𝙊𝙍 😎━━━━╮
┃ ${p}blockcmd (cmd sem prefix)
┃ ${p}unblockcmd (cmd sem prefix)
┃ ${p}alerta (txt)
┃ ${p}antinewchat (1 or 0)
┃ ${p}antispamcmd (1 or 0)
┃ ${p}antipv (1 or 0)
┃ ${p}antinewchat (1 or 0)
┃ ${p}infinityblock (1 or 0)
┃ ${p}antiligar (1 or 0)
┃ ${p}addpalavra (txt)
┃ ${p}rmpalavra (txt)
┃ ${p}limparchat (txt)
┃ ${p}ataque (txt)
┃ ${p}divulgar (txt)
┃ ${p}entrargp (txt)
┃ ${p}block (num)
┃ ${p}unblock (num)
┃ ${p}msginfo
┃ ${p}chatinfo
┣━━━🙋‍♂️ 𝘽𝙊𝘼𝙎 𝙑𝙄𝙉𝘿𝘼𝙎 🙋‍♂️━━━╮
┃ ${p}byeadd (texto)
┃ ${p}welcomeadd (texto)
┃ ${p}welcomehelp
┣━━━━━🔇 𝙈𝙐𝙏𝘼𝙍 🔇━━━━━╮
┃ ${p}mute (marcar)
┃ ${p}desmute (marcar)
┃ ${p}mutados
┣━━━━━❌ 𝘼𝙉𝙏𝙄 ❌━━━━━╮
┃ ${p}antidoc (1 or 0)
┃ ${p}antiloc (1 or 0)
┃ ${p}antiimg (1 or 0)
┃ ${p}antipalavra (1 or 0)
┃ ${p}antivideo (1 or 0)
┃ ${p}antisticker (1 or 0)
┃ ${p}antiaudio (1 or 0)
┃ ${p}antictt (1 or 0)
┃ ${p}antilink (1 or 0)
┃ ${p}antiporn (1 or 0)
┃ ${p}antifake (1 or 0)
┃ ${p}dontback (1 or 0)
┃ ${p}antilinkhard (1 or 0)
┣━━━━👥 𝙂𝙍𝙐𝙋𝙊𝙎 👥━━━╮
┃ ${p}listfake
┃ ${p}listbr
┃ ${p}listddd (country code)
┃ ${p}dbackadd (num)
┃ ${p}dbackrm (num)
┃ ${p}fechargp
┃ ${p}mudardesc
┃ ${p}mudarnome
┃ ${p}abrirgp
┃ ${p}linkgroup
┃ ${p}listadmin
┃ ${p}listonline
┃ ${p}leave
┃ ${p}kick (dial num)
┃ ${p}ban (resp msg)
┃ ${p}promote (dial num)
┃ ${p}demote (dial num)
┃ ${p}add (num)
┃ ${p}roletrussablock (1 or 0)
┃ ${p}welcome (1 or 0)
┃ ${p}simih (1 or 0)
┃ ${p}autostickerimg (1 or 0)
┃ ${p}onmodgrupo
┃ ${p}offmodgrupo
┃ ${p}autoreply (1 or 0)
┃ ${p}marcar
┃ ${p}marcar2
┃ ${p}marcar3
┃ ${p}hidemarcar (txt)
┣━━━━🔍 𝙋𝙀𝙎𝙌𝙐𝙄𝙎𝘼 🔎━━━╮
┃ ${p}pensador (autor)
┃ ${p}xvideos (name)
┃ ${p}thumbzilla (name)
┃ ${p}xanimu (name)
┃ ${p}xnxx (name)
┃ ${p}fapster (name)
┃ ${p}pornhub (name)
┃ ${p}fortniteshop
┃ ${p}imagesearch (resp img)
┃ ${p}map (name)
┃ ${p}brainlysrc (name)
┃ ${p}search (name)
┃ ${p}searchv2 (name)
┃ ${p}ssweb (url)
┃ ${p}mediafire (url)
┃ ${p}mob
┃ ${p}minecraft
┃ ${p}covidbrasil
┃ ${p}covidmundo
┃ ${p}foxnews
┃ ${p}lofi
┃ ${p}boy
┃ ${p}girl
┃ ${p}egirl
┃ ${p}eboy
┃ ${p}pinterest (name)
┃ ${p}wallpaper
┃ ${p}fuckmylife
┃ ${p}belle
┃ ${p}saycat
┃ ${p}biblia
┃ ${p}playstore (name app)
┃ ${p}happymod (name app)
┃ ${p}ip (ip)
┃ ${p}gimage (name)
┣━━━━━😈 𝙋𝙊𝙍𝙉𝙊 😈━━━━╮
┃ ${p}packmega18
┃ ${p}nhentai ❮code❯
┃ ${p}randomhentai
┃ ${p}nsfwblowjob
┃ ${p}nsfwneko
┃ ${p}nsfwtrap
┃ ${p}nsfw (1 or 0)
┃ ${p}anal
┃ ${p}cum
┃ ${p}yuri
┃ ${p}hentainekogif
┃ ${p}futanari
┃ ${p}nsfwfeet
┃ ${p}nsfwfeetgif
┃ ${p}girlmasturbate
┃ ${p}girlmasturbategif
┃ ${p}lesbian
┃ ${p}eroyuri
┃ ${p}eroneko
┃ ${p}erokitsune
┃ ${p}spank
┣━━━━🗣️ 𝙑𝙊𝙕 𝙈𝙊𝘿 🗣️━━━━╮
┃ ${p}esquilo (resp audio)
┃ ${p}grave (resp audio)
┃ ${p}estourar (resp audio)
┃ ${p}rapidoaudio (resp audio)
┃ ${p}lentoaudio (resp audio)
┃ ${p}bass (resp audio)
┣━━━━━🎵 𝘼𝙐𝘿𝙄𝙊 🎵━━━╮
┃ ${p}shazam (resp audio)
┃ ${p}gtts (la) (txt)
┃ ${p}playlist
┃ ${p}lyrics
┃ ${p}ptlyrics
┃ ${p}play (music name)
┃ ${p}playv2 (music name)
┃ ${p}tomp3 (cap, resp vid)
┃ ${p}ytsrc (name)
┃ ${p}ytmp4 (yt url)
┃ ${p}ytmp3 (yt url)
┣━━━━━🇯🇵 𝘼𝙉𝙄𝙈𝙀𝙎 🇯🇵━━━━╮
┃ ${p}randomanime
┃ ${p}randomkiss
┃ ${p}randomhug
┃ ${p}nekoanime
┃ ${p}wait (cap, resp vid)
┃ ${p}slap
┃ ${p}kemonomimi
┣━━━🔮 𝙋𝙍𝙀𝙑𝙄𝙎𝙊𝙀𝙎 🔮━━╮
┃ ${p}ship (num1) (num2)
┃ ${p}corno (num1)
┃ ${p}nazista (num1)
┃ ${p}comunista (num1)
┃ ${p}dado
┃ ${p}gay (num1)
┃ ${p}qi (num1)
┃ ${p}seudia (num1)
┃ ${p}feio (num1)
┃ ${p}bv (num1)
┃ ${p}gado (num1)
┃ ${p}gostoso (num1)
┃ ${p}gostosa (num1)
┃ ${p}randomship (n1, n/a)
┣━━━😳 𝙄𝙉𝙏𝙀𝙍𝘼𝘾̧𝘼̃𝙊 😳━━━╮
┃ ${p}vsf
┃ ${p}botfofo
┃ ${p}pedro
┃ ${p}botgostoso
┃ ${p}botviado
┃ ${p}botbaianor
┃ ${p}botfdp
┃ ${p}botfeio
┃ ${p}botputa
┃ ${p}botgay
┃ ${p}botcorno
┃ ${p}vtmnc
┃ ${p}bomdia
┃ ${p}boatarde
┃ ${p}boanoite
┃ ${p}lindo
┃ ${p}cheguei
╰━━━━━━━━━━━━━━━━━━━╯`
}

exports.help = help


