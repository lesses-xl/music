webpackJsonp([1],[,,,,,,,,function(t,e,s){function i(t){s(34)}var a=s(9)(s(32),s(39),i,null,null);t.exports=a.exports},,,function(t,e,s){"use strict";var i=s(2),a=s(41),n=s(8),l=s.n(n);i.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"music",component:l.a}]})},,function(t,e,s){function i(t){s(35),s(36)}var a=s(9)(s(31),s(40),i,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(8),a=s.n(i);e.default={components:{vuemusic:a.a},data:function(){return{bodyHeight:window.innerHeight+"px",bodyWidth:window.innerWidth+"px"}},methods:{},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},data:function(){return{ifplay:!0,ifcut:0,ifvol:0,orderclass:"order-play",musicleft:0,volleft:0,scales:1,scales1:0,ifshow:0,musicData:[],newData:[],randomNum:0,oneNum:0,listNum:0,orderNum:0,ends:!1,scrollPageY:0,scrollProp:0,playNum:0,playText:"播放",appHeight:window.innerHeight,appWidth:window.innerWidth,audioUrl:null}},methods:{getMusicData:function(){var t=this;this.$http.get("http://lesses.me/my/beta2/static/music.json").then(function(e){t.musicData=e.data},function(t){console.log("失败")})},playmusic:function(t){for(var e=document.getElementsByClassName("play-list-ul")[0].children,s=0;s<this.musicData.length;s++)e[s].setAttribute("class","");e[this.playNum-0].setAttribute("class","playing"),this.ifplay?(this.$refs.audio.play(),this.ifplay=!1,document.getElementsByClassName("music-begin")[this.playNum].children[0].innerHTML=this.ifplay?"播放":"暂停",this.playText=document.getElementsByClassName("music-begin")[this.playNum].children[0].innerHTML):(this.$refs.audio.pause(),this.ifplay=!0,document.getElementsByClassName("music-begin")[this.playNum].children[0].innerHTML=this.ifplay?"播放":"暂停",this.playText=document.getElementsByClassName("music-begin")[this.playNum].children[0].innerHTML)},cutorder:function(){0==this.ifcut?(this.orderclass="random-play",this.ifcut=1):1==this.ifcut?(this.orderclass="one-play",this.ifcut=2):2==this.ifcut?(this.orderclass="list-play",this.ifcut=3):(this.orderclass="order-play",this.ifcut=0)},closevol:function(){this.ifvol?(this.ifvol=0,document.getElementById("audios").volume=this.scales):(this.ifvol=1,document.getElementById("audios").volume=0)},getDrag:function(t){var e=document.getElementById("audios"),s=document.getElementsByClassName("music-drag")[0],i=document.getElementsByClassName("music-bar")[0],a=document.getElementsByClassName("music-plan")[0],n=(document.getElementsByClassName("music-show")[0],document.getElementsByClassName("music-wrap")[0]);this.musicleft=t.clientX-n.offsetLeft-i.offsetLeft,this.scales1=this.musicleft/i.offsetWidth,s.style.left=this.musicleft+"px",a.style.width=i.offsetWidth*this.scales1+"px",e.currentTime=e.duration*this.scales1,this.getMusicTime(),this.ifplay=1,this.playmusic()},getVol:function(t){var e=document.getElementsByClassName("vol-bar-btn")[0],s=document.getElementsByClassName("vol-plan")[0],i=(document.getElementsByClassName("music-vol")[0],document.getElementsByClassName("music-wrap")[0]),a=document.getElementsByClassName("vol-bar")[0];this.volleft=t.clientX-a.offsetLeft-i.offsetLeft,e.style.left=this.volleft+"px",this.scales=e.offsetLeft/a.offsetWidth,this.scales>0?(document.getElementById("audios").volume=this.scales,s.style.width=a.offsetWidth*this.scales+"px",this.ifvol=1,this.closevol()):0==this.scales&&(document.getElementById("audios").volume=this.scales,s.style.width="0px",this.ifvol=0,this.closevol())},dragplan:function(t){var e=document.getElementById("audios"),s=document.getElementsByClassName("music-drag")[0],i=document.getElementsByClassName("music-bar")[0],a=document.getElementsByClassName("music-plan")[0],n=(document.getElementsByClassName("music-show")[0],document.getElementsByClassName("music-wrap")[0]);this.ifplay=!1,this.playmusic();var l=this;document.onmousemove=function(t){l.musicleft=t.clientX-i.offsetLeft-n.offsetLeft-s.offsetWidth/2,l.musicleft<=0&&(l.musicleft=0),l.musicleft>=i.offsetWidth&&(l.musicleft=i.offsetWidth),l.scales1=l.musicleft/i.offsetWidth,s.style.left=l.musicleft+"px",a.style.width=i.offsetWidth*l.scales1+"px"},document.onmouseup=function(){l.scales1=s.offsetLeft/i.offsetWidth,e.currentTime=e.duration*l.scales1,l.ifplay=1,l.playmusic(),document.onmousemove=null,document.onmousedown=null,document.onmouseup=null}},voldrag:function(){var t=document.getElementsByClassName("vol-bar-btn")[0],e=document.getElementsByClassName("vol-bar")[0],s=document.getElementsByClassName("vol-plan")[0],i=(document.getElementsByClassName("music-vol")[0],document.getElementsByClassName("music-wrap")[0]),a=this;document.onmousemove=function(n){a.volleft=n.clientX-e.offsetLeft-i.offsetLeft-t.offsetWidth/2,a.volleft<=0&&(a.volleft=0),a.volleft>=e.offsetWidth&&(a.volleft=e.offsetWidth),t.style.left=a.volleft+"px",a.scales=t.offsetLeft/e.offsetWidth,a.scales>0?(document.getElementById("audios").volume=a.scales,s.style.width=e.offsetWidth*a.scales+"px",a.ifvol=1,a.closevol()):0==a.scales&&(document.getElementById("audios").volume=a.scales,s.style.width="0px",a.ifvol=0,a.closevol())},document.onmouseup=function(){a.scales=t.offsetLeft/e.offsetWidth,document.onmousemove=null,document.onmousedown=null}},showmy:function(){var t=document.getElementsByClassName("music-play-list")[0],e=document.getElementsByClassName("music-my")[0];0==this.ifshow?(t.style.transform="translate(0px)",e.style.left="50%",this.ifshow=1):(t.style.transform="translate(-230px)",e.style.left="-200%",this.ifshow=0)},timeActive:function(){var t=(document.getElementById("audios"),Math.round(audios.duration%60)),e=Math.round(audios.duration/60);t<=9&&(t="0"+t),e<=9&&(e="0"+e),document.getElementsByClassName("time-all")[0].innerHTML=e+":"+t;var s=Math.round(audios.currentTime%60),i=Math.round(audios.currentTime/60);s<=9&&(s="0"+s),i<=9&&(i="0"+i),document.getElementsByClassName("time-second")[0].innerHTML=i+":"+s},getMusicTime:function(){var t=document.getElementById("audios"),e=document.getElementsByClassName("music-drag")[0],s=document.getElementsByClassName("music-bar")[0],i=document.getElementsByClassName("music-plan")[0],a=this;t.addEventListener("timeupdate",function(){this.scales1=t.currentTime/t.duration,i.style.width=s.offsetWidth*this.scales1+"px",e.style.left=s.offsetWidth*this.scales1+"px",a.timeActive()},!1)},changeColor:function(){document.getElementsByClassName("music-li")[this.playNum].style.color="orange",document.getElementsByClassName("music-begin")[this.playNum].children[0].style.color="orange"},changewhite:function(){for(var t=0;t<document.getElementsByClassName("music-begin").length;t++)document.getElementsByClassName("music-begin")[t].style.color="white",document.getElementsByClassName("music-li")[t].style.color="white",document.getElementsByClassName("music-begin")[t].children[0].innerHTML="播放",document.getElementsByClassName("music-begin")[t].children[0].style.color="white"},changeMusic:function(){document.getElementsByClassName("music-begin");document.getElementById("audios").setAttribute("dataNum",event.currentTarget.children[2].innerHTML),this.changewhite(),event.currentTarget.parentNode.style.color="orange";var t=event.currentTarget.children[2].innerHTML,e=event.currentTarget.children[1].innerHTML,s=document.getElementsByClassName("music-ul")[0],i=s.children[t].children[0].innerHTML,a=s.children[t].children[1].innerHTML;this.playNum==t?event.currentTarget.children[0].innerHTML=this.playText:this.playText="暂停",this.playNum=t,this.$refs.audio.src=e,document.getElementsByClassName("music-show-name")[0].innerHTML=i+" - "+a,this.scales1=0,"播放"==event.currentTarget.children[0].innerHTML?(event.currentTarget.setAttribute("musicplay","false"),event.currentTarget.children[0].innerHTML="暂停",this.playText=event.currentTarget.children[0].innerHTML,event.currentTarget.children[0].style.color="orange",this.ifplay=!0,this.playmusic()):"暂停"==event.currentTarget.children[0].innerHTML&&(event.currentTarget.children[0].style.color="orange",event.currentTarget.children[0].innerHTML="播放",this.playText=event.currentTarget.children[0].innerHTML,event.currentTarget.setAttribute("musicplay","true"),this.playmusic())},listplay:function(){var t=document.getElementsByClassName("play-list-ul")[0].children,e=document.getElementById("audios"),s=document.getElementsByClassName("music-show-name")[0];this.listNum=e.getAttribute("dataNum")-0,"prev"==event.currentTarget.getAttribute("id")?(0==this.listNum&&(this.listNum=this.musicData.length),this.listNum<0&&(this.listNum=-1),this.listNum=this.listNum-1,e.src=this.musicData[this.listNum].url,e.setAttribute("dataNum",this.listNum),this.playNum=e.getAttribute("datanum")-0,t[this.playNum-0].setAttribute("class","playing"),s.innerHTML=this.musicData[this.listNum].name+" - "+this.musicData[this.listNum].singer,this.getMusicTime(),this.playText=document.getElementsByClassName("music-begin")[this.playNum].children[0].innerHTML,this.ifplay=!0,this.playmusic(),this.changeColor()):"next"!=event.currentTarget.getAttribute("id")&&1!=this.ends||(this.listNum==this.musicData.length-1&&(this.listNum=-1),this.listNum<0&&(this.listNum=-1),this.listNum=this.listNum+1,e.src=this.musicData[this.listNum].url,e.setAttribute("dataNum",this.listNum),this.playNum=e.getAttribute("datanum")-0,t[this.playNum-0].setAttribute("class","playing"),s.innerHTML=this.musicData[this.listNum].name+" - "+this.musicData[this.listNum].singer,this.getMusicTime(),this.playText=document.getElementsByClassName("music-begin")[this.playNum].children[0].innerHTML,this.ifplay=!0,this.playmusic(),this.changeColor())},orderplay:function(){var t=document.getElementsByClassName("play-list-ul")[0].children,e=document.getElementById("audios"),s=document.getElementsByClassName("music-show-name")[0];this.orderNum=e.getAttribute("dataNum")-0,"prev"==event.currentTarget.getAttribute("id")?(this.orderNum<=0?this.orderNum=0:this.orderNum=this.orderNum-1,e.src=this.musicData[this.orderNum].url,e.setAttribute("dataNum",this.orderNum),this.playNum=e.getAttribute("datanum")-0,s.innerHTML=this.musicData[this.orderNum].name+" - "+this.musicData[this.orderNum].singer,this.getMusicTime(),this.playText=document.getElementsByClassName("music-begin")[this.playNum].children[0].innerHTML,this.ifplay=!0,t[this.playNum-0].setAttribute("class","playing"),this.playmusic(),this.changeColor()):"next"!=event.currentTarget.getAttribute("id")&&1!=this.ends||(this.orderNum>=this.musicData.length-1?this.orderNum=this.musicData.length-1:this.orderNum=this.orderNum+1,e.src=this.musicData[this.orderNum].url,e.setAttribute("dataNum",this.orderNum),this.playNum=e.getAttribute("datanum")-0,t[this.playNum-0].setAttribute("class","playing"),s.innerHTML=this.musicData[this.orderNum].name+" - "+this.musicData[this.orderNum].singer,this.getMusicTime(),this.playText=document.getElementsByClassName("music-begin")[this.playNum].children[0].innerHTML,this.ifplay=!0,this.playmusic(),this.changeColor())},randomplay:function(){var t=document.getElementsByClassName("play-list-ul")[0].children,e=document.getElementById("audios"),s=document.getElementsByClassName("music-show-name")[0];this.playText=document.getElementsByClassName("music-begin")[this.playNum].children[0].innerHTML,"prev"==event.currentTarget.getAttribute("id")?(0==this.randomNum&&(this.randomNum=this.musicData.length),this.randomNum<0&&(this.randomNum=-1),this.randomNum=this.randomNum-1,this.playNum=e.getAttribute("datanum")-0,e.src=this.musicData[this.randomNum].url,e.setAttribute("dataNum",this.randomNum),this.playNum=e.getAttribute("datanum")-0,t[this.playNum-0].setAttribute("class","playing"),s.innerHTML=this.musicData[this.randomNum].name+" - "+this.musicData[this.randomNum].singer,this.getMusicTime(),this.ifplay=!0,this.playmusic(),this.changeColor()):"next"!=event.currentTarget.getAttribute("id")&&1!=this.ends||(this.randomNum==this.musicData.length-1&&(this.randomNum=-1),this.randomNum<0&&(this.randomNum=-1),this.randomNum=this.randomNum+1,e.src=this.musicData[this.randomNum].url,e.setAttribute("dataNum",this.randomNum),this.playNum=e.getAttribute("datanum")-0,t[this.playNum-0].setAttribute("class","playing"),s.innerHTML=this.musicData[this.randomNum].name+" - "+this.musicData[this.randomNum].singer,this.getMusicTime(),this.playText=document.getElementsByClassName("music-begin")[this.playNum].children[0].innerHTML,this.ifplay=!0,this.playmusic(),this.changeColor())},oneplay:function(){var t=document.getElementsByClassName("play-list-ul")[0].children,e=document.getElementById("audios"),s=document.getElementsByClassName("music-show-name")[0];"next"!=event.currentTarget.getAttribute("id")&&"prev"!=event.currentTarget.getAttribute("id")&&1!=this.ends||(this.oneNum=e.getAttribute("dataNum"),e.src=this.musicData[this.oneNum].url,e.setAttribute("dataNum",this.oneNum),this.playNum=e.getAttribute("datanum")-0,t[this.playNum-0].setAttribute("class","playing"),s.innerHTML=this.musicData[this.oneNum].name+" - "+this.musicData[this.oneNum].singer,this.getMusicTime(),this.playText=document.getElementsByClassName("music-begin")[this.playNum].children[0].innerHTML,this.ifplay=!0,this.playmusic(),this.changeColor())},musicclick:function(){for(var t=document.getElementsByClassName("music-begin"),e=document.getElementsByClassName("play-list-ul")[0].children,s=0;s<t.length;s++)t[s].style.color="white",t[s].children[0].style.color="white",t[s].children[0].innerHTML="播放",document.getElementsByClassName("music-li")[s].style.color="white";for(var s=0;s<this.musicData.length;s++)e[s].setAttribute("class","");0==this.ifcut?this.orderplay():1==this.ifcut?(this.randomNum=parseInt(Math.random()*this.musicData.length),this.randomplay()):2==this.ifcut?this.oneplay():this.listplay()},scrollul:function(){var t=this,e=event.currentTarget,s=document.getElementsByClassName("music-scroll")[0],i=document.getElementsByClassName("music-ul")[0];document.onmousemove=function(a){t.scrollPageY=a.pageY-190,t.scrollPageY<=0&&(t.scrollPageY=0),t.scrollPageY>=490&&(t.scrollPageY=490),e.style.top=t.scrollPageY+"px",t.scrollProp=parseInt(e.offsetTop)/(parseInt(s.offsetHeight)-80),i.style.top=-t.scrollProp*parseInt(i.offsetHeight-570)+"px"},document.onmouseup=function(){document.onmousemove=null,document.onmousedown=null,document.onmouseup=null}},mouseWhell:function(){var t=this,e=document.getElementsByClassName("music-scrollbar")[0],s=document.getElementsByClassName("music-scroll")[0],i=document.getElementsByClassName("music-ul")[0];document.getElementsByClassName("music-my")[0].onmousewheel=function(a){a.wheelDelta<0&&(t.scrollPageY+=20),a.wheelDelta>0&&(t.scrollPageY-=20),t.scrollPageY<=0&&(t.scrollPageY=0),t.scrollPageY>=490&&(t.scrollPageY=490),e.style.top=t.scrollPageY+"px",t.scrollProp=parseInt(e.offsetTop)/(parseInt(s.offsetHeight)-80),i.style.top=-t.scrollProp*parseInt(i.offsetHeight-570)+"px"}},listWell:function(){var t=this,e=document.getElementsByClassName("play-list-ul")[0],s=document.getElementsByClassName("music-play-list")[0];e.onmousewheel=function(i){i.wheelDelta<0?t.scrollPageY+=60:i.wheelDelta>0&&(t.scrollPageY-=60),t.scrollPageY<=-60&&(t.scrollPageY=-60),t.scrollPageY>=e.offsetHeight-s.offsetHeight+60&&(t.scrollPageY=e.offsetHeight-s.offsetHeight+60),e.style.top=-t.scrollPageY+"px"}},listClick:function(){var t=escape(document.getElementById("audios").src),e=event.currentTarget,s=document.getElementsByClassName("play-list-ul")[0].children,i=document.getElementsByClassName("music-show-name")[0];if(document.getElementById("audios").setAttribute("dataNum",event.currentTarget.getAttribute("num")),this.playNum=event.currentTarget.getAttribute("num"),this.audioUrl=this.musicData[event.currentTarget.getAttribute("num")].url,t==escape(this.audioUrl))e.setAttribute("class","playing"),this.playmusic();else{document.getElementById("audios").src=this.audioUrl,this.ifplay=!0,i.innerHTML=this.musicData[e.getAttribute("num")].name+" - "+this.musicData[e.getAttribute("num")].singer;for(var a=0;a<this.musicData.length;a++)s[a].setAttribute("class","");e.setAttribute("class","playing"),this.playmusic()}},firstGet:function(){var t=document.getElementsByClassName("music-show-name")[0],e=document.getElementById("audios"),s=this;document.getElementsByClassName("music-play-list")[0].style.height=window.innerHeight-75+"px",e.src=this.newData[0].url,t.innerHTML=this.newData[0].name+" - "+this.newData[0].singer,e.addEventListener("canplaythrough",function(){s.timeActive()})}},mounted:function(){this.getMusicData(),this.getMusicTime(),this.mouseWhell(),this.listWell();var t=document.getElementById("audios"),e=document.getElementsByClassName("play-list-ul")[0].children,s=this;t.addEventListener("timeupdate",function(){if(t.ended){for(var i=0;i<s.musicData.length;i++)e[i].setAttribute("class","");0==s.ifcut?(s.ends=!0,s.changewhite(),s.orderplay()):1==s.ifcut?(s.ends=!0,s.randomNum=parseInt(Math.random()*s.musicData.length),s.changewhite(),s.randomplay()):2==s.ifcut?(s.ends=!0,s.changewhite(),s.oneplay()):(s.ends=!0,s.changewhite(),s.listplay())}})},watch:{musicData:function(t,e){this.newData=t,this.firstGet(),this.getMusicTime()}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(2),a=s(13),n=s.n(a),l=s(11),u=s(10),m=s.n(u),c=s(12),o=s.n(c);i.a.config.productionTip=!1,i.a.use(o.a,m.a),new i.a({el:"#app",router:l.a,template:"<App/>",components:{App:n.a}})},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music"},[s("audio",{ref:"audio",attrs:{id:"audios",dataNum:"0"}}),t._v(" "),s("div",{staticClass:"music-wrap"},[s("div",{staticClass:"music-btn"},[s("a",{staticClass:"c-btn prev",attrs:{id:"prev",title:"上一首"},on:{click:t.musicclick}}),t._v(" "),s("a",{staticClass:"c-btn",class:t.ifplay?"play":"pause",attrs:{title:"播放/暂停"},on:{click:function(e){e.stopPropagation(),t.playmusic(e)}}}),t._v(" "),s("a",{staticClass:"c-btn next",attrs:{id:"next",title:"下一首"},on:{click:t.musicclick}})]),t._v(" "),s("div",{staticClass:"music-show"},[t._m(0),t._v(" "),s("div",{staticClass:"music-bar",on:{click:t.getDrag}},[s("div",{staticClass:"music-plan"}),t._v(" "),s("div",{staticClass:"music-drag",on:{mousedown:function(e){e.stopPropagation(),t.dragplan(e)}}})])]),t._v(" "),s("div",{staticClass:"music-order"},[s("a",{staticClass:"c-btn order-play",class:this.orderclass,on:{click:t.cutorder}})]),t._v(" "),s("div",{staticClass:"music-vol"},[s("a",{staticClass:"c-btn",class:t.ifvol?"vol-close":"vol-btn",on:{click:t.closevol}}),t._v(" "),s("div",{staticClass:"vol-bar",on:{click:t.getVol}},[s("div",{staticClass:"vol-plan"}),t._v(" "),s("div",{staticClass:"vol-bar-btn",on:{mousedown:function(e){e.stopPropagation(),t.voldrag(e)}}})])]),t._v(" "),s("div",{staticClass:"music-list"},[s("a",{staticClass:"music-list-img",on:{click:t.showmy}},[t._v(t._s(t.musicData.length))])])]),t._v(" "),s("div",{staticClass:"music-my"},[t._m(1),t._v(" "),s("ul",{staticClass:"music-ul"},t._l(t.musicData,function(e,i){return s("li",{staticClass:"music-li"},[s("div",{staticClass:"music-text"},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")]),t._v(" "),s("div",{staticClass:"music-master"},[t._v("\n\t\t\t\t\t"+t._s(e.singer)+"\n\t\t\t\t")]),t._v(" "),s("div",{staticClass:"music-begin",attrs:{musicplay:"true"},on:{click:t.changeMusic}},[s("span",[t._v("播放")]),t._v(" "),s("a",{staticClass:"music-url"},[t._v(t._s(e.url))]),t._v(" "),s("a",{staticClass:"music-index"},[t._v(t._s(i))])]),t._v(" "),s("div",{staticClass:"music-line"},[t._v("\n\t\t\t\t\t/\n\t\t\t\t")]),t._v(" "),s("div",{staticClass:"music-down"},[s("a",{attrs:{href:e.url,target:"_blank",value:"download"}},[t._v("下载")])]),t._v(" "),s("div",{staticClass:"music-No"},[t._v("\n\t\t\t\t\t"+t._s(i+1)+".\n\t\t\t\t")])])})),t._v(" "),s("div",{staticClass:"music-scroll"},[s("div",{staticClass:"music-scrollbar",on:{mousedown:t.scrollul}})])]),t._v(" "),s("div",{staticClass:"music-play-list"},[s("div",{staticClass:"play-list-header"},[t._v("Play List")]),t._v(" "),s("ul",{staticClass:"play-list-ul"},t._l(t.musicData,function(e,i){return s("li",{attrs:{Num:i,val:e.name+" - "+e.singer,musicUrl:e.url},on:{click:t.listClick}},[s("span",[t._v(t._s(i+1)+".")]),t._v(t._s(e.name)+" - "+t._s(e.singer)+"\n\t\t\t")])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music-name"},[s("div",{staticClass:"music-show-name"}),t._v(" "),s("div",{staticClass:"music-time"},[s("span",{staticClass:"time-second"},[t._v("00:00")]),t._v("/"),s("span",{staticClass:"time-all"},[t._v("00:00")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music-myname"},[s("div",{staticClass:"music-text"},[t._v("\n\t\t\t\t音乐标题\n\t\t\t")]),t._v(" "),s("div",{staticClass:"music-master"},[t._v("\n\t\t\t\t歌手\n\t\t\t")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("vuemusic")],1)},staticRenderFns:[]}}],[33]);
//# sourceMappingURL=app.38bae095b81e0ea12d54.js.map