import{a as _,r as d,o as a,c as x,b,F as r,d as n,e as h,t as g,f as k,g as N,h as z,w,i as T,n as M,j as f,k as G,l as B,m as L}from"./vendor.62725f02.js";const J=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const p of t)if(p.type==="childList")for(const o of p.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function y(t){const p={};return t.integrity&&(p.integrity=t.integrity),t.referrerpolicy&&(p.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?p.credentials="include":t.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(t){if(t.ep)return;t.ep=!0;const p=y(t);fetch(t.href,p)}};J();const S="http://49.233.56.61",Y=3e3,v=_.create({baseURL:S,timeout:Y});v.interceptors.request.use(e=>(e.headers["Content-Type"]="application/json",e),e=>e);v.interceptors.response.use(e=>e.data,e=>e);var j=(e,i)=>{for(const[y,s]of i)e[y]=s;return e};const Z={props:{td:Array,tg:Array,ab:Object},inject:["reload"],data(){return{dataSource:[]}},computed:{},created(){const e=[],i=[];this.td.map(s=>s.id).forEach((s,t)=>this.tg.forEach(p=>s===p&&i.push(t))),i.sort((s,t)=>t-s).forEach(s=>e.push(this.td[s])),this.dataSource=Object.assign([],e)},methods:{parseTgText(e){e&&e.text.forEach(i=>{console.log("[ item ] ->",typeof i)})}}},D={style:{"font-size":"30px",padding:"0 0 10px",color:"#8e8e8e"}},F={class:"tgme_widget_message js-widget_message"},O={class:"tgme_widget_message_user"},Q=["href"],q={class:"tgme_widget_message_user_photo bgcolor2","data-content":"\u6211"},V=["src"],P={class:"tgme_widget_message_bubble"},E=N('<a class="tgme_widget_message_bubble_logo" data-v-4215ab96></a><i class="tgme_widget_message_bubble_tail" data-v-4215ab96><svg class="bubble_icon" width="9px" height="20px" viewBox="0 0 9 20" data-v-4215ab96><g fill="none" data-v-4215ab96><path class="background" fill="#ffffff" d="M8,1 L9,1 L9,20 L8,20 L8,18 C7.807,15.161 7.124,12.233 5.950,9.218 C5.046,6.893 3.504,4.733 1.325,2.738 L1.325,2.738 C0.917,2.365 0.89,1.732 1.263,1.325 C1.452,1.118 1.72,1 2,1 L8,1 Z" data-v-4215ab96></path><path class="border_1x" fill="#d7e3ec" d="M9,1 L2,1 C1.72,1 1.452,1.118 1.263,1.325 C0.89,1.732 0.917,2.365 1.325,2.738 C3.504,4.733 5.046,6.893 5.95,9.218 C7.124,12.233 7.807,15.161 8,18 L8,20 L9,20 L9,1 Z M2,0 L9,0 L9,20 L7,20 L7,20 L7.002,18.068 C6.816,15.333 6.156,12.504 5.018,9.58 C4.172,7.406 2.72,5.371 0.649,3.475 C-0.165,2.729 -0.221,1.464 0.525,0.649 C0.904,0.236 1.439,0 2,0 Z" data-v-4215ab96></path><path class="border_2x" d="M9,1 L2,1 C1.72,1 1.452,1.118 1.263,1.325 C0.89,1.732 0.917,2.365 1.325,2.738 C3.504,4.733 5.046,6.893 5.95,9.218 C7.124,12.233 7.807,15.161 8,18 L8,20 L9,20 L9,1 Z M2,0.5 L9,0.5 L9,20 L7.5,20 L7.5,20 L7.501,18.034 C7.312,15.247 6.64,12.369 5.484,9.399 C4.609,7.15 3.112,5.052 0.987,3.106 C0.376,2.547 0.334,1.598 0.894,0.987 C1.178,0.677 1.579,0.5 2,0.5 Z" data-v-4215ab96></path><path class="border_3x" d="M9,1 L2,1 C1.72,1 1.452,1.118 1.263,1.325 C0.89,1.732 0.917,2.365 1.325,2.738 C3.504,4.733 5.046,6.893 5.95,9.218 C7.124,12.233 7.807,15.161 8,18 L8,20 L9,20 L9,1 Z M2,0.667 L9,0.667 L9,20 L7.667,20 L7.667,20 L7.668,18.023 C7.477,15.218 6.802,12.324 5.64,9.338 C4.755,7.064 3.243,4.946 1.1,2.983 C0.557,2.486 0.52,1.643 1.017,1.1 C1.269,0.824 1.626,0.667 2,0.667 Z" data-v-4215ab96></path></g></svg></i><div class="tgme_widget_message_author accent_color" data-v-4215ab96><a class="tgme_widget_message_owner_name" href="https://t.me/anranbp" data-v-4215ab96><span dir="auto" data-v-4215ab96>\u6211\u7231\u767D\u5AD6</span></a></div>',3),U={class:"tgme_widget_message_text js-message_text",dir:"auto",style:{"text-align":"left","white-space":"break-spaces"}},K={key:0},W=["href"],X=["href"],H={class:"tgme_widget_message_footer js-message_footer"},R=["href"];function $(e,i,y,s,t,p){const o=d("el-divider");return a(!0),x(r,null,b(t.dataSource,(m,u)=>(a(),x("div",{class:"body_widget_post card",key:u},[n("div",D,[h(o,{direction:"vertical"}),n("span",null,g(m.id),1),h(o,{direction:"vertical"})]),n("div",F,[n("div",O,[n("a",{href:y.ab.url},[n("i",q,[n("img",{src:y.ab.avatar},null,8,V)])],8,Q)])]),n("div",P,[E,n("div",U,[(a(!0),x(r,null,b(m.text,(l,I)=>(a(),x(r,{key:I},[typeof l=="string"?(a(),x("span",K,g(l),1)):k("",!0),typeof l=="object"?(a(),x(r,{key:1},[l.type==="text_link"?(a(),x("a",{key:0,href:l.href,target:"_blank"},g(l.text),9,W)):k("",!0),l.type==="link"?(a(),x("a",{key:1,href:l.text,target:"_blank"},g(l.text),9,X)):k("",!0)],64)):k("",!0)],64))),128))]),n("div",H,[n("a",{href:`${y.ab.url}/${m.id}`,class:"button_link",target:"_blank"}," \u5982\u4FE1\u606F\u4E0D\u5168\uFF0C\u5728TG\u4E2D\u67E5\u770B\u8BE5\u6761\u4FE1\u606F ",8,R)])])]))),128)}var tt=j(Z,[["render",$],["__scopeId","data-v-4215ab96"]]);const et={name:"\u6211\u7231\u767D\u5AD6",url:"https://t.me/anranbp",avatar:"https://mmbiz.qpic.cn/mmbiz_png/Uafc0WX1HdjMXuHIYib2EDeI1xgklKQqkmlic1mtZ4gPt0ou8WaX50IBiag0JxHjB0Ugj24BhOnxQ2WS5FZTLskRg/0?wx_fmt=png"},nt=[{name:"\u767D\u5AD6\u673A\u573A",id:[29,34,35,39,43,44,49,50,52,56,57,62,69,74,82,83,95,99,101,120,123,132,135,142,147,164,171,180,191,194,203,205,216,217,220,227,229,231,241,243,247,257,265,269,276,282]},{name:"\u767D\u5AD6\u7F51\u7AD9",id:[37,41,53,55,58,61,63,89,90,153,157,165,167,170,173,174,175,190,196,200,201,202,209,210,211,212,215,217,225,233,235,240,248,249,260,270,274]},{name:"\u767D\u5AD6\u7EBF\u62A5",id:[72,76,78,80,84,85,86,98,107,109,113,114,116,121,127,129,137,144,161,166,169,176,186,188,189,195,199,206,217,219,223,224,236,237,238,255,263,267,271,277,281]},{name:"\u767D\u5AD6\u8BA2\u9605",id:[40,60,81,96,97,111,125,141,159,162,179,182,197,198,217,226,228,239,254,258,264,272,279]},{name:"\u767D\u5AD6TG\u4EE3\u7406",id:[64,79,147,148,149,150,115,139,217,242,264,278]},{name:"\u767D\u5AD6\u8D44\u6E90",id:[36,38,87,92,122,151,172,184,185,204,213,217,221,222,234,245,246,256,261,273,280]},{name:"\u767D\u5AD6\u6559\u7A0B",id:[65,66,67,77,88,91,94,100,108,110,131,145,217,244,251,262,275]},{name:"\u767D\u5AD6\u4F1A\u5458\u8D26\u53F7",id:[68,70,67,217,232]}],it="\u6211\u7231\u767D\u5AD6",pt="public_channel",st=1504326588,lt=[{id:1,type:"service",actor:"\u6211\u7231\u767D\u5AD6",actor_id:"channel1504326588",action:"create_channel",title:"\u6211\u7231\u767D\u5AD6",text:""},{id:2,type:"service",actor:"\u6211\u7231\u767D\u5AD6",actor_id:"channel1504326588",action:"edit_group_photo",text:""},{id:29,type:"message",text:[`\u673A\u573A:\u767D\u6708\u5149

\u5730\u5740\uFF1A`,{type:"text_link",text:"\u6CE8\u518A",href:"https://ss.cn88.net/#/register?code=A0bmdA2C"},"",{type:"text_link",text:`\u7FA4\u7EC4

`,href:"https://t.me/joinchat/VTgu1ri4QEU5ZGNl"},`\u{1F4A0}\u7279\u8272:\u65B0\u5F00\u4E1A\uFF0C\u65B0\u7528\u6237\u901A\u8FC7\u672C\u9891\u9053\u6CE8\u518C\u53EF\u5F977\u5929\u8BD5\u752810G\u521D\u59CB\u6D41\u91CF\u3002\u8BD5\u7528\u671F\u95F4\u53EF\u4EE5\u4F7F\u7528\u673A\u573A\u90E8\u4EFDvip\u7EBF\u8DEF\uFF0C\u673A\u573A\u5957\u9910\u542B\u6709\u9AD8\u901F\u4E2D\u8F6C\u7EBF\u8DEF\uFF0C\u89E3\u9501\u6D41\u5A92\u4F53\u7EBF\u8DEF\uFF0C\u6B22\u8FCE\u5404\u4F4D\u5C1D\u8BD5\u53CD\u9988\u3002

\u{1F35F}\u5957\u9910:10\u5143200G/\u670815\u5143300G/\u6708
10\u5143\u4E0D\u9650\u65F6\u5957\u9910\uFF1A100G`]},{id:34,type:"message",text:["\u{1F449}V2ray\u673A\u573A\u63A8\u8350:\u6CE8\u518C\u5373\u53EF\u900110G\u6D41\u91CF\u767D\u5AD6\uFF0C\u4EAB\u53D7\u7A33\u5B9A1080p\u9AD8\u6E05\u89C6\u9891\uFF0C\u6708\u4ED83\u5143\u8D77\u3002\u5957\u9910\u5185\u6709iplc+\u96A7\u9053\u5907\u7528\uFF0C\u9AD8\u5899\u671F\u95F4\u4F9D\u7136\u575A\u633A\u3002\u9AD8\u7EA7\u4F1A\u5458\u7684\u8BDD\u968F\u673A\u6709PXXXHUB\u3001netflix\u7B49\u798F\u5229\u8D26\u53F7\uFF0C\u53EF\u4EE5\u642D\u914D\u673A\u573A\u9AD8\u7EA7\u4F1A\u5458\u4F7F\u7528\uFF0C\u5B98\u7F51\u5730\u5740\uFF1A",{type:"link",text:"https://sdyun.cc/auth/register"},""]},{id:35,type:"message",text:["\u673A\u573A\uFF1A",{type:"bold",text:`\u5C0F\u767D\u4E91
`},"\u5730\u5740\uFF1A",{type:"text_link",text:"\u6CE8\u518C",href:"https://ninihao.xyz/auth/register"},"\uFF0C",{type:"text_link",text:`\u7FA4\u7EC4

`,href:"https://t.me/xiaobaicloud"},`\u{1F4A0}\u7279\u8272\uFF1A\u6CE8\u518C\u5373\u9001100GB\u516C\u76CA\u6D41\u91CF\uFF0C\u514D\u8D39\u63D0\u4F9Bios\u5C0F\u706B\u7BAD\u5171\u4EAB\u8D26\u53F7\u3002\u62E5\u6709\u514D\u6D41\u8282\u70B9\u3001CN2\u4E2D\u8F6C\u8282\u70B9\uFF0C\u652F\u6301\u5168\u5E73\u53F0\u5BA2\u6237\u7AEF\uFF0C\u81EA\u7814\u96A7\u9053\u6280\u672F\u4E0D\u6015\u88AB\u5899\u3002

\u{1F35F}\u5957\u9910\uFF1A\u6708\u8D39\u4F4E\u81F35\u5143\uFF0C\u6CB9\u7BA1\u7A33\u5B9A8K\uFF0C\u89E3\u9501NETFLIX\u7B49\u6D41\u5A92\u4F53\uFF0C\u8D2D\u4E70\u5957\u9910\u9644\u8D60\u5C0F\u706B\u7BAD\u5151\u6362\u7801\u3001Quantumult\u72EC\u4EAB\u8D26\u53F7\u3002

\u{1F973}\u5168\u573A85\u6298\u4F18\u60E0\u7801\uFF1Axiaobaiyun
\u53E6\uFF0C\u6536\u7559\u673A\u573A\u96BE\u6C11\uFF0C\u51ED\u4ED8\u6B3E\u8BB0\u5F55\u53EF\u4EAB\u672C\u7AD9\u767D\u94F6/\u94BB\u77F3\u5957\u99107\u6298\u4F18\u60E0
\\
\u{1F481}\u{1F3FC}\u200D\u2642\uFE0F\u5E7F\u53D7\u597D\u8BC4\uFF0C\u6027\u4EF7\u6BD4\u9AD8`]},{id:36,type:"message",text:[`\u30102021\u5E74\u65B0\u9C9C\u51FA\u7089\u3011K8s\uFF08Kubernetes\uFF09\u7684\u5DE5\u7A0B\u5E08\u8D44\u6599\u5408\u8F91\uFF0C\u4E66\u7C4D\u63A8\u8350\uFF0C\u9762\u8BD5\u9898\uFF0C\u7CBE\u9009\u6587\u7AE0\uFF0C\u5F00\u6E90\u9879\u76EE\uFF0CPPT\uFF0C\u89C6\u9891\uFF0C\u5927\u5382\u8D44\u6599
`,{type:"link",text:"https://github.com/0voice/k8s_awesome_document"},`

\u8FD1\u4EE3\u6EE1\u6D32\u5386\u53F2\u6587\u732E\u6C47\u603B
\u4E00\u4EFD\u6EE1\u6D32\u6EE1\u94C1\u5386\u53F2\u6587\u732E\u6C47\u603B\u76EE\u5F55\uFF0C\u4E3B\u8981\u662F\u56FE\u4E66\u3001\u56FE\u518C\u3001\u5730\u56FE\u3001\u8BBA\u6587\u3001\u5386\u53F2\u6863\u6848\u548C\u5927\u5B66\u7F51\u7AD9\uFF08\u6570\u636E\u5E93\uFF09\u516D\u90E8\u5206
`,{type:"link",text:"https://docs.qq.com/doc/DWGlmR3BqZ3lVTG1R"},`

\u8BA4\u77E5\u504F\u5DEE\u624B\u518C
`,{type:"link",text:"https://s75w5y7vut.feishu.cn/docs/doccn3BatnScBJe7wD7K3S5poFf#"},`

\u4E00\u7BC7\u5173\u4E8E\u8BED\u8A00\u5B66\u4E60\u7684\u6587\u7AE0\uFF0C\u5185\u5BB9\u633A\u4E30\u5BCC\u7684\uFF0C\u5199\u7684\u5F88\u4E0D\u9519
`,{type:"link",text:"https://dhbsfuhnfu.feishu.cn/docs/doccnQdzN2Op8nv7WLK53xFx46c#8FBPIn"},""]},{id:37,type:"message",text:[`\u4E03\u4E2A\u9AD8\u6E05\u53E4\u753B\u7F51
1-\u4E2D\u534E\u73CD\u5B9D\u9986`,{type:"link",text:"http://www.ltfc.net/"},`
2-\u4E09\u5178\u8F69`,{type:"link",text:"http://www.3zitie.cn/"},`
3-\u4E66\u683C`,{type:"link",text:"https://new.shuge.org/collection/painting/"},`
4-\u5149\u660E\u4E4B\u95E8`,{type:"link",text:"http://www.gmzm.org/"},`
5-\u6545\u5BAB\u540D\u753B\u8BB0`,{type:"link",text:"https://minghuaji.dpm.org.cn/"},`
6-\u6D6E\u4E16\u7ED8\u68C0\u7D22`,{type:"link",text:"https://ja.ukiyo-e.org/"},`
7-\u6635\u56FE\u7F51`,{type:"link",text:"https://www.nipic.com/"},`

\u5C0F\u8BF4
\u624B\u7275\u624B\u5C0F\u8BF4\uFF1A`,{type:"link",text:"https://www.sqsxs.com/"},`
\u4E66\u8FF7\u697C\uFF1A`,{type:"link",text:"https://www.shumil.co"},`
\u6E23\u6E23\u5C0F\u8BF4\u7F51\uFF1A`,{type:"link",text:"https://www.zztxt.net"},`
2k\u5C0F\u8BF4\uFF1A`,{type:"link",text:"http://www.2kxs.org/"},`
\u4EB2\u4EB2\u5C0F\u8BF4\u7F51\uFF1A`,{type:"link",text:"https://www.qinqinxsw.com/"},""]},{id:38,type:"message",text:[{type:"bold",text:`\u767E\u5EA6\u7F51\u76D8\u8FC1\u79FB\u963F\u91CC\u4E91\u76D8\u5DE5\u5177

`},`\u57FA\u4E8EPython\u7684\u767E\u5EA6\u7F51\u76D8\u8F6C\u963F\u91CC\u4E91\u76D8\u5DE5\u5177\u3002

GitHub\uFF1A`,{type:"link",text:"https://github.com/yaronzz/BaiduYunToAliYun"},""]},{id:39,type:"message",text:["\u673A\u573A\uFF1A",{type:"bold",text:`SP-SS

`},"\u5730\u5740\uFF1A",{type:"text_link",text:"\u6CE8\u518C",href:"https://dash.sp333.top/#/register?code=DZcObUOi"},"\uFF0C",{type:"text_link",text:`\u7FA4\u7EC4

`,href:"https://t.me/spss666"},`\u{1F4A0}\u7279\u8272\uFF1A\u65B0\u7528\u6237\u901A\u8FC7\u9891\u9053\u6CE8\u518C\u6BCF\u4E2A\u8D26\u53F7\u53EF\u5F971\u5929\u8BD5\u75282G\u6D41\u91CF\uFF0C\u6709\u591A\u6761\u9AD8\u901F\u4E2D\u8F6C\u7EBF\u8DEF\u53EF\u9009\u7528\uFF0C\u89E3\u9501\u6D41\u5A92\u4F53\uFF0C\u66F4\u5FEB\u66F4\u7A33\u5B9A\uFF0C\u6B22\u8FCE\u6CE8\u518C\u5C1D\u8BD5\u3002

\u{1F35F}\u5957\u9910:1\u514310G/\u4E09\u5E74\uFF08\u53EF\u7528\u4E8E\u767D\u5AD6\u8282\u70B9\uFF0C\u6D41\u91CF\u7528\u5B8C\u53EF\u514D\u8D39\u91CD\u7F6E\uFF0915\u5143100G/\u6708\uFF08\u8D2D\u4E70\u5E74\u4ED8\u5957\u9910\u8D60\u9001\u5C0F\u706B\u7BAD\u5151\u6362\u7801\uFF09

\u5907\u6CE8\uFF1A1\u5143\u53EF\u8D2D\u4E70\u4E09\u5E74\u4ED8\u5957\u9910\uFF0C10G\u6D41\u91CF\uFF0C\u6D41\u91CF\u7528\u5B8C\u53EF\u514D\u8D39\u91CD\u7F6E\u30021\u5143\u53EF\u8D2D\u4E70\u4E09\u5E74\u4ED8\u5957\u9910\uFF0C10G\u6D41\u91CF\uFF0C\u6D41\u91CF\u7528\u5B8C\u53EF\u514D\u8D39\u91CD\u7F6E\u30021\u5143\u53EF\u8D2D\u4E70\u4E09\u5E74\u4ED8\u5957\u9910\uFF0C10G\u6D41\u91CF\uFF0C\u6D41\u91CF\u7528\u5B8C\u53EF\u514D\u8D39\u91CD\u7F6E\u3002`]},{id:40,type:"message",text:[`\u5168\u7F51\u514D\u8D39\u8282\u70B9\u6C60
`,{type:"link",text:"https://hello.stgod.com/"},`
`,{type:"link",text:"https://proxies.bihai.cf/"},`
`,{type:"link",text:"https://sspool.nl/"},`
`,{type:"link",text:"https://proxypool-guest997.herokuapp.com/"},`
`,{type:"link",text:"https://fq.lonxin.net/"},`
`,{type:"link",text:"https://free886.herokuapp.com/"},`
`,{type:"link",text:"https://proxypool.fly.dev/"},`
`,{type:"link",text:"http://8.135.91.61/"},`
`,{type:"link",text:"https://proxy.51798.xyz/"},`
`,{type:"link",text:"https://sspool.herokuapp.com/"},`
`,{type:"link",text:"https://us-proxypool.herokuapp.com/"},`
`,{type:"link",text:"https://eu-proxypool.herokuapp.com/"},`
`,{type:"link",text:"http://www.fuckgfw.tk/"},`
`,{type:"link",text:"https://etproxypool.ga/"},`
`,{type:"link",text:"https://free.kingfu.cf/"},`
`,{type:"link",text:"https://www.linbaoz.com/"},`
`,{type:"link",text:"https://www.qunima.cc/"},`
`,{type:"link",text:"https://www.joemt.tk/"},`
`,{type:"link",text:"https://smart.zxcyec.top/"},`
`,{type:"link",text:"http://158.101.93.192/"},`
`,{type:"link",text:"https://168.138.204.231/"},`
`,{type:"link",text:"http://111.229.220.110:5000/"},`
`,{type:"link",text:"https://hk.xhrzg2017.xyz/"},`
`,{type:"link",text:"http://39.106.12.141:8081/"},`
`,{type:"link",text:"http://213.188.195.234/"},`
`,{type:"link",text:"https://outseen.tk/"},`
`,{type:"link",text:"http://149.248.8.112/"},`
`,{type:"link",text:"https://161.35.5.88/"},`
`,{type:"link",text:"http://104.128.81.6:8080/"},`
`,{type:"link",text:"http://wxshi.top:9090/"},`
`,{type:"link",text:"http://104.168.95.4:8080/"},`
`,{type:"link",text:"https://proxy.whuboy.com/"},`
`,{type:"link",text:"https://zua426.cf/"},`
`,{type:"link",text:"https://185.161.70.4/"},`
`,{type:"link",text:"http://161.35.5.88:8082/"},`
`,{type:"link",text:"http://213.188.195.217/"},`
`,{type:"link",text:"https://de.sanshihui.win/"},`
`,{type:"link",text:"http://124.127.108.210:12345/"},`
`,{type:"link",text:"http://guobang.herokuapp.com/"},`
`,{type:"link",text:"https://1rmb.tk/"},`
`,{type:"link",text:"https://998988.xyz/"},`
`,{type:"link",text:"https://alexproxy003.herokuapp.com/"},`
`,{type:"link",text:"https://free.dswang.ga/"},`
`,{type:"link",text:"https://free.zdl.im/"},`
`,{type:"link",text:"https://fu.stgod.com/"},`
`,{type:"link",text:"https://jiedian.faka77.tk/"},`
`,{type:"link",text:"https://hellopool.herokuapp.com/"},`
`,{type:"link",text:"https://origamiboy.herokuapp.com/"},`
`,{type:"link",text:"https://proxy.suntiefeng.com/"},`
`,{type:"link",text:"https://proxypoolss.fly.dev/"},`
`,{type:"link",text:"https://ednovas.design/"},""]},{id:41,type:"message",text:[`\u7B80\u4ECB\u7F51\u5740\u8981\u798F\u5229
`,{type:"link",text:"https://1fu.li"},`
\u963F\u91CC\u4E91\u76D8\u56FE\u4E66\u8D44\u6E90\u5408\u96C6
`,{type:"link",text:"https://www.yeeach.com/post/1871"},`
\u963F\u91CC\u5C0F\u7AD9\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"http://alixiaozhan.xyz"},`
\u963F\u91CC\u4E91\u76D8\u5C0F\u7AD9\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"http://aliyunshare.cn"},`
\u4E91\u76D8\u8D44\u6E90\u5206\u4EAB\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://oook.xyz"},`
\u4E91\u76D8\u8D44\u6E90\u7F51
`,{type:"link",text:"https://www.yunpanziyuan.com"},`
TG\u8D44\u6E90\u7F51
`,{type:"link",text:"https://pp2x.com"},`
TG\u642C\u8FD0\u5DE5
`,{type:"link",text:"https://www.tgporter.net"},`
\u5929\u7FFC\u5C0F\u7AD9\u5929\u7FFC\u7F51\u76D8\u8D44\u6E90
`,{type:"link",text:"https://yun.hei521.cn"},`
\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u5BFC\u822A\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u5BFC\u822A
`,{type:"link",text:"https://aliyun.panpanr.com"},`
\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u6C38\u4E45\u6C47\u603B\u9875\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u5BFC\u822A
`,{type:"link",text:"http://alipan.vip"},`
OneGO\u5BFC\u822AOneDrive\u8D44\u6E90\u5BFC\u822A
`,{type:"link",text:"https://ionego.net"},`
\u76D8\u76D8\u8D44\u6E90\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.panpanr.com"},`
\u7F51\u76D8\u8D44\u6E90\u5206\u4EAB\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://aliwp.cn"},`
\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u8BBA\u575B\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://yunpan123.com"},`
\u627E\u8D44\u6E90\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"http://www.zhaoziyuan.top"},`
\u89C6\u754C\u8BBA\u575B\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://bbs.outfu.com"},`
\u963F\u91CC\u5927\u7AD9\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://pan.3636360.com"},`
alifree\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://alifree.net"},`
\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u5206\u4EAB\u7F51\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://ypfx.club"},`
\u4E00\u8DEF\u6709\u4F60\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://00000.host"},`
\u9759\u7136\u5C0F\u5C4B
`,{type:"link",text:"https://share.andrewjr.wang"},`
hao.xjj.show\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"http://hao.xjj.show"},`
\u61D2\u4EBA\u627E\u8D44\u6E90\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"http://lazymovie.me"},`
\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u5927\u6742\u70E91\u6D77\u91CF\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\uFF0C\u4EE5Excel\u5F62\u5F0F\u5206\u4EAB
`,{type:"link",text:"https://docs.qq.com/sheet/DVHpJVmRhT3ViV09Q"},`
\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u5927\u6742\u70E92\u6D77\u91CF\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\uFF0C\u4EE5Excel\u5F62\u5F0F\u5206\u4EAB
`,{type:"link",text:"https://www.kdocs.cn/l/st9zs7OC086m"},`
\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u5927\u6742\u70E93\u6D77\u91CF\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\uFF0C\u4EE5Excel\u5F62\u5F0F\u5206\u4EAB
`,{type:"link",text:"https://docs.qq.com/doc/DQ01tZG5DUnlmcGFJ"},`
\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u5927\u6742\u70E94\u6D77\u91CF\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\uFF0C\u4EE5Excel\u5F62\u5F0F\u5206\u4EAB
`,{type:"link",text:"https://docs.qq.com/sheet/DREh6WGNsVUV3V0dG"},`
\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u5927\u6742\u70E95\u6D77\u91CF\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\uFF0C\u4EE5Excel\u5F62\u5F0F\u5206\u4EAB
`,{type:"link",text:"https://docs.qq.com/sheet/DV2pydk5tWFp0TFFv"},`
\u514D\u8D39\u8003\u8BD5\u8BFE\u4EF6
`,{type:"link",text:"http://mfkskj.ys168.com"},`
\u8D44\u6E90\u6C47\u793E\u533A\u7684\u8D44\u6E90\u5E93
`,{type:"link",text:"http://ziyuanhuishequ.ys168.com"},`
\u9C7C\u679C\u5929\u6674\u7684\u8D44\u6E90\u5E93
`,{type:"link",text:"http://ygtq.uepan.com"},`
\u4E2D\u7F8E\u767E\u4E07\u7F51\u7AD966\u4E07\u518C\u7535\u5B50\u4E66\u8BBF\u95EE\u7801\uFF1At924\uFF0C
GoogleDrive\u8D44\u6E90
`,{type:"link",text:"https://115.com/s/sw313v13zx1#t924"},`
Freembook15.72\u4E07\u518C\u4E66\u7C4D\u8BBF\u95EE\u7801\uFF1Ai8e9
`,{type:"link",text:"https://115.com/s/sw3tgk73fwm#i8e9"},`
kindle\u4EBA\u5168\u96C6\u8BBF\u95EE\u7801\uFF1Ay7d4\uFF0C\u89E3\u538B\u5BC6\u7801\uFF1A123456
`,{type:"link",text:"https://115.com/s/sw31pj23fwm#y7d4"},`
Kindle\u4E66\u5E9348208\u518C\u63D0\u53D6\u7801\uFF1Aw7h7
`,{type:"link",text:"https://pan.baidu.com/s/1y6Bo6gIc3ZnPRxYOc43THQ"},`
\u8D44\u6E90\u6D77\u6D0B\uFF082.1T\uFF09\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\uFF0C\u6DB5\u76D6\u8BBE\u8BA1\u3001\u7F16\u7A0B\u3001\u5DE5\u7A0B\u3001\u6559\u80B2\u3001\u60C5\u5546\u3001\u793E\u79D1\u7C7B\u7B49\u5404\u884C\u5404\u4E1A\u7684\u8BFE\u7A0B
`,{type:"link",text:"https://www.aliyundrive.com/s/t3CFX1a7cjj"},`
15T\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/1HGQuTVa9zv"},`
770T\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\uFF0C\u5C06\u6587\u4EF6\u540E\u7F00\u7684JPG,\u66F4\u6539\u4E3Arar\u6216txt
`,{type:"link",text:"https://www.aliyundrive.com/s/Fc4ENYQKEHj"},`
331T\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\uFF0C\u5C06\u6587\u4EF6\u540E\u7F00\u7684JPG,\u66F4\u6539\u4E3Arar\u6216txt
`,{type:"link",text:"https://www.aliyundrive.com/s/sjrFLpPV4zJ"},`
ePUBee\u5C0F\u871C\u8702\u3001\u6211\u7684\u5C0F\u4E66\u5C4B\u7B49\u8D44\u6E90\u5408\u96C6\u963F\u91CC\u4E91\u76D8\u8D44\u6E90\uFF0C\u5305\u542BePUBee\u5C0F\u871C\u8702\u3001\u6211\u7684\u5C0F\u4E66\u5C4B\u7B49\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/bwDLGoPfWYV"},`
\u6700\u5927\u4E66\u5E93\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/tp7uS5xDZq9"},`
\u3010\u5F97\u5230\u30112016-2021.9\uFF086\u5E74\u7CBE\u6574\uFF09\u4F1A\u5458\u8BFE\u7A0B\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/HH5TavykihQ"},`
\u6A0A\u767B\u8BFB\u4E66\u4F1A2013-2020\u5929\u7FFC\u4E91\u76D8\u8D44\u6E90\uFF0C\u8BBF\u95EE\u7801\uFF1Atss2
`,{type:"link",text:"https://cloud.189.cn/t/JfQzQbANNBFr"},`
\u767E\u79D1\u5168\u4E66\u5408\u96C6\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://alywp.net/78nT5T"},`
\u5B57\u5178\u5408\u96C6\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/feurZwtFzQ1"},`
\u4E2D\u5C71\u56FE\u4E66\u9986\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://alywp.net/IfWVw"},`
\u5341\u4E07\u5341\u4E07\u518C\u56FE\u4E66\u5927\u5408\u96C6\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/MewDKUKWW9x"},`
\u7ECF\u5178\u9AD8\u54C1\u8D28\uFF1A5000\u5957\u4F18\u8D28\u4E66\u7C4D\uFF01\uFF08\u603B116.8GB)\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/4hqryMPi4q7"},`
\u4E00\u4E07\u672CPDF\u683C\u5F0F\u56FE\u4E66\u5927\u5408\u96C6
`,{type:"link",text:"https://www.aliyundrive.com/s/EGuuBYEcZug"},`
\u673A\u68B0\u5DE5\u4E1A\u51FA\u7248\u793E6000\u518C\u514D\u8D39\u6B63\u7248\u56FE\u4E66\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/xCdPvUn4byQ"},`
\u6E05\u534E\u5927\u5B66\u51FA\u7248\u793E2237\u518C\u514D\u8D39\u6B63\u7248\u56FE\u4E66\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/BmySGTGCqbB"},`
\u4E66\u7C4D\u5927\u5168\u96C6\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/svQkkGyJmzt"},`
34\u7C7B\u7535\u5B50\u4E66Epub
`,{type:"link",text:"https://www.aliyundrive.com/s/gzw7qp4stw4"},`
\u6A0A\u767B\u8BFB\u4E66\u4F1A-2562\u4EFD\u3010141GB\u3011\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/hVhifmos8YG"},`
\u6A0A\u767B\u7535\u5B50\u4E66\u5404\u79CD\u683C\u5F0F\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/jPavQRS5qaB"},`
\u559C\u9A6C\u62C9\u96C5100\u90E8\u4ED8\u8D39\u6709\u58F0\u8BFB\u7269\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/s1Cxi4NGnnL"},`
\u4E66\u5E93\u5408\u96C6\u8BBF\u95EE\u7801\uFF1Aw4d5
`,{type:"link",text:"https://115.com/s/swnhqmd36bj?password=w4d5"},`
\u7ECF\u5178\u7535\u5B50\u4E66\u3010\u73CD\u85CF\u3011\u8BBF\u95EE\u5BC6\u7801\uFF1A338766\uFF0C\u8BDA\u901A\u7F51\u76D8\u8D44\u6E90
`,{type:"link",text:"https://089u.com/d/3843664-44324790-73fb97"},`
\u767E\u4E07\u6559\u7A0B\u8BBF\u95EE\u7801\uFF1A2svg
`,{type:"link",text:"https://cloud.189.cn/web/share?code=JRzayiFneURf"},`
\u559C\u9A6C\u62C9\u96C5+\u5F97\u5230\u6559\u7A0B\u5408\u96C6\u8BBF\u95EE\u7801\uFF1A3lpc
`,{type:"link",text:"https://cloud.189.cn/web/share?code=e6ZZRbZNzMNn"},`
\u77E5\u4E4Elive170\u97F3\u9891&\u77E5\u4E4E\u76D020\u7BC7\u8BBF\u95EE\u7801:vuc4\uFF0C\u5929\u7FFC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://cloud.189.cn/t/V7vqa2Ibe6nm"},`
200\u4E2A\u77E5\u4E4E\u6536\u8D39LIVE\u7CBE\u54C1\u5185\u5BB9\u5408\u96C6\u8BBF\u95EE\u7801:qae2\uFF0C\u5929\u7FFC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://cloud.189.cn/web/share?code=meI3iqVNnuUf"},`
\u56FE\u7075\u7A0B\u5E8F\u8BBE\u8BA1\u4E1B\u4E66302\u672C\u5408\u96C6\uFF08PDF\uFF09\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/YVKx3rs6HCH"},`
\u4E2A\u4EBA\u6210\u957F\u7C7B\u8D44\u6599\u5408\u96C6\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/oXf51kSoBcW"},`
\u4E24\u6027\u5173\u7CFB\u8D44\u6599\u5408\u96C6\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/mX966r3kXWx"},`
\u8FD0\u52A8\u5065\u8EAB\u6559\u7A0B\u5408\u96C6\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/DCkcjGqGTkc"},`
keep\u8FD0\u52A8\u5065\u8EAB\u3010\u5408\u96C6\u3011\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://alywp.net/7sz5QFB7"},`
\u4E2A\u4EBACalibre\u4E66\u5E93\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.yeeach.com/post/1883"},`
2013~2020\u5E74\u4E07\u672C\u5C0F\u8BF4\u5408\u96C6
`,{type:"link",text:"https://www.aliyundrive.com/s/698axUAdTB4"},`
8000\u672C\u7535\u5B50\u4E66
`,{type:"link",text:"https://www.aliyundrive.com/s/QS1JLB77GkT"},`
\u7CBE\u7EC6\u5206\u7C7B\u7535\u5B50\u4E66
`,{type:"link",text:"https://www.aliyundrive.com/s/u1m8EqoDJ6T"},`
\u6C57\u9752\u5802\u4E1B\u4E66(\u517134\u518C)
`,{type:"link",text:"https://www.aliyundrive.com/s/T48ciZNH9iV"},`
860\u672C\u6444\u5F71\u4E66\u7C4D\u963F\u91CC\u4E91\u76D8\u8D44\u6E90
`,{type:"link",text:"https://www.aliyundrive.com/s/fM8Mc8kXcPs"},`
\u8FC5\u96F7\u5C0F\u7AD9\u8FC5\u96F7\u5B98\u65B9\u51FA\u54C1\u8D44\u6E90\u5C0F\u7AD9
`,{type:"link",text:"https://zhan.xunlei.com"},`
\u4F18\u4F18\u5149\u76D8\u7F51\u5149\u76D8\u8D44\u6E90
`,{type:"link",text:"http://uubooks.cn"},""]},{id:43,type:"message",text:[`\u5C0F\u9E1F\u4E91
1000G/30\u5929
`,{type:"text_link",text:`\u6CE8\u518C
`,href:"https://niaoyun.fun/"},`\u6CE8\u518C\u8FDB\u53BB\u627E\u5230\u9080\u8BF7\uFF0C\u7528\u81EA\u5DF1\u7684\u9080\u8BF7\u94FE\u63A5\u53EF\u4EE5\u83B7\u5F971\u5143\uFF0C\u53BB\u8D2D1\u5143/1000G\u5957\u9910\u5373\u53EF
\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7B7E\u5230\uFF0C\u53EF\u4EE55G\u5DE6\u53F3\u81EA\u5DF1\u4F7F\u7528\u5373\u53EF`]},{id:44,type:"message",text:[`\u673A\u573A\uFF1AV2\u4E91\uFF08\u514D\u6D41\uFF09

\u5730\u5740\uFF1A`,{type:"text_link",text:"\u6CE8\u518C",href:"https://cwv587.com/auth/register?code=k0mJ"},"\uFF0C",{type:"text_link",text:`\u7FA4\u7EC4

`,href:"https://t.me/cwv5876"},`\u{1F4A0}\u7279\u8272\uFF1A\u65B0\u7528\u6237\u901A\u8FC7\u9891\u9053\u6CE8\u518C\u6BCF\u4E2A\u8D26\u53F7\u53EF\u514D\u8D39\u8BD5\u7528\u521D\u7EA7\u8282\u70B9\u4EE5\u53CA1G\u521D\u59CB\u6D41\u91CF\uFF0C\u8BD5\u7528\u8282\u70B9\u4E3A0\u500D\u7387\uFF0C\u53EF\u7B7E\u5230\u53E0\u52A0\u6D41\u91CF\uFF0C\u6709\u591A\u6761\u9AD8\u901F\u4E2D\u8F6C\u7EBF\u8DEF\u4EE5\u53CA\u56FD\u5185\u8282\u70B9\u53EF\u9009\u7528\uFF0C\u89E3\u9501\u6D41\u5A92\u4F53\uFF0C\u66F4\u5FEB\u66F4\u7A33\u5B9A\uFF0C\u6B22\u8FCE\u5404\u4F4D\u65B0\u7528\u6237\u6CE8\u518C\u5C1D\u8BD5\u3002

\u5907\u6CE8\uFF1A\u6CE8\u518C\u8D26\u53F7\u4FDD\u6301\u7B7E\u5230\u6C38\u4E45\u53EF\u4F7F\u7528\uFF0C\u7F51\u7AD9\u5171\u4EAB\u8D26\u53F7\u5DF2\u7ECF\u66F4\u65B0TG\u4EE3\u7406NetflixPornHubXvideos\u7B49\u4F1A\u5458\u8D26\u53F7\u5927\u5BB6\u81EA\u884C\u53BB\u590D\u5236\u767B\u5165\u3002`]},{id:49,type:"message",text:[`SpaceZ
`,{type:"text_link",text:`\u6CE8\u518C\u5730\u5740
`,href:"https://www.spacez.cloud/"},"2G/1\u5929/\u8BD5\u7528\u88C5/",{type:"bold",text:`\u514D\u90AE\u7BB1\u9A8C\u8BC1
\u514D\u7FFB`},",\u53EF\u505A\u4E34\u65F6\u6025\u7528"]},{id:50,type:"message",text:[`MALIO
`,{type:"text_link",text:`\u6CE8\u518C\u5730\u5740
`,href:"https://www.dagewokuaitule.icu/"},"1G/2\u5929/vip1/",{type:"bold",text:`\u514D\u90AE\u7BB1\u9A8C\u8BC1
\u514D\u7FFB`},",\u53EF\u505A\u4E34\u65F6\u6025\u7528"]},{id:52,type:"message",text:[`MarsLink
`,{type:"text_link",text:`\u6CE8\u518C\u5730\u5740
`,href:"https://ss.marslink.org/"},"50G/30\u5929/\u4F53\u9A8C\u6240\u6709\u8282\u70B9/",{type:"bold",text:`\u514D\u90AE\u7BB1\u9A8C\u8BC1
\u514D\u7FFB`},""]},{id:53,type:"message",text:[`\u5728\u7EBF\u7535\u5F71\u7F51\u7AD9\uFF0C\u6392\u540D\u4E0D\u5206\u5148\u540E

\u7F51\u7AD9\u5217\u8868
4K\u5C4B\uFF1A`,{type:"link",text:"http://www.kkkkwu.com"},`
4K\u9E2D\uFF1A`,{type:"link",text:"https://yanetflix.com"},`
8\u53F7\u5F71\u9662\uFF1A`,{type:"link",text:"http://www.8hyyw.com"},`
91\u770B\u5267\uFF1A`,{type:"link",text:"https://91kanju.com"},`
AGE\u52A8\u6F2B\uFF1A`,{type:"link",text:"https://www.agefans.cc"},`
km\u5F71\u89C6\uFF1A`,{type:"link",text:"https://www.mkvdo.com"},`
Libvio\uFF1A`,{type:"link",text:"https://www.libvio.com"},`
No\u5F71\u89C6\uFF1A`,{type:"link",text:"https://www.novipnoad.com"},`
V6\u7535\u5F71\u7248\uFF1A`,{type:"link",text:"https://www.66s.cc"},`
\u7247\u5427\u5F71\u9662\uFF1A`,{type:"link",text:"https://www.pianba.net"},`
\u5916\u5267\u7F51\uFF1A`,{type:"link",text:"https://www.waiju.cc/index.html"},`
\u5168\u80FD\u5F71\u89C6\uFF1A`,{type:"link",text:"http://www.qnvod.net"},`
\u5728\u7EBF\u4E4B\u5BB6\uFF1A`,{type:"link",text:"https://www.zxzj.me"},`
\u4F4E\u7AEF\u5F71\u89C6\uFF1A`,{type:"link",text:"https://ddys.tv"},`
\u5B8C\u7F8E\u770B\u770B\uFF1A`,{type:"link",text:"https://www.wanmeikk.me"},`
\u5948\u98DE\u661F\u5F71\u89C6\uFF1A`,{type:"link",text:"https://nfxhd.com"},`
\u5948\u83F2\u5F71\u89C6\uFF1A`,{type:"link",text:"https://www.nfmovies.com"},`
\u59AE\u53EF\u52A8\u6F2B\uFF1A`,{type:"link",text:"http://www.nicotv.me/dongman"},`
\u6CE5\u5DF4\u5F71\u9662\uFF1A`,{type:"link",text:"https://www.mudvod.tv"},`
\u963F\u623F\u5F71\u89C6\uFF1A`,{type:"link",text:"https://bwl87.com"},`
\u5357\u74DC\u7535\u5F71\uFF1A`,{type:"link",text:"http://www.nangua55.com"},`
\u770B\u770B\u5C4B\uFF1A`,{type:"link",text:"https://www.kankanwu.com"},`
\u7F8E\u5267\u5929\u5802\uFF1A`,{type:"link",text:"https://www.aimeijutt.com"},`
\u7F8E\u5267\u7F51\uFF1A`,{type:"link",text:"https://mjw21.com"},`
\u5510\u4EBA\u8857\u5F71\u9662\uFF1A`,{type:"link",text:"https://www.tangrenjie.tv"},`
\u559D\u8336\u5F71\u89C6\uFF1A`,{type:"link",text:"http://aaqqs.com"},`
\u7231\u770B\u7F8E\u5267\uFF1A`,{type:"link",text:"https://www.akmeiju.com"},`
\u7231\u7F8E\u5267\uFF1A`,{type:"link",text:"https://agmov.com"},`
\u7231\u8FEA\u5F71\u89C6\uFF1A`,{type:"link",text:"http://aidi.tv"},`
\u6781\u54C1\u5F71\u89C6\uFF1A`,{type:"link",text:"https://www.jpysvip.net"},`
\u7535\u5F71\u5148\u751F\uFF1A`,{type:"link",text:"http://www.dianyingim.com"},`
\u54D4\u5600\u5F71\u89C6\uFF1A`,{type:"link",text:"https://www.mp4er.com"},`
\u5F71\u89C6\u996DTV\uFF1A`,{type:"link",text:"https://www.ysftv.com"},`
\u97E9\u8FF7TV\uFF1A`,{type:"link",text:"https://www.hmtv.me"},`
CCTV\uFF1A`,{type:"link",text:"http://tv.cctv.com/live/m/"},`
\u725B\u89C6\u7F51\u5728\u7EBF\u514D\u8D39\u7F51\u7EDC\u7535\u89C6\u76F4\u64AD\u5E73\u53F0\uFF1A`,{type:"link",text:"https://www.chaojidianshi.net/"},""]},{id:55,type:"message",text:[`\u4E00\u767E\u591A\u5F71\u89C6VIP\u89C6\u9891\u89E3\u6790\u63A5\u53E3\uFF0C\u63A5\u53E3\u652F\u6301\u89E3\u6790\u4F18\u9177\u3001\u7231\u5947\u827A\u3001\u817E\u8BAF\u3001\u8292\u679C\u3001\u4E50\u89C6\u3001\u641C\u72D0\u3001MP4\u3001M3U8\u3001FLV\u7B49\u7B49\uFF0C
\u9700\u8981\u81EA\u6D4B\uFF0C\u6709\u53EF\u80FD\u6709\u5931\u6548\u7684\uFF0C\u521A\u521A\u6D4B\u8BD5\u628A\u53EF\u7528\u7684\u7B5B\u9009\u4E86\u4E00\u904D
`,{type:"link",text:"https://2.08bk.com/?url="},`
`,{type:"link",text:"https://www.8090g.cn/jiexi/?url="},`
`,{type:"link",text:"https://www.administratorw.com/admin.php?url="},`
`,{type:"link",text:"https://660e.com/?url="},`
`,{type:"link",text:"https://www.pangujiexi.com/pangu/?url="},`
`,{type:"link",text:"https://jiexi8.com/vip/index.php?url="},`
`,{type:"link",text:"https://api.bingdou.net/?url="},`
`,{type:"link",text:"https://jx.idc126.net/jx/?url="},`
`,{type:"link",text:"https://jqaaa.com/jx.php?url="},`
`,{type:"link",text:"https://www.xymav.com/?url="},`
`,{type:"link",text:"http://api.bbbbbb.me/jx/?url="},`
`,{type:"link",text:"http://api.bbbbbb.me/yunjx/?url="},`
`,{type:"link",text:"http://api.bbbbbb.me/vip/?url="},`
`,{type:"link",text:"http://api.bbbbbb.me/yun/?url="},`
`,{type:"link",text:"http://api.baiyug.vip/index.php?url="},`
`,{type:"link",text:"http://vip.jlsprh.com/?url="},`
`,{type:"link",text:"http://jx.598110.com/?url="},`
`,{type:"link",text:"http://jx.598110.com/index.php?url="},`
`,{type:"link",text:"http://vip.jlsprh.com/index.php?url="},`
`,{type:"link",text:"http://api.nobij.top/jx/?url="},`
`,{type:"link",text:"https://jx.618g.com/?url="},`
`,{type:"link",text:"http://tv.wandhi.com/go.html?url="},`
`,{type:"link",text:"https://www.1717yun.com/jx/ty.php?url="},`
`,{type:"link",text:"https://cdn.yangju.vip/k/?url="},`
`,{type:"link",text:"https://api.sigujx.com/?url="},`
`,{type:"link",text:"https://vip.jaoyun.com/index.php?url="},`
`,{type:"link",text:"https://api.bbbbbb.me/jx/?url="},`
`,{type:"link",text:"https://vip.mpos.ren/v/?url="},`
`,{type:"link",text:"https://jx.598110.com/index.php?url="},`
`,{type:"link",text:"https://www.kpezp.cn/jlexi.php?url="},`
`,{type:"link",text:"https://api.927jx.com/vip/?url="},`
`,{type:"link",text:"https://api.tv920.com/vip/?url="},`
`,{type:"link",text:"https://api.lhh.la/vip/?url="},`
`,{type:"link",text:"https://api.8bjx.cn/?url="},`
`,{type:"link",text:"https://mcncn.cn/?url="},`
`,{type:"link",text:"https://jx.f41.cc/?url="},`
`,{type:"link",text:"https://www.ckmov.vip/api.php?url="},`
`,{type:"link",text:"https://www.33tn.cn/?url="},`
`,{type:"link",text:"https://jx.1ff1.cn/?url="},`
`,{type:"link",text:"https://py.ha12.xyz/sos/index.php?url="},`
`,{type:"link",text:"http://www.82190555.com/index/qqvod.php?url="},`
`,{type:"link",text:"http://www.wmxz.wang/video.php?url="},`
`,{type:"link",text:"https://www.1717yun.com/jiexi/?url="},`
`,{type:"link",text:"http://jqaaa.com/jx.php?url="},`
`,{type:"link",text:"http://api.lequgirl.com/?url="},`
`,{type:"link",text:"http://api.xiuyao.me/jx/?url="},`
`,{type:"link",text:"https://beaacc.com/api.php?url="},`
`,{type:"link",text:"https://www.kkflv.com/?url="},`
`,{type:"link",text:"http://jx.598110.com/zuida.php?url="},`
`,{type:"link",text:"http://jx.598110.com/duo/index.php?url="},`
`,{type:"link",text:"http://api.bbbbbb.me/jiexi/?url="},`
`,{type:"link",text:"https://www.administratorw.com/video.php?url="},`
`,{type:"link",text:"http://beaacc.com/api.php?url="},`
`,{type:"link",text:"https://jx.lache.me/cc/?url="},`
`,{type:"link",text:"https://www.pangujiexi.cc/jiexi.php?url="},`
`,{type:"link",text:"https://vip.qi71.cn/?url="},`
`,{type:"link",text:"https://www.nxflv.com/?url="},`
`,{type:"link",text:"https://jx.618ge.com/jx/5.php?url="},`
`,{type:"link",text:"https://vip.jlsprh.com/?url="},`
`,{type:"link",text:"https://api.flvsp.com/?url="},`
`,{type:"link",text:"https://www.administrator5.com/admin.php?url="},`
`,{type:"link",text:"http://vip.26db.cn/b/?url="},`
`,{type:"link",text:"http://vip.26db.cn/c/?url="},`
`,{type:"link",text:"http://vip.26db.cn/g/?url="},`
`,{type:"link",text:"http://vip.26db.cn/f/?url="},`
`,{type:"link",text:"http://vip.26db.cn/a/?url="},`
`,{type:"link",text:"http://jx.idc126.net/jx/?url="},`
`,{type:"link",text:"http://v.yhgou.cc/2019/?url="},`
`,{type:"link",text:"http://okjx.cc/?url="},`
`,{type:"link",text:"https://api.sigujx.com/jx/?url="},`
`,{type:"link",text:"http://api.nobij.top/?url="},`
`,{type:"link",text:"https://www.jiexila.com/?url="},`
`,{type:"link",text:"https://jx.fuxing56.com/jiexi/?url="},`
`,{type:"link",text:"https://jx.youyitv.com/?url="},`
`,{type:"link",text:"https://www.qianyicp.com/jiexi/index.php?url="},`
`,{type:"link",text:"http://vip.tuidu.com/play/?url="},`
`,{type:"link",text:"http://www.333zx.cn/0jiexi/8090/?url="},`
`,{type:"link",text:"https://www.qianyicp.com/jiexi/?url="},`
`,{type:"link",text:"https://yun.nxflv.com/?url="},`
`,{type:"link",text:"http://j.zz22x.com/jx/?url="},`
`,{type:"link",text:"https://api.3jx.top/vip/?url="},`
`,{type:"link",text:"https://jiexi.380k.com/?url="},`
`,{type:"link",text:"http://jqaaa.com/jq3/?url="},`
`,{type:"link",text:"http://dhyjiexi.arpps.com/?url="},`
`,{type:"link",text:"http://s1y2.com/?url="},`
`,{type:"link",text:"https://www.cuan.la/?url="},`
`,{type:"link",text:"https://jqaaa.com/jq3/?url=&url="},`
`,{type:"link",text:"http://jx.xdiaosi.com/?url="},`
`,{type:"link",text:"http://www.4080jx.cc/jx/?url="},`
`,{type:"link",text:"https://jx.70808.net/?url="},`
`,{type:"link",text:"http://jx.rdhk.net/?url="},`
`,{type:"link",text:"https://api.xdiaosi.com/?url="},`
`,{type:"link",text:"http://jqaaa.com/jq3/?url=&url="},`
`,{type:"link",text:"http://jx.52a.ink/?url="},`
`,{type:"link",text:"http://www.1717yun.com/jx/ty.php?url="},`
`,{type:"link",text:"http://api.taovb.com/?url="},`
`,{type:"link",text:"https://api.927jx.com/vip/jx.php?url="},`
`,{type:"link",text:"http://cdn.yangju.vip/k/?url="},`
`,{type:"link",text:"http://www.sfsft.com/admin.php?url="},`
`,{type:"link",text:"https://api.jiexi.la/?url="},`
`,{type:"link",text:"https://atyys.com/jx.php?id=0&url="},`
`,{type:"link",text:"http://jx.x-99.cn/m3u8.php?url="},`
`,{type:"link",text:"http://api.3jx.top/vip/?url="},`
`,{type:"link",text:"http://www.82190555.com/video.php?url="},`
`,{type:"link",text:"http://api.drgxj.com/jiexi/?url="},`
`,{type:"link",text:"https://api.daidaitv.com/index/?url="},`
`,{type:"link",text:"https://www.h8jx.com/jiexi.php?url="},`
`,{type:"link",text:"https://api.653520.top/vip/?url="},`
`,{type:"link",text:"https://www.8090g.cn/beiyong/?url="},`
`,{type:"link",text:"http://jx.4080jx.cc/?url="},`
`,{type:"link",text:"http://vip.baores.com/?url="},`
`,{type:"link",text:"http://www.47jx.com/?url="},`
`,{type:"link",text:"https://vip.66parse.club/?url="},`
`,{type:"link",text:"https://www.8090g.cn/ceshi/?url="},`
`,{type:"link",text:"https://api.52jiexi.top/?url="},`
`,{type:"link",text:"https://jx5.178du.com//p1//?url="},`
`,{type:"link",text:"https://jx.178du.com/jx2.php?url="},`
`,{type:"link",text:"https://jx.kingtail.xyz/?url="},`
`,{type:"link",text:"https://api.78sy.cn/?url="},`
`,{type:"link",text:"https://okjx.cc/?url="},`
`,{type:"link",text:"https://jx.ivito.cn/?url="},`
`,{type:"link",text:"http://www.333zx.cn/0jiexi/nuoxun/?url="},`
`,{type:"link",text:"https://5.5252e.com/jx.php?url="},`
`,{type:"link",text:"http://api.bbbbbb.me/playm3u8/?url="},`
`,{type:"link",text:"https://api.v6.chat/?url="},`
`,{type:"link",text:"https://v.7cyd.com/vip/?url="},`
`,{type:"link",text:"https://5.nmgbq.com/jq1/?url="},""]},{id:56,type:"message",text:[`\u673A\u573A:72VPN
`,{type:"text_link",text:`\u6CE8\u518A\u5730\u5740
`,href:"https://dy.72vpn.xyz/#/register?code=C6sfCrSj"},"200G/1\u5929/\u6708\u5361/",{type:"bold",text:"500M\u5E26\u5BBD\u8DD1\u6EE1"},""]},{id:57,type:"message",file:"files/\u7834\u89E3\u7248vpn.apk",mime_type:"application/vnd.android.package-archive",text:[{type:"strikethrough",text:`\u5DF2\u7ECF\u5954\u653E\u4E00\u4E2A\u6708\u4E86
\u901F\u5EA61M\u5DE6\u53F3
\u9002\u5408\u4F5C\u4E3A\u5907\u7528`},""]},{id:58,type:"message",text:[`\u767D\u5AD6\u9891\u9053\u6307\u5357\uFF1A

`,{type:"bold",text:`\u672C\u9891\u9053\u7684\u704C\u6C34\u7FA4
`},{type:"link",text:"https://t.me/anranbpbbs"},`

`,{type:"bold",text:`1\u3001\u767D\u5AD6\u8FC7\u7A0B\u4E2D\u9700\u8981\u771F\u5B9E\u90AE\u7BB1\u600E\u4E48\u529E
`},`\u5BF9\u4E8E\u9700\u8981\u771F\u5B9E\u90AE\u7BB1\u9A8C\u8BC1\u7684\uFF0C\u5927\u5BB6\u53EF\u4EE5\u4E0B\u8F7D\u624B\u673A\u7248\u7684\u7F51\u6613\u90AE\u7BB1\u5927\u5E08\uFF0C\u53EF\u4EE5\u4E0D\u9650\u91CF\u6CE8\u518C163\u7684\u90AE\u7BB1

`,{type:"bold",text:"2\u3001"},"\u5404\u79CD\u8D85\u4F4E\u4EF7\u4F1A\u5458\uFF1A",{type:"text_link",text:"Anran\u6742\u8D27\u94FA\uFF0C",href:"http://anranshop.ga/"},`\u4F18\u9177\u6708\u4EC5\u97003\u5143\uFF0C\u767E\u5EA6\u7F51\u76D8svip1\u5143\u8D77

`,{type:"bold",text:"3\u3001"},"\u963F\u91CC\u7F51\u76D8\u8D44\u6E90\u641C\u7D22\uFF1A\u516C\u4F17\u53F7\uFF1A\u5F73\u4E8D\u8BF4\uFF0C\u53D1\u9001",{type:"bold",text:"\u963F\u91CC\u8D44\u6E90\u540D\u79F0"},`\u5373\u53EF

4\u3001`,{type:"text_link",text:`\u767D\u5AD6\u96F6\u82B1\u94B1

`,href:"https://telegra.ph/%E7%99%BD%E5%AB%96%E9%9B%B6%E8%8A%B1%E9%92%B1-12-19"},`\u53D1\u7684\u5185\u5BB9\u90FD\u662F\u767D\u5AD6\uFF0C\u52FF\u8981\u5439\u6BDB\u6C42\u75B5\uFF0C\u767D\u5AD6\u7684\u6C38\u8FDC\u662F\u6700\u597D\u7684\uFF0C\u4E3A\u4EC0\u4E48\u8981\u5206\u4EAB\u8FD9\u4E9B\u554A\uFF0C\u6CA1\u5565\u4E3A\u4EC0\u4E48\uFF0C\u5C31\u662F\u73A9\uFF0C\u5C31\u662F\u5F00\u5FC3\u{1F31D}

`,{type:"bold",text:`\u5408\u4F5C\u6216\u8005\u5206\u4EAB\u767D\u5AD6\u4FE1\u606F\uFF0C\u70B9\u6B64pm\u6211

\u6709\u4EC0\u4E48\u63A8\u8350\u6216\u5408\u4F5C\u70B9\u6B64\u8054\u7CFB\u6211`},""]},{id:59,type:"service",actor:"\u6211\u7231\u767D\u5AD6",actor_id:"channel1504326588",action:"pin_message",message_id:58,text:""},{id:60,type:"message",text:`ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTplN2E3NjUzNC1lNzQ3LTQ2ODktODRlZS03NDc1ZDhlODEwZThAY20uY3Bwem9uZS5jb206MzUwMDE=#%5bSS%5d+%e9%a6%99%e6%b8%af+%e8%8a%82%e7%82%b901
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTplN2E3NjUzNC1lNzQ3LTQ2ODktODRlZS03NDc1ZDhlODEwZThAY20uY3Bwem9uZS5jb206MzUwMDI=#%5bSS%5d+%e9%a6%99%e6%b8%af+%e8%8a%82%e7%82%b902
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTplN2E3NjUzNC1lNzQ3LTQ2ODktODRlZS03NDc1ZDhlODEwZThAY20uY3Bwem9uZS5jb206MzUwMDM=#%5bSS%5d+%e9%a6%99%e6%b8%af+%e8%8a%82%e7%82%b903
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTplN2E3NjUzNC1lNzQ3LTQ2ODktODRlZS03NDc1ZDhlODEwZThAY20uY3Bwem9uZS5jb206MzUwMDQ=#%5bSS%5d+%e9%a6%99%e6%b8%af+%e8%8a%82%e7%82%b904
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTplN2E3NjUzNC1lNzQ3LTQ2ODktODRlZS03NDc1ZDhlODEwZThAY20uY3Bwem9uZS5jb206MzUwMDU=#%5bSS%5d+%e9%a6%99%e6%b8%af+%e8%8a%82%e7%82%b905
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIltWMnJheV0g6aaZ5rivIOiKgueCuTAxIiwNCiAgImFkZCI6ICJjbS5jcHB6b25lLmNvbSIsDQogICJwb3J0IjogIjIzMzMzIiwNCiAgImlkIjogImU3YTc2NTM0LWU3NDctNDY4OS04NGVlLTc0NzVkOGU4MTBlOCIsDQogICJhaWQiOiAiMSIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiL2hrMDEiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIltWMnJheV0g6aaZ5rivIOiKgueCuTAyIiwNCiAgImFkZCI6ICJjbS5jcHB6b25lLmNvbSIsDQogICJwb3J0IjogIjIzMzMzIiwNCiAgImlkIjogImU3YTc2NTM0LWU3NDctNDY4OS04NGVlLTc0NzVkOGU4MTBlOCIsDQogICJhaWQiOiAiMSIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiL2hrMDIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIltWMnJheV0g6aaZ5rivIOiKgueCuTAzIiwNCiAgImFkZCI6ICJjbS5jcHB6b25lLmNvbSIsDQogICJwb3J0IjogIjIzMzMzIiwNCiAgImlkIjogImU3YTc2NTM0LWU3NDctNDY4OS04NGVlLTc0NzVkOGU4MTBlOCIsDQogICJhaWQiOiAiMSIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiL2hrMDMiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIltWMnJheV0g6aaZ5rivIOiKgueCuTA0IiwNCiAgImFkZCI6ICJjbS5jcHB6b25lLmNvbSIsDQogICJwb3J0IjogIjIzMzMzIiwNCiAgImlkIjogImU3YTc2NTM0LWU3NDctNDY4OS04NGVlLTc0NzVkOGU4MTBlOCIsDQogICJhaWQiOiAiMSIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiL2hrMDQiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIltWMnJheV0g6aaZ5rivIOiKgueCuTA1IiwNCiAgImFkZCI6ICJjbS5jcHB6b25lLmNvbSIsDQogICJwb3J0IjogIjIzMzMzIiwNCiAgImlkIjogImU3YTc2NTM0LWU3NDctNDY4OS04NGVlLTc0NzVkOGU4MTBlOCIsDQogICJhaWQiOiAiMSIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiL2hrMDUiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIg0KfQ==
trojan://e7a76534-e747-4689-84ee-7475d8e810e8@cm.cppzone.com:30001?sni=tro-hk01.ex.cppzone.com#%5bTrojan%5d+%e9%a6%99%e6%b8%af+%e8%8a%82%e7%82%b901
trojan://e7a76534-e747-4689-84ee-7475d8e810e8@cm.cppzone.com:30002?sni=tro-hk02.ex.cppzone.com#%5bTrojan%5d+%e9%a6%99%e6%b8%af+%e8%8a%82%e7%82%b902
trojan://e7a76534-e747-4689-84ee-7475d8e810e8@cm.cppzone.com:30003?sni=tro-hk03.ex.cppzone.com#%5bTrojan%5d+%e9%a6%99%e6%b8%af+%e8%8a%82%e7%82%b903
trojan://e7a76534-e747-4689-84ee-7475d8e810e8@cm.cppzone.com:30004?sni=tro-hk04.ex.cppzone.com#%5bTrojan%5d+%e9%a6%99%e6%b8%af+%e8%8a%82%e7%82%b904
trojan://e7a76534-e747-4689-84ee-7475d8e810e8@cm.cppzone.com:30005?sni=tro-hk05.ex.cppzone.com#%5bTrojan%5d+%e9%a6%99%e6%b8%af+%e8%8a%82%e7%82%b905`},{id:61,type:"message",text:[`\u5B89\u5353\u8F6F\u4EF6\u56FD\u5916\u4E0B\u8F7D\u7F51\u7AD9\uFF1A
`,{type:"link",text:"https://apkcombo.com/"},`
`,{type:"link",text:"https://www.apkmirror.com/"},`
`,{type:"link",text:"https://www.apklinker.com/"},`
`,{type:"link",text:"https://apk4all.com/home/"},`
`,{type:"link",text:"https://en.uptodown.com/android"},`
`,{type:"link",text:"https://en.aptoide.com/"},`
`,{type:"link",text:"https://m.apkpure.com/"},""]},{id:62,type:"message",text:[{type:"text_link",text:"TikVPN",href:"https://www.tikvpn.com/sign/signup"},"",{type:"bold",text:"\u56DB\u4E2A\u6708VIP\u4F1A\u5458\u793C\u54C1\u7801"},`:L3HQR-BXVBD-MSQQZ\uFF0C4K\u79D2\u5F00\uFF01
\u53EF\u60DC\u8FDE\u63A5\u524D\u8981\u53E6\u5F00\u4E00VPN`]},{id:63,type:"message",text:[{type:"bold",text:`\u603B\u8BA123\u4E2A\u5728\u7EBF\u89C6\u9891\u89E3\u6790\u7F51\u7AD9\uFF0C\u90E8\u5206\u89E3\u6790\u7AD9\u8FD8\u652F\u6301\u641C\u7D22\u3001\u64AD\u653E\u5168\u7F51VIP\u5F71\u89C6\u5267
`},"1\u3001",{type:"link",text:"http://czjx8.com/"},`\u8239\u957F\u89E3\u6790\uFF08\u542B3\u4E2A\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09
2\u3001`,{type:"link",text:"http://www.gddyu.com/"},`\u591F\u4F4E\u8C03\u89E3\u6790\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u30018\u4E2A\u63A5\u53E3\u4F46\u90E8\u5206\u5931\u6548\u3001\u652F\u6301\u641C\u7D22\uFF09
3\u3001`,{type:"link",text:"http://www.sp288.com/"},`\u571F\u8C6A\u89E3\u6790\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u30018\u4E2A\u63A5\u53E3\u4F46\u90E8\u5206\u5931\u6548\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09
4\u3001`,{type:"link",text:"https://www.41478.net/"},`\u4E91\u7F51\u89E3\u6790\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u3001\u5355\u63A5\u53E3\u3001\u652F\u6301\u641C\u7D22\uFF09
5\u3001`,{type:"link",text:"https://www.ikukk.com/"},`\u7231\u9177\u770B\u770B\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u3001\u5355\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09
6\u3001`,{type:"link",text:"http://www.dayunbo.com/v/"},`\u5927\u4E91\u64AD\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u300110\u4E2A\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09

7\u3001`,{type:"link",text:"http://down.lansedongli.com/filmvip/"},`\u4E07\u80FDVIP\u89C6\u9891\u5728\u7EBF\u89E3\u6790\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u30013\u4E2A\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09
8\u3001`,{type:"link",text:"http://tool.bitefu.net/video/"},`\u7EAF\u51C0\u514D\u8D39\u89E3\u6790\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u300117\u4E2A\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09

9\u3001`,{type:"link",text:"https://www.administrator5.com/"},`\u65E0\u540D\u5C0F\u7AD9\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u3001\u5355\u63A5\u53E3\u3001\u652F\u6301\u641C\u7D22\uFF09
10\u3001`,{type:"link",text:"http://www.niuga.cn/"},`\u725B\u560E\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u30017\u4E2A\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09
11\u3001`,{type:"link",text:"http://www.588230.com/v/"},`\u5357\u74DC\u89C6\u9891\u89E3\u6790\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u300126\u4E2A\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09
12\u3001`,{type:"link",text:"http://www.freeget.org/"},`freeget\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u30016\u4E2A\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09
13\u3001`,{type:"link",text:"https://www.8090g.cn/?url="},`8090\u89E3\u6790\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u3001\u5355\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09
14\u3001`,{type:"link",text:"http://www.ysku.tv/"},`cd\u89E3\u6790\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u300113\u4E2A\u63A5\u53E3\u3001\u652F\u6301\u641C\u7D22\uFF09
15\u3001`,{type:"link",text:"http://tool.onlychen.cn/video/"},`\u4E03\u6708\u8FB0\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u300117\u4E2A\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09
16\u3001`,{type:"link",text:"http://vip.yeyulingfeng.com/"},`\u591C\u96E8\u8046\u98CEVIP\u89C6\u9891\u89E3\u6790\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u300112\u4E2A\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09

17\u3001`,{type:"link",text:"http://vip.kubear.cn/"},`\u9177\u718A\u7F51--\u5728\u7EBFVIP\u89C6\u9891\u89E3\u6790\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u30015\u4E2A\u63A5\u53E3\u3001\u652F\u6301\u641C\u7D22\uFF09
18\u3001`,{type:"link",text:"http://www.vipshipin.com.cn/"},`vip\u89C6\u9891\u89E3\u6790\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u300115\u4E2A\u63A5\u53E3\u4F46\u90E8\u5206\u4E0D\u53EF\u7528\u3001\u652F\u6301\u641C\u7D22\uFF09
19\u3001`,{type:"link",text:"http://www.allres.net/vip/"},`\u4E50\u5728\u6B64VIP\u89C6\u9891\u89E3\u6790\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u300142\u4E2A\u63A5\u53E3\u3001\u652F\u6301\u641C\u7D22\uFF09
20\u3001`,{type:"link",text:"https://rrkee.com/vip/"},`\u4EBA\u4EBA\u5BA2\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u30013\u4E2A\u63A5\u53E3\u3001\u652F\u6301\u641C\u7D22\uFF09
21\u3001`,{type:"link",text:"http://www.dayunbo.com/v/"},`\u5927\u4E91\u64AD\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u300110\u4E2A\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09
22\u3001`,{type:"link",text:"http://www.32bh.com/shipin/index.php"},`\u767E\u6C47\u8D44\u6E90\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u300111\u4E2A\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09
23\u3001`,{type:"link",text:"http://video.chinaminyue.cn/vip/"},"\u4E2D\u56FD\u6C11\u4E50VIP\u89C6\u9891\u89E3\u6790\u7AD9\uFF08\u4E0D\u9700\u626B\u7801\u5173\u6CE8\u300112\u4E2A\u63A5\u53E3\u3001\u4E0D\u652F\u6301\u641C\u7D22\uFF09"]},{id:64,type:"message",text:[`\u5206\u4EAB\u4E2A\u8D85\u5FEB\u7684TG\u4EE3\u7406
`,{type:"link",text:"https://t.me/socks?server=fs.01.nkeo.top&port=45242&user=114514&pass=114514"},""]},{id:65,type:"message",text:[`\u76EE\u524D\u53EF\u7528\u7684\u767E\u5EA6\u7F51\u76D8\u4E0D\u9650\u901F\u4E0B\u8F7D\u65B9\u6CD5
`,{type:"link",text:"https://mp.weixin.qq.com/s/Rn30-SpGr5qQtCtxOMaqZQ"},""]},{id:66,type:"message",text:`\u5206\u4EAB\u4E00\u4E2A\u53EF\u4EE5\u641C\u7D22\u963F\u91CC\u7F51\u76D8\u8D44\u6E90\u7684\u516C\u4F17\u53F7
\u516C\u4F17\u53F7\uFF1A\u5F73\u4E8D\u8BF4
\u76F4\u63A5\u56DE\u590D\u963F\u91CC+\u7A7A\u683C+\u8D44\u6E90\u540D\u5373\u53EF
5\u79D2\u5185\u5373\u53EF\u6536\u5230\u56DE\u590D`},{id:67,type:"message",text:[{type:"bold",text:`Telegram\u77E5\u8BC6\u5E93

`},"*",{type:"text_link",text:"Telegram\u6C49\u5316",href:"https://t.me/YinxiangBiji_News/899"},"/",{type:"text_link",text:`\u4E2D\u6587\u8BED\u8A00\u5305
`,href:"https://t.me/yxbjx/2255804"},"*",{type:"text_link",text:`TelegramiOS\u5BA2\u6237\u7AEF\u65E0\u6CD5\u8FDB\u5165/\u67E5\u770B\u5F00\u8F66\u7FA4\u7684\u65B9\u6CD5
`,href:"https://t.me/YinxiangBiji_News/867"},"*",{type:"text_link",text:`Telegram+86\u53CC\u5411\u8054\u7CFB\u4EBA\u79C1\u804A\u9650\u5236\u7684\u8BF4\u660E
`,href:"https://t.me/YinxiangBiji_News/481"},"*",{type:"text_link",text:`Telegram\u89E3\u9664+86\u53CC\u5411\u8054\u7CFB\u4EBA\u79C1\u804A\u9650\u5236\u7684\u65B9\u6CD5
`,href:"https://t.me/YinxiangBiji_News/480"},"*",{type:"text_link",text:`Telegram\u5B98\u65B9\u5BA2\u6237\u7AEF\u4E0B\u8F7D\u5730\u5740
`,href:"https://t.me/YinxiangBiji_News/901"},"*",{type:"text_link",text:`Telegram\u77E5\u8BC6\u6559\u7A0B
`,href:"https://t.me/YinxiangBiji_News/844"},"*",{type:"text_link",text:`Telegram\u5206\u7EC4/\u6587\u4EF6\u5939
`,href:"https://t.me/YinxiangBiji_News/892"},"*",{type:"text_link",text:`Telegram\u6536\u85CF\u5939
`,href:"https://t.me/YinxiangBiji_News/767"},"*",{type:"text_link",text:`Telegram\u5F52\u6863
`,href:"https://t.me/YinxiangBiji_News/714"},"*",{type:"text_link",text:`Telegram\u4E3B\u9898
`,href:"https://t.me/yxbjx/2255840"},"*",{type:"text_link",text:`Telegram\u5982\u4F55\u5EFA\u7FA4
`,href:"https://t.me/YinxiangBiji_News/856"},"*",{type:"text_link",text:`Telegram\u5982\u4F55\u6CE8\u9500
`,href:"https://t.me/YinxiangBiji_News/859"},"*",{type:"text_link",text:`Telegram\u4E24\u6B65\u9A8C\u8BC1
`,href:"https://t.me/YinxiangBiji_News/737"},"*",{type:"text_link",text:`Telegram\u9690\u79C1\u8BBE\u7F6E
`,href:"https://t.me/YinxiangBiji_News/889"},"*",{type:"text_link",text:`Telegram\u4EE3\u7406\u8BBE\u7F6E
`,href:"https://telegra.ph/Telegram-Proxy-02-15"},"*",{type:"text_link",text:`Telegram\u6162\u901F\u6A21\u5F0F
`,href:"https://t.me/YinxiangBiji_News/854"},"*",{type:"text_link",text:`Telegram\u6D88\u606F\u7FFB\u8BD1
`,href:"https://t.me/YinxiangBiji_News/841"},"*",{type:"text_link",text:`Telegram\u521B\u5EFA\u6295\u7968
`,href:"https://t.me/YinxiangBiji_News/665"},"*",{type:"text_link",text:`Telegram\u9690\u85CF\u624B\u673A\u53F7
`,href:"https://t.me/YinxiangBiji_News/889"},"*",{type:"text_link",text:`Telegram\u5982\u4F55\u52A0\u597D\u53CB
`,href:"https://t.me/YinxiangBiji_News/888"},"*",{type:"text_link",text:`Telegram\u9632\u6B62\u88AB\u62C9\u8FDB\u7FA4
`,href:"https://t.me/YinxiangBiji_News/560"},"*",{type:"text_link",text:`Telegram\u7F13\u5B58/\u81EA\u52A8\u4E0B\u8F7D
`,href:"https://t.me/YinxiangBiji_News/903"},"*",{type:"text_link",text:`Telegram\u5982\u4F55\u8054\u7CFB\u5B98\u65B9
`,href:"https://t.me/YinxiangBiji_News/879"},"*",{type:"text_link",text:`Telegram\u5982\u4F55\u6DFB\u52A0\u591A\u8D26\u53F7
`,href:"https://t.me/YinxiangBiji_News/947"},"*",{type:"text_link",text:`Telegram\u5BA2\u6237\u7AEF\u591A\u5F00
`,href:"https://t.me/YinxiangBiji_News/947"},"*",{type:"text_link",text:`Telegram\u5BA2\u6237\u7AEF\u8BF4\u660E
`,href:"https://t.me/YinxiangBiji_News/890"},"*",{type:"text_link",text:`Telegram\u5BA2\u6237\u7AEF\u4ECB\u7ECD
`,href:"https://t.me/YinxiangBiji_News/905"},"*",{type:"text_link",text:`Telegram\u548CTelegramX\u533A\u522B
`,href:"https://t.me/YinxiangBiji_News/891"},"*",{type:"text_link",text:`TelegramMac\u5BA2\u6237\u7AEF\u7684\u533A\u522B
`,href:"https://t.me/YinxiangBiji_News/893"},"*",{type:"text_link",text:`Android\u4E24\u4E2A"Telegram"\u7684\u8BF4\u660E
`,href:"https://t.me/YinxiangBiji_News/952"},"*",{type:"text_link",text:`Telegram\u5982\u4F55\u628A\u56FE\u6587\u4E00\u8D77\u53D1
`,href:"https://t.me/YinxiangBiji_News/742"},"*",{type:"text_link",text:`Telegram\u5982\u4F55\u67E5\u770B\u7FA4\u7EC4\u7BA1\u7406\u5458
`,href:"https://t.me/YinxiangBiji_News/872"},"*",{type:"text_link",text:`Telegram\u767B\u5F55\u6536\u4E0D\u5230\u9A8C\u8BC1\u7801
`,href:"https://t.me/YinxiangBiji_News/870"},"*",{type:"text_link",text:`Telegram\u4E2D\u6587\u641C\u7D22\u7684\u95EE\u9898
`,href:"https://t.me/yxbjx/2255841"},"*",{type:"text_link",text:`TelegramPWA\u7F51\u9875\u7248
`,href:"https://t.me/YinxiangBiji_News/762"},"*",{type:"text_link",text:`Telegram\u7FA4\u7EC4/\u9891\u9053/\u673A\u5668\u4EBA\u6C47\u603B
`,href:"https://t.me/yxbjx/2255807"},"*",{type:"text_link",text:`Telegram\u516C\u5F00\u7FA4
`,href:"https://t.me/yxbjx/2255808"},"*",{type:"text_link",text:`Telegram\u9891\u9053
`,href:"https://t.me/yxbjx/2255809"},"*",{type:"text_link",text:`Telegram\u673A\u5668\u4EBA
`,href:"https://t.me/yxbjx/2255810"},"*",{type:"text_link",text:"Nicegram\u4ECB\u7ECD",href:"https://t.me/YinxiangBiji_News/939"},""]},{id:68,type:"message",text:`\u8FC5\u96F7\u8D85\u7EA7\u4F1A\u5458
\u8D26\u53F7\uFF1A821210652
\u5BC6\u7801\uFF1Arenqilei1119
\u76F4\u63A5\u767B\u5F55\uFF0C\u5982\u679C\u8FC5\u96F7\u51FA\u73B0\u624B\u673A\u9A8C\u8BC1\uFF0C\u5728\u8FC5\u96F7\u641C\u7D22\u6846\u8F93\u5165wan.xlyouxi.com/\u7136\u540E\u8F93\u5165\u8D26\u53F7\u5BC6\u7801`},{id:69,type:"message",text:[`\u673A\u573A:\u901F\u8FD0
`,{type:"text_link",text:`\u6CE8\u518A\u5730\u5740
`,href:"https://yooo.me/"},"30\u5929/10G\u6D41\u91CF/\u6708\u5361/\u8BD5\u7528\u5168\u673A\u573A\u8282\u70B9"]},{id:70,type:"message",text:[`\u5206\u4EAB\u4E09\u4E2A\u767E\u5EA6\u7F51\u76D8SVIP
`,{type:"text_link",text:`\u5730\u5740
`,href:"https://url44.ctfile.com/f/30401944-524638183-b05f47"},"\uFF08\u8BBF\u95EE\u5BC6\u7801\uFF1A5044\uFF09"]},{id:72,type:"message",text:[`\u767D\u5AD6\u9999\u6E2FCN2GIA\u5C0F\u9E21\uFF0C\u514D\u8D393\u5929
2\u68382G3M\u514D\u624B\u673A\u53F7\u8BA4\u8BC1\uFF0C\u514D\u5B9E\u540D\u8BA4\u8BC1\uFF0C\u4EFB\u610F\u90AE\u7BB1\u6CE8\u518C
`,{type:"link",text:"https://www.1byun.com/cart?fid=4&gid=5"},""]},{id:73,type:"message",text:[{type:"link",text:"https://ihuixing.xyz/link/b1FVLEXZE8OSJPqY?sub=3"}]},{id:74,type:"message",text:[{type:"bold",text:`\u673A\u573A\uFF1APopuup

`},{type:"text_link",text:`\u6CE8\u518C\u5730\u5740

`,href:"https://pupucloud.live/"},"15209\u5929/32G/\u5403\u5F97\u9971\u5957\u9910"]},{id:75,type:"service",actor:"\u6211\u7231\u767D\u5AD6",actor_id:"channel1504326588",action:"pin_message",message_id:66,text:""},{id:76,type:"message",text:[`\u514D\u8D39\u9886\u53D6\u516D\u4E2A\u6708\u767E\u5EA6\u6587\u5E93vip

\u6559\u7A0B\u5982\u4E0B\uFF1A

1.\u4E0B\u8F7D\u4E03\u732B\u514D\u8D39\u5C0F\u8BF4APP\uFF1B

2.\u6253\u5F00APP\u2014\u2014\u70B9\u51FB\u201C\u6211\u7684\u201D\uFF08\u53EF\u4EE5\u770B\u5230\u6709\u6E38\u5BA2\u53F7\uFF09\u4E0D\u9700\u8981\u70B9\u767B\u5F55\u2014\u2014\u4E0A\u9762\u53EF\u624B\u52A8\u6EDA\u52A8\u7684\u6A2A\u5E45\u5F80\u53F3\u5212\u4E00\u4E0B\uFF0C\u70B9\u8FDB\u53BB\uFF0C\u628A\u4E66\u52A0\u5165\u4E66\u67B6\uFF0C\u5F97\u5230\u5151\u6362\u7801\u2014\u2014\u590D\u5236\u53BB`,{type:"link",text:"https://wenku.baidu.com/duihuan\u8FDB\u884C\u5151\u6362"},`

3.\u6253\u5F00APP\uFF0D\u70B9\u51FB\u201C\u6211\u7684\u201D\uFF0D\u4E0B\u5212\u627E\u5230\u8BBE\u7F6E\uFF0D\u70B9\u8D26\u53F7\u4E0E\u5B89\u5168\uFF0D\u518D\u70B9\u8D26\u53F7\u5B89\u5168\uFF0D\u6E05\u7A7A\u6E38\u5BA2\u8D26\u53F7\u6570\u636E\uFF0D\u9000\u51FAAPP

4.\u91CD\u590D\u7B2C\u4E8C\u6B65

\u3010\u6CE8\uFF1A\u4E00\u4E2A\u6708\u53EA\u80FD\u5151\u6362\u516D\u4E2A\u6708\u767E\u5EA6\u6587\u5E93\u4F1A\u5458\uFF0C\u5151\u6362\u7801\u6708\u5E95\u5931\u6548\u3011`]},{id:77,type:"message",file:"files/\u738B\u8005\u51FA\u88C5\u52A9\u624Bv1.0.apk",mime_type:"application/vnd.android.package-archive",text:"\u4E00\u952E\u67E5\u8BE2\u738B\u8005\u8363\u8000\u82F1\u96C4\u6700\u65B0\u73A9\u6CD5\u53CA\u94ED\u6587\u642D\u914D\uFF0C\u6559\u4F60\u638C\u63E1\u738B\u8005\u51FA\u88C5\u94ED\u6587\u9ED1\u79D1\u6280\u3002\u5168\u82F1\u96C4\u7279\u70B9\u3001\u5168\u82F1\u96C4\u8FDE\u62DB\u6280\u5DE7\u3001\u5168\u82F1\u96C4\u5C5E\u6027\u67E5\u8BE2\uFF0C\u8BA9\u4F60\u77E5\u5DF1\u77E5\u5F7C\u8F7B\u677E\u4E0A\u5206"},{id:78,type:"message",text:`0\u64B8\u4E91\u4E3B\u673A/\u5EFA\u7AD9/\u90AE\u7BB11\u5143\u4E70com\u57DF\u540D
\u6D3B\u52A8\u5185\u5BB9\uFF1A

1\u3001com\u57DF\u540D1\u5143\uFF0C\u4EC5\u9650\u4F01\u4E1A\u65B0\u7528\u6237

2\u3001\u4EBA\u6C14\u57DF\u540D7\u900911\u5143

3\u3001\u4E91\u4E3B\u673A0\u5143/1\u4E2A\u6708\u3002

4\u3001\u4E13\u4E1A\u7248\u6A21\u677F\u7F51\u7AD9\u5EFA\u8BBE\uFF08\u4E0D\u542B\u8BBE\u8BA1\u5E08\u642D\u5EFA\u670D\u52A1\uFF09\uFF0C0\u5143/3\u4E2A\u6708\u3002

5\u3001\u4F01\u4E1A\u90AE\u7BB10\u5143/6\u4E2A\u6708\u3002

6\u3001\u865A\u62DF\u4E3B\u673A6\u5143/3\u4E2A\u6708\u3002

7\u3001\u534E\u5317\u4E09\u533A\u4E91\u670D\u52A1\u5668ECS0.98\u6298\u3002

\u6D3B\u52A8\u5165\u53E3`},{id:79,type:"message",text:[`AppleCloud\u516C\u76CA\u4EE3\u7406
\u{1F1F8}\u{1F1EC}\u65B0\u52A0\u5761\u4E00\u53F7
`,{type:"link",text:"tg://proxy?server=sg1.mtproxy.lcxyolo.ml&port=443&secret=ee639763809a3a8b06dd1ef67c4d99d34a617a7572652e6d6963726f736f66742e636f6d"},""]},{id:80,type:"message",text:[`\u3010\u767D\u5AD6\u529E\u516C\u4F1A\u5458\u3011WPS\u514D\u8D39\u9886\u53D639\u5929\u7A3B\u58F3\u4F1A\u5458\u79D2\u5230\u8D26
\u6D3B\u52A81\u76F4\u63A5\u9886\u53D615\u5929->\u6D3B\u52A82\u652F\u4ED8\u5B9D\u626B\u7801\u8FDB\u5165\u540E\u70B9\u4E2D\u95F4\u7A3B\u58F3\u4F1A\u5458\u514D\u8D39\u9886\u53D6->\u988615\u5929\u8FD4\u56DE\u518D\u70B9\u4E0A\u9762\u7B7E\u5230\u8FD8\u53EF\u4EE5\u98869\u5929\uFF01
\u2014\u2014\u2014


1\u3001`,{type:"link",text:"https://tb3.cn/AxkDSM"},`
2\u3001`,{type:"link",text:"https://tb3.cn/AKzckH"},""]},{id:81,type:"message",text:[{type:"link",text:"https://dy.manaocloud.com/api/v1/client/subscribe?token=ae015178c80d05873a7775594328fc23"}]},{id:82,type:"message",text:[`\u673A\u573A\uFF1A\u739B\u7459\u4E91

`,{type:"text_link",text:`\u6CE8\u518C\u5730\u5740

`,href:"https://manaocloud.xyz/"},"3\u5929/2G(0.1\u500D\u7387\u76F8\u5F53\u4E8E2T)/Vip0\u5957\u9910"]},{id:83,type:"message",text:[`\u673A\u573A\uFF1ASPSS

`,{type:"text_link",text:`\u6CE8\u518C\u5730\u5740

`,href:"https://dash.sp333.top/"},"3\u5E74/10G/\u767D\u5AD6\u8BA2\u9605/\u5546\u5E97\u9886\u53D6/\u53EF\u514D\u8D39\u590D\u8D2D"]},{id:84,type:"message",text:`Epic\u6E38\u620F\u9650\u514D
ShenmueIII`},{id:85,type:"message",text:`Epic\u6E38\u620F\u9650\u514D
NeonAbyss`},{id:86,type:"message",text:`\u3010\u8BDD\u8D39\u798F\u5229\u3011
\u5173\u6CE8\u201C\u4E2D\u56FD\u79FB\u52A810086\u201D\u5FAE\u4FE1\u516C\u4F17\u53F7
\u53C2\u52A0\u6D3B\u52A8\u201C\u5E74\u672B\u798F\u5229\uFF0C\u62C610\u5143\u8BDD\u8D39\u201D
\u6309\u7167\u63D0\u793A\u5373\u53EF\u9886\u53D60-10\u5143\u8BDD\u8D39\u5238\uFF0C\u5151\u6362\u6210\u8BDD\u8D39\u5373\u53EF`},{id:87,type:"message",text:[{type:"bold",text:`\u6700\u5168\u5927\u5B66\u516C\u5F00\u8BFE\u77E5\u8BC6\u5E93
`},`\u5185\u5BB9\u4E30\u5BCC\u5168\u9762\uFF0C\u6709\u8BFE\u7A0B\u4ECB\u7ECD\u548C\u5177\u4F53\u7684\u8BFE\u7A0B\u5206\u7C7B
\u6DB5\u76D6B\u7AD9\u3001\u6155\u8BFE\u3001\u8D85\u661F\u7B49\u5B66\u4E60\u5E73\u53F0\u7684\u516C\u5F00\u8BFE\u5185\u5BB9
`,{type:"link",text:"https://docs.qq.com/sheet/DRU5MWHZCTHFGQnhM"},""]},{id:88,type:"message",text:[`\u3010\u8C37\u6B4C\u90AE\u7BB1\u751F\u6210\u65E0\u9650\u5C0F\u53F7\u6559\u7A0B\u3011

\u4F8B\u5982\u4F60\u7684\u90AE\u7BB1\u662F
`,{type:"email",text:"abcdef@gmail.com"},`

\u2776\u53EF\u4EE5\u5728\u540E\u7F00\u524D\u9762\u52A0\u3010.\u3011
\u4E0D\u9700\u8981\u6CE8\u518C\uFF0C\u81EA\u5E26\u7684\u529F\u80FD

\u4E3E\u4F8B
`,{type:"email",text:"a.bcdef@gmail.com"},`
`,{type:"email",text:"ab.cdef@gmail.com"},`
`,{type:"email",text:"abc.def@gmail.com"},`
`,{type:"email",text:"abcd.ef@gmail.com"},`

\u2777\u53EF\u4EE5\u5728\u524D\u7F00\u540E\u9762\u52A0\u3010+\u3011
\u4E0D\u9700\u8981\u6CE8\u518C\uFF0C\u81EA\u5E26\u7684\u529F\u80FD

\u4E3E\u4F8B
`,{type:"email",text:"abcdef+aa@gmail.com"},`
`,{type:"email",text:"abcdef+bb@gmail.com"},`
`,{type:"email",text:"abcdef+cc@gmail.com"},`
`,{type:"email",text:"abcdef+dd@gmail.com"},`


\u6240\u6709\u5C0F\u53F7\u6536\u5230\u7684\u90AE\u4EF6\u90FD\u662F\u5728\u4F60\u5927\u53F7\u91CC\u3002`]},{id:89,type:"message",text:[`\u9AD8\u6E05\u58C1\u7EB8\u4E0B\u8F7D\u7F51\u7AD9

`,{type:"link",text:"https://konachan.net/post"},`
`,{type:"link",text:"https://wallhaven.cc/"},`
`,{type:"link",text:"https://wallspic.com/cn"},`
`,{type:"link",text:"https://www.pixiv.net/"},`
`,{type:"link",text:"https://wallpaperscraft.com/"},`
`,{type:"link",text:"https://konachan.net/post"},`
`,{type:"link",text:"https://wall.alphacoders.com/"},`
`,{type:"link",text:"https://wallroom.io/"},`
`,{type:"link",text:"https://www.wallpapermaiden.com/"},`
`,{type:"link",text:"https://anime-pictures.net/"},`
`,{type:"link",text:"https://www.3gbizhi.com/"},`
`,{type:"link",text:"https://wallpaperaccess.com/"},""]},{id:90,type:"message",text:[`\u718A\u732B\u641C\u4E66
`,{type:"link",text:"https://ebook.huzerui.com"},`

\u718A\u732B\u641C\u4E66\u4E0D\u4EC5\u662F\u4E00\u4E2A\u7535\u5B50\u4E66\u641C\u7D22\u5F15\u64CE\uFF0C\u540C\u65F6\u6574\u5408\u4E86\u591A\u4E2A\u7535\u5B50\u4E66\u641C\u7D22\u5F15\u64CE\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u662F\u4E00\u4E2A\u7535\u5B50\u4E66\u805A\u5408\u641C\u7D22\u5F15\u64CE\u3002

Ebook
`,{type:"link",text:"https://ebook.ipfs-lab.com"},`

\u4E00\u4E2A\u4E0D\u9519\u7684\u7535\u5B50\u4E66\u4E0B\u8F7D\u7F51\u7AD9\uFF0C\u8D44\u6E90\u6BD4\u8F83\u65B0\u3002\u4E0B\u8F7D\u901F\u5EA6\u6BD4\u8F83\u6162\u3002

\u5076\u4E66
`,{type:"link",text:"https://obook.cc"},`

azw3+epub+mobi\u683C\u5F0F\u7535\u5B50\u4E66\u4E0B\u8F7D\u7F51\u7AD9\uFF0C\u8D44\u6E90\u901A\u8FC7\u7F51\u76D8\u5206\u4EAB\uFF0C\u9700\u8981\u767B\u9646\u624D\u80FD\u83B7\u53D6\u63D0\u53D6\u7801\uFF0C\u6CE8\u518C\u65E0\u95E8\u69DB\u3002

\u96C5\u4E66
`,{type:"link",text:"https://yabook.org"},`

PDF\u7535\u5B50\u4E66\u5B66\u4E60\u4E0B\u8F7D\u7AD9\uFF0C\u8D44\u6E90\u901A\u8FC7\u57CE\u901A\u7F51\u76D8\u5206\u4EAB\u3002

LoreFree
`,{type:"link",text:"https://ebook2.lorefree.com"},`

LoreFree\u81F4\u529B\u4E8E\u8BA9\u6BCF\u4E2A\u4EBA\u90FD\u80FD\u81EA\u7531\u5730\u83B7\u53D6\u5230\u77E5\u8BC6\uFF0C\u662F\u4E00\u4E2A\u57FA\u4E8E\u533A\u5757\u94FE\u7684\u7535\u5B50\u4E66\u4E0B\u8F7D\u7AD9\uFF0C\u672A\u767B\u5F55\u72B6\u6001\u4E0B\uFF0C\u6BCF\u5929\u67093\u4E2A\u4E0B\u8F7D\u989D\u5EA6\uFF08\u5305\u62EC\u7535\u5B50\u4E66\u548C\u8BBA\u6587\uFF09\u767B\u9646\u8F83\u590D\u6742\u9ED8\u8BA4\u7684\u989D\u5EA6\u8DB3\u4EE5\u6EE1\u8DB3\u65E5\u5E38\u9700\u6C42\u3002

\u9E20\u6469\u641C\u7D22
`,{type:"link",text:"https://www.jiumodiary.com"},`

\u641C\u7D22\u6765\u6E90\u5305\u62EC\u767E\u5EA6\u7F51\u76D8\u3001\u6211\u7684\u78E8\u3001\u65B0\u6D6A\u7231\u95EE\u7B49\u8D44\u6E90\uFF0C\u641C\u7D22\u7ED3\u679C\u5927\u591A\u65F6\u5019\u4E0D\u7ED9\u529B\uFF0C\u53EF\u4F5C\u4E3A\u4E00\u4E2A\u5907\u7528\u7684\u7F51\u7AD9\u3002

thefuture\u4E66\u7C4D\u641C\u7D22
`,{type:"link",text:"https://bks.thefuture.top"},`

thefuture\u662F\u4E00\u4E2A\u7535\u5B50\u4E66\u641C\u7D22\u5F15\u64CE\uFF0C\u63D0\u4F9B\u4E86\u84DD\u594F\u7F51\u76D8\u7B49\u8D44\u6E90\u7684\u7D22\u5F15\u3002

\u4E66\u683C
`,{type:"link",text:"https://new.shuge.org"},`

\u4E66\u683C\u662F\u4E00\u4E2A\u514D\u8D39\u7684\u53E4\u7C4D\u4E0B\u8F7D\u7AD9\uFF0C\u7531\u4E8E\u8D44\u6E90\u90FD\u662F\u4E9B\u4EBA\u6587\u53E4\u7C4D\u7C7B\uFF0C\u6240\u4EE5\u8D44\u6E90\u975E\u5E38\u5C0F\u4F17\uFF0C\u7F51\u7AD9\u4E0D\u9519\u53EF\u5F53\u5907\u7528\u3002`]},{id:91,type:"message",text:[`B\u7AD9\u4E0B\u8F7D\u8F6F\u4EF6
1.[\u54D4\u54E9\u4E0B\u8F7D\u59EC][Downkyi][B\u7AD9\u4E0B\u8F7D\u5DE5\u5177]
\u6765\u6E90\uFF1A`,{type:"link",text:"https://www.52pojie.cn/thread-1362299-1-1.html"},`
\u9879\u76EE\uFF1A`,{type:"link",text:"https://github.com/leiurayer/downkyi"},`
\u94FE\u63A5\uFF1A`,{type:"link",text:"https://pan.baidu.com/s/1K7oiMZPbgkIQA6XfbNIJAw"},`\u63D0\u53D6\u7801\uFF1A5pju

2.BiliBili\u89C6\u9891\u4E0B\u8F7D\u5DE5\u51772.6
\u94FE\u63A5\uFF1A`,{type:"link",text:"https://pan.baidu.com/s/1K7oiMZPbgkIQA6XfbNIJAw"},`\u63D0\u53D6\u7801\uFF1A5pju

3.\u5F3A\u5927\u7684\u54D4\u54E9\u54D4\u54E9\u589E\u5F3A\u811A\u672C
\u4E0B\u8F7D\u89C6\u9891,\u97F3\u4E50,\u5C01\u9762,\u5F39\u5E55/\u7B80\u5316\u76F4\u64AD\u95F4,\u8BC4\u8BBA\u533A,\u9996\u9875/\u81EA\u5B9A\u4E49\u9876\u680F,\u5220\u9664\u5E7F\u544A,\u591C\u95F4\u6A21\u5F0F/\u89E6\u5C4F\u8BBE\u5907\u652F\u6301
\u6CE8\u610F\uFF0C\u9700\u5148\u5B89\u88C5\u6CB9\u7334\u63D2\u4EF6\uFF0C\u5728\u5B89\u88C5\u811A\u672C
\u9879\u76EE:`,{type:"link",text:"https://github.com/the1812/Bilibili-Evolved"},`

4.bilibili\u54D4\u54E9\u54D4\u54E9B\u7AD9\u4E0B\u8F7D\u52A9\u624B(\u8C22\u8C22\u53CB\u53CB\u63D0\u4F9B)
\u5B98\u7F51\u4E0B\u8F7D\uFF1A`,{type:"link",text:"https://csser.top/"},`
B\u7AD9\u4E0B\u8F7D\u52A9\u624B\u4F7F\u7528\u6559\u7A0B\u53CA\u5E38\u89C1\u95EE\u9898\u53CA\u89E3\u7B54
`,{type:"link",text:"https://docs.qq.com/doc/DQ2lhaWRpS0tubVVF"},""]},{id:92,type:"message",text:[`\u300C\u77E5\u4E4E\u4ED8\u8D391000+\u7BC7\u5408\u96C6\u300D
\u94FE\u63A5\uFF1A`,{type:"link",text:"https://www.aliyundrive.com/s/8HEXXUURqpr"},""]},{id:93,type:"message",text:""},{id:94,type:"message",text:["\u7533\u8BF7",{type:"link",text:"eu.org"},`\u514D\u8D39\u57DF\u540D

`,{type:"text_link",text:"\u70B9\u51FB\u9605\u8BFB",href:"http://www.360doc.com/content/21/1219/10/72809014_1009372932.shtml"},""]},{id:95,type:"message",text:[`\u673A\u573A\uFF1ABesnow

`,{type:"text_link",text:`\u6CE8\u518C\u5730\u5740

`,href:"https://besnow.tk/"},"30\u5929/9G/\u4F53\u9A8C\u5957\u9910"]},{id:96,type:"message",text:[{type:"link",text:"https://pastebin.com/raw/uzPZeJFT"}]},{id:97,type:"message",text:`vmess://ewogICJhZGQiOiAiY20tam0ub2t2cG4ueHl6IiwKICAiYWlkIjogIjEiLAogICJob3N0IjogIiIsCiAgImlkIjogImVjMzNiYjc5LTU0N2EtNDIwZS1hMmZlLTk5NGRlMmM3NTZmZCIsCiAgIm5ldCI6ICJ3cyIsCiAgInBhdGgiOiAiIiwKICAicG9ydCI6ICIyMDAwMSIsCiAgInBzIjogIuS4rei9rHzpppnmuK9IR0MwMXzljY7ljZfpmqfpgZNb5rWB5aqS5L2T6Kej6ZSBXSIsCiAgInRscyI6ICIiLAogICJ0eXBlIjogIm5vbmUiLAogICJ1cmxfZ3JvdXAiOiAidGfpopHpgZM6QHJpcGFvamllZGlhbiIsCiAgInYiOiAiMiIKfQ==
vmess://ewogICJhZGQiOiAiY20tam0ub2t2cG4ueHl6IiwKICAiYWlkIjogIjEiLAogICJob3N0IjogIiIsCiAgImlkIjogImVjMzNiYjc5LTU0N2EtNDIwZS1hMmZlLTk5NGRlMmM3NTZmZCIsCiAgIm5ldCI6ICJ3cyIsCiAgInBhdGgiOiAiIiwKICAicG9ydCI6ICIyMDAwMSIsCiAgInBzIjogIuS4rei9rHzpppnmuK9IR0MwMnzljY7ljZfpmqfpgZNb5rWB5aqS5L2T6Kej6ZSBXSIsCiAgInRscyI6ICIiLAogICJ0eXBlIjogIm5vbmUiLAogICJ1cmxfZ3JvdXAiOiAidGfpopHpgZM6QHJpcGFvamllZGlhbiIsCiAgInYiOiAiMiIKfQ==
vmess://ewogICJhZGQiOiAiY20tam0ub2t2cG4ueHl6IiwKICAiYWlkIjogIjEiLAogICJob3N0IjogIiIsCiAgImlkIjogImVjMzNiYjc5LTU0N2EtNDIwZS1hMmZlLTk5NGRlMmM3NTZmZCIsCiAgIm5ldCI6ICJ3cyIsCiAgInBhdGgiOiAiIiwKICAicG9ydCI6ICIyMDAwMyIsCiAgInBzIjogIuS4rei9rHzlj7Dmub5IaU5ldDAxfOWNjuWNl+map+mBk1vmtYHlqpLkvZPop6PplIFdIiwKICAidGxzIjogIiIsCiAgInR5cGUiOiAibm9uZSIsCiAgInVybF9ncm91cCI6ICJ0Z+mikemBkzpAcmlwYW9qaWVkaWFuIiwKICAidiI6ICIyIgp9
vmess://ewogICJhZGQiOiAiY20tam0ub2t2cG4ueHl6IiwKICAiYWlkIjogIjEiLAogICJob3N0IjogIiIsCiAgImlkIjogImVjMzNiYjc5LTU0N2EtNDIwZS1hMmZlLTk5NGRlMmM3NTZmZCIsCiAgIm5ldCI6ICJ3cyIsCiAgInBhdGgiOiAiIiwKICAicG9ydCI6ICIyMDAwMyIsCiAgInBzIjogIuS4rei9rHzlj7Dmub5IaU5ldDAyfOWNjuWNl+map+mBk1vmtYHlqpLkvZPop6PplIFdIiwKICAidGxzIjogIiIsCiAgInR5cGUiOiAibm9uZSIsCiAgInVybF9ncm91cCI6ICJ0Z+mikemBkzpAcmlwYW9qaWVkaWFuIiwKICAidiI6ICIyIgp9
vmess://ewogICJhZGQiOiAiY20tam0ub2t2cG4ueHl6IiwKICAiYWlkIjogIjEiLAogICJob3N0IjogIiIsCiAgImlkIjogImVjMzNiYjc5LTU0N2EtNDIwZS1hMmZlLTk5NGRlMmM3NTZmZCIsCiAgIm5ldCI6ICJ3cyIsCiAgInBhdGgiOiAiIiwKICAicG9ydCI6ICIyMDAwMiIsCiAgInBzIjogIuS4rei9rHzlj7Dmub7kuK3ljY7nlLXkv6EwMnzljY7ljZfpmqfpgZNb5rWB5aqS5L2T6Kej6ZSBXSIsCiAgInRscyI6ICIiLAogICJ0eXBlIjogIm5vbmUiLAogICJ1cmxfZ3JvdXAiOiAidGfpopHpgZM6QHJpcGFvamllZGlhbiIsCiAgInYiOiAiMiIKfQ==
vmess://ewogICJhZGQiOiAiY20tam0ub2t2cG4ueHl6IiwKICAiYWlkIjogIjEiLAogICJob3N0IjogIiIsCiAgImlkIjogImVjMzNiYjc5LTU0N2EtNDIwZS1hMmZlLTk5NGRlMmM3NTZmZCIsCiAgIm5ldCI6ICJ3cyIsCiAgInBhdGgiOiAiIiwKICAicG9ydCI6ICIyMDA0OSIsCiAgInBzIjogIuS4rei9rHzmlrDliqDlnaFTaW5ndGVsMDN85Y2O5Y2X6Zqn6YGTW+a1geWqkuS9k+ino+mUgV0iLAogICJ0bHMiOiAiIiwKICAidHlwZSI6ICJub25lIiwKICAidXJsX2dyb3VwIjogInRn6aKR6YGTOkByaXBhb2ppZWRpYW4iLAogICJ2IjogIjIiCn0=
vmess://ewogICJhZGQiOiAiY20tam0ub2t2cG4ueHl6IiwKICAiYWlkIjogIjEiLAogICJob3N0IjogIiIsCiAgImlkIjogImVjMzNiYjc5LTU0N2EtNDIwZS1hMmZlLTk5NGRlMmM3NTZmZCIsCiAgIm5ldCI6ICJ3cyIsCiAgInBhdGgiOiAiIiwKICAicG9ydCI6ICIyMDAwMCIsCiAgInBzIjogIuS4rei9rHzpppnmuK9CR1AxMHzljY7ljZfpmqfpgZMiLAogICJ0bHMiOiAiIiwKICAidHlwZSI6ICJub25lIiwKICAidXJsX2dyb3VwIjogInRn6aKR6YGTOkByaXBhb2ppZWRpYW4iLAogICJ2IjogIjIiCn0=
vmess://ewogICJhZGQiOiAiY20tam0ub2t2cG4ueHl6IiwKICAiYWlkIjogIjEiLAogICJob3N0IjogIiIsCiAgImlkIjogImVjMzNiYjc5LTU0N2EtNDIwZS1hMmZlLTk5NGRlMmM3NTZmZCIsCiAgIm5ldCI6ICJ3cyIsCiAgInBhdGgiOiAiIiwKICAicG9ydCI6ICIyMDAxNSIsCiAgInBzIjogIuS4rei9rHzml6XmnKxHTU8wOXzljY7ljZfpmqfpgZNb5rWB5aqS5L2T6Kej6ZSBXSIsCiAgInRscyI6ICIiLAogICJ0eXBlIjogIm5vbmUiLAogICJ1cmxfZ3JvdXAiOiAidGfpopHpgZM6QHJpcGFvamllZGlhbiIsCiAgInYiOiAiMiIKfQ==
vmess://ewogICJhZGQiOiAiY20tam0ub2t2cG4ueHl6IiwKICAiYWlkIjogIjEiLAogICJob3N0IjogIiIsCiAgImlkIjogImVjMzNiYjc5LTU0N2EtNDIwZS1hMmZlLTk5NGRlMmM3NTZmZCIsCiAgIm5ldCI6ICJ3cyIsCiAgInBhdGgiOiAiIiwKICAicG9ydCI6ICIyMDA0OSIsCiAgInBzIjogIuS4rei9rHzmlrDliqDlnaFTaW5ndGVsMDJ85Y2O5Y2X6Zqn6YGTW+a1geWqkuS9k+ino+mUgV0iLAogICJ0bHMiOiAiIiwKICAidHlwZSI6ICJub25lIiwKICAidXJsX2dyb3VwIjogInRn6aKR6YGTOkByaXBhb2ppZWRpYW4iLAogICJ2IjogIjIiCn0=`},{id:98,type:"message",text:[`\u963F\u91CC\u4E91\u76D8200G
`,{type:"link",text:"https://mp.weixin.qq.com/s/QZJl_9ggtFkjH3MPLg8CgQ"},""]},{id:99,type:"message",text:[`\u673A\u573A\uFF1A\u865A\u5764\u7C89

`,{type:"text_link",text:`\u6CE8\u518C\u5730\u5740

`,href:"https://www.cxkv2.xyz/"},"\u5957\u9910\u5982\u4E0A\u56FE/\u65E0\u9700\u90AE\u7BB1\u9A8C\u8BC1"]},{id:100,type:"message",text:[`\u963F\u91CC\u4E91\u7F51\u9875\u4E0B\u8F7D\u9650\u5236100MB\u9700\u4E0B\u8F7D\u963F\u91CC\u7F51\u76D8app
\u6CB9\u7334\u811A\u672C\u89E3\u9664\u9650\u5236
\u652F\u6301\u751F\u6210\u6587\u4EF6\u4E0B\u8F7D\u94FE\u63A5
\u652F\u6301\u89C6\u9891\u64AD\u653E\u9875\u9762\u6253\u5F00\u81EA\u52A8\u64AD\u653E/\u64AD\u653E\u533A\u70B9\u51FB\u6682\u505C\u7EE7\u7EED/\u64AD\u653E\u63A7\u5236\u5668\u62D6\u62FD\u8C03\u6574\u4F4D\u7F6E
\u652F\u6301\u81EA\u5B9A\u4E49\u5206\u4EAB\u5BC6\u7801\uFF0C\u7A81\u7834\u89C6\u98912\u5206\u949F\u9650\u5236\uFF0C\u652F\u6301\u7B2C\u4E09\u65B9\u64AD\u653E\u5668DPlayer\uFF08\u53EF\u81EA\u7531\u5207\u6362\uFF0C\u652F\u6301\u81EA\u52A8/\u624B\u52A8\u6DFB\u52A0\u5B57\u5E55\uFF09
`,{type:"link",text:"https://greasyfork.org/zh-CN/scripts/425955-%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98"},""]},{id:101,type:"message",text:["\u673A\u573A\uFF1A",{type:"text_link",text:`\u72D7\u5B50\u5FEB\u8DD1

`,href:"https://www.freedog.me/"},"\u5957\u9910\u6CE8\u518C\u4E4B\u7C7B\u5982\u4E0A\u56FE"]},{id:102,type:"message",text:""},{id:103,type:"message",text:""},{id:104,type:"message",text:`20\u51E0\u4E2A\u8282\u70B9\uFF0C\u8001\u94C1\u4EEC\u5F53\u5907\u7528\u5427

\u8BA2\u9605\u5730\u5740`},{id:106,type:"message",file:"video_files/\u65B0\u95FB\u76F4\u64AD\u95F4\u8D77\u5E95\u201C\u7535\u4FE1\u8BC8\u9A97\u672F\u201D\u4E4B\u201C\u9A8C\u8BC1\u7801\u201D\u9A97\u5C40.mp4",thumbnail:"video_files/\u65B0\u95FB\u76F4\u64AD\u95F4\u8D77\u5E95\u201C\u7535\u4FE1\u8BC8\u9A97\u672F\u201D\u4E4B\u201C\u9A8C\u8BC1\u7801\u201D\u9A97\u5C40.mp4_thumb.jpg",media_type:"video_file",mime_type:"video/mp4",duration_seconds:998,text:"\u5927\u5BB6\u4E5F\u8981\u591A\u7559\u5FC3\u554A\uFF0C\u7535\u4FE1\u8BC8\u9A97\u82B1\u6837\u8D8A\u6765\u8D8A\u591A\u4E86"},{id:107,type:"message",text:`\u8054\u901A\u7528\u623788\u4E70100\u8054\u901A\u5145\u503C\u5361\uFF0C26\u53F7\u523028\u53F7\u6BCF\u592910\u70B9
\u8054\u901Aapp\u2014\u670D\u52A1\u2014\u4EA4\u8D39\u2014\u5145\u503C\u5361\u8D2D\u4E70\uFF0C\u6216\u8005\u76F4\u63A5\u641C\u5145\u503C\u5361\uFF0C\u4ED8\u6B3E\u524D\u53EF\u4EE5\u770B\u5230\u4F18\u60E0`},{id:108,type:"message",text:[{type:"bold",text:`Emby\u516C\u76CA\u670D\u5206\u4EAB

`},`AGA\u516C\u76CA\u670D(\u56FD\u5185\u7535\u4FE1\u53EF\u76F4\u8FDE\u89C2\u770B)
`,{type:"link",text:"https://emby.plusmedia.site"},`\u7AEF\u53E3:443
CF\u516C\u76CA\u670D(\u4EC5\u9650\u6302\u4EE3\u7406\u89C2\u770B)
`,{type:"link",text:"https://emby-cf.plusmedia.site"},`\u7AEF\u53E3:443

\u5907\u7528\u670D1:`,{type:"link",text:"https://emby.xeton.dev"},`\u7AEF\u53E3:443
\u5907\u7528\u670D2:`,{type:"link",text:"https://jellyfin.xeton.dev"},`\u7AEF\u53E3:443
\u5907\u7528\u670D3:`,{type:"link",text:"https://movie.xeton.dev"},`\u7AEF\u53E3:443

\u8D26\u53F7\uFF1A\u666E\u62C9\u65AF\u5F71\u4E1A
\u5BC6\u7801\uFF1Aplusisbest

\u5907\u7528\u670D\u4EC5\u9650Emby,Infuse\u7B49\u5BA2\u6237\u7AEF\u6302\u68AF\u5B50\u767B\u5F55\u89C2\u770B)`]},{id:109,type:"message",text:`\u641C\u72D7\u6D4F\u89C8\u5668\u6781\u901F\u7248\u988633\u5929\u817E\u8BAF\u89C6\u9891\u4F1A\u5458

