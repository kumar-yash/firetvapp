(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,o){"use strict";(function(e){o.d(t,"a",function(){return n});var n="https://d3v28xe0wivrcx.cloudfront.net/out/v1/dd25dfe136e141fb8c576c9f17f133cb/index.m3u8";e.browser}).call(this,o(22))},,,,,function(e,t,o){e.exports=o(26)},,,,,,function(e,t,o){},function(e,t,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"},function(e,t,o){},function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){e.exports=o.p+"static/media/l11.6c13ecdd.jpg"},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(11),c=o.n(r),i=(o(18),o(2)),l=o(3),s=o(6),u=o(4),d=o(5),p=(o(19),o(20),o(21),o(9)),m=o.n(p),f=o(7),v=function(e){m.a.isSupported()?function(e){var t=new m.a;t.loadSource(f.a),t.attachMedia(e),t.on(m.a.Events.MANIFEST_PARSED,function(){e.play()})}(e):e.canPlayType("application/vnd.apple.mpegurl")&&function(e){e.src=f.a,e.addEventListener("loadedmetadata",function(){e.play()})}(e)},y=o(8),h=(o(23),37),b=39,w=13,g=227,k=179,E=228,T=function(e){function t(e){var o;return Object(i.a)(this,t),(o=Object(s.a)(this,Object(u.a)(t).call(this,e))).playPauseVideo=function(){console.log(Object(y.a)(o),o.videoRef.current),o.videoRef.current.paused?(o.videoRef.current.play(),o.videoRef.current.innerHTML="Pause"):(o.videoRef.current.pause(),o.videoRef.current.innerHTML="Play")},o.increaseSeekBarByTenSeconds=function(){var e=o.videoRef.current,t=o.seekBarRef.current,n=e.duration*(t.value/100);e.currentTime=n+10},o.decreaseSeekBarByTenSeconds=function(){var e=o.videoRef.current,t=o.seekBarRef.current,n=e.duration*(t.value/100);e.currentTime=n-10},o.handleSeekbarChange=function(e){console.log(e);var t=o.videoRef.current,n=t.duration*(e.target.value/100);t.currentTime=n},o.handleVideoTimeUpdate=function(){var e=o.videoRef.current,t=o.seekBarRef.current,n=100/e.duration*e.currentTime;t.value=n},o.handleMouseDown=function(){o.videoRef.current.pause()},o.handleMouseUp=function(){o.videoRef.current.play()},o.videoRef=a.a.createRef(),o.seekBarRef=a.a.createRef(),o.playPauseVideo=o.playPauseVideo.bind(Object(y.a)(o)),o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(window.addEventListener("keyup",function(t){console.log(t),t.keyCode===w?e.playPauseVideo():t.keyCode===g?e.decreaseSeekBarByTenSeconds():t.keyCode===E?e.increaseSeekBarByTenSeconds():t.keyCode===h?e.decreaseSeekBarByTenSeconds():t.keyCode===b?e.increaseSeekBarByTenSeconds():t.keyCode===k&&e.playPauseVideo()}),this.props.live){var t=document.getElementById("liveVideo");v(t)}}},{key:"componentWillUnmount",value:function(){if(this.props.live){var e=document.getElementById("liveVideo");(t=e).addEventListener("loadedmetadata",function(){t.play()})}var t}},{key:"render",value:function(){return console.log(this.props),this.seekBarRef.current&&console.log(this.seekBarRef.current.value),a.a.createElement(a.a.Fragment,null,this.props.live?a.a.createElement("video",{onKeyUp:function(e){console.log(e)},onTimeUpdate:this.handleVideoTimeUpdate,style:{position:"absolute",top:"0",left:"0",width:"100%",zIndex:9},ref:this.videoRef,id:"liveVideo"}):a.a.createElement("video",{onKeyUp:function(e){console.log(e)},onTimeUpdate:this.handleVideoTimeUpdate,id:"custom_video",style:{position:"absolute",top:"0",left:"0",width:"100%",zIndex:9},ref:this.videoRef},a.a.createElement("source",{src:"https://d3v28xe0wivrcx.cloudfront.net/out/v1/dd25dfe136e141fb8c576c9f17f133cb/index.m3u8",type:"video/hls"})),a.a.createElement("div",{id:"vide_controls_bar",className:"video_controls"},a.a.createElement("button",{style:{width:"10vw",color:"white"},id:"playpausebtn",onClick:this.playPauseVideo},"Pause"),a.a.createElement("button",{style:{width:"90vw",padding:"1rem"}},a.a.createElement("input",{style:{width:"100%"},ref:this.seekBarRef,onChange:this.handleSeekbarChange,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,type:"range",id:"seek-bar",value:"0"}))))}}]),t}(a.a.Component),N=(o(24),o(1)),K=o.n(N),R=(o(25),function(e){function t(e){var o;return Object(i.a)(this,t),(o=Object(s.a)(this,Object(u.a)(t).call(this,e))).scrollCorrectly=function(e){var t=e.currentTarget.parentElement,o=e.target.offsetLeft;console.log(o),K()(t).animate({scrollLeft:o-100},300)},o.scrollToRight=function(e){var t=K()('div[Key="'.concat(o.props.Key,'"]')).scrollLeft();K()('div[Key="'.concat(o.props.Key,'"]')).animate({scrollLeft:t+380},300)},o.scrollToLeft=function(e){var t=K()('div[Key="'.concat(o.props.Key,'"]')).scrollLeft();console.log(t),K()('div[Key="'.concat(o.props.Key,'"]')).animate({scrollLeft:t-380},300)},o.scrollToDown=function(e){var t=K()('div[Key="'.concat(o.props.Key,'"]')).scrollTop();console.log(t,K()('div[Key="'.concat(o.props.Key,'"]'))),K()('div[Key="'.concat(o.props.Key,'"]')).animate({scrollTop:t+700},300)},o.scrollToUp=function(e){var t=K()('div[Key="'.concat(o.props.Key,'"]')).scrollTop();console.log(t,K()('div[Key="'.concat(o.props.Key,'"]'))),K()('div[Key="'.concat(o.props.Key,'"]')).animate({scrollTop:t-700},300)},o.handleButtonFocus=function(e,t){o.scrollCorrectly(e)},o.handleOnKeyUp=function(e,t){39===e.keyCode?o.scrollCorrectly(e):37===e.keyCode?o.scrollCorrectly(e):38===e.keyCode?o.scrollToUp(e):40===e.keyCode&&o.scrollToDown(e)},o.state={playVideo:!1,scrollRight:!1},o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"vwToPx",value:function(e){var t=window,o=document,n=o.documentElement,a=o.getElementsByTagName("body")[0],r=t.innerWidth||n.clientWidth||a.clientWidth;t.innerHeight||n.clientHeight||a.clientHeight;return r*e/100}},{key:"render",value:function(){var e=this,t=this.props,o=t.rowNumber,n=t.colNumber,r=(t.play,t.items),c=t.live,i=this.state.playVideo;return console.log(o,n,this.props.live),a.a.createElement("div",{className:"video_container_scroll",Key:this.props.Key,style:{display:"inline-flex",flexDirection:"row",maxWidth:"100vw",overflowX:"scroll",marginTop:"1rem"}},r.map(function(t){return a.a.createElement("button",{className:"button-image",onFocus:function(o){return e.handleButtonFocus(o,t)},onClick:function(t){e.setState({playVideo:!0,src:f.a})}},a.a.createElement("img",{className:"image-class",src:"https://res.cloudinary.com/www-curefit-com/image/upload/w_200,f_auto,ar_0.78,c_fit,q_auto:eco/dpr_2/image/diy/c515c0f3-e04f-47ee-8347-3165138e9aec.jpg",alt:"logo"}))}),i&&a.a.createElement(T,{live:c,src:f.a}))}}]),t}(a.a.Component)),B=function(e){function t(e){var o;return Object(i.a)(this,t),(o=Object(s.a)(this,Object(u.a)(t).call(this,e))).scrollToDown=function(){var e=K()(".App").scrollTop();console.log(e),K()(".App").animate({scrollTop:e+700},300)},o.scrollToUp=function(){var e=K()(".App").scrollTop(),t=K()(".App");console.log(e,"asdfasDF",t),K()(".App").animate({scrollTop:e-700},300)},o.handleOnKeyInput=function(e){"button-image"===e.target.className&&(38===e.keyCode?o.scrollToUp():40===e.keyCode&&o.scrollToDown())},o.state={rowNumber:0,colNumber:0,play:!1},o}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return console.log(this.state),a.a.createElement("div",{className:"App",onKeyDown:this.handleOnKeyInput},a.a.createElement("header",{style:{display:"flex"}},a.a.createElement("button",{className:"buttonn"},a.a.createElement("div",null,"Home")),a.a.createElement("button",{className:"buttonn"},a.a.createElement("div",null," Center"))),a.a.createElement("div",{className:"video-container"},a.a.createElement("span",null,"Live Videos"),a.a.createElement(R,{live:!0,Key:"one",rowNumber:this.state.rowNumber,colNumber:this.state.colNumber,play:this.state.play,items:[1,2,3,4,5]})),a.a.createElement("div",{className:"video-container"},a.a.createElement("span",null,"Watch Now"),a.a.createElement(R,{Key:"two",rowNumber:this.state.rowNumber,colNumber:this.state.colNumber,play:this.state.play,live:!0,items:[1,2,3,4,5]})),a.a.createElement("div",{className:"video-container"},a.a.createElement("span",null,"Watch Now"),a.a.createElement(R,{Key:"three",live:!1,rowNumber:this.state.rowNumber,colNumber:this.state.colNumber,play:this.state.play,items:[1,2,3,4,5,6,7]}))," ",a.a.createElement("div",{className:"video-container"},a.a.createElement("span",null,"Watch Now"),a.a.createElement(R,{Key:"four",live:!0,rowNumber:this.state.rowNumber,colNumber:this.state.colNumber,play:this.state.play,items:[1,2,3,4,5,6,7,8,9,10,11,12,13]})))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.9ddf75d0.chunk.js.map