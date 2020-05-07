(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(7),r=a.n(l),c=(a(14),a(8)),i=a(1),s=a(2),m=a(4),u=a(3),d=(a(15),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).state={color:""},o}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"color"},n.a.createElement("div",{onClick:this.props.copyColor,className:"color-img",title:"Click to copy me!",style:{background:this.state.color}}),n.a.createElement("input",{type:"hidden",value:this.state.color}),n.a.createElement("button",{type:"button",onClick:this.props.changeColor,className:"change-btn"},"CHANGE"))}}],[{key:"getDerivedStateFromProps",value:function(e){return{color:e.color}}}]),a}(n.a.Component));var h=function(e){return n.a.createElement("div",{className:e.modal.showModal?"modal active":"modal",style:{backgroundColor:e.modal.modalColor}},n.a.createElement("p",null,"Copied...."))},g=a(5),v=a.n(g);var p=function(e){return n.a.createElement("div",{className:"select-container"},n.a.createElement("label",null,"Number of colors: "),n.a.createElement("select",{className:"select-list",id:"select-list",onChange:e.handleColorLength,defaultValue:10},n.a.createElement("option",{value:"10"},"10"),n.a.createElement("option",{value:"9"},"9"),n.a.createElement("option",{value:"8"},"8"),n.a.createElement("option",{value:"7"},"7"),n.a.createElement("option",{value:"6"},"6"),n.a.createElement("option",{value:"5"},"5"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"1"},"1")))};var E=function(e){return n.a.createElement("div",{className:"select-container"},n.a.createElement("label",null,"Luminosity"),n.a.createElement("select",{onChange:e.handleLuminosity,className:"select-list",defaultValue:"Random"},n.a.createElement("option",{value:"Random"},"Random"),n.a.createElement("option",{value:"Light"},"Light"),n.a.createElement("option",{value:"Dark"},"Dark")))};var C=function(e){return n.a.createElement("div",{className:"select-container"},n.a.createElement("label",null,"Type"),n.a.createElement("select",{onChange:e.handleColorFormat,className:"select-list",defaultValue:"HEX"},n.a.createElement("option",{value:"HEX"},"HEX"),n.a.createElement("option",{value:"RGB"},"RGB"),n.a.createElement("option",{value:"HSL"},"HSL")))};var f=function(e){return n.a.createElement("div",{className:"select-container"},n.a.createElement("label",null,"Hue"),n.a.createElement("select",{onChange:e.handleHue,className:"select-list",defaultValue:"Random"},n.a.createElement("option",{value:"Random"},"Random"),n.a.createElement("option",{value:"Red"},"Red"),n.a.createElement("option",{value:"Orange"},"Orange"),n.a.createElement("option",{value:"Blue"},"Blue"),n.a.createElement("option",{value:"Yellow"},"Yellow"),n.a.createElement("option",{value:"Green"},"Green"),n.a.createElement("option",{value:"Purple"},"Purple"),n.a.createElement("option",{value:"Pink"},"Pink")))};var y=function(e){return n.a.createElement("div",{className:"config"},n.a.createElement(p,{handleColorLength:e.handleColorLength}),n.a.createElement(E,{handleLuminosity:e.handleLuminosity}),n.a.createElement(C,{handleColorFormat:e.handleColorFormat}),n.a.createElement(f,{handleHue:e.handleHue}))},b=a(19),L=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).changeAllColors=function(){for(var e=o.state.colorConfig,t=0;t<o.state.colorConfig.colorLength;t++)e.colors[t]=v()(o.state.colorConfig);o.setState({colorConfig:e})},o.changeColor=function(e){var t=Object(c.a)(e.target.parentElement.parentElement.children).indexOf(e.target.parentElement),a=o.state.colorConfig;a.colors[t]=v()(o.state.colorConfig),o.setState({colorConfig:a})},o.copyColor=function(e){var t=e.target.nextElementSibling.value;navigator.clipboard.writeText(t),o.showModal(t)},o.showModal=function(e){var t=o.state.modal;t.showModal=!t.showModal,t.modalColor=e,o.setState({modal:t}),setTimeout((function(){t.showModal=!t.showModal,o.setState({modal:t})}),2e3)},o.handleColorLength=function(e){var t=e.target.options[e.target.selectedIndex].value,a=o.state.colorConfig;if(o.state.colorConfig.colors.length<t)for(;a.colors.length!==+t;)a.colors.push(v()());else a.colors.splice(t);a.colorLength=a.colors.length,o.setState({colorConfig:a})},o.handleLuminosity=function(e){var t=e.target.options[e.target.selectedIndex].value,a=o.state.colorConfig;a.luminosity=t,o.setState({colorConfig:a}),o.changeAllColors()},o.handleColorFormat=function(e){var t=o.state.colorConfig,a=e.target.options[e.target.selectedIndex].value;t.format=a.toLowerCase(),o.setState({colorConfig:t}),o.changeAllColors()},o.handleHue=function(e){var t=e.target.options[e.target.selectedIndex].value.toLowerCase(),a=o.state.colorConfig;a.hue=t,o.setState({colorConfig:a}),o.changeAllColors()},o.state={colorConfig:{luminosity:"random",hue:"random",format:"hex",colorLength:10,colors:[]},modal:{showModal:!1,modalColor:""}},o}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.changeAllColors()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,n.a.createElement("span",{role:"img","aria-label":"emoji"},"\u26cf"),"UI Color Picker"),n.a.createElement(y,{handleColorLength:this.handleColorLength,handleLuminosity:this.handleLuminosity,handleColorFormat:this.handleColorFormat,handleHue:this.handleHue}),n.a.createElement("div",{className:"color-container"},this.state.colorConfig.colors.map((function(t,a){return n.a.createElement(d,{copyColor:e.copyColor,color:t,key:Object(b.a)(),changeColor:e.changeColor})}))),n.a.createElement(h,{modal:this.state.modal}))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.349a227c.chunk.js.map