\u6CA1\u53CD\u5E94\u70B9\u4E0B\u6211\u7684\u9875\u9762\uFF0C\u9000\u51FA\u91CD\u65B0\u767B\u5F55\u5C31\u884C\u4E86

1\u3001\u5E94\u7528\u5546\u5E97\u641C\u7D22\u4E0B\u8F7D\u201C\u641C\u72D7\u6781\u901F\u7248\u6D4F\u89C8\u5668\u201D->\u767B\u5F55\u540E\u70B9\u5E95\u90E8\u798F\u5229->\u518D\u70B9\u51FB\u9886\u817E\u8BAF\u89C6\u9891VIP->\u770B15\u79D2\u5E7F\u544A\uFF0C\u4E0D\u7528\u770B\u5B8C

2\u3001\u5230\u4E8615\u79D2\u76F4\u63A5\u8FD4\u56DE->\u63D0\u793A\u4E2D\u91D1\u5E01\u5C31\u4E0D\u662F\u65B0\u7528\u6237\u6362\u53F7\u53C2\u52A0->\u63D0\u793A\u4F1A\u5458\u5C31\u7EE7\u7EED\u53C2\u52A0->\u70B9\u9876\u90E8\u8FD8\u80FD\u63D0\u73B00.3\u5143\uFF01`},{id:110,type:"message",text:[`\u514D\u8D39\u63D0\u4F9Bios\u4ED8\u8D39\u5DF2\u8D2DID

