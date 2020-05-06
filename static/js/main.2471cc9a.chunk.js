(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(7),l=o.n(r),c=(o(13),o(1)),s=o(2),i=o(4),u=o(3),m=(o(14),function(e){Object(i.a)(o,e);var t=Object(u.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={color:""},a}return Object(s.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:"color","data-color":this.state.color,"data-index":this.props.index},n.a.createElement("div",{onClick:this.props.copyColor,className:"color-img",title:"Click to copy me!",style:{background:this.state.color}}),n.a.createElement("button",{type:"button",onClick:this.props.changeColor,className:"change-btn"},"CHANGE"))}}],[{key:"getDerivedStateFromProps",value:function(e){return{color:e.color}}}]),o}(n.a.Component)),h=function(e){Object(i.a)(o,e);var t=Object(u.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={showModal:!1},a}return Object(s.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:this.state.showModal?"modal active":"modal",style:{backgroundColor:this.props.modalColor}},n.a.createElement("p",null,"Copied...."))}}],[{key:"getDerivedStateFromProps",value:function(e){return{showModal:e.showModal}}}]),o}(n.a.Component),d=o(5),p=o.n(d),v=function(e){Object(i.a)(o,e);var t=Object(u.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={selectedValue:""},a}return Object(s.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:"select-container"},n.a.createElement("label",{htmlFor:""},"Number of colors: "),n.a.createElement("select",{className:"select-list",id:"select-list",onChange:this.props.selectColorNumber,defaultValue:5},n.a.createElement("option",{value:"5"},"5"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"1"},"1")))}}]),o}(n.a.Component),f=function(e){Object(i.a)(o,e);var t=Object(u.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={},a}return Object(s.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:"select-container"},n.a.createElement("label",{htmlFor:""},"Luminosity"),n.a.createElement("select",{onChange:this.props.handleLuminosity,className:"select-list",defaultValue:"Random"},n.a.createElement("option",{value:"Random"},"Random"),n.a.createElement("option",{value:"Light"},"Light"),n.a.createElement("option",{value:"Dark"},"Dark")))}}]),o}(n.a.Component),C=function(e){Object(i.a)(o,e);var t=Object(u.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={},a}return Object(s.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:"select-container"},n.a.createElement("label",{htmlFor:""},"Type"),n.a.createElement("select",{onChange:this.props.handleColorFormat,className:"select-list",defaultValue:"HEX"},n.a.createElement("option",{value:"HEX"},"HEX"),n.a.createElement("option",{value:"RGB"},"RGB"),n.a.createElement("option",{value:"HSL"},"HSL")))}}]),o}(n.a.Component),g=function(e){Object(i.a)(o,e);var t=Object(u.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={},a}return Object(s.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:"config"},n.a.createElement(v,{selectColorNumber:this.props.selectColorNumber}),n.a.createElement(f,{handleLuminosity:this.props.handleLuminosity}),n.a.createElement(C,{handleColorFormat:this.props.handleColorFormat}))}}]),o}(n.a.Component),b=function(e){Object(i.a)(o,e);var t=Object(u.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).changeAllColors=function(){for(var e=a.state.colors,t=0;t<a.state.colorLength;t++)e[t]=p()(a.state.colorConfig);a.setState({colors:e})},a.handleLuminosity=function(e){var t=e.target.options[e.target.selectedIndex].value,o=a.state.colorConfig;o.luminosity=t,a.setState({colorConfig:o}),a.changeAllColors()},a.handleColorFormat=function(e){var t=a.state.colorConfig,o=e.target.options[e.target.selectedIndex].value;t.format=o.toLowerCase(),a.setState({colorConfig:t}),a.changeAllColors()},a.changeColorLuminosity=function(e){},a.changeColor=function(e){var t=e.target.parentElement.getAttribute("data-index"),o=a.state.colors;o[t]=p()(a.state.colorConfig),a.setState({colors:o})},a.copyColor=function(e){var t=e.target.parentElement.getAttribute("data-color");navigator.clipboard.writeText(t),a.showModal(t)},a.showModal=function(e){a.setState({showModal:!a.state.showModal,modalColor:e}),setTimeout((function(){a.setState({showModal:!a.state.showModal})}),2e3)},a.selectColorNumber=function(e){var t=e.target.options[e.target.selectedIndex].value,o=a.state.colors;if(a.state.colors.length<t)for(;o.length!==+t;)o.push(p()());else o.splice(t);a.setState({colorLength:t,colors:o}),console.log(o)},a.state={colorConfig:{luminosity:"random",hue:"random",format:"hex",alpha:1},colorLength:5,colors:[],showModal:!1,modalColor:""},a}return Object(s.a)(o,[{key:"componentDidMount",value:function(){this.changeAllColors()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,n.a.createElement("span",{role:"img","aria-label":"emoji"},"\u26cf"," "),"UI Color Picker"),n.a.createElement(g,{selectColorNumber:this.selectColorNumber,handleLuminosity:this.handleLuminosity,handleColorFormat:this.handleColorFormat}),n.a.createElement("div",{className:"color-container"},this.state.colors.map((function(t,o){return n.a.createElement(m,{copyColor:e.copyColor,index:o,color:t,key:p()().slice(1),changeColor:e.changeColor})}))),n.a.createElement(h,{showModal:this.state.showModal,modalColor:this.state.modalColor}))}}]),o}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,o){e.exports=o(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.2471cc9a.chunk.js.map