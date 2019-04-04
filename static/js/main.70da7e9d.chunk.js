(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,a){t.exports=a(19)},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var s=a(0),i=a.n(s),n=a(10),l=a.n(n),c=a(2),h=a(3),o=a(6),r=a(4),u=a(5);a(18);function m(t){return i.a.createElement("a",{href:t.href,className:"navbar_btn"},t.label)}var d=i.a.createElement("div",{className:"navbar_buttons"},i.a.createElement(m,{label:"GitHub",href:"https://github.com/evanmags"}),i.a.createElement(m,{label:"Codepen",href:"https://codepen.io/emags112/"}),i.a.createElement(m,{label:"Portfolio"})),b=i.a.createElement("div",{className:"navbar_brand"},"Colors",i.a.createElement("i",{className:"fas fa-swatchbook brand_icon"})),k=function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar"},b,d)}}]),e}(s.Component),g=a(1),p=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(r.a)(e).call(this,t))).state={opacity:1,display:"flex"},a.handle_transition=a.handle_transition.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){setTimeout(function(){this.setState({opacity:0})}.bind(this),2e3)}},{key:"handle_transition",value:function(t){this.setState({display:"none"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"modal",style:{opacity:this.state.opacity,display:this.state.display},onTransitionEnd:this.handle_transition},i.a.createElement("h2",null,i.a.createElement("i",{className:"fas fa-mouse-pointer"})," Click to Generate a New Color Pallete"),i.a.createElement("h2",null,i.a.createElement("i",{className:"fas fa-sliders-h"})," Use the Sliders to Adjust Current Pallete"))}}]),e}(s.Component),f=a(11),v=a(8),j=a(7),C=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(r.a)(e).call(this,t))).state=Object(j.a)({},t),a.bgc=a.bgc.bind(Object(g.a)(Object(g.a)(a))),a.clamp=a.clamp.bind(Object(g.a)(Object(g.a)(a))),a.cap_hue=a.cap_hue.bind(Object(g.a)(Object(g.a)(a))),a.text_color=a.text_color.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(e,t),Object(h.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState(Object(j.a)({},t,{hue:this.cap_hue(t.hue),sat:this.clamp(0,t.sat,100),light:this.clamp(0,t.light,100)}))}},{key:"cap_hue",value:function(t){for(;t>360;)t-=360;for(;t<0;)t+=360;return t}},{key:"clamp",value:function(t,e,a){return Math.min(Math.max(t,e),a)}},{key:"bgc",value:function(){return"hsl( ".concat(this.state.hue,", ").concat(this.state.sat,"%, ").concat(this.state.light,"% )")}},{key:"text_color",value:function(){return this.state.light>50?"#333":"#f8f8f8"}},{key:"render",value:function(){return i.a.createElement("div",{className:"gradient_block",style:{background:this.bgc(),color:this.text_color()},onClick:this.state.onClick},this.state.h?"H: ".concat(this.state.hue,"deg"):this.state.s?"S: ".concat(this.state.sat,"%"):"L: ".concat(this.state.light,"%"))}}]),e}(s.Component),O=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(r.a)(e).call(this,t))).state={onClick:t.state.onClick,hue:t.state.hue,sat:t.state.sat,light:t.state.light},a}return Object(u.a)(e,t),Object(h.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState(Object(j.a)({},t.state))}},{key:"render",value:function(){return i.a.createElement("div",{className:"tint gradient"},i.a.createElement(C,{l:!0,light:this.state.light-25,hue:this.state.hue,sat:this.state.sat,onClick:this.state.onClick}),i.a.createElement(C,{l:!0,light:this.state.light-20,hue:this.state.hue,sat:this.state.sat,onClick:this.state.onClick}),i.a.createElement(C,{l:!0,light:this.state.light-15,hue:this.state.hue,sat:this.state.sat,onClick:this.state.onClick}),i.a.createElement(C,{l:!0,light:this.state.light-10,hue:this.state.hue,sat:this.state.sat,onClick:this.state.onClick}),i.a.createElement(C,{l:!0,light:this.state.light-5,hue:this.state.hue,sat:this.state.sat,onClick:this.state.onClick}),i.a.createElement(C,{l:!0,light:this.state.light,hue:this.state.hue,sat:this.state.sat,onClick:this.state.onClick}),i.a.createElement(C,{l:!0,light:this.state.light+5,hue:this.state.hue,sat:this.state.sat,onClick:this.state.onClick}),i.a.createElement(C,{l:!0,light:this.state.light+10,hue:this.state.hue,sat:this.state.sat,onClick:this.state.onClick}),i.a.createElement(C,{l:!0,light:this.state.light+15,hue:this.state.hue,sat:this.state.sat,onClick:this.state.onClick}),i.a.createElement(C,{l:!0,light:this.state.light+20,hue:this.state.hue,sat:this.state.sat,onClick:this.state.onClick}),i.a.createElement(C,{l:!0,light:this.state.light+25,hue:this.state.hue,sat:this.state.sat,onClick:this.state.onClick}))}}]),e}(s.Component),E=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(r.a)(e).call(this,t))).state={onClick:t.state.onClick,hue:t.state.hue,sat:t.state.sat,light:t.state.light},a}return Object(u.a)(e,t),Object(h.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState(Object(j.a)({},t.state))}},{key:"render",value:function(){return i.a.createElement("div",{className:"axial gradient"},i.a.createElement(C,{h:!0,hue:this.state.hue-25,sat:this.state.sat,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{h:!0,hue:this.state.hue-20,sat:this.state.sat,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{h:!0,hue:this.state.hue-15,sat:this.state.sat,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{h:!0,hue:this.state.hue-10,sat:this.state.sat,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{h:!0,hue:this.state.hue-5,sat:this.state.sat,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{h:!0,hue:this.state.hue,sat:this.state.sat,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{h:!0,hue:this.state.hue+5,sat:this.state.sat,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{h:!0,hue:this.state.hue+10,sat:this.state.sat,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{h:!0,hue:this.state.hue+15,sat:this.state.sat,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{h:!0,hue:this.state.hue+20,sat:this.state.sat,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{h:!0,hue:this.state.hue+25,sat:this.state.sat,light:this.state.light,onClick:this.state.onClick}))}}]),e}(s.Component),_=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(r.a)(e).call(this,t))).state={onClick:t.state.onClick,hue:t.state.hue,sat:t.state.sat,light:t.state.light},a}return Object(u.a)(e,t),Object(h.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState(Object(j.a)({},t.state))}},{key:"render",value:function(){return i.a.createElement("div",{className:"chroma gradient"},i.a.createElement(C,{s:!0,sat:this.state.sat-25,hue:this.state.hue,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{s:!0,sat:this.state.sat-20,hue:this.state.hue,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{s:!0,sat:this.state.sat-15,hue:this.state.hue,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{s:!0,sat:this.state.sat-10,hue:this.state.hue,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{s:!0,sat:this.state.sat-5,hue:this.state.hue,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{s:!0,sat:this.state.sat,hue:this.state.hue,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{s:!0,sat:this.state.sat+5,hue:this.state.hue,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{s:!0,sat:this.state.sat+10,hue:this.state.hue,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{s:!0,sat:this.state.sat+15,hue:this.state.hue,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{s:!0,sat:this.state.sat+20,hue:this.state.hue,light:this.state.light,onClick:this.state.onClick}),i.a.createElement(C,{s:!0,sat:this.state.sat+25,hue:this.state.hue,light:this.state.light,onClick:this.state.onClick}))}}]),e}(s.Component),y=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(r.a)(e).call(this,t))).state={onClick:t.onClick,hue:t.state.hue,sat:t.state.sat,light:t.state.light},a}return Object(u.a)(e,t),Object(h.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({onClick:t.onClick,hue:t.state.hue,sat:t.state.sat,light:t.state.light})}},{key:"render",value:function(){return i.a.createElement("div",{className:"gradientContainer"},i.a.createElement(E,{state:this.state}),i.a.createElement(_,{state:this.state}),i.a.createElement(O,{state:this.state}))}}]),e}(s.Component),S=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(r.a)(e).call(this,t))).state={id:a.props.id,content:a.props.content},a}return Object(u.a)(e,t),Object(h.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState(Object(j.a)({},t))}},{key:"render",value:function(){return i.a.createElement("div",{id:this.state.id,className:"colorBlock_btn",onClick:this.props.onClick},this.props.children)}}]),e}(s.Component),N=function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return i.a.createElement("label",{className:"slider",htmlFor:this.props.name},this.props.name,":",i.a.createElement("input",{defaultValue:this.props.default,onMouseDown:this.props.handlers[0],onMouseMove:this.props.handlers[1],onMouseUp:this.props.handlers[2],id:this.props.id,name:this.props.name,type:"range",min:"0",max:this.props.max||100,step:"1"}))}}]),e}(s.Component),w=function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"sliders_container"},i.a.createElement(N,{default:this.props.hue,handlers:this.props.handlers,name:"Hue",id:"hue",max:"360"}),i.a.createElement(N,{default:this.props.sat,handlers:this.props.handlers,name:"Saturation",id:"sat"}),i.a.createElement(N,{default:this.props.light,handlers:this.props.handlers,name:"Lightness",id:"light"}))}}]),e}(s.Component),M=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(r.a)(e).call(this,t))).state={hue:t.style.hue,sat:t.style.sat,light:t.style.light,id:t.id,locked:!1},a.create_HSL=a.create_HSL.bind(Object(g.a)(Object(g.a)(a))),a.handle_mousedown=a.handle_mousedown.bind(Object(g.a)(Object(g.a)(a))),a.handle_mousemove=a.handle_mousemove.bind(Object(g.a)(Object(g.a)(a))),a.handle_mouseup=a.handle_mouseup.bind(Object(g.a)(Object(g.a)(a))),a.handle_lock=a.handle_lock.bind(Object(g.a)(Object(g.a)(a))),a.set_color=a.set_color.bind(Object(g.a)(Object(g.a)(a))),a.show_gradient=a.show_gradient.bind(Object(g.a)(Object(g.a)(a))),a.handle_gradient_click=a.handle_gradient_click.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(e,t),Object(h.a)(e,[{key:"create_HSL",value:function(){return"hsl( ".concat(this.state.hue,", ").concat(this.state.sat,"%, ").concat(this.state.light,"% )")}},{key:"hsl_to_255",value:function(){var t=this.state.hue,e=this.state.sat/100,a=this.state.light/100,s=(1-Math.abs(2*a-1))*e,i=s*(1-Math.abs(t/60%2-1)),n=a-s/2,l=0,c=0,h=0;return 0<=t&&t<60?(l=s,c=i,h=0):60<=t&&t<120?(l=i,c=s,h=0):120<=t&&t<180?(l=0,c=s,h=i):180<=t&&t<240?(l=0,c=i,h=s):240<=t&&t<300?(l=i,c=0,h=s):300<=t&&t<360&&(l=s,c=0,h=i),{r:l=Math.round(255*(l+n)),g:c=Math.round(255*(c+n)),b:h=Math.round(255*(h+n))}}},{key:"create_RGB",value:function(){var t=this.hsl_to_255();return"rgb( "+t.r+", "+t.g+", "+t.b+" )"}},{key:"create_HEX",value:function(){var t=this.hsl_to_255();return"#"+t.r.toString(16).padStart(2,"0")+t.g.toString(16).padStart(2,"0")+t.b.toString(16).padStart(2,"0")}},{key:"set_color",value:function(){return this.state.light<50?"#f8f8f8":"#333"}},{key:"componentWillReceiveProps",value:function(t){this.state.locked||this.setState(Object(j.a)({},t.style,{color:this.set_color()}))}},{key:"componentDidMount",value:function(){this.setState({color:this.set_color()})}},{key:"handle_mousedown",value:function(t){t.nativeEvent.stopImmediatePropagation(),this.setState({mutable:!0})}},{key:"handle_mousemove",value:function(t){var e;(t.nativeEvent.stopImmediatePropagation(),this.state.mutable)&&this.setState((e={},Object(v.a)(e,t.target.id,parseFloat(t.target.value)),Object(v.a)(e,"color",this.set_color()),e))}},{key:"handle_mouseup",value:function(t){t.nativeEvent.stopImmediatePropagation(),this.setState({mutable:!1}),console.log(this.state.mutable)}},{key:"handle_lock",value:function(t){return t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),this.setState({locked:!this.state.locked}),!1}},{key:"show_gradient",value:function(){document.getElementById(this.state.id).querySelector(".gradientContainer").classList.toggle("gradientContainer--open")}},{key:"handle_gradient_click",value:function(t){var e=t.target.style.background.split(" ").map(function(t){return parseInt(t.replace(/rgb\(|,|\)/g,""))}),a=Object(f.a)(e,3),s=a[0],i=a[1],n=a[2];s/=255,i/=255,n/=255;var l=Math.min(s,i,n),c=Math.max(s,i,n),h=c-l,o=0,r=0,u=0;o=0===h?0:c===s?(i-n)/h%6:c===i?(n-s)/h+2:(s-i)/h+4,(o=Math.round(60*o))<0&&(o+=360),u=(c+l)/2,r=+(100*(r=0===h?0:h/(1-Math.abs(2*u-1)))).toFixed(0),u=+(100*u).toFixed(0),this.setState({hue:o,sat:r,light:u})}},{key:"render",value:function(){return i.a.createElement("div",{id:this.state.id,className:"colorBlock",style:{background:this.create_HSL(),color:this.set_color()}},i.a.createElement(y,{state:this.state,onClick:this.handle_gradient_click}),i.a.createElement("div",{className:"colorBlock_head"},i.a.createElement("p",{className:"head_title"},this.create_HSL()),i.a.createElement("p",{className:"head_title"},this.create_RGB()),i.a.createElement("p",{className:"head_title"},this.create_HEX())),i.a.createElement("div",{className:"controls"},i.a.createElement(w,{defaults:this.state,handlers:[this.handle_mousedown,this.handle_mousemove,this.handle_mouseup]}),i.a.createElement("div",{className:"row"},i.a.createElement(S,{id:"lock",onClick:this.handle_lock},this.state.locked?i.a.createElement("span",null,i.a.createElement("i",{className:"fas fa-lock"})," Unlock"):i.a.createElement("span",null,i.a.createElement("i",{className:"fas fa-lock-open"})," Lock")),i.a.createElement(S,{id:"convert",onClick:this.show_gradient},"Gradients"))))}}]),e}(s.Component),P=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(o.a)(this,Object(r.a)(e).call(this,t))).state={color1:{},color2:{},color3:{},color4:{}},a.handle_click=a.handle_click.bind(Object(g.a)(Object(g.a)(a))),a.create_color=a.create_color.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(e,t),Object(h.a)(e,[{key:"gen_random",value:function(t,e){return Math.floor(Math.random()*(e-t))+t}},{key:"cap_hue",value:function(t){for(;t>360;)t-=360;for(;t<0;)t+=360;return t}},{key:"create_color",value:function(){var t=this.gen_random(0,361),e=this.gen_random(20,101),a=this.gen_random(20,80);this.setState({color1:{hue:this.cap_hue(t-45),sat:e,light:a},color2:{hue:this.cap_hue(t-15),sat:e,light:a},color3:{hue:this.cap_hue(t+15),sat:e,light:a},color4:{hue:this.cap_hue(t+45),sat:e,light:a}})}},{key:"handle_click",value:function(t){Array.from(document.querySelectorAll(".colorBlock")).includes(t.target)&&this.create_color()}},{key:"componentDidMount",value:function(){return this.create_color()}},{key:"render",value:function(){return i.a.createElement("div",{className:"container",onClick:this.handle_click},i.a.createElement(M,{id:"cb1",style:this.state.color1}),i.a.createElement(M,{id:"cb2",style:this.state.color2}),i.a.createElement(M,{id:"cb3",style:this.state.color3}),i.a.createElement(M,{id:"cb4",style:this.state.color4}))}}]),e}(s.Component),x=function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(k,null),i.a.createElement(p,null),i.a.createElement(P,null))}}]),e}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.70da7e9d.chunk.js.map