\u8FD9\u4E2A\u6BD4\u4E0A\u6B21\u7684\u597D\uFF0C\u514D\u8D39\u63D0\u4F9B\u597D\u51E0\u4E2A\u56FD\u5BB6\u7684\u{1F34E}ID\uFF0C\u53EF\u4E0D\u4EC5\u4EC5\u5C31\u{1F1FA}\u{1F1F8}\uFF0C\u{1F680}\u5565\u7684\u90FD\u6709\u54E6\uFF5E\u7F51\u7AD9\u4E3B\u8DDF\u6211\u8BF4\u4E86\uFF0C\u8BA9\u4F60\u4EEC\u968F\u4FBF\u8279\uFF0C\u5C31\u662F\u7ED9\u6211\u4EECJsnzk\u9891\u9053\u7684\uFF01

`,{type:"text_link",text:"\u{1F449}\u{1F3FB}\u70B9\u51FB\u767D\u5AD6\u{1F34E}\u4ED8\u8D39\u8D26\u53F7",href:"https://share.love208.vip/"},""]},{id:111,type:"message",text:[`\u8BA2\u9605
`,{type:"link",text:"https://api.20228888.work/link/2ygOX8xvAw0eiXhE?sub=3"},`

`,{type:"hashtag",text:"#\u767D\u5AD6\u8282\u70B9"},""]},{id:112,type:"message",text:[{type:"bold",text:`\u514D\u8D39\u988650\u5C0F\u65F6\u96F7\u795E\u52A0\u901F\u5668CDK_\u4E0D\u652F\u6301\u6682\u505C

