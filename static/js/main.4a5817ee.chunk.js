(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(4),c=n.n(i),r=(n(16),n(5)),l=n(6),s=n(8),d=n(7),u=n(9),m=n(2),p=n.n(m),v=(n(17),n(1)),h=n.n(v),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("video");if(h.a.isSupported()){var t=new h.a;t.loadSource("https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8"),t.attachMedia(e),t.on(h.a.Events.MANIFEST_PARSED,function(){e.play()})}else e.canPlayType("application/vnd.apple.mpegurl")&&(e.src="https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8",e.addEventListener("loadedmetadata",function(){e.play()}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"})),o.a.createElement("div",null,o.a.createElement("input",{type:"text"})),o.a.createElement("div",null,"Live Videos"),o.a.createElement("div",null,o.a.createElement("video",{controls:!0,id:"video"})),o.a.createElement("div",null,[1,2,3].map(function(e){return o.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"})})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},2:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.4a5817ee.chunk.js.map