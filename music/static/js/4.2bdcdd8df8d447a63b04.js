webpackJsonp([4],{"+aBY":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("43Vb"),r=i.n(n);t.default={name:"slider",data:function(){return{dots:[],currentIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:1500}},mounted:function(){var e=this;this.$nextTick(function(){e._setSliderWidth(),e._initSliderScroll(),e._initDots(),e.autoPlay&&e._autoPlay()}),window.addEventListener("resize",function(){e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},methods:{_setSliderWidth:function(e){this.sliderChildren=this.$refs.sliderGroup.children;var t=this.$refs.slider.clientWidth,i=this.sliderChildren.length;i&&!e&&(i+=2),this.$refs.sliderGroup.style.width=t*i+"px",[].map.call(this.sliderChildren,function(e){e.style.width=t+"px"})},_initSliderScroll:function(){this.slider=new r.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400})},_initDots:function(){var e=this;this.dots=new Array(this.sliderChildren.length-2),this.slider.on("scrollEnd",function(){var t=e.slider.getCurrentPage().pageX-1;e.currentIndex=t,e._autoPlay()}),this.slider.on("beforeScrollStart",function(){clearTimeout(e.timer)})},_autoPlay:function(){var e=this,t=this.currentIndex+1;this.timer=setTimeout(function(){t++,e.slider.goToPage(t,0,400)},this.interval)}},destroyed:function(){clearTimeout(this.timer)}}},"/Om5":function(e,t){e.exports={code:0,subcode:0,message:"",default:0,data:{uin:0,categoryId:1e7,sortId:5,sum:24354,sin:0,ein:30,list:[{dissid:"2977288849",createtime:"2017-09-06",commit_time:"2017-09-06",dissname:"给男/女朋友的惊喜小视频专用可爱BGM",imgurl:"http://p.qpic.cn/music_cover/WQluEbVjuA26qnfdbicpYcOeXnJI8TjJuKIlibYt1Mp8VMiaTSVYlibZyg/600?n=1",introduction:"",listennum:377763,score:0,version:0,creator:{type:0,qq:2766689457,encrypt_uin:"owSs7wCFNKvk7z**",name:"one day",isVip:0,avatarUrl:"",followflag:0}},{dissid:"1172888559",createtime:"2017-10-12",commit_time:"2017-10-12",dissname:"[钢琴独奏]精选钢琴大师的指尖艺术作品",imgurl:"http://p.qpic.cn/music_cover/zUda023LKyhbpRQOOK2yY8fxEiaAVQabIN9BibP8fCT5C5icBC5O7hNWA/600?n=1",introduction:"",listennum:49012,score:0,version:0,creator:{type:0,qq:872386391,encrypt_uin:"NeSAoicsoiE5",name:"良",isVip:0,avatarUrl:"",followflag:0}},{dissid:"878357702",createtime:"2017-08-01",commit_time:"2017-08-01",dissname:"乡村入门精选：踏进流行的热情乡土",imgurl:"http://p.qpic.cn/music_cover/Xh9w3XT51TT9sbShMd8OrDR6QoDJFzucDWx7CvaqowsnSzZflpVrGg/600?n=1",introduction:"",listennum:39156,score:0,version:0,creator:{type:0,qq:3313854020,encrypt_uin:"oio5oick7enAon**",name:"万利达李宗盛",isVip:0,avatarUrl:"",followflag:0}},{dissid:"2074769161",createtime:"2017-08-31",commit_time:"2017-08-31",dissname:"200位古风歌手：繁华落尽，悠悠吟唱千年梦",imgurl:"http://p.qpic.cn/music_cover/zvTEv4nf24OhibNkHicltqWB6oVM8QVJic3htycJnR2fTyWic35QLriaQ8Q/600?n=1",introduction:"",listennum:424881,score:0,version:0,creator:{type:0,qq:1134746874,encrypt_uin:"oK6i7eSP7wcl7n**",name:"鹿泺",isVip:0,avatarUrl:"",followflag:0}},{dissid:"3578895250",createtime:"2017-08-30",commit_time:"2017-08-30",dissname:"经典舞曲手机铃声：90后的复刻回忆",imgurl:"http://p.qpic.cn/music_cover/YEqzCcJKAOwd4o0ib8yGnjl1EhRBC75PcRiam5qzqZGEww9ApDVhXiahA/600?n=1",introduction:"",listennum:1748948,score:0,version:0,creator:{type:0,qq:2791489219,encrypt_uin:"owSqoKvFNK-5Nv**",name:"Apple",isVip:0,avatarUrl:"",followflag:0}},{dissid:"2380523292",createtime:"2017-09-02",commit_time:"2017-09-02",dissname:"『游戏必备v5』跟着节奏风骚走位",imgurl:"http://p.qpic.cn/music_cover/0GgOOrIBQ14wNzmVraZQ5S4iakHX2RvAyr3MQfSlw5mze9Kywgu0zqw/600?n=1",introduction:"",listennum:326448,score:0,version:0,creator:{type:0,qq:1209430845,encrypt_uin:"oK-zNKvioecP7v**",name:"DesTiny",isVip:0,avatarUrl:"",followflag:0}},{dissid:"3277030317",createtime:"2017-09-01",commit_time:"2017-09-01",dissname:"迷幻妖异，融合传统的日式和风电子",imgurl:"http://p.qpic.cn/music_cover/rbKoTQdkPFC5FFC95YibQLw8jd4O8mPnjX3SM2geCLZlAHrwG3LxO8Q/600?n=1",introduction:"",listennum:63223,score:0,version:0,creator:{type:0,qq:2523668458,encrypt_uin:"ow4AoiCsNevkNn**",name:"我是个讲道理的人",isVip:0,avatarUrl:"",followflag:0}},{dissid:"2385292311",createtime:"2017-10-08",commit_time:"2017-10-08",dissname:"『国产ACGN』助力国漫二次元",imgurl:"http://p.qpic.cn/music_cover/y0Elj3m25QhKsCrLguvkxz6G2lWc4sZpAibubicmqvaD1AFr7t5csKVQ/600?n=1",introduction:"",listennum:12288,score:0,version:0,creator:{type:0,qq:3013409005,encrypt_uin:"oin5oivzNKnz7v**",name:"經歷而後悟",isVip:0,avatarUrl:"",followflag:0}},{dissid:"2077631092",createtime:"2017-09-25",commit_time:"2017-09-25",dissname:"明明是三个人的电影，我却始终不能有姓名",imgurl:"http://p.qpic.cn/music_cover/MmYVUgTeVyHFpPno1OPGpj6iaicqiaKrr0vBiby6QUEXbTHPpEr8PzYnjw/600?n=1",introduction:"",listennum:59370,score:0,version:0,creator:{type:0,qq:3440241624,encrypt_uin:"oivPoe-PoKCA7n**",name:"青栀",isVip:0,avatarUrl:"",followflag:0}},{dissid:"3272834275",createtime:"2017-08-02",commit_time:"2017-08-02",dissname:"α脑波音乐：我爱读书这事Q音都知道了？",imgurl:"http://p.qpic.cn/music_cover/KZXhqWFleib6haUmPFZXatWEEH6hvtsMp7yoOCticm6QCNL1zxkiaOw5g/600?n=1",introduction:"",listennum:762988,score:0,version:0,creator:{type:0,qq:2366812118,encrypt_uin:"owos7wc5ow65Nn**",name:"幸福的小麻花",isVip:0,avatarUrl:"",followflag:0}},{dissid:"872916104",createtime:"2017-10-14",commit_time:"2017-10-14",dissname:"「古风守护」眉间深情万种，为你将痴情奉送",imgurl:"http://p.qpic.cn/music_cover/Msn9lVmRosDqBMvdKxgdYFJC9fEicwX5KIQFaEKwDLMxiaAbiaN1Pdn3g/600?n=1",introduction:"",listennum:122260,score:0,version:0,creator:{type:0,qq:3148193570,encrypt_uin:"oi6PNe6qoi4lon**",name:"羁札ღ",isVip:0,avatarUrl:"",followflag:0}},{dissid:"887986281",createtime:"2017-10-13",commit_time:"2017-10-13",dissname:"欧美|人声电音的迷幻结合，飘浮于自由意境",imgurl:"http://p.qpic.cn/music_cover/Yl4VsPAa0ueibgdH8YtWgUua9SWHuh5xdqzYrA2u0M8RicHa8HHOH0YA/600?n=1",introduction:"",listennum:233276,score:0,version:0,creator:{type:0,qq:1240284880,encrypt_uin:"oK-Poe-F7ecFon**",name:"_",isVip:0,avatarUrl:"",followflag:0}},{dissid:"3584372898",createtime:"2017-10-12",commit_time:"2017-10-12",dissname:"「日系」ACG小姐姐萌哒哒的声音。",imgurl:"http://p.qpic.cn/music_cover/icBIujFBncERIicrBZpEdWhKGZIjiaSgpDiak7YxiajhK9BstnKficicloXWg/600?n=1",introduction:"",listennum:135165,score:0,version:0,creator:{type:0,qq:3318434389,encrypt_uin:"oio5Nevi7eoFNv**",name:"沐沐°",isVip:0,avatarUrl:"",followflag:0}},{dissid:"860849241",createtime:"2017-10-11",commit_time:"2017-10-11",dissname:"女嗓恣意媚骨，缠绕在你身体每个部位",imgurl:"http://p.qpic.cn/music_cover/2Y3WKQAztZTdYHa8tvOVibUIPiaHGglAhuWPAicHBZics0auYVt8Q0RD7A/600?n=1",introduction:"",listennum:359222,score:0,version:0,creator:{type:0,qq:2043655150,encrypt_uin:"ownPoiCk7K6kon**",name:"笑望.",isVip:0,avatarUrl:"",followflag:0}},{dissid:"2347287250",createtime:"2017-10-11",commit_time:"2017-10-11",dissname:"『电音』神级Remix版本背后的优质原作",imgurl:"http://p.qpic.cn/music_cover/iblmVOrNLjCZ0JrmZ8lbbY1ZzicOEjyZmQtgibdXF16HQdU0SaQIEQnicQ/600?n=1",introduction:"",listennum:230670,score:0,version:0,creator:{type:0,qq:349787325,encrypt_uin:"oivq7icloi-k",name:"                                   W",isVip:0,avatarUrl:"",followflag:0}},{dissid:"1484805318",createtime:"2017-10-11",commit_time:"2017-10-11",dissname:"陶笛精选：笛声悠扬入耳，如清风拂面",imgurl:"http://p.qpic.cn/music_cover/z6iaBQ7jDmibXhEAlvTSQvn2zmeGRc5ricfvfGU0AdEhGysbiaLsbsCUIg/600?n=1",introduction:"",listennum:65340,score:0,version:0,creator:{type:0,qq:2507798282,encrypt_uin:"ow4z7iSqNe-Foc**",name:"尐爷的小妹",isVip:0,avatarUrl:"",followflag:0}},{dissid:"1484774011",createtime:"2017-10-10",commit_time:"2017-10-10",dissname:"感受现代主义音乐的不协和之美",imgurl:"http://p.qpic.cn/music_cover/3HrmXoaia0gZ82OfbGzYRMVPJs7q8kYVdYfAPhEicC3cVUFiaibtTPAenA/600?n=1",introduction:"",listennum:32860,score:0,version:0,creator:{type:0,qq:3448297852,encrypt_uin:"oivPNe-q7ickoc**",name:"逆境荒野",isVip:0,avatarUrl:"",followflag:0}},{dissid:"1483145148",createtime:"2017-10-10",commit_time:"2017-10-10",dissname:"记忆辗转成歌，翻阅起曾打动我心的画面",imgurl:"http://p.qpic.cn/music_cover/z6iaBQ7jDmibXhEAlvTSQvn2zmeGRc5ricf2MaeC71b2NurGC1a0o5viaA/600?n=1",introduction:"",listennum:218565,score:0,version:0,creator:{type:0,qq:2507798282,encrypt_uin:"ow4z7iSqNe-Foc**",name:"尐爷的小妹",isVip:0,avatarUrl:"",followflag:0}},{dissid:"2981709257",createtime:"2017-10-09",commit_time:"2017-10-09",dissname:"湖南卫视《亲爱的·客栈》EPI歌单",imgurl:"http://p.qpic.cn/music_cover/4GmqsNW5RLs5OkaBKCuUkuGq9UBA0fGRReMTY0QRxekcLnWvnuqyIw/600?n=1",introduction:"",listennum:119981,score:0,version:0,creator:{type:0,qq:3393043707,encrypt_uin:"oioqoinPoiSz7z**",name:"亲爱的·客栈",isVip:0,avatarUrl:"",followflag:0}},{dissid:"1782706146",createtime:"2017-10-09",commit_time:"2017-10-09",dissname:"轻快欧美小曲，放心灵去翱翔",imgurl:"http://p.qpic.cn/music_cover/mys7GjKhFbvuZmDclXhcLDx8gFMYqRnSGicd7DFjVYuqbjDwaIINwyg/600?n=1",introduction:"",listennum:380789,score:0,version:0,creator:{type:0,qq:3072661243,encrypt_uin:"oinlowCsoK-Poz**",name:"倾殇",isVip:0,avatarUrl:"",followflag:0}},{dissid:"2684054952",createtime:"2017-10-06",commit_time:"2017-10-06",dissname:"永安二胡：传统与流行的碰撞",imgurl:"http://p.qpic.cn/music_cover/x18WZws6trBjMbOiafuKJ1Iq5bUib4Ncto4xFquneUmNoyrAlUJsyWiaw/600?n=1",introduction:"",listennum:31714,score:0,version:0,creator:{type:0,qq:761645586,encrypt_uin:"7iC57wvk7Kcs",name:"。。。",isVip:0,avatarUrl:"",followflag:0}},{dissid:"2981347512",createtime:"2017-10-06",commit_time:"2017-10-06",dissname:"黑化洛天依:暗黑风格的歌曲忍不住单曲循环!",imgurl:"http://p.qpic.cn/music_cover/GvTlZPtgKT2kHbicm3pM9I65CicEeJsnavDAuO7MnJPXF1SPjunVwLHw/600?n=1",introduction:"",listennum:76644,score:0,version:0,creator:{type:0,qq:1147466497,encrypt_uin:"oK6P7ivs7wvq7z**",name:"✘关于罂粟✘",isVip:0,avatarUrl:"",followflag:0}},{dissid:"3580031325",createtime:"2017-10-05",commit_time:"2017-10-05",dissname:"愚蠢的地球人，看我用这些歌征服你们！",imgurl:"http://p.qpic.cn/music_cover/r9vkibE8HA9SANiafMrF8aBD0nmahrj2UWibhfst2pK1yYGe84lVuUdeQ/600?n=1",introduction:"",listennum:92721,score:0,version:0,creator:{type:0,qq:641995739,encrypt_uin:"7wv5NKEk7ioq",name:"Mental,",isVip:0,avatarUrl:"",followflag:0}},{dissid:"886861035",createtime:"2017-10-04",commit_time:"2017-10-04",dissname:"华语绿辑：你还能怎样？当然是选择原谅Ta啊",imgurl:"http://p.qpic.cn/music_cover/2Y3WKQAztZTdYHa8tvOVibUIPiaHGglAhuYD4OVbNIgGib5INI1ltfnOA/600?n=1",introduction:"",listennum:434515,score:0,version:0,creator:{type:0,qq:2043655150,encrypt_uin:"ownPoiCk7K6kon**",name:"笑望.",isVip:0,avatarUrl:"",followflag:0}},{dissid:"2378265174",createtime:"2017-09-30",commit_time:"2017-09-30",dissname:"Moombahto｜飞行于云端的雷鬼电子",imgurl:"http://p.qpic.cn/music_cover/ZOOOnz3oPT4xraH9DG34rrsXfTBPMzOLcIZmGpa1Mn00zAHsp7y59w/600?n=1",introduction:"",listennum:43703,score:0,version:0,creator:{type:0,qq:1550319575,encrypt_uin:"oK4koeo5NK4l7v**",name:"Chilia Waterhouse",isVip:0,avatarUrl:"",followflag:0}},{dissid:"1781033639",createtime:"2017-09-30",commit_time:"2017-09-30",dissname:"10月8日|德国长笛演奏家库仑特·雷德尔诞辰",imgurl:"http://p.qpic.cn/music_cover/YtJmdzgRRzMfbpCjYGk3R3hFYsBR26n1Ywp7uDIJziboibbbIpf4h8PQ/600?n=1",introduction:"",listennum:115134,score:0,version:0,creator:{type:0,qq:3515059093,encrypt_uin:"oi457KnkNKnqoz**",name:"古典音乐日历",isVip:0,avatarUrl:"",followflag:0}},{dissid:"862546123",createtime:"2017-10-10",commit_time:"2017-10-10",dissname:"重低音电子：这些旋律玩的就是心跳",imgurl:"http://p.qpic.cn/music_cover/2Y3WKQAztZTdYHa8tvOVibUIPiaHGglAhu7UBoloko72gMGclRhxNg4A/600?n=1",introduction:"",listennum:409305,score:0,version:0,creator:{type:0,qq:2043655150,encrypt_uin:"ownPoiCk7K6kon**",name:"笑望.",isVip:0,avatarUrl:"",followflag:0}},{dissid:"1778837129",createtime:"2017-09-29",commit_time:"2017-09-29",dissname:"《实况足球2017》游戏原声大碟",imgurl:"http://p.qpic.cn/music_cover/lxPlsc8V23TCJJthzBJpz0Cl4B53gvHDbLiafAKsThjibJyzZIoib20MA/600?n=1",introduction:"",listennum:19460,score:0,version:0,creator:{type:0,qq:781972483,encrypt_uin:"7ic5NKSA7eci",name:"神似的飞扬",isVip:0,avatarUrl:"",followflag:0}},{dissid:"1766386139",createtime:"2017-06-15",commit_time:"2017-06-15",dissname:"99位唱见歌手 ：一人一首代表曲",imgurl:"http://p.qpic.cn/music_cover/qH8rLHHhL8O8Iibm56uPzJ9vpPJ9icaI58TuHk6jZia3oAPLqqXJ2zsLA/600?n=1",introduction:"",listennum:5006033,score:0,version:0,creator:{type:0,qq:1812948313,encrypt_uin:"oKc5owEPNeo5oz**",name:"           私に闻いて风i",isVip:0,avatarUrl:"",followflag:0}},{dissid:"861218535",createtime:"2017-03-31",commit_time:"2017-03-31",dissname:"400位华语民谣歌手，一人一首入耳曲",imgurl:"http://p.qpic.cn/music_cover/Biax4WTSMic4N0bgPWDwUCsx1rlEp4KZOZQrPRJVvVXHsdc9rhPBGh9w/600?n=1",introduction:"",listennum:8902763,score:0,version:0,creator:{type:0,qq:1245280330,encrypt_uin:"oK-P7K-Foeoion**",name:"Aliens",isVip:0,avatarUrl:"",followflag:0}},{dissid:"3280389085",createtime:"2017-09-29",commit_time:"2017-09-29",dissname:"听Q音伤感情歌，触碰泪腺，哭干眼泪",imgurl:"http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyLUGsHApnWXXR0wxmHljFmdVJWYa6M8YQg/600?n=1",introduction:"",listennum:2544304,score:0,version:0,creator:{type:0,qq:452775188,encrypt_uin:"7e4A7iSkoKcF",name:"还不是因为你长得不好看",isVip:0,avatarUrl:"",followflag:0}}]}}},"1Gv4":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recommend"},[i("scroll",{ref:"scrollWrap",staticClass:"scroll-wrapper",attrs:{data:e.songList}},[i("div",[e.picData.length?i("div",{staticClass:"slider-wrap"},[i("slider",e._l(e.picData,function(t){return i("div",{key:t.id,staticClass:"pic-list"},[i("a",{attrs:{href:t.linkUrl}},[i("img",{staticClass:"needsclick",attrs:{src:t.picUrl,alt:""},on:{load:e.loadImage}})])])}))],1):e._e(),e._v(" "),i("div",{staticClass:"recommend-list"},[i("div",{staticClass:"list-wrap"},[i("h1",{staticClass:"title"},[e._v("热门歌单推荐")]),e._v(" "),i("ul",{staticClass:"content"},e._l(e.songList,function(t){return i("li",{key:t.id,staticClass:"content-item",on:{click:function(i){e.selectItem(t)}}},[i("div",{staticClass:"list-pic"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"i.imgurl"}],attrs:{alt:""}})]),e._v(" "),i("div",{staticClass:"list-content"},[i("h2",{staticClass:"name"},[e._v(e._s(t.creator.name))]),e._v(" "),i("p",{staticClass:"dissname"},[e._v(e._s(t.dissname))])])])}))]),e._v(" "),i("div",{staticClass:"content-loading-wrap"},[i("loading",{attrs:{show:!e.songList.length}})],1)])])]),e._v(" "),i("router-view")],1)},staticRenderFns:[]}},"9Nno":function(e,t,i){i("GmWH");var n=i("VU/8")(i("d+Lw"),i("rAZQ"),"data-v-b77683d6",null);e.exports=n.exports},CH0M:function(e,t,i){i("kpUy");var n=i("VU/8")(i("+aBY"),i("Xjl6"),"data-v-b01bcb84",null);e.exports=n.exports},EarI:function(e,t){function i(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*m;case"days":case"day":case"d":return i*l;case"hours":case"hour":case"hrs":case"hr":case"h":return i*c;case"minutes":case"minute":case"mins":case"min":case"m":return i*a;case"seconds":case"second":case"secs":case"sec":case"s":return i*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}}}function n(e){return e>=l?Math.round(e/l)+"d":e>=c?Math.round(e/c)+"h":e>=a?Math.round(e/a)+"m":e>=s?Math.round(e/s)+"s":e+"ms"}function r(e){return o(e,l,"day")||o(e,c,"hour")||o(e,a,"minute")||o(e,s,"second")||e+" ms"}function o(e,t,i){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+i:Math.ceil(e/t)+" "+i+"s"}var s=1e3,a=60*s,c=60*a,l=24*c,m=365.25*l;e.exports=function(e,t){t=t||{};var o=typeof e;if("string"===o&&e.length>0)return i(e);if("number"===o&&!1===isNaN(e))return t.long?r(e):n(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},"F4+m":function(e,t,i){"use strict";i.d(t,"a",function(){return s});var n=i("Dd8w"),r=i.n(n),o=i("NYxO"),s={computed:r()({},i.i(o.b)(["playList"])),mounted:function(){this.handlePlayList(this.playList)},activated:function(){this.handlePlayList(this.playList)},watch:{playList:function(e){this.handlePlayList(e)}},methods:{handlePlayList:function(){throw new Error("组件需要使用 handlePlayList")}}}},"Fy0/":function(e,t,i){(function(n){function r(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function o(e){var i=this.useColors;if(e[0]=(i?"%c":"")+this.namespace+(i?" %c":" ")+e[0]+(i?"%c ":" ")+"+"+t.humanize(this.diff),i){var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(o=r))}),e.splice(o,0,n)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}}function c(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==n&&"env"in n&&(e=i.i({NODE_ENV:"production"}).DEBUG),e}t=e.exports=i("vmzn"),t.log=s,t.formatArgs=o,t.save=a,t.load=c,t.useColors=r,t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(c())}).call(t,i("W2nU"))},Gak4:function(e,t,i){"use strict";function n(e,t,i){return e=-1!==e.indexOf("?")?e:e+"?"+r(t),new s.a(function(t,n){c()(e,i,function(e,i){e?n(e):t(i)})})}function r(e){if(!e)return"";var t="";for(var i in e)t+="&"+i+"="+e[i];return t.substring(1)}t.a=n;var o=i("//Fk"),s=i.n(o),a=i("hU7x"),c=i.n(a)},GmWH:function(e,t,i){var n=i("WFpZ");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("1daa1d5d",n,!0)},Lcvq:function(e,t){e.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"},Mfpu:function(e,t,i){i("reCH");var n=i("VU/8")(i("nkL6"),i("1Gv4"),"data-v-113deb19",null);e.exports=n.exports},PSgO:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".recommend .scroll-wrapper[data-v-113deb19]{background:#fff;position:fixed;overflow:hidden;top:1.333333rem;left:0;right:0;bottom:0}.recommend .recommend-list .list-wrap .title[data-v-113deb19]{height:.866667rem;line-height:.866667rem;text-align:center;font-size:.373333rem;color:#31c27c}.recommend .recommend-list .list-wrap .content[data-v-113deb19]{padding:0 .266667rem}.recommend .recommend-list .list-wrap .content .content-item[data-v-113deb19]{padding:0 .266667rem .266667rem;display:-webkit-box;display:-ms-flexbox;display:flex}.recommend .recommend-list .list-wrap .content .content-item .list-pic[data-v-113deb19]{width:1.6rem;padding-right:.666667rem}.recommend .recommend-list .list-wrap .content .content-item .list-pic img[data-v-113deb19]{width:100%;height:100%}.recommend .recommend-list .list-wrap .content .content-item .list-content[data-v-113deb19]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.recommend .recommend-list .list-wrap .content .content-item .list-content .name[data-v-113deb19]{font-size:.4rem;margin-bottom:.4rem;color:#000}.recommend .recommend-list .list-wrap .content .content-item .list-content .dissname[data-v-113deb19]{font-size:.333333rem;color:#000}.recommend .content-loading-wrap[data-v-113deb19]{margin-top:.266667rem}",""])},T452:function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return r}),i.d(t,"c",function(){return o}),i.d(t,"e",function(){return s}),i.d(t,"f",function(){return a}),i.d(t,"l",function(){return c}),i.d(t,"m",function(){return l}),i.d(t,"n",function(){return m}),i.d(t,"j",function(){return d}),i.d(t,"i",function(){return u}),i.d(t,"k",function(){return p}),i.d(t,"g",function(){return f}),i.d(t,"h",function(){return v}),i.d(t,"d",function(){return g});var n="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",r={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},o={param:"jsonpCallback"},s="/api/getMusicList",a={rnd:Math.random(),g_tk:1928093487,format:"json",inCharset:"utf-8",outCharset:"utf-8",notice:0,hostUin:0,platform:"yqq",needNewCode:0,categoryId:1e7,sortId:5,sin:0,ein:30},c="https://c.y.qq.com/v8/fcg-bin/v8.fcg",l={channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,g_tk:5381,jsonpCallback:"",loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0},m={param:"jsonpCallback",prefix:"GetSingerListCallback"},d="https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",u={g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,order:"listen",begin:0,num:30,songstatus:1},p={param:"jsonpCallback",prefix:"MusicJsonCallbacksinger_track"},f={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},v={param:"jsonpCallback"},g=0},WFpZ:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".loading[data-v-b77683d6]{position:relative;z-index:121212;margin:.133333rem}.loading .loading-wrap[data-v-b77683d6]{width:100%;text-align:center}.loading .loading-wrap img[data-v-b77683d6]{width:.666667rem;height:.666667rem}.loading .loading-wrap .info[data-v-b77683d6]{font-size:.373333rem}",""])},Xjl6:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"sliderGroup",staticClass:"slider-group clearfix"},[e._t("default")],2),e._v(" "),i("div",{staticClass:"dots"},e._l(e.dots,function(t,n){return i("span",{key:t,staticClass:"dots-item",class:{active:e.currentIndex===n}})}))])},staticRenderFns:[]}},"d+Lw":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"loading",props:{show:{type:Boolean,default:!0},title:{type:String,default:"玩命加载中..."}}}},hU7x:function(e,t,i){function n(){}function r(e,t,i){function r(){c.parentNode&&c.parentNode.removeChild(c),window[d]=n,l&&clearTimeout(l)}function a(){window[d]&&r()}"function"==typeof t&&(i=t,t={}),t||(t={});var c,l,m=t.prefix||"__jp",d=t.name||m+s++,u=t.param||"callback",p=null!=t.timeout?t.timeout:6e4,f=encodeURIComponent,v=document.getElementsByTagName("script")[0]||document.head;return p&&(l=setTimeout(function(){r(),i&&i(new Error("Timeout"))},p)),window[d]=function(e){o("jsonp got",e),r(),i&&i(null,e)},e+=(~e.indexOf("?")?"&":"?")+u+"="+f(d),e=e.replace("?&","?"),o('jsonp req "%s"',e),c=document.createElement("script"),c.src=e,v.parentNode.insertBefore(c,v),a}var o=i("Fy0/")("jsonp");e.exports=r;var s=0},kpUy:function(e,t,i){var n=i("nV4n");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("084985c4",n,!0)},m40h:function(e,t,i){"use strict";function n(e,t,n){return i.i(c.a)(e,t,n)}function r(e,t,i){return m.a.get(e,{params:t})}function o(e,t,i){var n=a()({},d.g,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0,format:"jsonp"});return m.a.get(e,{params:n})}t.a=n,t.b=r,t.c=o;var s=i("woOf"),a=i.n(s),c=i("Gak4"),l=i("mtWM"),m=i.n(l),d=i("T452")},nV4n:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".slider[data-v-b01bcb84]{overflow:hidden;position:relative}.slider .slider-group .pic-list[data-v-b01bcb84]{float:left}.slider .slider-group .pic-list img[data-v-b01bcb84]{width:100%}.slider .dots[data-v-b01bcb84]{position:absolute;bottom:.106667rem;left:0;right:0;text-align:center}.slider .dots .dots-item[data-v-b01bcb84]{display:inline-block;margin:0 .066667rem;border-radius:.053333rem;width:.106667rem;height:.106667rem;background-color:hsla(0,0%,100%,.5)}.slider .dots .dots-item.active[data-v-b01bcb84]{width:.266667rem;background-color:hsla(0,0%,100%,.8)}",""])},nkL6:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("Dd8w"),r=i.n(n),o=i("m40h"),s=i("T452"),a=i("CH0M"),c=i.n(a),l=i("9Nno"),m=i.n(l),d=i("zu6c"),u=i.n(d),p=i("43Vb"),f=(i.n(p),i("mtWM")),v=(i.n(f),i("F4+m")),g=i("NYxO");t.default={name:"recommend",mixins:[v.a],data:function(){return{picData:[],songList:[]}},created:function(){this.getRecommendPic(),this.getRecommendMusicList()},methods:r()({handlePlayList:function(e){var t=document.getElementsByClassName("mini-player")[0],i=getComputedStyle(t).height,n=e.length>0?i:"";this.$refs.scrollWrap.$el.style.bottom=n,this.$refs.scrollWrap.refresh()},getRecommendPic:function(){var e=this;i.i(o.a)(s.a,s.b,s.c).then(function(t){t.code===s.d&&(e.picData=t.data.slider)})},getRecommendMusicList:function(){var e=this;i.i(o.b)(s.e,s.f).then(function(t){t.data.code===s.d&&(e.songList=t.data.data.list)}).catch(function(t){console.log("代理失败，请求假数据"),setTimeout(function(){e.songList=i("/Om5").data.list},2e3)})},loadImage:function(){this.checkLoad||(this.checkLoad=!0,this.$refs.scrollWrap.refresh())},selectItem:function(e){this.$router.push({path:"/recommend/"+e.dissid}),this.setDisc(e)}},i.i(g.c)({setDisc:"SET_DISC"})),components:{Slider:c.a,Loading:m.a,Scroll:u.a}}},rAZQ:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"loading"},[n("div",{staticClass:"loading-wrap"},[n("img",{attrs:{src:i("Lcvq")}}),e._v(" "),n("div",{staticClass:"info"},[e._v(e._s(e.title))])])])},staticRenderFns:[]}},reCH:function(e,t,i){var n=i("PSgO");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("38f99ef0",n,!0)},vmzn:function(e,t,i){function n(e){var i,n=0;for(i in e)n=(n<<5)-n+e.charCodeAt(i),n|=0;return t.colors[Math.abs(n)%t.colors.length]}function r(e){function i(){if(i.enabled){var e=i,n=+new Date,r=n-(l||n);e.diff=r,e.prev=l,e.curr=n,l=n;for(var o=new Array(arguments.length),s=0;s<o.length;s++)o[s]=arguments[s];o[0]=t.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var a=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,function(i,n){if("%%"===i)return i;a++;var r=t.formatters[n];if("function"==typeof r){var s=o[a];i=r.call(e,s),o.splice(a,1),a--}return i}),t.formatArgs.call(e,o);(i.log||t.log||console.log.bind(console)).apply(e,o)}}return i.namespace=e,i.enabled=t.enabled(e),i.useColors=t.useColors(),i.color=n(e),"function"==typeof t.init&&t.init(i),i}function o(e){t.save(e),t.names=[],t.skips=[];for(var i=("string"==typeof e?e:"").split(/[\s,]+/),n=i.length,r=0;r<n;r++)i[r]&&(e=i[r].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function s(){t.enable("")}function a(e){var i,n;for(i=0,n=t.skips.length;i<n;i++)if(t.skips[i].test(e))return!1;for(i=0,n=t.names.length;i<n;i++)if(t.names[i].test(e))return!0;return!1}function c(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=r.debug=r.default=r,t.coerce=c,t.disable=s,t.enable=o,t.enabled=a,t.humanize=i("EarI"),t.names=[],t.skips=[],t.formatters={};var l}});