`},`\u6253\u5F00\u96F7\u795E\u52A0\u901F\u5668\u5BA2\u6237\u7AEF\u70B9\u51FB\u5145\u503C\u65F6\u957F-CDK\u5151\u6362-\u53E3\u4EE4\u5151\u6362\u8F93\u5165\u53E3\u4EE4\uFF1A\u76F4\u64AD\u798F\u5229\u5373\u53EF\u5151\u636250\u5C0F\u65F6\u7684\u52A0\u901F\u65F6\u957F
\u9886\u53D6\u540E\u79D2\u5230\u8D26\uFF01\u4E0D\u8FC7\u8FD950\u5C0F\u65F6\u662F\u4E0D\u652F\u6301\u6682\u505C\u7684\uFF0C\u9886\u53D6\u540E\u81EA\u52A8\u4F7F\u7528\uFF01\u6709\u9700\u8981\u7684\u5C0F\u4F19\u4F34\u4EEC\u53EF\u4EE5\u53BB\u9886\u53D6\u4E00\u4E0B\uFF01

`,{type:"hashtag",text:"#\u767D\u5AD6\u7EBF\u62A5"},""]},{id:113,type:"message",text:[{type:"bold",text:`\u514D\u8D39\u988622\u5929\u559C\u9A6C\u62C9\u96C5\u4F1A\u5458\u79D2\u5230

`},`\u6253\u5F00\u5730\u5740\u76F4\u63A5\u9886\u53D6\uFF0C\u559C\u6B22\u542C\u6545\u4E8B\u542C\u8282\u76EE\u542C\u7535\u53F0\u7684\u9886\uFF01
15\u5929\u4F1A\u5458\uFF1A`,{type:"link",text:"https://tb3.cn/AUCbdG"},`
7\u5929\u4F1A\u5458\uFF1A`,{type:"link",text:"https://tb3.cn/AJYd3E"},`

`,{type:"hashtag",text:"#\u767D\u5AD6\u7EBF\u62A5"},""]},{id:114,type:"message",text:[`\u7A7F\u8D8A\u8001\u5175\u8D26\u53F7\u514D\u8D39\u5206\u4EAB

\u8D26\u53F7\uFF1A492337334
\u5BC6\u7801\uFF1Amima7682600..
\u6C5F\u82CF\u5927\u533A
\u5404\u79CD\u82F1\u96C4\u6B66\u5668\uFF0C\u9650\u5B9A\u76AE\u80A4\u7B49\uFF0C\u6709\u7F18\u4EBA\u62FF\u53BB\u73A9

`,{type:"hashtag",text:"#\u767D\u5AD6\u4F1A\u5458\u8D26\u53F7"},""]},{id:115,type:"message",text:[{type:"link",text:"https://t.me/proxy?server=155.94.196.251&port=443&secret=ee7f6d82f915d6bfd29dc733f3a93d34507777772e706163696669637261636b2e636f6d"},`

`,{type:"hashtag",text:"#\u767D\u5AD6TG\u4EE3\u7406"},""]},{id:116,type:"message",text:[`\u7231\u5947\u827A\u4F1A\u5458\u514D\u8D39\u9886\u53D6

`,{type:"link",text:"https://vip.iqiyi.com/html5VIP/activity/hongbao_h5/index.html?redNo=d102622373e9c9f4202201013694&fv=&p1=2_22_222&social_platform=link&_psc=f1bb1eb352ae412d88187c0781080a80"},`

