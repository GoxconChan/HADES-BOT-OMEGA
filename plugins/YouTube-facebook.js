import _0x50ec2c from'api-dylux';import _0x19930e from'node-fetch';import{savefrom,facebookdl,facebookdlv2}from'@bochilteam/scraper';import _0x3fd8b5 from'fb-downloader-scrapper';import{facebook}from'@xct007/frieren-scraper';import _0x1379d9 from'axios';const handler=async(_0x4355ea,{conn:_0x2285db,args:_0x49164a,command:_0x188ccf,usedPrefix:_0x458e36})=>{if(!_0x49164a[0x0])throw'[❗]\x20enter\x20the\x20Facebook\x20link';if(!_0x49164a[0x0]['match'](/www.facebook.com|fb.watch/g))throw'[❗]\x20enter\x20the\x20Facebook\x20link';try{await _0x4355ea['reply']('[❗]\x20Please\x20wait,\x20your\x20video\x20is\x20downloading.\x20If\x20it\x20takes\x20a\x20while\x20to\x20download,\x20the\x20video\x20may\x20be\x20very\x20heavy\x20and\x20may\x20not\x20download.');const _0x3b5891=await facebook['v1'](_0x49164a[0x0]);let _0x3ee873='';_0x3b5891['urls']&&_0x3b5891['urls']['length']>0x0&&(_0x3ee873=''+(_0x3b5891['urls'][0x0]?.['hd']||_0x3b5891['urls'][0x1]?.['sd']||'')),_0x2285db['sendFile'](_0x4355ea['chat'],_0x3ee873,'error.mp4','乂✰here\x20is\x20your\x20video✰乂',_0x4355ea);}catch(_0x39aac0){try{const _0x318256=await igeh(_0x49164a[0x0]);_0x2285db['sendMessage'](_0x4355ea['chat'],{'video':{'url':_0x318256['url_list']}},_0x4355ea);}catch(_0x4f5a66){try{const _0x51957d=await _0x19930e('https://api.lolhuman.xyz/api/facebook?apikey='+lolkeysapi+'&url='+_0x49164a[0x0]),_0x23eccd=await _0x51957d['json']();let _0x3cad9f=_0x23eccd['result'][0x0];if(_0x3cad9f==''||!_0x3cad9f||_0x3cad9f==null)_0x3cad9f=_0x23eccd['result'][0x1];_0x2285db['sendFile'](_0x4355ea['chat'],_0x3cad9f,'error.mp4','乂✰here\x20is\x20your\x20video✰乂',_0x4355ea);}catch(_0x2c8a04){try{const _0x2e82e3=await _0x50ec2c['fbdl'](_0x49164a[0x0]),_0xbd7370=await _0x2e82e3['data'][0x0]['url'];await _0x2285db['sendFile'](_0x4355ea['chat'],_0xbd7370,'error.mp4','乂✰here\x20is\x20your\x20video✰乂',_0x4355ea);}catch(_0x3cf711){try{const _0x18768d=await _0x3fd8b5(_0x49164a[0x0]);for(const _0x2bd8ea of _0x18768d['download']){const _0x520ff4=_0x2bd8ea['url'];await _0x2285db['sendFile'](_0x4355ea['chat'],_0x520ff4,'error.mp4','乂✰here\x20is\x20your\x20video✰乂',_0x4355ea);}}catch(_0x22da4d){try{const _0x5e6d6b=await _0x19930e('https://latam-api.vercel.app/api/facebookdl?apikey=nekosmic&q='+_0x49164a[0x0]),_0x3ac245=await _0x5e6d6b['json'](),_0x363163=await _0x3ac245['video'];await _0x2285db['sendFile'](_0x4355ea['chat'],_0x363163,'error.mp4','乂✰here\x20is\x20your\x20video✰乂',_0x4355ea);}catch(_0x2bdd31){try{const {result:_0x4c29d3}=await facebookdl(_0x49164a[0x0])['catch'](async _0x4f161f=>await facebookdlv2(_0x49164a[0x0]))['catch'](async _0x2441a=>await savefrom(_0x49164a[0x0]));for(const {url:_0x3bac2d,isVideo:_0x3e73b7}of _0x4c29d3['reverse']())await _0x2285db['sendFile'](_0x4355ea['chat'],_0x3bac2d,'facebook.'+(!_0x3e73b7?'bin':'mp4'),'*𝙰𝚀𝚄𝙸\x20𝙴𝚂𝚃𝙰\x20𝚂𝚄\x20𝚅𝙸𝙳𝙴𝙾*',_0x4355ea);}catch(_0x4255a6){throw''+_0x50ec2c;}}}}}}}};handler['command']=/^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i,handler['register']=!![],handler['limit']=0x3;export default handler;async function igeh(_0x24c42c){return new Promise(async(_0x49642c,_0x395afd)=>{const _0x358273='https://instasupersave.com/';try{const _0x32fdcb=await _0x1379d9(_0x358273),_0x5b10fb=_0x32fdcb['headers']['set-cookie'],_0x206b66=_0x5b10fb[0x0]['split'](';')[0x0]['replace']('XSRF-TOKEN=','')['replace']('%3D',''),_0x1d5b0b={'method':'post','url':_0x358273+'api/convert','headers':{'origin':'https://instasupersave.com','referer':'https://instasupersave.com/pt/','sec-fetch-dest':'empty','sec-fetch-mode':'cors','sec-fetch-site':'same-origin','user-agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/107.0.0.0\x20Safari/537.36\x20Edg/107.0.1418.52','x-xsrf-token':_0x206b66,'Content-Type':'application/json','Cookie':'XSRF-TOKEN='+_0x206b66+';\x20instasupersave_session='+_0x206b66},'data':{'url':_0x24c42c}};_0x1379d9(_0x1d5b0b)['then'](function(_0x5344ce){const _0x27909a=[];Array['isArray'](_0x5344ce['data'])?_0x5344ce['data']['forEach'](_0x3012a4=>{_0x27909a['push'](_0x3012a4['sd']===undefined?_0x3012a4['thumb']:_0x3012a4['sd']['url']);}):_0x27909a['push'](_0x5344ce['data']['url'][0x0]['url']),_0x49642c({'results_number':_0x27909a['length'],'url_list':_0x27909a});})['catch'](function(_0x506549){_0x395afd(_0x506549['message']);});}catch(_0xe0ae33){_0x395afd(_0xe0ae33['message']);}});}