`,{type:"link",text:"https://vip.iqiyi.com/html5VIP/activity/hongbao_h5/index.html?redNo=a64da0f2b06e4508202201010190&fv=&p1=2_22_222&social_platform=link&_psc=70749008f569479da364147e6f335109"},`

`,{type:"hashtag",text:"#\u767D\u5AD6\u4F1A\u5458\u8D26\u53F7"},""]},{id:117,type:"message",text:[`\u5E1D\u8C6A\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u8C6A\u5EAD\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u541B\u6021\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u60C5\u601D\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u84DD\u5929\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u5E74\u4EE3\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
5\u53F7\u9986\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u4EAB\u4E50\u6C47\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u65B0\u6D77\u5458\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u65B0\u592A\u9633\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u6C34\u60A6\u8F69\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u91D1\u6D77\u6E7E\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u6C34\u73B2\u73D1\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u6C34\u7597\u4F1A\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u6C34\u5584\u574A\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u6C34\u4E91\u95F4\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u5609\u8054\u534E\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u65B0\u5883\u754C\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u65B0\u540D\u4ED5\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u9F99\u6E56\u9601\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u7D2B\u6C55\u574A\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u65B0\u7F8E\u9F99\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u4E91\u9876\u5929\u5883\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u9E4F\u53D1\u7406\u7597\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u8861\u5C71\u6C34\u7597\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u9F99\u6E56\u591C\u603B\u4F1A\u5168\u4F53\u5988\u54AA\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u56DB\u5B63\u9152\u5E97\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50
\u516B\u53F7\u516C\u9986\u5168\u4F53\u6280\u5E08\u795D\u4F60\u65B0\u5E74\u5FEB\u4E50

`,{type:"hashtag",text:"#\u767D\u5AD6\u989D"},""]},{id:120,type:"message",text:["\u673A\u573A\uFF1A",{type:"text_link",text:`SCOC

`,href:"https://www.scoc.cc/"},`\u7279\u8272\uFF1A\u65B0\u673A\u573A\uFF0C\u65B0\u7528\u6237\u901A\u8FC7\u9891\u9053\u6CE8\u518C\u6BCF\u4E2A\u8D26\u53F7\u53EF\u5F9730\u5929\u65F6\u957F\u4F7F\u7528vip1\u8282\u70B9,\u521D\u59CB50G\u6D41\u91CF\uFF0C\u7B7E\u5230\u6D41\u91CF\u53EF\u53E0\u52A0,\u6709\u591A\u6761\u9AD8\u901F\u4E2D\u8F6C\u7EBF\u8DEF\u53EF\u9009\u7528,\u89E3\u9501\u6D41\u5A92\u4F53,\u6B22\u8FCE\u7FA4\u53CB\u54C1\u5C1D\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:121,type:"message",text:[`\u5E74\u5E95\u4E86\uFF0C
\u4F60\u7684\u624B\u673A\u8BDD\u8D39\u79EF\u5206\u5728\u4E0D\u7528\u5C31\u8981\u88AB\u6E05\u96F6\u4E86\uFF0C
\u6559\u4F60\u514D\u53BB\u590D\u6742\u6B65\u9AA4\u5E26\u4F60\u767D\u5AD6\u8BDD\u8D39

`,{type:"bold",text:`\u5151\u6362\u65B9\u5F0F\uFF1A

`},`\u79FB\u52A8\u7528\u6237
\u7F16\u8F91\u77ED\u4FE1HF\u53D1\u9001\u523010658999
\u8054\u901A\u7528\u6237\u7F16\u8F91\u77ED\u4FE1JFJF#Q\u53D1\u9001\u523010010

\u7535\u4FE1\u7528\u6237
\u7F16\u8F91\u77ED\u4FE1JFDH\u53D1\u9001\u523010001
\uFF08\u7535\u4FE1\u65E0\u6548\u53EF\u4EE5\u53D1\u90011061\u6216\u8005105\u8BD5\u8BD5\uFF09

`,{type:"hashtag",text:"#\u767D\u5AD6\u7EBF\u62A5"},""]},{id:122,type:"message",text:[`1000+\u5957\u6700\u65B0\u8BA1\u7B97\u673A\u4E13\u4E1A\u6BD5\u4E1A\u8BBE\u8BA1\u6E90\u7801+\u8BBA\u6587+PPT
\u94FE\u63A5\uFF1A`,{type:"link",text:"https://pan.baidu.com/s/1u3pHaRZpvtcb66rDz-beKA"},`\u63D0\u53D6\u7801\uFF1Aswoz

`,{type:"hashtag",text:"#\u767D\u5AD6\u8D44\u6E90"},""]},{id:123,type:"message",text:["\u673A\u573A\uFF1A",{type:"text_link",text:`\u8DE8\u8D8A\u957F\u57CE

`,href:"https://direct.gfwservice.xyz/"},`\u5143\u65E6\u9650\u5B9A\uFF0C\u8BF8\u4F4D\u4ECA\u5929\u5FEB\u9886\u5427\uFF0C\u8FC7\u4E86\u5143\u65E6\uFF0C\u6CE8\u518C\u4F1A\u67095G\u7684\u6D41\u91CF\u4F53\u9A8C\u7684

\u7279\u70B9\uFF1A`,{type:"bold",text:`\u65E0\u9700\u771F\u5B9E\u90AE\u7BB1

`},{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:125,type:"message",text:["\u5206\u4EAB\u4E2A",{type:"bold",text:"\u957F\u671F\u4F7F\u7528"},`\u7684\u8BA2\u9605\uFF0C
\u5927\u5BB6\u53EF\u4EE5\u4F5C\u4E3A`,{type:"bold",text:"\u5907\u7528"},`\uFF0C
`,{type:"bold",text:`\u901F\u5EA6\u4E00\u822C\uFF0C\u5EF6\u8FDF\u4F4E\uFF0C\u91CD\u5728\u6C38\u4E0D\u8FC7\u671F
`},`\u81F3\u4E8E\u5176\u4ED6\u8BA2\u9605\u683C\u5F0F\uFF0C
\u53EF\u4EE5\u8BBF\u95EE\u8BE5\u8BA2\u9605\u7684\u57DF\u540D\u83B7\u53D6

Vmess\uFF1A`,{type:"bold",text:`\u8BA2\u9605\u5730\u5740\uFF08\u514D\u7FFB\u5373\u53EF\u66F4\u65B0\uFF09

`},{type:"hashtag",text:"#\u767D\u5AD6\u8BA2\u9605"},""]},{id:126,type:"message",text:""},{id:127,type:"message",text:[`\u5206\u4EAB\u4E2A\u514D\u8D39\u9886\u53D6\u4F1A\u5458\u8D26\u53F7\u7684\u5C0F\u7A0B\u5E8F

`,{type:"hashtag",text:"#\u767D\u5AD6\u4F1A\u5458\u8D26\u53F7"},""]},{id:128,type:"message",text:""},{id:129,type:"message",text:[`\u767D\u5AD6\u963F\u91CC\u4E91\u201C\u65E0\u5F71\u4E91\u7535\u8111\u201D\u514D\u8D39\u4F53\u9A8C

\u914D\u7F6E\uFF1A
2vCPU|4GB\u5185\u5B58
80GB\u7CFB\u7EDF\u76D8\uFF0C50GB\u6570\u636E\u76D8
10Mbps\u5E26\u5BBD

\u4E2A\u4EBA\u53EF\u98861\u53F0\uFF0C\u4F01\u4E1A\u7528\u6237\u53EF\u98862\u53F0\uFF0C\u6BCF\u53F01\u4E2A\u6708

\u9886\u53D6\u5730\u5740\uFF1A`,{type:"link",text:"https://www.aliyun.com/daily-act/ecs/eds_free"},`

`,{type:"hashtag",text:"#\u767D\u5AD6vps"},""]},{id:130,type:"service",actor:"\u6211\u7231\u767D\u5AD6",actor_id:"channel1504326588",action:"pin_message",message_id:128,text:""},{id:131,type:"message",text:[`\u79FB\u52A88\u5143\u81EA\u7531\u9009\u5957\u9910\u5728\u7EBF\u529E\u7406\u94FE\u63A5

\u81EA\u7531\u9009\u8BED\u97F3\u5957\u9910-8\u5143\uFF0830\u5206\u949F\uFF09
`,{type:"link",text:"https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2007250&productCode=1165182"},`


\u81EA\u7531\u9009\u6D41\u91CF\u5957\u9910-8\u5143\uFF08100M\uFF09
`,{type:"link",text:"https://wx.10086.cn/website/businessPlatform/shopDetail?productId=2007436&productCode=6424264"},`

`,{type:"hashtag",text:"#\u767D\u5AD6\u7EBF\u62A5"},""]},{id:132,type:"message",text:[`\u673A\u573A\u63A8\u8350

`,{type:"bold",text:"\u673A\u573A"},"\u{1F4A8}\uFF1A",{type:"text_link",text:`M78\u4E91

`,href:"https://m78cloud.cc/"},{type:"bold",text:"\u7279\u8272"},"\u2728\uFF1A\u867D\u7136\u4F53\u9A8C\u6D41\u91CF\u5C11\uFF0C\u4F46\u662F\u901F\u5EA6\u662F\u771F\u7684\u9999\uFF0C\u53EA\u6D4B\u4E86\u4E00\u4E2A\u5C31\u8D85\u4E86\u3002\u3002\u3002\u3002",{type:"italic",text:"\u5173\u952E\u662F\u4E0D\u9700\u8981\u771F\u5B9E\u90AE\u7BB1\uFF0C\u968F\u4FBF\u64B8\u5427\u3002\uFF08\u5F53\u7136\u6709\u4E13\u4E3A\u6211\u4EEC\u51C6\u5907\u7684\u767D\u5AD6\u5957\u9910\u5566\uFF0C\u53EF\u5546\u5E97\u81EA\u53D6"},`\uFF09

`,{type:"bold",text:"\u8BF4\u660E"},"\u26A1\uFE0F\uFF1A",{type:"bold",text:"\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66"},`\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:133,type:"message",text:""},{id:134,type:"message",text:""},{id:135,type:"message",text:[`\u673A\u573A\u63A8\u8350

`,{type:"bold",text:"\u673A\u573A"},"\u{1F4A8}\uFF1A",{type:"text_link",text:`\u6CE1\u6CE1\u4E91

`,href:"https://www.paopaoyun.fun/"},{type:"bold",text:"\u7279\u8272"},`\u2728\uFF1A\u65E0\u9700\u90AE\u7BB1\u9A8C\u8BC1\uFF0C\u90E8\u5206\u6D4B\u901F\u5982\u4E0A\u56FE

`,{type:"bold",text:"\u8BF4\u660E\u26A1\uFE0F"},`\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:136,type:"message",text:""},{id:137,type:"message",text:[`\u5FAE\u4FE1\u514D\u8D39\u9886\u592E\u89C6\u864E\u5E74\u7EA2\u5305\u5C01\u9762

\u624B\u6162\u65E0\uFF0C\u521A\u9700\u9886

1\u3001\u5FAE\u4FE1\u626B\u7801\u540E->\u4F9D\u6B21\u70B9\u51FB\u56DB\u4E2A\u5B57\uFF1A\u864E\u529B\u5168\u5F00->\u518D\u70B9\u51FB#\u7B26\u53F7->4\u4E2A\u5C01\u9762\u53EA\u80FD\u9009\u4E00\u4E2A\u9886

2\u3001\u67094\u6B21\u673A\u4F1A\u6362\u4E00\u4E2A\u5C01\u9762->\u770B\u597D\u5C31\u70B9\u51FB\u4FDD\u5B58->\u518D\u9886\u53D6\u5373\u53EF->\u6709\u6548\u671F3\u4E2A\u6708\uFF01

`,{type:"hashtag",text:"#\u767D\u5AD6\u7EBF\u62A5"},""]},{id:138,type:"message",text:""},{id:140,type:"message",text:[`\u65E0\u9650\u83B7\u53D6TG\u4EE3\u7406\u7684\u673A\u5668\u4EBA\uFF0C\u5907\u7528\u53EF\u4EE5\u7684\uFF0C\u7528\u4E0D\u4E86\u5C31\u91CD\u65B0\u83B7\u53D6\u4E00\u6B21\u{1F504}

`,{type:"text_link",text:`\u70B9\u51FB\u83B7\u53D6

`,href:"https://t.me/beanvpnbot"},{type:"hashtag",text:"#\u767D\u5AD6TG\u4EE3\u7406"},""]},{id:141,type:"message",text:["V2ray\u{1F449}\u{1F3FB}",{type:"text_link",text:`\u957F\u6309\u590D\u5236\u8BA2\u9605

`,href:"https://api.v1.mk/sub?target=mixed&url=https%3A%2F%2Fraw.githubusercontent.com%2FJsnzkpg%2FJsnzkpg%2FJsnzkpg%2FJsnzkpg&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FMeilieage%2Fwebcdn%2Fmain%2Frule%2FArea_Media_NoAuto.ini&emoji=true&list=false&udp=false&tfo=false&expand=true&scv=false&fdn=false&sort=false"},"Clash\u{1F449}\u{1F3FB}",{type:"text_link",text:`\u957F\u6309\u590D\u5236\u8BA2\u9605

`,href:"https://api.v1.mk/sub?target=clash&url=https%3A%2F%2Fraw.githubusercontent.com%2FJsnzkpg%2FJsnzkpg%2FJsnzkpg%2FJsnzkpg&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2Flhl77%2Fsub-ini%2Fmain%2Ftsutsu-mini-gfw.ini&emoji=true&list=false&udp=false&tfo=false&expand=true&scv=false&fdn=false&sort=false&new_name=true"},"\u5C0F\u706B\u7BAD\u{1F449}\u{1F3FB}",{type:"text_link",text:`\u957F\u6309\u590D\u5236\u8BA2\u9605

`,href:"https://raw.githubusercontent.com/Jsnzkpg/Jsnzkpg/Jsnzkpg/Jsnzkpg"},"\u5708X\u{1F449}\u{1F3FB}",{type:"text_link",text:`\u957F\u6309\u590D\u5236\u8BA2\u9605

`,href:"https://api.v1.mk/sub?target=quanx&url=https%3A%2F%2Fraw.githubusercontent.com%2FJsnzkpg%2FJsnzkpg%2FJsnzkpg%2FJsnzkpg&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR_Online_Full_AdblockPlus.ini&emoji=true&list=false&udp=false&tfo=false&expand=true&scv=false&fdn=false&sort=false"},"Loon\u{1F449}\u{1F3FB}",{type:"text_link",text:`\u957F\u6309\u590D\u5236\u8BA2\u9605

`,href:"https://api.v1.mk/sub?target=loon&url=https%3A%2F%2Fraw.githubusercontent.com%2FJsnzkpg%2FJsnzkpg%2FJsnzkpg%2FJsnzkpg&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR_Online_Full_AdblockPlus.ini&emoji=true&list=false&udp=false&tfo=false&expand=true&scv=false&fdn=false&sort=false"},"\u51B2\u6D6A\u677F\u{1F449}\u{1F3FB}",{type:"text_link",text:`\u957F\u6309\u590D\u5236\u8BA2\u9605

`,href:"https://sub.maoxiongnet.com/sub?target=surfboard&url=https%3A%2F%2Fraw.githubusercontent.com%2FJsnzkpg%2FJsnzkpg%2FJsnzkpg%2FJsnzkpg&insert=false&config=%E5%93%81%E4%BA%91%E4%B8%93%E5%B1%9E%E9%85%8D%E7%BD%AE&emoji=true&list=false&udp=false&tfo=false&scv=false&fdn=false&sort=false"},`\u5C31\u8FD9\u4E00\u4E2A\u8BA2\u9605\u591F\u4F60\u7FFB\u5899\u4E4B\u8DEF\u4E86\uFF0C\u76F4\u63A5\u5F00\u542F\u517B\u8001\u6A21\u5F0F\u5373\u53EF\uFF0C\u6BCF\u5929\u66F4\u65B0\u4E0B\u8BA2\u9605\u5C31\u884C\u4E86\uFF0C\u9002\u5408\u5907\u7528\u54E6

`,{type:"hashtag",text:"#\u767D\u5AD6\u8BA2\u9605"},""]},{id:142,type:"message",text:[`\u673A\u573A\u63A8\u8350

`,{type:"bold",text:"\u673A\u573A"},"\u{1F4A8}\uFF1A",{type:"text_link",text:`VPROX

`,href:"https://vproxy.us/#/register?code=yCeyyFqN"},{type:"bold",text:"\u7279\u8272"},"\u2728\uFF1A",{type:"strikethrough",text:"\u65E0\u9700\u90AE\u7BB1\u9A8C\u8BC1"},`\uFF0C\u90E8\u5206\u6D4B\u901F\u5982\u4E0A\u56FE\uFF0C\u5957\u9910\u4E00\u5E74\u6709\u6548

`,{type:"bold",text:"\u8BF4\u660E\u26A1\uFE0F"},`\uFF1A\u6240\u53D1\u673A\u573A\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

\u6CE8\u610F\u{1F47B}\uFF1A\u76EE\u524D\u5DF2\u7ECF\u9700\u8981\u9A8C\u8BC1\u7801\u548C\u9080\u8BF7\u7801\u6CE8\u518C\u4E86

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:143,type:"message",text:""},{id:144,type:"message",text:[`\u4E2D\u56FD\u79FB\u52A8\u514D\u8D39\u9886\u53D61GB\u65E5\u5305\u6D41\u91CF

\u9886\u53D6\u5730\u5740\uFF1A`,{type:"link",text:"https://dev.coc.10086.cn/coc3/canvas/rightsmarket-h5-canvas/online/lingquliuliang"},`

`,{type:"hashtag",text:"#\u767D\u5AD6\u7EBF\u62A5"},""]},{id:145,type:"message",text:[`\u5927\u5BB6\u603B\u6709\u4F20\u4E00\u4E9B\u6587\u4EF6\u7684\u9700\u6C42\uFF0C\u5728\u8FD9\u91CC\u63A8\u8350\u516B\u4E2A\u56FD\u5916\u7684\u533F\u540D\u7F51\u76D8\uFF0C\u6240\u6709\u7F51\u76D8\u5747\u652F\u6301\u533F\u540D\u4E0A\u4F20\u4E0B\u8F7D

`,{type:"link",text:"1.Sql.gg"},`
\u6B64\u7F51\u76D8\u5185\u7F6E\u56FE\u5E8A\u4EE5\u53CA\u7C7B\u4F3Cpastebin\u7684\u6587\u5B57\u4F20\u8F93\u670D\u52A1\uFF0C\u540C\u6837\u652F\u6301\u6587\u4EF6\uFF0C\u6587\u4EF6\u6570\u91CF\u4E0D\u9650\uFF0C\u5355\u6587\u4EF6\u5927\u5C0F\u6700\u592710g\uFF0C\u4E0A\u4F20\u4E0E\u4E0B\u8F7D\u6D41\u91CF\u901F\u5EA6\u4E0D\u9650\u5236\u3002\u8BE5\u7F51\u76D8\u751A\u81F3\u63D0\u4F9B\u955C\u50CF\u7F51\u7AD9\u4EE5\u53CAtor\u7F51\u7AD9\u65B9\u4FBF\u5404\u56FD\u7528\u6237\u4F7F\u7528

2.Userscloud
\u8BE5\u7F51\u76D8\u6700\u591A\u652F\u630150\u4E2A\u6587\u4EF6\u540C\u65F6\u4E0A\u4F20\uFF0C\u4E0A\u4F20\u5BB9\u91CF\u6700\u5927\u652F\u63015GB\u3002\u666E\u901A\u7528\u6237\uFF0C\u4E0A\u4F20\u7684\u6587\u4EF6\u6700\u591A\u53EF\u6258\u7BA130\u5929\u3002\u6C38\u4E45\u6258\u7BA1\u9700\u5F00\u9AD8\u7EA7\u4F1A\u5458\u3002\u6587\u4EF6\u7C7B\u578B\u6CA1\u6709\u9650\u5236\u3002\u552F\u4E00\u7684\u9650\u5236\u662F\u8272\u60C5\uFF0C\u88F8\u9732\uFF0C\u8272\u60C5\u56FE\u7247\u548C\u4EFB\u4F55\u4EE4\u4EBA\u53CD\u611F\u7684\u6750\u6599\uFF0C\u53D7\u7248\u6743\u4FDD\u62A4\u7684\u6750\u6599\u3002

3.Catbox
\u5355\u6587\u4EF6\u6700\u5927\u4E0A\u4F20\u9650\u5236200M\uFF0C\u4E0D\u6CE8\u518C\u8D26\u6237\u4E0D\u4FDD\u5B58\u8BB0\u5F55\uFF0C\u6CE8\u518C\u767B\u5F55\u4FDD\u5B58\u4E0A\u4F20\u8BB0\u5F55\u5E76\u53EF\u4EE5\u521B\u5EFA\u5206\u4EAB\u4E13\u8F91\uFF0C\u53EF\u4EE5\u5206\u4EAB\u591A\u6587\u4EF6\uFF0C\u4E0A\u4F20\u901F\u5EA6\u5FEB\uFF0C\u4E0B\u8F7D\u901F\u5EA6\u4E00\u822C\uFF0C\u914D\u5408IDM\u4E0B\u8F7D\u901F\u5EA6\u53EF\u63D0\u5347\u3002
\u7F51\u7AD9\u4E0D\u5141\u8BB8\u4E0A\u4F20\u53EF\u6267\u884C\u6587\u4EF6\u4EE5\u53CA\u8272\u60C5\u7B49\u5185\u5BB9\u3002

4.Uploadfiles
\u8BE5\u7F51\u76D8\u4E00\u6B21\u6700\u591A\u4E0A\u4F2010\u4E2A\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u6700\u59275GB\uFF0C\u5546\u4E1A\u7528\u6237\u6700\u5927\u6587\u4EF6\u5927\u5C0F\u4E3A100GB\u3002\u4F5C\u4E3A\u8BBF\u5BA2\uFF0C\u4E0A\u4F20\u7684\u6587\u4EF6\u6700\u591A\u53EF\u6258\u7BA130\u5929\u3002\u6C38\u4E45\u6258\u7BA1\u9700\u6CE8\u518C\u7528\u6237\u3002\u6587\u4EF6\u7C7B\u578B\u6CA1\u6709\u9650\u5236\u3002

5.AnonFiles
\u8001\u724C\u7684\u533F\u540D\u7F51\u76D8\uFF0C\u4E0D\u9650\u5236\u4E0A\u4F20\u4E0B\u8F7D\u901F\u5EA6\uFF0C\u6587\u4EF6\u6700\u5927\u4E0A\u4F20\u91CF20G

`,{type:"link",text:"6.file.io"},`
\u8BE5\u7F51\u76D8\u7279\u70B9\u5728\u4E8E\u8BBF\u5BA2\u9605\u540E\u5373\u711A\uFF0C\u4E0A\u4F20\u7684\u6587\u4EF6\u4E0B\u8F7D\u6210\u529F\uFF0C\u6587\u4EF6\u5C31\u4F1A\u4ECE\u670D\u52A1\u5668\u5220\u9664\uFF0C\u4E0B\u8F7D\u94FE\u63A5\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u6CE8\u518C\u7528\u6237\u53EF\u81EA\u5B9A\u4E49\u6587\u4EF6\u7684\u5230\u671F\u65F6\u95F4\u4EE5\u53CA\u6700\u5927\u4E0B\u8F7D\u91CF\uFF0C\u8FBE\u5230\u8BBE\u5B9A\u503C\u6587\u4EF6\u5373\u9500\u6BC1\uFF0C\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u6700\u5927100M

7.zippyshare
\u5355\u4E2A\u6587\u4EF6\u6700\u5927500MB\uFF0C\u65E0\u4E0B\u8F7D\u9650\u5236\uFF0C\u65E0\u9650\u78C1\u76D8\u7A7A\u95F4\uFF0C\u65E0\u9700\u6CE8\u518C\uFF0C\u53EF\u8BBE\u7F6E\u79C1\u5BC6\u4E0A\u4F20\uFF0C\u6587\u4EF6\u4FDD\u5B58\u671F\u965030\u5929

8.Filecad
\u6CE8\u518C\u7528\u6237\uFF08\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5206\u914D\u4E00\u4E2A\u4E34\u65F6\u7528\u6237\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7ED1\u5B9A\u90AE\u7BB1\u53D8\u6210\u6CE8\u518C\u7528\u6237\uFF09\u62E5\u6709\u65E0\u9650\u7684\u7A7A\u95F4\u548C180\u5929\u7684\u5B58\u50A8\u671F\u9650\uFF0C\u5982\u679C180\u5929\u65E0\u4EBA\u4E0B\u8F7D\u5219\u4F1A\u88AB\u5220\u9664\u3002\u652F\u6301webdav

`,{type:"hashtag",text:"#\u767D\u5AD6\u7A7A\u95F4"},""]},{id:147,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1ADot86

\u7279\u8272\u2728\uFF1A\u5957\u9910\u6709\u6548\u671F\u7279\u522B\u957F\uFF0C\u90E8\u5206\u6D4B\u901F\u5982\u4E0A\u56FE

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:150,type:"message",text:`\u514D\u8D39\u9886\u54D4\u54E9\u54D4\u54E9\u4F1A\u5458

\u6D3B\u52A8\u4EC5\u9650\u4ECA\u5929\u4E00\u5929\uFF0C\u5927\u5BB6\u6CE8\u610F\u4E00\u4E0B\u65F6\u95F4\uFF01

\u9996\u5148\u9700\u8981\u81EA\u5DF1\u5728\u5404\u5927\u5E94\u7528\u5546\u5E97\u641C\u7D22\u4E0B\u8F7D\u201C\u4E0D\u5495\u526A\u8F91APP\u201D\uFF0C\u6CE8\u518C\u767B\u9646\u540E\u70B9\u51FB\u6700\u9876\u90E8\u7684\u201CB\u7AD9\u5927\u4F1A\u5458\u201D\u8FDB\u5165\u6D3B\u52A8

\u53EA\u9700\u8981\u5206\u4EAB\u7ED9\u4E09\u4E2A\u53F7\u6253\u5F00\u52A9\u529B\u5373\u53EF\uFF0C\u597D\u53CB\u53EA\u9700\u8981\u7B80\u5355\u4E0B\u8F7DAPP\uFF0C\u4E0D\u9700\u8981\u767B\u9646\uFF0C\u975E\u5E38\u7B80\u5355

\u5B8C\u6210\u540E\u5927\u53F7\u5373\u53EF\u9886\u53D6\u5956\u52B1\uFF0C\u5956\u52B1\u662F\u4E09\u5929\u5185\u5230\u8D26\uFF0C\u76F4\u51B2\u624B\u673A\u8D26\u53F7`},{id:151,type:"message",text:[`Tailscale\u4E00\u4E2A\u514D\u8D39\u7684\u5185\u7F51\u7A7F\u900F\u670D\u52A1
`,{type:"link",text:"https://tailscale.com/"},`
`,{type:"link",text:"https://530503.xyz/articles/2021/04/29/1619668138404.html"},""]},{id:153,type:"message",text:[`\u56FD\u5185\u5916\u77ED\u4FE1\u63A5\u7801\u5E73\u53F0\u5408\u96C6

\u53EA\u5217\u4E86\u4E00\u4E9B\u51FA\u6765\uFF0C\u9700\u8981\u66F4\u591A\u53EF\u4EE5\u5728\u641C\u7D22\u5F15\u64CE\u7F51\u7AD9\u641C\u5173\u952E\u8BCD\u201CReceiveSMS\u201D

\uC784\uC2DCSMS\uC218\uC2E0\uFF1A`,{type:"link",text:"https://www.oncesms.com/"},`\u97E9\u8BED\uFF0C\u514D\u8D39\u7F8E\u56FD\u3001\u52A0\u62FF\u5927\u53F7\u7801
`,{type:"link",text:"https://www.tesms.net/"},`
`,{type:"link",text:"https://smscodeonline.com/"},`
`,{type:"link",text:"https://sms24.me/"},`
`,{type:"link",text:"https://receive-sms.cc"},`
`,{type:"link",text:"https://bestsms.xyz/"},`
`,{type:"link",text:"https://getfreesmsnumber.com"},`\u6709\u8D8A\u5357\u624B\u673A\u53F7\u7801
`,{type:"link",text:"http://7sim.net"},`
`,{type:"link",text:"https://receive-sms-free.cc/"},`
`,{type:"link",text:"http://sms.sellaite.com"},`
`,{type:"link",text:"https://ch.freephonenum.com"},`
`,{type:"link",text:"https://smsreceivefree.com"},`
`,{type:"link",text:"https://www.receive-sms-online.info"},`
`,{type:"link",text:"https://receiveasms.com"},`
`,{type:"link",text:"https://sms-online.co/receive-free-sms"},`
`,{type:"link",text:"https://receive-sms.com"},`
`,{type:"link",text:"http://receivefreesms.com/"},`
`,{type:"link",text:"https://www.receivesmsonline.net/"},`
`,{type:"link",text:"https://www.freeonlinephone.org/"},`
`,{type:"link",text:"https://us-phone-number.com"},`
`,{type:"link",text:"https://temporary-phone-number.com"},`
`,{type:"link",text:"https://www.receivesms.org/"},`
`,{type:"link",text:"https://pingme.tel/receive-sms-online-cn/"},`
`,{type:"link",text:"http://receivefreesms.net/"},`
`,{type:"link",text:"http://receivesmsonline.in/"},`
`,{type:"link",text:"https://sms-receive.net/"},`
`,{type:"link",text:"https://www.receivesms.net/"},""]},{id:157,type:"message",text:`\u9891\u9053\u63A8\u51FA\u7F51\u7AD9\u7248\u672C\u6765

\u7279\u70B9\uFF1A\u5BF9\u8BE5\u9891\u9053\u7684\u6D88\u606F\u8FDB\u884C\u4E86\u5206\u7C7B\uFF0Ctg\u6682\u65F6\u65E0\u6CD5\u767B\u5F55\u65F6\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u5907\u7528\uFF0C\u8FDB\u884C\u6D88\u606F\u67E5\u770B

\u70B9\u51FB\u4E0B\u65B9\u6700\u540E\u4E00\u4E2A\u83DC\u5355\u67E5\u770B`},{id:159,type:"message",text:[`\u6574\u5408\u7F51\u7EDC\u4E0A\u5206\u4EAB\u7684\u8282\u70B9
\u901F\u5EA6\u8FD8\u4E0D\u9519

\u8BA2\u9605\u5730\u5740\uFF1A`,{type:"link",text:"https://wds.ecsxs.com/219465.json"},""]},{id:160,type:"message",file:"(Filenotincluded.Changedataexportingsettingstodownload.)",thumbnail:"(Filenotincluded.Changedataexportingsettingstodownload.)",media_type:"video_file",mime_type:"video/mp4",duration_seconds:20,text:""},{id:161,type:"message",text:[`\u4E91\u542CAPP\u514D\u8D39\u9886\u53D690\u5929\u4F1A\u5458

`,{type:"link",text:"https://ytweb.radio.cn/vipactiveties/?activityId=VIP219036863938692#/login"},""]},{id:162,type:"message",text:`\u5EF6\u65F6\u867D\u7136\u5927\uFF0C\u4F46\u662F\u53EF\u4EE5\u8DD1\u6EE1\u5E26\u5BBD\u54E6\uFF0C\u53EF\u7528\u4F5C\u4E0B\u8F7D\u{1F92B}

trojan://d0d535cc-438d-4a0c-e09e-65441e89ac1e@101.67.8.158:18168?sni=vless-websocks-tls.transfer-xray.tk`},{id:164,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u8FBE\u897F\u516C\u76CA\u673A\u573A

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://net.dacy.cc/"},`

\u7279\u8272\u2728\uFF1A\u5546\u5E97\u96F6\u5143\u62CD1T\uFF0C\u6D4B\u901F\u5982\u4E0A\u56FE\uFF0C\u53EF\u4EE5\u4E34\u65F6\u90AE\u7BB1\u6CE8\u518C

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:165,type:"message",text:[`\u5404\u5730\u535A\u7269\u9986\u7EBF\u4E0A\u8D44\u6E90
1\uFE0F\u20E3\u4E00\u4E2A\u4FC4\u7F57\u65AF\u7EBF\u4E0A\u535A\u7269\u9986\uFF0C\u6536\u5F55\u8D85\u8FC7170,000\u5E45\u827A\u672F\u4F5C\u54C1\u300110,000\u4E2A\u827A\u672F\u5BB6
`,{type:"link",text:"https://gallerix.asia/"},`
2\uFE0F\u20E3\u6CD5\u56FD\u7F57\u6D6E\u5BAB\u8D44\u6599\u5E93\u63D0\u4F9B48\u4E07\u5F20\u6536\u85CF\u827A\u672F\u54C1\u56FE\u5E93\u514D\u8D39\u4E0B\u8F7D
`,{type:"link",text:"https://collections.louvre.fr/en/"},`
3\uFE0F\u20E3\u7F8E\u56FD\u56FD\u4F1A\u56FE\u4E66\u9986\u5F00\u653E2600\u5E45\u6D6E\u4E16\u7ED8\u753B\u4F5CJPEG\u3001GIF\u548CTIFF\u683C\u5F0F\u514D\u8D39\u4E0B\u8F7D
`,{type:"link",text:"https://www.loc.gov/collections/japanese-fine-prints-pre-1915/"},`
4\uFE0F\u20E3\u829D\u52A0\u54E5\u827A\u672F\u535A\u7269\u9986TheCollection\u63D0\u4F9B50000\u4EF6\u827A\u672F\u54C1\u514D\u8D39\u56FE\u5E93\u4E0B\u8F7D
`,{type:"link",text:"https://www.artic.edu/collection"},`
5\uFE0F\u20E3\u7F8E\u56FD\u56FD\u4F1A\u56FE\u4E66\u9986FreetoUseandReuseSets\u53EF\u514D\u8D39\u4E0B\u8F7D\u8001\u7167\u7247\u3001\u6D77\u62A5\u5F71\u7247
`,{type:"link",text:"https://www.loc.gov/free-to-use/"},""]},{id:166,type:"message",text:[`1\u6708\u4EFD\u7231\u5947\u827A\u9EC4\u91D1VIP\u3001\u817E\u8BAF\u89C6\u9891VIP\u3001\u559C\u9A6C\u62C9\u96C5VIP~~~

\u7231\u5947\u827A\u9EC4\u91D1\u4F1A\u5458\uFF0C\u517110\u5F20\uFF1A
`,{type:"link",text:"https://vip.iqiyi.com/html5VIP/activity/hongbaoh5/index.html?fv=&socialplatform=link&p1=222221&redNo=4fb6beb3d6cbeb11202201012145"},`

\u817E\u8BAF\u89C6\u9891VIP\uFF0C\u51715\u5F20\uFF1A
8h://\u4FDD\u5B58\u4E0B\u65B9\u56FE\u7247\u6216\u957F\u6309\u590D\u5236\u6574\u6761\u4FE1\u606F$BHAcIFbn1$\uFF0C\u6253\u5F00\u6700\u65B0\u7248\u817E\u8BAF\u89C6\u9891\uFF0C\u9886\u53D6\u6211\u9001\u7ED9\u4F60\u7684VIP\uFF5E

\u559C\u9A6C\u62C9\u96C5\u4F1A\u54587\u5929\uFF08\u9650\u975E\u4F1A\u5458\u9886\u53D6\uFF09\uFF0C\u51712\u5F20\uFF0C7\u5929/\u5F20\uFF1A
`,{type:"link",text:"https://m.ximalaya.com/gatekeeper/universal-gift-web/receive?purchaseUserId=34905369&sign=e45447df78cd66bbae0e57ed27459c2b&tradeOrderNo=202201134001369004003238430&iteration=2&associatedId=27220a110c774459a2f5e61edb8574bce45447df78cd66bbae0e57ed27459c2b&uid=34905369&shrdv=8F910C73-CEDA-476A-B7DE-1DFC0CAA3221&shrh5=iphone&shrid=17e4f2533895818&shrdh=1&shrpid=17e4f2533894a57&commandShareId=0bbc7c2a8bd9a3734a6802dc8b9cf2b8&shareTime=1642005345161&shareLevel=1"},""]},{id:167,type:"message",text:[`\u3010\u51E0\u4E2A\u5E38\u7528\u7684\u77ED\u94FE\u63A5\u3011

\u7B2C\u4E00\u7C7B\u53EA\u6709\u7F29\u77ED\u94FE\u63A5\u7684\u529F\u80FD\uFF1A
1.`,{type:"link",text:"http://dlj.li"},`
2.`,{type:"link",text:"http://do2.ltd"},`
3.`,{type:"link",text:"http://bib0.com"},`
4.`,{type:"link",text:"http://urlify.cn"},`

\u7B2C\u4E8C\u7C7B\u65B0\u589E\u4E86\u6279\u91CF\u7F29\u77ED\u94FE\u63A5\u7684\u529F\u80FD\uFF1A
1.`,{type:"link",text:"http://aad.tw"},`
2.`,{type:"link",text:"http://suo.im"},`\u540C\u65F6\u652F\u6301\u591A\u4E2A\u77ED\u94FE\u57DF\u540D

\u7B2C\u4E09\u7C7B\u65B0\u589E\u4E86\u8FD8\u539F\u77ED\u94FE\u63A5\u7684\u529F\u80FD\uFF1A
1.`,{type:"link",text:"http://sina.lt"},`\u540C\u65F6\u652F\u6301\u533F\u540D\u77ED\u94FE\u63A5\uFF0C\u5373\u4E0D\u4F1A\u663E\u793A\u7F51\u5740\u6765\u6E90
2.`,{type:"link",text:"http://5dov.cn"},`

\u7B2C\u56DB\u7C7B\u65B0\u589E\u4E86\u81EA\u5B9A\u4E49\u77ED\u94FE\u63A5\uFF0C\u6B64\u529F\u80FD\u9488\u5BF9\u7528\u6237\u7684\u54C1\u724C\u7F51\u7AD9\u7B49\u8FDB\u884C\u81EA\u5B9A\u4E49\u8BBE\u7F6E\uFF0C\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u6B64\u529F\u80FD\u9700\u8981\u767B\u5F55\u4F7F\u7528\uFF0C\u8FD9\u91CC\u4ECB\u7ECD\u65E0\u9700\u767B\u5F55\u5373\u53EF\u4F7F\u7528\u7684\uFF1A
1.`,{type:"link",text:"http://is.gd"},`
2.`,{type:"link",text:"http://gg.gg"},`
3.`,{type:"link",text:"http://bit.ly"},""]},{id:169,type:"message",text:"\u4E00\u4E2A\u6708\u7231\u5947\u827A\u4F1A\u5458\uFF0C\u770B\u624B\u6C14\u5566"},{id:170,type:"message",text:[`\u9EBB\u8C46\u4F20\u5A92\u89C6\u9891\u514D\u8D39\u5728\u7EBF\u7F51\u7AD9

\u4E13\u95E8\u5206\u4EAB\u9EBB\u8C46\u89C6\u9891\u7684\u7F51\u7AD9\uFF0C\u8D44\u6E90\u5F88\u5168\u3002

`,{type:"link",text:"https://madouqu.com/"},`

`,{type:"link",text:"https://madou.club/"},""]},{id:171,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u9752\u85E4\u6811\u590F

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://cloud.joker007.top"},`

\u7279\u8272\u2728\uFF1A\u4E00\u5E74\u6709\u6548\u671F

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:172,type:"message",text:[`\u4E34\u65F6\u90AE\u7BB1\u673A\u5668\u4EBA\uFF0C\u70B9\u65B0\u90AE\u7BB1\u4F1A\u968F\u673A\u751F\u6210\u65B0\u90AE\u7BB1\uFF0C\u53EF\u6536\u90AE\u4EF6\uFF0C\u76F4\u63A5\u5728\u5BF9\u8BDD\u7A97\u53E3\u663E\u793A\u90AE\u4EF6\u5185\u5BB9
`,{type:"link",text:"https://t.me/DropmailBot"},`

\u5B9E\u9645\u7F51\u5740\uFF1A`,{type:"link",text:"https://dropmail.me/zh/"},""]},{id:173,type:"message",text:[`\u5C0F\u9EC4\u6587\u5728\u7EBF\u9605\u8BFB\u7F51\u7AD9\u6536\u96C6

1.\u5C0F\u5F3A\u4E66\u5E93
\u5730\u5740\uFF1A`,{type:"link",text:"m.xiaoqiangshuku.com"},`

2.\u5C0F\u8BF4777
\u5730\u5740\uFF1A`,{type:"link",text:"m.xiaoshuo777.net"},`

3.\u7981\u5FCC\u4E66\u5C4B
\u5730\u5740\uFF1A`,{type:"link",text:"https://www.cool18.com/"},`

4.\u6587\u5FC3\u9601
\u5730\u5740\uFF1A`,{type:"link",text:"https://m.wxgxs.cc/"},`

5.\u7B2C\u4E00\u7248\u4E3B
\u5730\u5740\uFF1A`,{type:"link",text:"http://01bz.com/"},`
\u76F4\u8FDE\uFF1A`,{type:"link",text:"http://www.2u2u2u.com"},""]},{id:174,type:"message",text:[`\u3010\u4EC0\u4E48\u72EC\u7279\u5C0F\u4F17\u7684\u7F51\u7AD9\u8BA9\u4F60\u770B\u5230\u4E86\u66F4\u5927\u66F4\u597D\u7684\u4E16\u754C\uFF1F\u3011

\u6700\u5E38\u7528\u7684\u56FE\u7247\u5904\u7406\u529F\u80FD\u5408\u96C6\uFF0C\u6536\u85CF\u7EDD\u5BF9\u6709\u7528\uFF01

\u81EA\u52A8\u62A0\u56FE`,{type:"link",text:"www.aigei.com/bgremover"},`

logo\u5728\u7EBF\u5236\u4F5C\uFF1A`,{type:"link",text:"www.yeelogo.com"},`

\u7535\u5F71\u5B57\u5E55\u622A\u56FE\u62FC\u63A5\u5DE5\u5177\uFF1A`,{type:"link",text:"join-screenshots.zhanghai.me"},`

\u56FE\u7247\u5C3A\u5BF8\u5728\u7EBF\u88C1\u526A\uFF1A`,{type:"link",text:"tool.c7sky.com/image-resize"},`

\u56FE\u7247\u683C\u5F0F\u5728\u7EBF\u8F6C\u6362\uFF1A`,{type:"link",text:"www.dute.org/image-converter"},`

\u56FE\u7247\u52A0\u6587\u5B57\u6C34\u5370\uFF1A`,{type:"link",text:"tool.c7sky.com/image-watermark"},`

\u5728\u7EBF\u56FE\u7247\u53BB\u6C34\u5370\uFF1A`,{type:"link",text:"www.apowersoft.cn/image-watermark-remover"},`

\u5706\u89D2\u56FE\u7247\u5728\u7EBF\u5236\u4F5C\uFF1A`,{type:"link",text:"www.dute.org/image-round"},`

\u4EBA\u5DE5\u667A\u80FD\u56FE\u7247\u65E0\u635F\u653E\u5927\uFF1A`,{type:"link",text:"bigjpg.com"},`

\u56FE\u7247\u5728\u7EBF\u538B\u7F29\uFF08\u5927\u5C0F\u65E0\u9650\u5236\uFF09\uFF1A`,{type:"link",text:"www.picdiet.com/zh-cn"},""]},{id:175,type:"message",text:[`\u3010PPT\u6A21\u677F\u3011
1.`,{type:"link",text:"\u4F18\u54C1PPT\uFF1Awww.ypppt.com"},`
\u8FD9\u4E2A\u7AD9\u5185\u7684\u6A21\u677F\u90FD\u662F\u514D\u8D39\u7684\uFF0C\u6570\u91CF\u4E30\u5BCC\uFF0C\u76F4\u63A5\u5C31\u80FD\u4E0B\u8F7D\u3002

2.`,{type:"link",text:"OfficePLUS\uFF1Awww.officeplus.cn"},`
\u5FAE\u8F6F\u5B98\u65B9\u6A21\u677F\u5E73\u53F0\uFF0C\u8D28\u91CF\u4E5F\u8FD8\u53EF\u4EE5\uFF0C\u7C7B\u578B\u4E5F\u591A\u3002

3.`,{type:"link",text:"\u6F14\u793A\u661F\u7403\uFF1Awww.pop-ppt.com"},`
\u76EE\u524D\u6570\u91CF\u4E0D\u662F\u5F88\u4E30\u5BCC\uFF0C\u4F46\u8D28\u91CF\u6781\u9AD8\uFF0C\u6BCF\u5929\u53EF\u514D\u8D39\u4E0B\u8F7D3\u6B21\u3002

4.`,{type:"link",text:"ppt\u5B9D\u85CF\uFF1Awww.pptbz.com"},`
\u8FD9\u4E2A\u7F51\u7AD9\u4E5F\u4E0D\u9519\uFF0C\u7B80\u5355\u76F4\u63A5\uFF0C\u8FD8\u6709\u76F8\u5173\u7D20\u6750\u53EF\u4EE5\u4E0B\u8F7D\u3002

5.`,{type:"link",text:"\u6BD4\u683Cppt\uFF1Awww.tretars.com"},`\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u4F1A\u7ED9\u4F60\u8BB2\u4E00\u8BB2\u5982\u4F55\u505A\u8FD9\u4E9B\u6A21\u677F\uFF0C\u6709\u4E0D\u5C11\u6280\u5DE7\u5206\u4EAB\uFF0C\u6A21\u677F\u90FD\u5728\u7F51\u76D8\u3002

6.`,{type:"link",text:"\u53EE\u5F53\u8BBE\u8BA1\uFF1Awww.dingdangsheji.com"},`
\u6A21\u677F\u4E5F\u633A\u591A\u7684\uFF0C\u4ED4\u7EC6\u627E\u4E00\u627E\u80FD\u53D1\u73B0\u4E0D\u5C11\u8D28\u91CF\u8FD8\u53EF\u4EE5\u3002

`,{type:"link",text:"7.slidesgo\uFF1Awww.slidesgo.com"},`
\u662F\u56FD\u5916\u7684\u4E00\u5BB6\u9AD8\u8D28\u91CFPPT\u6A21\u677F\u7F51\u7AD9\uFF0C\u6709\u514D\u8D39\u548C\u4ED8\u8D39\u7684\u6A21\u677F\u3002
`,{type:"hashtag",text:"#ppt"},""]},{id:176,type:"message",text:`\u652F\u4ED8\u5B9D\u641C12306\u53EF\u4EE5\u9886\u968F\u673A\u798F\u5361

\u96C6\u4E94\u798F\u6D3B\u52A819\u53F7\u624D\u5F00\u59CB\uFF0C\u4E0D\u8FC7\u73B0\u5728\u5DF2\u7ECF\u80FD\u9886\u4E00\u5F20\u968F\u673A\u798F\u5361\u4E86\u3002`},{id:179,type:"message",text:["\u8BA2\u9605\u5730\u5740\uFF1A",{type:"link",text:"https://sub.v6mc.xyz/api/v1/client/subscribe?token=6de325b0e3b5ef439ffc4589d39b2a04"},""]},{id:180,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u795E\u5668

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://v2r.proxypools.top/"},`

\u7279\u8272\u2728\uFF1A\u65E0\u9700\u9A8C\u8BC1\u7801\uFF0C\u901F\u5EA6\u53EF\u4EE5\uFF0C\u90E8\u5206\u6D4B\u901F\u5982\u4E0A

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:182,type:"message",text:["\u8BA2\u9605\u5730\u5740\uFF1A",{type:"link",text:"https://subscribe.s7p7.top/link/jpCcTSKdggPFAXTB?clash=1"},`

sub=1\u662Fssr
sub=2\u662Fss
sub=3\u662Fvmess
sub=4\u662Ftrojan
sub=5\u662Fvless

1.5T\uFF0C\u9650\u901F1gbps`]},{id:183,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u6446\u70C2\u4E91

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://ayyy.space/"},`

\u7279\u8272\u2728\uFF1A\u65E0\u9700\u9A8C\u8BC1\u7801\uFF0C\u901F\u5EA6\u8FD8\u633A\u5FEB\u7684\uFF0C\u5546\u5E97\u81EA\u53D6\u5957\u8D5E\u3001\u5546\u5E97\u81EA\u53D6\u5957\u8D5E\u3001\u5546\u5E97\u81EA\u53D6\u5957\u8D5E

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:184,type:"message",text:["\u300C\u9ED1\u9A6C\u7A0B\u5E8F\u5458\u9E3F\u8499\u5F00\u53D1\u7CFB\u7EDF\u6559\u7A0B\uFF0CHarmonyOS2.0\u9E3F\u8499\u5E94\u7528\u5F00\u53D1\u5B9E\u6218\u6559\u7A0B\u300Dhttps://",{type:"link",text:"www.aliyundrive.com/s/fQg5ohGqDdU"},`

\u300C\u9ED1\u9A6C\u7A0B\u5E8F\u5458\u77ED\u89C6\u9891\u8FD0\u8425\u5165\u95E8...\u89C6\u9891\u8FD0\u8425\u4F53\u7CFB\u8BFE\u7A0B\u300Dhttps://`,{type:"link",text:"www.aliyundrive.com/s/t7b5si41xrw"},`

\u300C\u9ED1\u9A6C\u7A0B\u5E8F\u5458linux\u5165\u95E8\u5230\u7CBE...\u95E8linux\u7CFB\u7EDF\u8FD0\u7EF4\u300Dhttps://`,{type:"link",text:"www.aliyundrive.com/s/tMgneuLzL7V"},`

\u300C\u9ED1\u9A6C\u7A0B\u5E8F\u5458Python\u6559\u7A0B_600...\u61C2\u4E2D\u6587\u5C31\u80FD\u5B66\u4F1A\uFF09\u300Dhttps://`,{type:"link",text:"www.aliyundrive.com/s/FReMtobKfka"},`

\u300C\u9ED1\u9A6C\u7A0B\u5E8F\u5458Java\u9879\u76EESaaS\u79FB...\u516C\u6574\u5408\u6027\u89E3\u51B3\u65B9\u6848\u300Dhttps://`,{type:"link",text:"www.aliyundrive.com/s/jHWqTcPkBbw"},`

\u300C\u9ED1\u9A6C\u7A0B\u5E8F\u5458Git\u5168\u5957\u6559\u7A0B\uFF0C...\u7A0B\uFF0C\u4E00\u5957\u7CBE\u901AGit\u300Dhttps://`,{type:"link",text:"www.aliyundrive.com/s/ZXKvddJCEDv"},`

\u300C\u9ED1\u9A6C\u7A0B\u5E8F\u545821\u5E74\u6700\u65B0\u8BFE\u7A0B-7...\u6D4B\u8BD5\u5FEB\u901F\u5165\u95E8\u8BFE\u7A0B\u300Dhttps://`,{type:"link",text:"www.aliyundrive.com/s/4LbaiTYejhQ"},`

\u300C\u9ED1\u9A6CJAVA.V11\u300Dhttps://`,{type:"link",text:"www.aliyundrive.com/s/7tjoPyxvdjH"},`

\u300C\u96F6\u57FA\u7840\u5B66python\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/kMsimbppyxw"},`

\u300C\u8FD0\u7EF4\u4EBA\u5458\u5E38\u7528\u7684Linux\u547D\u4EE4\u6C47\u603B\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/WJ9zXQvpjyZ"},`

\u300C\u8FD0\u7EF4\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/q6UMiTd3Y9w"},`

\u300C\u8D85\u65B0CTF\u57F9\u8BADweb\u7F51\u7EDC\u5B89\u5168\u57FA...\u7A0B\uFF08\u9AD8\u6E051080P\uFF09\u300Dhttps://`,{type:"link",text:"www.aliyundrive.com/s/ikcgHqgNo9c"},`

\u300C\u8D75\u9633sem\u7ADE\u4EF7\u57F9\u8BAD\u6559\u7A0B\u8BFE\u7A0B\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/2EqFSBSDhiK"},`

\u300C\u811A\u672C\u8BED\u8A00\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/huPZocj5D8s"},`

\u300C\u7F51\u6613\u4E91\u7F16\u7A0B\u8BBE\u7F6E\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/63eNBAWsVWZ"},`

\u300C\u7F16\u7A0B\u5C0F\u767D\u7684\u7B2C\u4E00\u672CPython\u5165\u95E8\u4E66\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/8B3UXqBT9j2"},`

\u300C\u7F16\u7A0B\u8BED\u8A00\u8D44\u6599(c.c++.go....java.javascript.python\u7B4960\u591A\u79CD\u8BED\u8A00\u5408\u96C6)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/GAjYud4FGM9"},`

\u300C\u7B28\u529E\u6CD5\u5B66python\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/cLLS8p7Vj8u"},""]},{id:185,type:"message",text:["\u300C2021\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(93\u5C4A)\u300D",{type:"link",text:"https://www.aliyundrive.com/s/EGNoKrG4erD"},`

\u300C2020\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(92\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/AXkAgwJPCXV"},`

\u300C2019\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(91\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/rHqf4D3QdTe"},`

\u300C2018\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(90\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/uUyif3gt3Ez"},`

\u300C2017\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(89\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/sNnbiYkYYfN"},`

\u300C2016\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(88\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/PYU2PxjmT1w"},`

\u300C2015\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(87\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/HfAQAnCtfcG"},`

\u300C2014\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(86\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/kYeYbxvJdBv"},`

\u300C2013\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(85\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/8EMFK9uLZUe"},`

\u300C2012\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(84\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/cF74SdRxjbZ"},`

\u300C2011\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(83\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/tKoidnBpVhi"},`

\u300C2010\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(82\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/ukH2ZnFhreV"},`

\u300C2009\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(81\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/b3mrC8LDL5M"},`

\u300C2008\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(80\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/XTXTyzzh61x"},`

\u300C2007\u5965\u65AF\u5361\u6700\u4F73\u5F71\u7247(79\u5C4A)\u300D`,{type:"link",text:"https://www.aliyundrive.com/s/jfLkM4gMjjZ"},""]},{id:186,type:"message",text:`\u5206\u4EAB\u4E2A\u767D\u5AD6\u9879\u76EE

\u6CE8\u518C\u900112\u4E2A\u5143\u5B9D\uFF0C\u76EE\u524D\u4E00\u4E2A\u5143\u5B9D8.72
\u53EA\u9700\u8981\u8BA4\u8BC1\u4E00\u4E0B\uFF0C\u6BCF\u5929\u53EF\u4EE5\u9886\u53D60.4\u4E2A
\u60F3\u8D5A\u7684\uFF0C\u53EF\u4EE5\u626B\u7801\u6CE8\u518C

\u6709\u95EE\u9898\u53EF\u4EE5\u5728\u4E0B\u65B9\u83DC\u5355\u7684\u804A\u5929\u704C\u6C34\u7FA4\u8FDB\u884C\u4EA4\u6D41`},{id:187,type:"service",actor:"\u6211\u7231\u767D\u5AD6",actor_id:"channel1504326588",action:"pin_message",message_id:186,text:""},{id:188,type:"message",text:[`\u3010\u64B8\u7F8A\u6BDB\u3011\uFF08\u5FC5\u6709\uFF09

\u79FB\u52A8\u7528\u6237\u6700\u9AD8\u98864G\u6D41\u91CF+10\u5143\u8BDD\u8D39\uFF0C\u4EC5\u9650\u79FB\u52A8\uFF0C\u6D3B\u52A8\u622A\u6B62\u6708\u5E95\uFF5E

`,{type:"link",text:"https://dev.coc.10086.cn/coc2/web-festival/full-year-account/index.html"},""]},{id:189,type:"message",text:[`\u6211\u5728\u963F\u91CC\u4E91\u76D8\u5DF2\u9886\u53D666GB\u65B0\u6625\u5BB9\u91CF\u597D\u793C\uFF0C\u4E00\u8D77\u6765\u9886\u5440\uFF5E

------------
\u70B9\u6B64\u94FE\u63A5\u9886\u53D6\uFF1A
`,{type:"link",text:"https://pages.aliyundrive.com/mobile-page/web/dailyreward.html?disableNav=YES&tid=43&adtag=share"},""]},{id:190,type:"message",text:[`\u5F88\u68D2\u7684\u6076\u641E\u5C0F\u52A9\u624B\u3002\u3002\u3002\u7F51\u7AD9\u53EF\u4EE5\u5728\u7EBF\u751F\u6210\u652F\u4ED8\u5B9D\u5230\u8D26\u97F3\u6548\uFF0C\u4F60\u8981\u505A\u7684\u5C31\u662F\u8F93\u5165\u91D1\u989D\uFF0C\u53EF\u4EE5\u5728\u7EBF\u64AD\u653E\uFF0C\u4E5F\u53EF\u4EE5\u4E0B\u8F7D\u97F3\u9891\u6587\u4EF6\uFF01

\u652F\u4ED8\u5B9D\u5230\u8D26\u97F3\u6548\u751F\u6210\u5668-SayTheMoney
\u4F20\u9001\u95E8`,{type:"link",text:"https://saythemoney.github.io/"},""]},{id:191,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u732A\u732A\u4E91

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://zhuzhu12.xyz/"},`

\u7279\u8272\u2728\uFF1A\u65E0\u9700\u90AE\u7BB1\u9A8C\u8BC1\u7801\uFF0C\u901F\u5EA6\u8FD8\u633A\u5FEB\u7684\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u5982\u56FE

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:194,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u5929\u5929mingle

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://pc999.work/"},`

\u7279\u8272\u2728\uFF1A\u65E0\u9700\u90AE\u7BB1\u9A8C\u8BC1\u7801\uFF0C\u901F\u5EA6\u8FD8\u633A\u5FEB\u7684\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u5982\u56FE

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:195,type:"message",text:`\u56DB\u5DDD\u5730\u533A\u4E09\u7F51\u7528\u6237\u514D\u8D39\u988620G\u6D41\u91CF
\u5FAE\u4FE1\u626B\u7801\u8FDB\u5165\u5C0F\u7A0B\u5E8F\u5B9E\u540D\u6CE8\u518C\u767B\u5F55\u540E\u70B9\u51FB\u9996\u9875\u7684\u3010\u5929\u5E9C\u60C5\u7F18\u6B22\u559C\u8FC7\u5E74\u3011\u8FDB\u53BB
\u8F93\u5165\u56DB\u5DDD\u624B\u673A\u53F7\u5373\u53EF\u514D\u8D39\u9886\u53D620G\u6D41\u91CF\uFF08\u6295\u7A3F\uFF0C\u4E8C\u7EF4\u7801\u8BC4\u8BBA\u533A\uFF09

\u53E6\uFF1A\u4E2D\u56FD\u79FB\u52A8\u9001\u798F\u5229\u4E8660G\uFF01
\u7F16\u8F91\u77ED\u4FE18518\u53D1\u9001\u81F310086\u900160g\u6D41\u91CF\uFF0C\u9001\u534A\u5E74\uFF0C\u8FC7\u671F\u81EA\u52A8\u53D6\u6D88\uFF0C\u6240\u6709\u5C71\u4E1C\u533A\u57DF\u53F7\u7801\u4EB2\u6D4B\u53EF\u9886\uFF01`},{id:196,type:"message",text:[`\u4E00\u4E2A\u793E\u5DE5\u7F51\u7AD9\u4E0D\u7528\u7FFB\u5899\u4E5F\u53EF\u4EE5\u7528\uFF0C\u67E5\u4E2AQQ\u5FAE\u535A\u7B49\u9A97\u5B50\u4FE1\u606F\u8FD8\u662F\u6CA1\u95EE\u9898\u7684

`,{type:"link",text:"https://privacy.aiuys.com/"},""]},{id:197,type:"message",text:["\u8BA2\u9605\uFF1A",{type:"link",text:"https://sub.xeton.dev/sub?target=clash&newname=true&url=https%3A%2F%2Fwww.douluoyun.xyz%2Flink%2Fu6EhsatU2jhTPPP2%3Fsub%3D3&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSROnline.ini"},""]},{id:198,type:"message",text:`trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@azhk.relay.qchwnd.moe:44601?sni=hk.node.qchwnd.moe#\u{1F1ED}\u{1F1F0}\u9999\u6E2F1|BGP\u4E2D\u8F6C|Netflix|1.2x
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@azhk.relay.qchwnd.moe:44602?sni=jp1.welink.qchwnd.moe#\u{1F1EF}\u{1F1F5}\u65E5\u672C1|BGP\u4E2D\u8F6C|Netflix
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@azhk.relay.qchwnd.moe:44603?sni=jp2.welink.qchwnd.moe#\u{1F1EF}\u{1F1F5}\u65E5\u672C2|BGP\u4E2D\u8F6C|Netflix
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@azhk.relay.qchwnd.moe:44604?sni=in1.welink.qchwnd.moe#\u{1F1EE}\u{1F1F3}\u5370\u5EA6|BGP\u4E2D\u8F6C
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@azhk.relay.qchwnd.moe:44605?sni=sg1.welink.qchwnd.moe#\u{1F1F8}\u{1F1EC}\u65B0\u52A0\u5761|BGP\u4E2D\u8F6C|Netflix
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@azhk.relay.qchwnd.moe:44606?sni=ru.node.qchwnd.moe#\u{1F1F7}\u{1F1FA}\u4FC4\u7F57\u65AF|BGP\u4E2D\u8F6C
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@azhk.relay.qchwnd.moe:44607?sni=id.node.qchwnd.moe#\u{1F1EE}\u{1F1E9}\u5370\u5EA6\u5C3C\u897F\u4E9A|BGP\u4E2D\u8F6C|Netflix|1.2x
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@azhk.relay.qchwnd.moe:44608?sni=tw.node.qchwnd.moe#\u{1F1F9}\u{1F1FC}\u4E2D\u83EF\u6C11\u570B|BGP\u4E2D\u8F6C|Netflix|1.2x
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@azhk.node.qchwnd.moe:44609?sni=cdn.qchwnd.moe#\u{1F1ED}\u{1F1F0}\u9999\u6E2F2|BGP|Netflix
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@newgy.jidan666.com:23031?sni=hk.node.qchwnd.moe#\u{1F1ED}\u{1F1F0}\u9999\u6E2F1|\u5E7F\u5DDE\u79FB\u52A8\u4E2D\u8F6C|Netflix|1.2x
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@newgy.jidan666.com:23032?sni=jp1.welink.qchwnd.moe#\u{1F1EF}\u{1F1F5}\u65E5\u672C1|\u5E7F\u5DDE\u79FB\u52A8\u4E2D\u8F6C|Netflix
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@newgy.jidan666.com:23033?sni=jp2.welink.qchwnd.moe#\u{1F1EF}\u{1F1F5}\u65E5\u672C2|\u5E7F\u5DDE\u79FB\u52A8\u4E2D\u8F6C|Netflix
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@newgy.jidan666.com:23034?sni=in1.welink.qchwnd.moe#\u{1F1EE}\u{1F1F3}\u5370\u5EA6|\u5E7F\u5DDE\u79FB\u52A8\u4E2D\u8F6C
trojan://ddcfe6cb-d001-430e-9781-427496e3ed1d@newgy.jidan666.com:23035?sni=sg1.welink.qchwnd.moe#\u{1F1F8}\u{1F1EC}\u65B0\u52A0\u5761|\u5E7F\u5DDE\u79FB\u52A8\u4E2D\u8F6C|Netflix`},{id:199,type:"message",text:[`\u3010\u6D3B\u52A8\u4ECB\u7ECD\u3011\u514D\u8D39\u9886\u53D6\u767E\u5EA6\u7F51\u76D8\u4F1A\u5458
\u3010\u6D3B\u52A8\u65F6\u95F4\u3011\u4E0D\u8BE6
\u3010\u6D3B\u52A8\u89C4\u5219\u3011\u70B9\u51FB\u5373\u53EF
\u3010\u53C2\u4E0E\u65B9\u5F0F\u3011
`,{type:"link",text:"https://pan.baidu.com/component/view?id=2441"},`

`,{type:"link",text:"https://pan.baidu.com/component/view?id=2449"},""]},{id:200,type:"message",text:[`\u52A8\u6F2B\u7F51\u7AD9
`,{type:"link",text:"https://acg.rip/"},`
`,{type:"link",text:"https://bangumi.moe/"},`
`,{type:"link",text:"https://dmhy.anoneko.com/"},`
`,{type:"link",text:"https://nyaa.si/"},`
`,{type:"link",text:"https://share.acgnx.se/"},`
`,{type:"link",text:"https://dmly.me/"},`
`,{type:"link",text:"https://mikanani.me/"},`
`,{type:"link",text:"https://sukebei.nyaa.si/"},`
`,{type:"link",text:"http://www.comicat.org/"},`
`,{type:"link",text:"http://www.hysub.net/"},`
`,{type:"link",text:"http://www.miobt.com/"},`
`,{type:"link",text:"https://nc.raws.dev/0:/"},`
`,{type:"link",text:"https://gogoanime.film/"},""]},{id:201,type:"message",text:[`A4k\u5B57\u5E55\u7F51
\u9AD8\u989C\u503C\u514D\u8D39\u65E0\u5E7F\u544A\u7535\u5F71/\u7535\u89C6\u5267\u5B57\u5E55\u7F51\u7AD9
`,{type:"link",text:"https://www.a4k.net/"},""]},{id:202,type:"message",text:[`\u4E00\u4E2A\u514D\u8D39\u7F51\u9875\u6258\u7BA1\uFF0C\u7A33\u5B9A\u7684\u8BA9\u4F60\u6000\u7591\u4EBA\u751F\uFF5E

`,{type:"link",text:"https://infinityfree.net"},`

19\u5E74\u7684\u65F6\u5019\u7528\u8FC7\uFF0C\u4E0D\u8981\u4EFF\u540D\u7AD9\uFF0C\u4E0D\u7136\u4F1A\u88AB\u7981\u7684`]},{id:203,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u55B5\u840C

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://mimon.cc/"},`

\u7279\u8272\u2728\uFF1A\u4E34\u65F6\u90AE\u7BB1\uFF0C\u901F\u5EA6\u8FD8\u633A\u5FEB\u7684\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u5982\u56FE\uFF0C\u{1F449}z3NeZEHI\u{1F448}
\u6CE8\u518C\u540E\u9001\u4E00\u5929\uFF0C\u53EF\u5546\u5E97\u7528\u4E0A\u8FF0\u4F18\u60E0\u7801\uFF0C\u5373\u53EF\u514D\u8D39\u8BD5\u7528\u4E00\u4E2A\u6708

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:204,type:"message",text:[`\u5F00\u7AEF14|15\u5DF2\u66F4\u65B0\uFF0C\u81F3\u6B64\u5168\u5B63\u7EC8\u2705

\u258D\u963F\u91CC\u4E91\u76D8\uFF1A
`,{type:"link",text:"https://www.aliyundrive.com/s/8S5gHEZpXpg"},""]},{id:205,type:"message",text:[`\u7528\u7231\u53D1\u7535\u673A\u573A,\u5FEB\u901F,\u957F\u4E45\u7EF4\u62A4,\u65E0\u9650\u5236
\u5B98\u7F51\uFF1A`,{type:"link",text:"https://mkkhack.pw/"},`
\u5B98\u7F51\u67E5\u770B\u8BA2\u9605\u5730\u5740\u652F\u6301\u5C0F\u706B\u7BADClashQX\u7B49`]},{id:206,type:"message",text:`\u767D\u5AD6\u4E00\u5E74\u817E\u8BAF\u6781\u5149TV\u5C11\u513F\u4F1A\u5458

\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF1A\u6781\u5149\u7535\u89C6\u52A9\u624B-\u70ED\u95E8\u5F71\u89C6

\u70B9\u51FB\u4E2D\u95F4\u6A2A\u5E45\u9886\u53D6\u4E00\u5E74\u5C11\u513F\u4F1A\u5458

\u5BB6\u91CC\u6709\u5C0F\u5B69\u7684\u53EF\u4EE5\u9886\u4E00\u4E0B\uFF0C\u8FC7\u5E74\u770B\u770B\u3002`},{id:209,type:"message",text:[`Notion\u98CE\u683C\u5934\u50CF\u751F\u6210\u5668

`,{type:"link",text:"http://cvbox.org/"},`
`,{type:"link",text:"http://dogear.cn/"},""]},{id:210,type:"message",text:[`\u8BFB\u4E66\u6307\u5357

\u8BE5\u7F51\u7AD9\u63D0\u4F9B\u7ECF\u5178\u7684\u8BFB\u540E\u611F\u548C\u8BFB\u4E66\u7B14\u8BB0\u4F9B\u5927\u5BB6\u53C2\u8003\uFF0C\u6BCF\u7BC7\u7B14\u8BB0\u5305\u542B\u601D\u7EF4\u5BFC\u56FE\uFF0C\u53EF\u4EE5\u76F4\u89C2\u4E86\u89E3\u5168\u4E66\u7684\u7ED3\u6784\u548C\u6838\u5FC3\u601D\u60F3\u3002\u65E0\u8BBA\u662F\u5BF9\u9605\u8BFB\u524D\u4E86\u89E3\uFF0C\u8FD8\u662F\u9605\u8BFB\u540E\u7684\u5F52\u7EB3\u603B\u7ED3\uFF0C\u90FD\u6709\u6781\u5927\u5E2E\u52A9

`,{type:"link",text:"https://reading.geek-docs.com/"},""]},{id:211,type:"message",text:[`\u78C1\u529B\u8D44\u6E90\u7F51\u7AD9\u6536\u96C6\u6574\u7406\u{1F9F2}

\u2022\u6D77\u76D7\u6E7E:`,{type:"link",text:"https://thepiratebay.org/"},`
\u20221337X:`,{type:"link",text:"https://1337x.to/"},`
\u2022EZTV:`,{type:"link",text:"https://eztv.re/"},`
\u2022YTS:`,{type:"link",text:"https://yts.mx/"},`
\u2022RARBG:`,{type:"link",text:"https://rarbg.to/"},`
\u2022\u6076\u9B54\u7F51:`,{type:"link",text:"https://www.demonoid.is/"},`
\u2022Nyaa:`,{type:"link",text:"https://nyaa.si/"},`
\u2022BT4G:`,{type:"link",text:"https://bt4g.org/"},`
\u2022MagnetDL:`,{type:"link",text:"https://www.magnetdl.com/"},`
\u2022Zooqle:`,{type:"link",text:"https://zooqle.com/"},`
\u2022ETTV:`,{type:"link",text:"https://www.ettv.be/"},`
\u2022GlotorRents:`,{type:"link",text:"http://glodls.to/"},`
\u2022Torlock:`,{type:"link",text:"https://Torlock2.com"},`
\u2022ProxyBB\uFF1A`,{type:"link",text:"http://proxybb.com/"},`
\u2022Edvok:`,{type:"link",text:"https://edvok.com/"},`
\u2022\u52A8\u6F2B\u82B1\u56ED:`,{type:"link",text:"https://www.dmhy.org/"},`
\u2022Pirateiro:`,{type:"link",text:"https://pirateiro.eu/"},`
\u2022BTDig:`,{type:"link",text:"https://btdig.com/"},""]},{id:212,type:"message",text:[`Telegram\u4E3B\u9898

\u5206\u4EAB\u4E2ATelegram\u624B\u673A\u7AEF\u7684\u4E3B\u9898\uFF0C\u91CC\u9762\u5F88\u591A\uFF0C\u53EA\u9002\u5408\u624B\u673A\u54E6\uFF0C\u70B9\u51FBapply\u5373\u53EF\u4F7F\u7528

`,{type:"link",text:"https://t.me/exoltheme"},""]},{id:213,type:"message",text:["\u300A\u4ED9\u5251\u5947\u4FA0\u4F20\u4E09\u300B\u5F3A\u70C8\u63A8\u8350!\u4E2A\u4EBA\u5F88\u559C\u6B224K\u4FEE\u590D\u7248(2009)\uFF1A",{type:"link",text:"https://www.aliyundrive.com/s/gv5mmMKKDDn"},""]},{id:215,type:"message",text:[`\u540D\u79F0\uFF1ATelegramPc\u4E3B\u9898

\u4ECB\u7ECD\uFF1A\u5206\u4EAB\u4E2ATelegramPc\u4E3B\u9898\u9891\u9053\uFF0C\u91CC\u9762\u5F88\u591A\uFF0C\u9700\u8981\u7684\u53EF\u4EE5\u770B\u770B

\u6559\u7A0B\uFF1A\u8FDB\u5165\u9891\u9053\u540E\uFF0C\u70B9\u51FB\u6587\u4EF6\u4E0B\u8F7D\uFF0C\u5728\u70B9\u4E00\u6B21\u8BE5\u6587\u4EF6\u5373\u53EF\u9884\u89C8\u548C\u5E94\u7528

\u5730\u5740\uFF1A`,{type:"link",text:"https://t.me/themes"},""]},{id:216,type:"message",text:[`\u673A\u573A\u{1F4A8}\uFF1A\u679C\u56ED\u516C\u76CA

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"http://878887.xyz/"},`

\u7279\u8272\u2728\uFF1A\u65E0\u9700\u9A8C\u8BC1\u7801\uFF0C\u5546\u5E97\u81EA\u884C\u9886\u53D61T

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u89C9\u5F97\u4E0D\u9519\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:217,type:"message",text:[`\u963F\u91CC\u4E91\u76D85t\u4E00\u5E74\u6709\u9650\u671F\uFF0C\u53EF\u4EE5\u5EF6\u671F\uFF0C
`,{type:"link",text:"http://anranshop.ga/?cid=14&tid=146"},""]},{id:219,type:"message",text:`\u5FAE\u4FE1\u70B9\u97AD\u70AE\u514D\u8D39\u9886\u514D\u8D39\u63D0\u73B0\u5238

1\u3001\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u641C\u7D22\u201C\u5FAE\u4FE1\u652F\u4ED8\u6709\u4F18\u60E0\u201D->\u8FDB\u6765\u540E\u70B9\u53F3\u4FA7\u8FB9\u201C\u54CD\u4F18\u60E0\u201D->\u73A9\u6E38\u620F\u5F97\u63D0\u73B0\u514D\u8D39\u5238

2\u3001\u4E0D\u6EE1\u610F\u518D\u6765\u4E00\u6B21->\u6EE1\u610F\u5C31\u6536\u4E0B->\u9009\u597D\u53CBpk->\u8FD8\u80FD\u9886\u4E00\u6B21\u63D0\u73B0\u5238->\u6700\u9AD8\u80FD\u83B7\u5F976888\u63D0\u73B0\u5238\uFF01

\u6D3B\u52A8\u65F6\u95F4\uFF1A2022.1.26~2.4`},{id:220,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1AAlink123

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://my.pbap.cc/"},`

\u7279\u8272\u2728\uFF1A\u65E0\u9700\u9A8C\u8BC1\u7801\uFF01\uFF01\uFF01\uFF0C\u901F\u5EA6\u8FD8\u633A\u5FEB\u7684\uFF0C\u5957\u9910\u5982\u56FE\uFF0C\u67090.01\u500D\u7387\u7684\u8282\u70B9

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:220,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1AAlink123

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://my.pbap.cc/"},`

\u7279\u8272\u2728\uFF1A\u65E0\u9700\u9A8C\u8BC1\u7801\uFF01\uFF01\uFF01\uFF0C\u901F\u5EA6\u8FD8\u633A\u5FEB\u7684\uFF0C\u5957\u9910\u5982\u56FE\uFF0C\u67090.01\u500D\u7387\u7684\u8282\u70B9

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:221,type:"message",text:[`\u963F\u91CC\u8D44\u6E90\u5404\u79CD\u5408\u96C6\u5206\u4EAB

`,{type:"link",text:"https://www.aliyundrive.com/s/xXN3LuHYgyP"},""]},{id:222,type:"message",text:[`\u50F5\u5C38\u6821\u56ED\u66F4\u65B0\u81F312\u96C6\uFF0C\u6301\u7EED\u66F4\u65B0

`,{type:"link",text:"https://www.aliyundrive.com/s/xXN3LuHYgyP/folder/61f3ace610ad985f520c4d9596bf6594fce7ea82"},""]},{id:223,type:"message",text:"\u56DB\u5DDD\u9886\u53D620G\u7701\u5185\u8FC7\u5E74\u6D41\u91CF\u79FB\u52A8\u8054\u901A\u7535\u4FE1\u90FD\u53EF\u4EE5"},{id:224,type:"message",text:`\u652F\u4ED8\u5B9D\u53EF\u514D\u8D39\u9886\u53D64\u4E2A\u6708\u82F9\u679CiCloud+

\u652F\u4ED8\u5B9D\u7684Apple\u4E13\u533A\u4E0A\u7EBF\u4E86\u514D\u8D39\u9886\u53D64\u4E2A\u6708\u768450GBiCloud+\u6D3B\u52A8\uFF0C\u9762\u54115GB\u514D\u8D39\u7A7A\u95F4\u7528\u6237\uFF0C\u8BE5\u6863\u4F4D\u7684\u8BA2\u9605\u5728\u4E2D\u56FD\u5927\u9646\u4E3A\u6BCF\u67086\u5143\u3002`},{id:225,type:"message",text:[`\u7F51\u7AD9\u540D\u79F0\uFF1A\u864E\u5E74\u5934\u50CF\u751F\u6210\u5668
\u7F51\u7AD9\u7B80\u4ECB\uFF1A\u4E0A\u4F20\u81EA\u5DF1\u7684\u5934\u50CF\u7167\u7247\uFF0C\u9009\u62E9\u559C\u6B22\u7684\u864E\u5E74\u76F8\u6846\uFF0C\u70B9\u51FB\u4E0B\u8F7D\u5934\u50CF\u5373\u53EF\u3002
\u7F51\u7AD9\u7F51\u5740\uFF1A`,{type:"link",text:"https://hu.lvwzhen.com/"},""]},{id:226,type:"message",text:`\u9002\u5408\u4E0B\u8F7D
vmess://eyJhZGQiOiJzY3cuMjAxNTE1MDUueHl6IiwiYWlkIjoiMCIsImhvc3QiOiJzY3cuMjAxNTE1MDUueHl6IiwiaWQiOiIzNDc5YjBlNi0yMDQyLTQzMjgtYThiNi05YTU4MmE2MTUxMTEiLCJuZXQiOiJ3cyIsInBhdGgiOiIvIiwicG9ydCI6IjQ0MyIsInBzIjoi5LiH5Lq66aqRIiwic2N5IjoiYXV0byIsInNuaSI6InNjdy4yMDE1MTUwNS54eXoiLCJ0bHMiOiJ0bHMiLCJ0eXBlIjoiIiwidiI6IjIifQ==`},{id:227,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1AGo\u52A0\u901F

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://gogoo.cyou/"},`

\u7279\u8272\u2728\uFF1A\u65E0\u9700\u9A8C\u8BC1\uFF01\uFF01\uFF01\u5546\u5E97\u81EA\u5DF1\u9886\u53D6\uFF0C\u9001\u521D\u7EA7\u4F53\u9A8C\u5957\u9910

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:228,type:"message",text:["Clash\u8BA2\u9605\uFF1A",{type:"link",text:"https://hxsj.tk/3SCqCXb"},""]},{id:229,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1ASweetCloud

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://ydht.xyz/"},`

\u7279\u8272\u2728\uFF1A\u65E0\u9700\u9A8C\u8BC1\uFF01\uFF01\uFF01\u5546\u5E97\u81EA\u5DF1\u9886\u53D6\u3002

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:231,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u767D\u5AD6\u738B

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://bpyun.live/"},`

\u7279\u8272\u2728\uFF1A\u65F6\u95F4\u957F\u3002

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:232,type:"message",text:`\u3010Steam\u8D26\u53F7\u5206\u4EAB\u3011
\u3010\u767B\u5F55\u9009\u62E9\u79BB\u7EBF\u6A21\u5F0F\u3011

chj1464870587----8807569BAI----ssfn5836665122665178930
\u7CD6\u8C46\u4EBAGTA5\u58C1\u7EB8\u8352\u91CE\u770B\u95E8\u72D72\u4E00\u8D25\u6D82\u5730

\u6234\u68EE\u7403\u8BA1\u5212\u8D26\u53F7\uFF1Adsq872
\u5BC6\u7801\uFF1Ah2876358
\u751F\u5316\u5371\u673A3\u91CD\u5236\u7248
\u8D26\u53F7\uFF1Azhangtao121092685
\u5BC6\u7801\uFF1Azzz789789
\u5929\u56FD\u62EF\u6551\u8D26\u53F7:tianguoa
\u5BC6\u7801:Hh1600531a
\u8352\u91CE\u5927\u9556\u5BA22\u8D26\u53F7\uFF1A3205466009ta1
\u5BC6\u7801\uFF1ASS123456@
\u6B7B\u4EA1\u7EC6\u80DE\u8D26\u53F7\uFF1Ayouxisteam452334
\u5BC6\u7801\uFF1Ayyxxyx019201
\u9B3C\u8C37\u516B\u8352\u8D26\u53F7\uFF1Asiye2326
\u5BC6\u7801\uFF1Asiyerw3r3
\u9A91\u780D2\uFF1A\u9738\u4E3B\u8D26\u53F7\uFF1Achenxi88321
\u5BC6\u7801\uFF1Achenxi87411
\u8D5B\u535A\u670B\u514B2077\u8D26\u53F7\uFF1Afengyundianwan007
\u5BC6\u7801\uFF1Afengyundianwan00123

\u767B\u4E0D\u4E0A\u7684\u8BDD\u5C31\u51C9\u4E86`},{id:233,type:"message",text:[`\u3010123\u4E91\u76D8\u3011\u63A8\u8350\uFF0C\u6700\u8FD1\u624D\u51FA\u6765\u7684\u3002

`,{type:"link",text:"https://www.123pan.com"},`

\u4EAE\u70B9\u{1F447}\u{1F3FB}
\u4E0A\u4F20\u4E0B\u8F7D\u4E0D\u9650\u901F\uFF0C\u6CE8\u518C\u65E2\u67092T\u5BB9\u91CF\uFF0C\u4E0A\u4F20\u5355\u4E2A\u6587\u4EF6\u6700\u5927\u652F\u6301100G\uFF0C\u652F\u6301\u5206\u4EAB\u6240\u6709\u7684\u6587\u4EF6\u683C\u5F0F\u6BEB\u65E0\u9650\u5236\uFF0C\u4F53\u9A8C\u597D\uFF0C\u5206\u4EAB\u7684\u6587\u4EF6\u70B9\u94FE\u63A5\u5C31\u80FD\u4E0B\u8F7D\u4E0D\u7528\u8DF3\u8F6C\u767B\u5F55\u6CE8\u518C\u4E4B\u7C7B\u7684\uFF0C\u800C\u4E14\u65E0\u5E7F\u544A\u3002\u5168\u514D\u8D39\u3002`]},{id:234,type:"message",text:["\u501A\u5929\u5C60\u9F99\u8BB0\u4E4B\u4E5D\u9633\u795E\u529F\uFF082022\uFF094K&1080P\u7248\u672C\u2705\u672C\u5267\u5206\u4E0A\u4E0B\u90E8\u300A",{type:"hashtag",text:"#\u501A\u5929\u5C60\u9F99\u8BB0\u4E4B\u4E5D\u9633\u795E\u529F"},"\u300B\u548C\u300A",{type:"hashtag",text:"#\u501A\u5929\u5C60\u9F99\u8BB0\u4E4B\u5723\u706B\u96C4\u98CE"},`\u300B\u64AD\u51FA\u3002\u4E0A\u90E8\u300A\u501A\u5929\u5C60\u9F99\u8BB0\u4E4B\u4E5D\u9633\u795E\u529F\u300B\u4E8E2022\u5E741\u670831\u65E5\u5728\u4E2D\u56FD\u5927\u9646\u7F51\u7EDC\u64AD\u51FA\u548C\u4E0B\u90E8\u300A\u501A\u5929\u5C60\u9F99\u8BB0\u4E4B\u5723\u706B\u96C4\u98CE\u300B\u4E8E2022\u5E742\u67083\u65E5\u5728\u7F51\u7EDC\u64AD\u51FA\u3002

\u258D\u5267\u60C5\u7B80\u4ECB\uFF1A
\u8BB2\u8FF0\u4E86\u6B66\u5F53\u6D3E\u5F20\u7FE0\u5C71\u4E4B\u5B50\u5F20\u65E0\u5FCC\u65E0\u610F\u4E2D\u5377\u5165\u5C60\u9F99\u5200\u800C\u8D77\u7684\u6C5F\u6E56\u7EB7\u4E89\u4E4B\u4E2D\uFF0C\u56E0\u7F18\u9645\u4F1A\u7EC3\u5C31\u4E00\u8EAB\u76D6\u4E16\u6B66\u529F\uFF0C\u4E3B\u8981\u662F\u660E\u6559\u548C\u4E2D\u539F\u6B66\u6797\u4E4B\u4E89\u53CA\u8D77\u4E49\u519B\u548C\u8150\u673D\u671D\u5EF7\u4E4B\u95F4\u7684\u5BF9\u6297

\u258D\u963F\u91CC\u4E91\u76D8\uFF1A`,{type:"link",text:"https://www.aliyundrive.com/drive/folder/61f777a680a8b31244674eb78c880f79a8651a16"},""]},{id:235,type:"message",text:[`\u65B0\u5E74\u5FEB\u4E50\uFF0C\u7528\u8FD9\u4E2A\u653E\u4E0B\u70DF\u82B1\u5427
\u70DF\u82B1\u6A21\u62DF\u5668\uFF0C\u589E\u52A0\u8FC7\u5E74\u7684\u5E74\u5473\u513F\u3002
`,{type:"link",text:"https://fireworks.nianbroken.top"},""]},{id:236,type:"message",text:`\u7535\u4FE1app\u53E3\u4EE4\u8BDD\u8D39

\u53BB\u6211\u7684\u798F\u5229\u5151\u6362

\u864E\u864E\u751F\u5A01666
\u864E\u8FD0\u8FDE\u5E74999
\u91D1\u864E\u95F9\u6625666
\u7075\u864E\u9001\u798F888`},{id:237,type:"message",text:[`\u514D\u8D39\u9886\u53D66\u5929\u8292\u679CTV\u6B63\u5F0F\u4F1A\u5458
\u6B63\u5F0F\u4F1A\u5458\u53EF\u4EE5\u770B\u8292\u679C\u89C6\u9891\u6240\u6709\u4F1A\u5458\u5267\uFF01

\u6D3B\u52A8\u5730\u5740\uFF1A`,{type:"link",text:"https://tb3.cn/AsOYGi"},""]},{id:238,type:"message",text:[`\u4E1C\u839E\u5FAE\u7BA1\u5BB6\u9886\u53D61\u5143\u5FAE\u4FE1\u7EA2\u5305

\u5FAE\u4FE1\u6253\u5F00\u6D3B\u52A8\u5730\u5740
\u5148\u70B9\u9876\u90E8\u5173\u6CE8\u516C\u4F17\u53F7
\u8FD4\u56DE\u4E0B\u62C9\u9875\u9762
\u70B9\u56FE\u5C0F\u7A0B\u5E8F\u8FDB\u5165\u62BD1\u5143\u7EA2\u5305

\u6D3B\u52A8\u5730\u5740\uFF1A`,{type:"link",text:"https://mp.weixin.qq.com/s/XBDPY_sIJ3Fm1oUExRes0w"},""]},{id:239,type:"message",text:`\u9002\u5408\u4E0B\u8F7D

trojan://d089a164-c8c5-43cc-86cc-e71256d3d59e@is3.vwvwvw.xyz:443`},{id:240,type:"message",text:[`QQ\u7EFF\u94BB7\u5929\u76F4\u51B2qq\u53F7\uFF0C\u6700\u540E10\u5F20\uFF0C\u9700\u8981\u7684\u53EF\u4EE5\u62CD\u4E0B\uFF0C\u53EF\u4EE5\u53E0\u52A0

`,{type:"link",text:"http://anranshop.ga/?cid=14&tid=140"},""]},{id:241,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u679C\u56ED\u5427

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://guoyuanbar.com/"},`

\u7279\u8272\u2728\uFF1A\u4E34\u65F6\u90AE\u7BB1\uFF0C\u901F\u5EA6\u8FD8\u633A\u5FEB\u7684\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u5982\u56FE\u30023\u5929/5G/VIP1

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:242,type:"message",text:["\u65B0\u52A0\u57611\uFF1A",{type:"link",text:"https://t.me/proxy?server=18.142.161.18&port=51888&secret=dda7190442e91ffbec0f8a1a1f9e1193dc"},`

\u65B0\u52A0\u57612\uFF1A`,{type:"link",text:"https://t.me/proxy?server=18.140.233.14&port=51888&secret=dda7190442e91ffbec0f8a1a1f9e1193dc"},""]},{id:243,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u98DE\u6BEF\u52A0\u901F

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://www.tanz.website/"},`

\u7279\u8272\u2728\uFF1A1\u5929/2G(\u542B\u7B7E\u5230)/VIP1\uFF0C\u65E0\u9700\u90AE\u7BB1\u9A8C\u8BC1\uFF0C\u5546\u5E97\u81EA\u9886\u53D6\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u5982\u56FE\u3002

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:244,type:"message",text:`\u5FAE\u4FE1\u70B9\u97AD\u70AE\u514D\u8D39\u9886\u514D\u8D39\u63D0\u73B0\u5238

1\u3001\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u641C\u7D22\u201C\u5FAE\u4FE1\u652F\u4ED8\u6709\u4F18\u60E0\u201D->\u8FDB\u6765\u540E\u70B9\u53F3\u4FA7\u8FB9\u201C\u54CD\u4F18\u60E0\u201D->\u73A9\u6E38\u620F\u5F97\u63D0\u73B0\u514D\u8D39\u5238

2\u3001\u4E0D\u6EE1\u610F\u518D\u6765\u4E00\u6B21->\u6EE1\u610F\u5C31\u6536\u4E0B->\u9009\u597D\u53CBpk->\u8FD8\u80FD\u9886\u4E00\u6B21\u63D0\u73B0\u5238->\u6700\u9AD8\u80FD\u83B7\u5F976888\u63D0\u73B0\u5238\uFF01`},{id:245,type:"message",text:[`\u30104k\u3011The355-\u8303\u51B0\u51B0\u6700\u65B0\u7279\u5DE5\u7247\u4E0D\u5BB9\u9519\u8FC7

`,{type:"link",text:"https://www.aliyundrive.com/s/uvFX2RvLn24"},""]},{id:246,type:"message",text:[`\u96C4\u72EE\u5C11\u5E74

\u672C\u7247\u8BB2\u8FF0\u4E86\u7559\u5B88\u5C11\u5E74\u963F\u5A1F\u548C\u597D\u53CB\u963F\u732B\u3001\u963F\u72D7\u5728\u9000\u5F79\u72EE\u738B\u54B8\u9C7C\u5F3A\u7684\u57F9\u8BAD\u4E0B\u53C2\u52A0\u821E\u72EE\u6BD4\u8D5B\uFF0C\u7ECF\u8FC7\u91CD\u91CD\u78E8\u783A\uFF0C\u4ECE\u75C5\u732B\u53D8\u6210\u96C4\u72EE\u7684\u6210\u957F\u6545\u4E8B\u3002

`,{type:"link",text:"https://www.aliyundrive.com/s/3SiPD3aBByU"},""]},{id:247,type:"message",text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u81F3\u4E91\u4E92\u8054

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://cloud-supre.me/"},`

\u7279\u8272\u2728\uFF1A1G/3\u5929/VIP2/\u9080\u8BF75G/\u65E0\u9A8C\u8BC1/\u82F9\u679CID

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:248,type:"message",text:[`\u4E34\u65F6\u77ED\u4FE1

`,{type:"link",text:"https://clearcode.cn/"},""]},{id:249,type:"message",text:[`\u884C\u4EBA\u89C6\u89D2\u6E38\u904D\u5168\u4E16\u754C

`,{type:"link",text:"https://citywalks.live/"},""]},{id:251,type:"message",text:[`\u4E2A\u4EBA\u8D26\u53F7\u89E3\u9664\u53CC\u5411\u804A\u5929\u9650\u5236

\u{1F449}\u641C\u7D22`,{type:"mention",text:"@spambot"},`
\u{1F449}\u70B9\u51FBStart
\u{1F449}\u70B9\u51FBButIcan'tmessagenon-contacts!
\u{1F449}\u70B9\u51FBNo,I'llneverdoanyofthis!
\u{1F449}\u56DE\u590Daccident
\u7EA625\u5206\u949F\u5DE6\u53F3\u5C31\u6062\u590D\u6B63\u5E38\u4E86\uFF0C\u6709\u4E9B\u89E3\u7981\u65F6\u95F4\u4F1A\u8F83\u957F\uFF0C\u6709\u4E9B\u9700\u8981\u53D1\u90AE\u4EF6\u5411\u5B98\u65B9\u63D0\u51FA\u89E3\u5C01\u7533\u8BF7\u3002


>>>\u6C49\u5316\uFF0C\u70B9\u51FB\u6B64\u5904\u5B89\u88C5\u8BED\u8A00\u5305<<<

`,{type:"link",text:"https://t.me/setlanguage/classic-zh-cn"},""]},{id:254,type:"message",text:[`\u957F\u671F\u7EF4\u62A4\u7684\u8BA2\u9605\uFF0C\u9002\u5408\u4E0B\u8F7D

`,{type:"link",text:"https://www.abrnya.com/ssr/clash.yaml"},""]},{id:255,type:"message",text:[`\u3010\u770B\u5317\u4EAC\u51AC\u5965\u4F1A\u5FC5\u5907\u3011
\u514D\u8D39\u9886\u53D6\u54AA\u5495\u89C6\u989130\u5929\u4F1A\u5458\u79D2\u5230\u8D26
\u770B\u51AC\u5965\u5FC5\u5907\uFF01\u4E09\u7F51\u5747\u53EF\u9886\u53D6\uFF01\u70B9\u4E2A\u8D5E\u52A0\u4E2A\u5206\u4E3A\u5965\u8FD0\u5065\u513F\u52A0\u6CB9\uFF01

`,{type:"link",text:"https://plus.migu.cn/whalecallback/delivery/pagevisit/releaseVisit/37023?token=null"},""]},{id:256,type:"message",text:[`\u6597\u7834\u82CD\u7A79.\u4E00\u81F3\u56DB\u5B63+\u7279\u522B\u7BC71\u30012-\u526A\u8F91\u5408\u96C6\u7248

`,{type:"link",text:"https://www.aliyundrive.com/s/xXN3LuHYgyP/folder/61ff7fbfee2849d3d0b048cca9442f5d325d561c"},""]},{id:257,type:"message",text:[`\u540D\u79F0\uFF1A\u63A8\u8350\u6B3E\u514D\u8D39vpn

\u652F\u6301\u7EC8\u7AEF\uFF1AWindows\u3001Mac\u3001Android

\u4F7F\u7528\u65B9\u6CD5\uFF1A\u968F\u4FBF\u586B\u4E2A\u90AE\u7BB1\u5BC6\u7801\u5373\u53EF\uFF0C\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u7684\u667A\u80FD\u6A21\u5F0F\uFF0C\u4EFB\u52A1\u680F\u53F3\u51FB\u53EF\u4EE5\u5F00\u5168\u5C40\u6A21\u5F0F\uFF0C4k\u901F\u5EA6\u5982\u4E0A

\u5730\u5740\uFF1A`,{type:"link",text:"https://www.rocket110.com/"},""]},{id:258,type:"message",text:"vmess://eyJ2IjoyLCJwcyI6IkhLQVoiLCJhZGQiOiJsbGF6LnNjc2V2ZXJzLmNmIiwicG9ydCI6MzQ2OTksImlkIjoiNmRjOGU2YTktMDU3NS00MzRkLWRkMjYtMTFiYTYxMWM4MGI3IiwiYWlkIjowLCJzY3kiOiJhdXRvIiwibmV0Ijoid3MiLCJ0eXBlIjoibm9uZSIsImhvc3QiOiIiLCJwYXRoIjoiLyIsInRscyI6Im5vbmUiLCJzbmkiOiIifQ"},{id:258,text:"vmess://eyJ2IjoyLCJwcyI6IkhLQVoiLCJhZGQiOiJsbGF6LnNjc2V2ZXJzLmNmIiwicG9ydCI6MzQ2OTksImlkIjoiNmRjOGU2YTktMDU3NS00MzRkLWRkMjYtMTFiYTYxMWM4MGI3IiwiYWlkIjowLCJzY3kiOiJhdXRvIiwibmV0Ijoid3MiLCJ0eXBlIjoibm9uZSIsImhvc3QiOiIiLCJwYXRoIjoiLyIsInRscyI6Im5vbmUiLCJzbmkiOiIifQ"},{id:259,text:"\u7F51\u7AD9\u7248\uFF0C\u5DF2\u540C\u6B65\u5B8C\u6210\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u5907\u7528\u7684\u{1F62C}"},{id:260,text:[`\u63A8\u8350\u4E2A\u77ED\u94FE\u5DE5\u5177\uFF0C\u4F18\u70B9\u662F\u56FD\u5185\u5EF6\u8FDF\u7279\u522B\u5C0F\uFF0C\u4ED6\u6709\u4E2A\u63D2\u4EF6\uFF0C\u5B89\u88C5\u540E\u53EF\u4EE5\u76F4\u63A5\u9875\u9762\u53F3\u51FB\u5C31\u53EF\u4EE5\u751F\u6210\u8BE5\u9875\u9762\u7684\u77ED\u94FE

\u7F51\u5740\uFF1A`,{type:"link",text:"https://urlify.cn"},`

\u63D2\u4EF6\u5730\u5740\uFF1A`,{type:"link",text:"https://chrome.google.com/webstore/detail/urlify-%E7%9F%AD%E9%93%BE%E6%8E%A5%E5%B7%A5%E5%85%B7/nkjhpeaddieapfonodmgbcaebclooknd"},""]},{id:261,text:[`WindowsUpdateBlockerv1.7

\u901A\u8FC7\u4FEE\u6539\u6CE8\u518C\u8868\uFF0C\u7981\u6B62WIN10\u66F4\u65B0\u7684\u8F6F\u4EF6\u3002

\u4E0B\u8F7D\u5730\u5740\uFF1A`,{type:"link",text:"https://haojiyou.lanzouy.com/igqswztuugf"},""]},{id:262,text:`\u7535\u89C6\u5982\u4F55\u6253\u5F00ADB\u8C03\u8BD5

\u57FA\u672C\u6D41\u7A0B\uFF1A\u6253\u5F00\u5DE5\u7A0B\u6A21\u5F0F-Adbenableon

\u521B\u7EF4\u667A\u80FD\u7535\u89C6\uFF1A\u5728\u6A21\u62DF\u4FE1\u53F7\u4E0B\uFF08\u5C31\u662F\u6709\u96EA\u82B1\u754C\u9762\u7684\u754C\u9762\uFF09\uFF0C\u4F7F\u7528\u9065\u63A7\u5668\u70B9\u51FB\u201C\u83DC\u5355+2+5+8+0\u201D\u4F9D\u6B21\u6309\u4E0B\uFF0C\u5C31\u6253\u5F00\u4E86\u5DE5\u7A0B\u6A21\u5F0F\u3002\u5728\u5DE5\u7A0B\u6A21\u5F0F\u4E2D\u53EF\u4EE5\u770B\u5230Adbenable\u9009\u9879\uFF0C\u5F00\u542F\u6B64\u529F\u80FD\u9009\u9879\u5C31\u53EF\u4EE5\u901A\u8FC7U\u76D8\u968F\u610F\u5B89\u88C5\u7B2C\u4E09\u65B9\u8F6F\u4EF6\u4E86\u3002

\u9177\u5F00\u7535\u89C6\uFF1A\u6253\u5F00\u7CFB\u7EDF\u8BBE\u7F6E\u9875\u9762\uFF0C\u8FDB\u5165\u5230\u672C\u673A\u201C\u8BE6\u7EC6\u4FE1\u606F\u201D\uFF1B\u9065\u63A7\u5668\u4F9D\u6B21\u6309\u4E0B\u201C\u4E0A\u4E0A\u4E0B\u4E0B\u5DE6\u53F3\u5DE6\u53F3\u201D\uFF0C\u5C31\u53EF\u4EE5\u8FDB\u5165\u5DE5\u7A0B\u6A21\u5F0F\u4E86

\u5EB7\u4F73\u7535\u89C6\uFF1A\u64CD\u4F5C\u9065\u63A7\u5668\uFF0C\u6309\u4E00\u4E0B\u83DC\u5355\u6309\u94AE\uFF0C\u753B\u9762\u5F39\u51FA\u666E\u901A\u529F\u80FD\u8BBE\u7F6E\u83DC\u5355\u3002\u8FD9\u65F6\u8FDE\u7EED\u70B9\u63095\u6B21\u201C\u56DE\u770B\u201D\u6309\u94AE\uFF0C\u5373\u53EF\u6253\u5F00\u5EB7\u4F73\u7535\u89C6\u5DE5\u5382\u6A21\u5F0F\u83DC\u5355\u3002

\u7D22\u5C3C\u7535\u89C6\uFF1A\u5F00\u673A\u64AD\u653E\u6709\u7EBF\u7535\u89C6\u8282\u76EE\uFF0C\u6309\u9065\u63A7\u5668\u4E0A\u201C\u7535\u6E90/\u5F85\u673A\u201D\u952E\uFF0C\u8FDB\u5165\u5F85\u673A\uFF0C\u7136\u540E\u6309\u4E0B\u9762\u6B21\u5E8F\uFF0C\u5148\u540E\u6309\u4E00\u4E0B\u9065\u63A7\u5668\u4E0A\u7684\u76F8\u5173\u6309\u952E\uFF1A\u5C4F\u663E\u30015\u3001+(\u97F3\u91CF)\u3001\u7535\u6E90/\u5F85\u673A\u3002

\u6D77\u4FE1\u7535\u89C6\uFF1A\u6309\u4E0B\u9065\u63A7\u5668\u7684\u83DC\u5355\u952E\uFF0C\u5728\u83DC\u5355\u952E\u4E2D\u9009\u62E9\u58F0\u97F3\u8BBE\u7F6E\uFF0C\u518D\u4E4B\u540E\u9009\u62E9\u5E73\u8861\u9009\u9879\uFF0C\u8F93\u51650532\uFF0C\u5B8C\u6210\u4E4B\u540E\uFF0C\u5373\u53EF\u8FDB\u5165\u5230\u6D77\u4FE1\u7535\u89C6\u7684\u5DE5\u7A0B\u6A21\u5F0F\u3002

TCL\u7535\u89C6\uFF1A\u5C06\u97F3\u91CF\u51CF\u52300\uFF0C\u8C03\u51FA\u4E3B\u83DC\u5355,\u5149\u6807\u79FB\u81F3"\u5BF9\u6BD4\u5EA6"\uFF1B\u57282\u79D2\u5185\u8FC5\u901F\u6309\u6570\u5B57\u952E"9\u30017\u30013\u30015"\u53EF\u8FDB\u5165\u5DE5\u5382\u6A21\u5F0F\u3002

\u4E50\u89C6\u7535\u89C6\uFF1A\u9996\u5148\u5F00\u673A\u2014\u2014\u4E3B\u9875\u2014\u2014\u6309\u9065\u63A7\u5668\u4E0A\u6570\u5B57\u50652580\uFF0C\u5373\u53EF\u8FDB\u5165\u5DE5\u7A0B\u6A21\u5F0F\u3002

\u5C0F\u7C73\u7535\u89C6\uFF1A\u5728\u7CFB\u7EDF\u83DC\u5355\u4E2D\u8FDB\u5165\u201C\u8BBE\u7F6E\u201D-\u201C\u5173\u4E8E\u201D-\u201C\u8054\u7CFB\u5BA2\u670D\u201D\uFF1B\u5728\u201C\u8054\u7CFB\u5BA2\u670D\u201D\u754C\u9762\u7EE7\u7EED\u6309\u4F4F\u9065\u63A7\u5668\u7684\u201C\u4E0B\u201D\u65B9\u5411\u952E\uFF0C\u5373\u53EF\u770B\u5230\u201C\u5DE5\u5382\u6A21\u5F0F\u201D\u7684\u5165\u53E3\u3002

\u4E09\u661F\u7535\u89C6\uFF1A\u5C06\u7535\u89C6\u8FDB\u5165\u5F85\u673A\u72B6\u6001\uFF0C\u4F9D\u6B21\u6309\u4E0B\u9065\u63A7\u5668\u4E0A\u7684\u201C\u663E\u793A\u952E\u201D\u3001\u201C\u9879\u76EE\u952E\u201D\u3001\u201C\u9759\u97F3\u952E\u201D\u3001\u201C\u7535\u6E90\u952E\u201D\uFF0C\u5373\u8FDB\u5165\u5DE5\u7A0B\u6A21\u5F0F\uFF0C\u5173\u95ED\u7535\u6E90\u5C31\u53EF\u4EE5\u9000\u51FA\u5DE5\u7A0B\u6A21\u5F0F\u3002`},{id:263,text:[`\u514D\u8D39\u9886\u53D6\u54AA\u5495\u89C6\u989130\u5929\u4F1A\u5458

`,{type:"link",text:"https://plus.migu.cn/whalecallback/delivery/pagevisit/releaseVisit/37023?token=null"},""]},{id:264,text:["\u7535\u62A5\u4EE3\u7406\uFF1A",{type:"link",text:"https://t.me/socks?server=120.240.86.227&port=45366&user=jaycloud&pass=Jjaycloud"},`

\u767D\u5AD6\u8BA2\u9605\uFF1A\u8BA2\u9605:`,{type:"link",text:"https://v2.mugua-sub.com/link/RnJNsdkhrzqFAF5i?sub=3"},""]},{id:265,text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1AIKUUU

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://ikuuu.co/"},`

\u7279\u8272\u2728\uFF1A\u771F\u5B9E\u90AE\u7BB1\uFF0C\u53EF\u4EE5\u83B7\u5F97\u6C38\u4E45\u767D\u5AD6\u5957\u9910\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u5907\u7528

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:267,text:[`Epic\u514D\u8D39\u9886\u53D6\u300A\u9006\u98CE\u505C\u822A\u300B

`,{type:"link",text:"https://www.epicgames.com/store/zh-CN/p/windbound"},""]},{id:269,text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u7231\u63A2\u7D22

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://lovfree.com/"},`

\u7279\u8272\u2728\uFF1A\u65B0\u7528\u6237\u6CE8\u518C\u514D\u8D39\u4F7F\u75281\u5929\u7545\u4EAB66G\uFF0C\u4E4B\u540E\u5546\u5E97\u53EF\u4EE5\u9886\u53D6\u767D\u5AD6\u5957\u9910

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:270,text:[`\u5206\u4EAB\u4E2A\u5728\u7EBF\u8FFD\u5267\u7684\u7F51\u7AD9

\u514D\u8D39\u84DD\u5149\u5F71\u89C6\u5728\u7EBF\u7AD9

\u65E0\u5E7F\u544A\uFF0C\u8D44\u6E90\u591A\uFF0C\u7AD9\u6E90\u591A\uFF5E

`,{type:"link",text:"https://www.mozhatu.com/"},""]},{id:271,text:`\u5FAE\u4FE1\u7248\u82B1\u5457\uFF0C\u5FAE\u4FE1\u76F4\u63A5\u626B\u4E00\u626B
\u67E5\u770B\u989D\u5EA6\u5F9720\uFF0C\u79D2\u5230`},{id:272,text:["v2ray\u8BA2\u9605\u94FE\u63A5:",{type:"link",text:"https://ghproxy.com/https://gist.githubusercontent.com/jth445600/f82935af67399aea2377bc10f2e8e3c4/raw/748e16fa05f430b8201ce7311d2b447bb4f21501/2022-2-12"},`

clash\u8BA2\u9605\u94FE\u63A5:`,{type:"link",text:"http://polished-moon-5d49.jth445600.workers.dev/sub?target=clash&url=https%3A%2F%2Fghproxy.com%2Fhttps%3A%2F%2Fgist.githubusercontent.com%2Fjth445600%2Ff82935af67399aea2377bc10f2e8e3c4%2Fraw%2F748e16fa05f430b8201ce7311d2b447bb4f21501%2F2022-2-12&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSROnline.ini&emoji=true&list=false&tfo=false&scv=false&fdn=false&sort=false&newname=true"},""]},{id:273,text:[`\u3010\u8F6F\u4EF6\u540D\u79F0\u3011Letstalk
\u3010\u8F6F\u4EF6\u652F\u6301\u3011Windows\u3001Mac\u3001iOS\u3001Android
\u3010\u8F6F\u4EF6\u529F\u80FD\u3011\u5373\u65F6\u901A\u8BAF
\u3010\u8F6F\u4EF6\u7B80\u4ECB\u3011\u4E00\u6B3E\u53F0\u6E7E\u4EA7\u52A0\u5BC6\u5373\u65F6\u901A\u8BAF\u5E94\u7528\uFF0C\u76EE\u524D\u6CA1\u6709\u88AB\u5899\uFF0C\u591A\u5E73\u53F0\u652F\u6301\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u5FAE\u4FE1\u7684\u66FF\u4EE3\u54C1\u3002
\u3010\u8F6F\u4EF6\u4E0B\u8F7D\u3011`,{type:"link",text:"https://www.letstalkapp.net/downld"},""]},{id:274,text:["GitHub\u6587\u4EF6,Releases,archive,gist,",{type:"link",text:"raw.githubusercontent.com"},`\u6587\u4EF6\u4EE3\u7406\u52A0\u901F\u4E0B\u8F7D\u670D\u52A1.

`,{type:"link",text:"https://ghproxy.com/"},""]},{id:275,text:`\u591A\u4E2AAppleID\u5207\u6362\u4E0D\u7528\u6BCF\u6B21\u53CC\u91CD\u8BA4\u8BC1\u7684\u597D\u529E\u6CD5\u3002

\u5728iOS\u8BBE\u5907\u4E0A\uFF1A
1.\u524D\u5F80\u201C\u8BBE\u7F6E\u201D>\u201C\u90AE\u4EF6\u201D>\u201C\u8D26\u6237\u201C>\u201C\u6DFB\u52A0\u8D26\u6237\u201D\u3002
2.\u8F7B\u89E6\u201CiCloud\u201D\u540E\u767B\u9646\u4F60\u7684\u5176\u4ED6AppleID\u5E76\u5B8C\u6210\u53CC\u91CD\u8BA4\u8BC1\u3002
3.\u82E5\u4E0D\u9700\u8981\u63A5\u6536\u5176\u4ED6AppleID\u7684iCloud\u90AE\u4EF6\uFF0C\u8BF7\u524D\u5F80\u201C\u8BBE\u7F6E\u201D>\u201C\u90AE\u4EF6\u201D>\u201C\u8D26\u6237\u201C\uFF0C\u8F7B\u89E6\u4F60\u7684\u5176\u4ED6AppleID\u8D26\u6237\uFF0C\u9009\u62E9\u201CiCloud\u201D\uFF0C\u5173\u95ED\u201CiCloud\u90AE\u4EF6\u201D\u5373\u53EF\u3002

\u5728macOS\u8BBE\u5907\u4E0A\uFF1A
1.\u524D\u5F80\u201C\u7CFB\u7EDF\u504F\u597D\u8BBE\u7F6E\u201D>\u201C\u4E92\u8054\u7F51\u8D26\u6237\u201D\u3002
2.\u9009\u62E9\u201CiCloud\u201D\u540E\u767B\u9646\u4F60\u7684\u5176\u4ED6AppleID\u5E76\u5B8C\u6210\u53CC\u91CD\u8BA4\u8BC1\u3002
3.\u82E5\u4E0D\u9700\u8981\u63A5\u6536\u5176\u4ED6AppleID\u7684iCloud\u90AE\u4EF6\uFF0C\u8BF7\u524D\u5F80\u201C\u7CFB\u7EDF\u504F\u597D\u8BBE\u7F6E\u201D>\u201C\u4E92\u8054\u7F51\u8D26\u6237\u201D\uFF0C\u9009\u62E9\u4F60\u7684\u5176\u4ED6AppleID\u8D26\u6237\uFF0C\u5173\u95ED\u201CiCloud\u90AE\u4EF6\u201D\u5373\u53EF\u3002

\u5B8C\u6210\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u82E5\u5728AppStore\u5207\u6362\u8D26\u6237\uFF0C\u5219\u65E0\u9700\u4E8C\u6B21\u53CC\u91CD\u8BA4\u8BC1\u63A5\u6536\u9A8C\u8BC1\u7801\uFF0C\u4E14\u6BCF\u53F0\u767B\u9646\u8FC7\u7684\u8BBE\u5907\u90FD\u53EF\u4F5C\u4E3A\u53EF\u4FE1\u4EFB\u8BBE\u5907\uFF0C\u4E3A\u65B0\u8BBE\u5907\u63A5\u6536\u53CC\u91CD\u8BA4\u8BC1\u7684\u9A8C\u8BC1\u7801\u3002

\u82E5\u5728\u8F83\u4F4E\u7248\u672C\u7684iOS\u8BBE\u5907\u4E0A\uFF1A
1.\u524D\u5F80\u201C\u8BBE\u7F6E\u201D>\u201C\u5BC6\u7801\u4E0E\u8D26\u6237\u201D>\u201C\u6DFB\u52A0\u8D26\u6237\u201D\u3002
2.\u8F7B\u89E6\u201CiCloud\u201D\u540E\u767B\u9646\u4F60\u7684\u5176\u4ED6AppleID\u5E76\u5B8C\u6210\u53CC\u91CD\u8BA4\u8BC1\u3002
3.\u82E5\u4E0D\u9700\u8981\u63A5\u6536\u5176\u4ED6AppleID\u7684iCloud\u90AE\u4EF6\uFF0C\u8BF7\u524D\u5F80\u201C\u8BBE\u7F6E\u201D>\u201C\u5BC6\u7801\u4E0E\u8D26\u6237\u201C\uFF0C\u8F7B\u89E6\u4F60\u7684\u5176\u4ED6AppleID\u8D26\u6237\uFF0C\u5173\u95ED\u201CiCloud\u90AE\u4EF6\u201D\u5373\u53EF\u3002

\u82E5\u4F60\u5728iOS\u8BBE\u5907\u7684\u201C\u8BBE\u7F6E\u201D\u4E2D\u627E\u4E0D\u5230\u201C\u90AE\u4EF6\u201D\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u5220\u9664\u4E86\u201C\u90AE\u4EF6\u201Dapp\u3002
\u82E5\u5220\u9664\u4E86\u201C\u90AE\u4EF6\u201Dapp\uFF0C\u53EF\u4EE5\u524D\u5F80\u201C\u8BBE\u7F6E\u201D>\u201C\u901A\u8BAF\u5F55\u201D\u3001\u201C\u65E5\u5386\u201D\u6216\u201C\u63D0\u9192\u4E8B\u9879\u201D(\u4EFB\u9009\u5176\u4E00)>\u201C\u8D26\u6237\u201C>\u201C\u6DFB\u52A0\u8D26\u6237\u201D\u6765\u5B8C\u6210\u64CD\u4F5C\u3002`},{id:276,text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u767D\u4E91\u79D1\u6280

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://tz.baiyuntech.store/"},`

\u7279\u8272\u2728\uFF1A\u6CE8\u518C\u900110G\uFF0C\u6BCF\u5929\u7B7E\u5230\u989D\u5916\u9001\uFF0C\u9700\u9A8C\u8BC1\u90AE\u7BB1\uFF0C\u5957\u9910\u65F6\u957F359\u5929\uFF0C\u9002\u5408\u5907\u7528\u9632\u65AD\u8054

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]},{id:277,text:[`\u8F6C\u79FB\u65B9\u6CD5

QQ\u97F3\u4E50APP->\u6211\u7684->\u70B9\u4E0A\u9762\u7EFF\u94BB\u56FE\u6807->\u4E0B\u62C9\u5230\u5E95->\u4F1A\u5458\u8F6C\u79FB\uFF01

QQ\u548C\u5FAE\u4FE1\u90FD\u53EF\u4EE5\u53C2\u52A0->\u5FAE\u4FE1\u9886\u4E86\u540E\u53EF\u4EE5\u8F6C\u79FB\u5230QQ\u4E0A

\u6D3B\u52A8\u5730\u5740\uFF1A`,{type:"link",text:"https://y.qq.com/jzt/294873/ad6803.html"},`

\u6D3B\u52A8\u65F6\u95F4\uFF1A2022.03.30\u7ED3\u675F`]},{id:278,text:["Tg\u4EE3\u7406\uFF1A",{type:"link",text:"https://t.me/socks?server=china-gzyd-1.forwardserver.xyz&port=30966"},""]},{id:279,text:"vmess://eyJ2IjoyLCJwcyI6IuaXpeacrCB8IEQgfCAwWCB8IEFaIiwiYWRkIjoicWludG9uMDAxLmJtYmFpLmJ1enoiLCJwb3J0IjoxMDAxMywiaWQiOiI2MDg5YmJkMi0yYmVmLTNlZTMtYTMyOS0xYjFhNDMzOWQ3ZWQiLCJhaWQiOjIsInNjeSI6ImF1dG8iLCJuZXQiOiJ3cyIsInR5cGUiOiIiLCJob3N0IjoiMS5iYWl5dW4ucHciLCJwYXRoIjoiL3YycmF5IiwidGxzIjoidGxzIiwic25pIjoiMS5iYWl5dW4ucHcifQ"},{id:280,text:[`ios\u62E6\u622A\u5E7F\u544A\u7684

\u5730\u5740\uFF1A`,{type:"link",text:"https://apps.apple.com/cn/app/%E6%8B%A6%E6%88%AA365-%E5%B9%BF%E5%91%8A%E6%8B%A6%E6%88%AA%E8%BF%87%E6%BB%A4/id1602769239#?platform=iphone"},""]},{id:281,text:[`\u5B8C\u6210\u4EFB\u610F\u4E00\u671F\uFF0C\u5373\u53EF\u9886\u53D6\u963F\u91CC\u4E91\u5B9A\u5236\u9F20\u6807\u4E00\u4E2A

`,{type:"link",text:"https://developer.aliyun.com/adc/series/wintercamp"},""]},{id:282,text:[`\u673A\u573A\u63A8\u8350

\u673A\u573A\u{1F4A8}\uFF1A\u5927\u8FC5\u4E91

\u5730\u5740\u{1F680}\uFF1A`,{type:"link",text:"https://daxun.club/"},`

\u7279\u8272\u2728\uFF1A\u4E34\u65F6\u90AE\u7BB1\u5373\u53EF\uFF0C\u8D60\u9001\u5957\u9910\uFF1A7\u5929/10G/\u65B0\u7528\u6237\u8BD5\u7528

\u8BF4\u660E\u26A1\uFE0F\uFF1A\u6240\u53D1\u673A\u573A\u5747\u65E0aff\uFF0C\u4EC5\u4E3A\u767D\u5AD6\u4F7F\u7528\uFF0C\u7ED9\u5927\u5BB6\u591A\u4E00\u4E2A\u9009\u62E9\uFF0C\u5982\u8981\u4E0A\u8F66\uFF0C\u8BF7\u9009\u62E9\u6700\u4F4E\u65F6\u957F\u7684\u3002

`,{type:"hashtag",text:"#\u767D\u5AD6\u673A\u573A"},""]}];var at={about:et,data:nt,name:it,type:pt,id:st,messages:lt};const ot={name:"App",components:{TelegramCard:tt},data(){return{telegram:at,isRouteAlive:!0,mobile:window.innerWidth<720,avatarImg:"https://mmbiz.qpic.cn/mmbiz_png/Uafc0WX1HdjMXuHIYib2EDeI1xgklKQqkmlic1mtZ4gPt0ou8WaX50IBiag0JxHjB0Ugj24BhOnxQ2WS5FZTLskRg/0?wx_fmt=png",loading:!1}},created(){},mounted(){},provide(){return{reload:this.reload}},methods:{openLink(e){window.open(e)}},destroyed(){}},xt={key:0},yt={class:"avatar"},ht=["src"],mt=n("div",{class:"slogon"},[n("img",{src:"https://mmbiz.qpic.cn/mmbiz_png/Uafc0WX1HdjMXuHIYib2EDeI1xgklKQqk38hFVfV94rdOJbMPqTY22xEapkDaiaj6ZpmpQB7Macp1736FhI05B2g/0?wx_fmt=png"})],-1),ct=f("\u6742\u8D27\u94FA"),dt=f("\u5F71\u89C6\u4F1A\u5458\u6279\u53D1"),rt=f("\u7535\u62A5\u9891\u9053"),kt=n("div",{class:"arrow-animation animated fadeOutUp infinite"},[n("i",{class:"iconfont icon-arrow-up-1-icon"})],-1),wt={class:"bookmark"},gt=n("div",{class:"footer"},null,-1);function ut(e,i,y,s,t,p){const o=d("el-button"),m=d("telegram-card"),u=d("el-tab-pane"),l=d("el-tabs"),I=z("loading");return t.isRouteAlive?(a(),x("div",xt,[n("div",{class:M(t.mobile?"search-section-m":"search-section-pc")},[n("div",yt,[n("img",{src:t.avatarImg,class:"avatar-img"},null,8,ht),mt,h(o,{round:"",onClick:i[0]||(i[0]=c=>p.openLink("http://anranshop.ga/"))},{default:w(()=>[ct]),_:1}),h(o,{round:"",onClick:i[1]||(i[1]=c=>p.openLink("http://feizhu.fk6666.cn/"))},{default:w(()=>[dt]),_:1}),h(o,{round:"",onClick:i[2]||(i[2]=c=>p.openLink("https://t.me/anranbp"))},{default:w(()=>[rt]),_:1})]),kt,T(n("div",wt,[h(l,{class:"bookmark-tabs"},{default:w(()=>[(a(!0),x(r,null,b(t.telegram.data,(c,A)=>(a(),G(u,{key:A,class:"bookmark-tabs-tab",label:c.name},{default:w(()=>[h(m,{td:t.telegram.messages,tg:c.id,ab:t.telegram.about},null,8,["td","tg","ab"])]),_:2},1032,["label"]))),128))]),_:1})],512),[[I,t.loading]]),gt],2)])):k("",!0)}var It=j(ot,[["render",ut]]);const C=B(It);C.use(L);C.mount("#app");
