(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),i=n("Bl7J"),r=n("vrFN"),l=(n("f3/d"),n("ExVU")),m=n("u4ys"),c=n.n(m);var s=function(e){return o.a.createElement("section",{className:c.a.mainTimeGroup},e.location,":",o.a.createElement("div",{className:c.a.timeNow},e.timeNow.setZone(e.timeZone).toFormat("H':'mm':'ss")),o.a.createElement("div",{className:c.a.dateNow},e.timeNow.setZone(e.timeZone).toFormat("ccc d LLL y")),o.a.createElement("div",{className:c.a.namedOffsetNow},e.timeNow.setZone(e.timeZone).toFormat("ZZZZZ")))},d=n("c2Z6"),u=n.n(d);var Z=function(e){var t,n,a,i;return o.a.createElement("section",{className:u.a.timeGroup},e.location,":",o.a.createElement("div",{className:u.a.time},e.timeNow.setZone(e.timeZone).toFormat("H':'mm':'ss")),o.a.createElement("div",{className:u.a.dayDiffMessage},(t=e.timeNow.setZone(e.originTimeZone),n=e.timeNow.setZone(e.timeZone),a=t.toObject().day,0===(i=n.toObject().day-a)?"":-1===i?"(Previous Day)":1===i?"(Next Day)":void 0)),o.a.createElement("div",{className:u.a.date},e.timeNow.setZone(e.timeZone).toFormat("ccc d LLL y")),o.a.createElement("div",{className:u.a.namedOffset},e.timeNow.setZone(e.timeZone).toFormat("ZZZZZ")),o.a.createElement("div",null,o.a.createElement("button",{className:u.a.deleteButton,onClick:function(){e.deleteButton(e.index)}},"Delete")))},h=n("exZ6"),p=n.n(h),T=n("eq9U");function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var N=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).role=t.role,n.handleMainTextInput=n.handleMainTextInput.bind(v(n)),n.handleMainSelectChange=n.handleMainSelectChange.bind(v(n)),n.handleAddTextInput=n.handleAddTextInput.bind(v(n)),n.resetButtonClick=n.resetButtonClick.bind(v(n)),n.addButtonClick=n.addButtonClick.bind(v(n)),n.state={selectOptions:T.a,addSelectOptions:T.a,selectedMainTimezone:n.props.timeZone,selectedAddTimezone:n.props.timeZone},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.handleMainSelectChange=function(e){var t=e.target.value;this.props.selectMainTimeZone(t),this.setState({selectedMainTimezone:t})},i.addButtonClick=function(){var e=document.querySelector(".addTimeZoneSelect");this.props.addButtonClick(e.value)},i.resetButtonClick=function(){var e=document.querySelector(".mainTimeZoneInput"),t=document.querySelector(".addTimeZoneInput");e.value="",t.value="",this.setState({selectOptions:T.a,addSelectOptions:T.a,selectedMainTimezone:l.DateTime.local().zone.name,selectedAddTimezone:l.DateTime.local().zone.name}),this.props.resetAllButtonClick()},i.handleMainTextInput=function(e){var t=[];T.a.forEach((function(n,a){var o=n.TZ.toLowerCase().trim(),i=e.target.value.toLowerCase().trim();-1!==o.indexOf(i)&&t.push(n)})),0===t.length&&(t=T.a);var n=t[0].TZ;this.props.selectMainTimeZone(n),this.setState({selectOptions:t,selectedMainTimezone:n})},i.handleAddTextInput=function(e){var t=[];T.a.forEach((function(n,a){var o=n.TZ.toLowerCase().trim(),i=e.target.value.toLowerCase().trim();-1!==o.indexOf(i)&&t.push(n)})),0===t.length&&(t=T.a);var n=t[0].TZ;this.setState({addSelectOptions:t,selectedAddTimezone:n})},i.render=function(){var e,t,n=this.state.selectOptions.map((function(e){return o.a.createElement("option",{key:e.TZ},e.TZ)})),a=this.state.addSelectOptions.map((function(e){return o.a.createElement("option",{key:e.TZ},e.TZ)}));return"Add Card"===this.role&&(e=o.a.createElement("div",null,o.a.createElement("div",{className:p.a.inputContainer},o.a.createElement("input",{className:"addTimeZoneInput",onChange:this.handleAddTextInput})),o.a.createElement("select",{value:this.state.selectedMainTimezone,name:"addTimezones",className:"addTimeZoneSelect"},a)),t=o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("button",{className:p.a.deleteButton,onClick:this.addButtonClick},"Add")))),"Main"===this.role&&(e=o.a.createElement("div",null,o.a.createElement("div",{className:p.a.inputContainer},o.a.createElement("input",{className:"mainTimeZoneInput",onChange:this.handleMainTextInput})),o.a.createElement("select",{value:this.state.selectedMainTimezone,onChange:this.handleMainSelectChange,name:"timezones",className:"mainTimeZoneSelect"},n)),t=o.a.createElement("div",null,o.a.createElement("button",{className:p.a.deleteButton,onClick:this.resetButtonClick},"Reset All"))),o.a.createElement("section",{className:p.a.mainContainer},e,t)},a}(a.Component),f=n("Y8fv"),g=n.n(f),w=[{location:"Boston",timeZone:"America/New_York"},{location:"New York",timeZone:"America/New_York"},{location:"Freiburg",timeZone:"Europe/Berlin"},{location:"Los Angeles",timeZone:"America/Los_Angeles"},{location:"Mumbai",timeZone:"Asia/Kolkata"},{location:"London",timeZone:"Europe/London"},{location:"Sydney",timeZone:"Australia/Sydney"},{location:"Shanghai",timeZone:"Asia/Shanghai"}];function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E,y,C={location:"Local Time",timeZone:l.DateTime.local().zone.name},O="undefined"!=typeof window&&window;O&&((E=JSON.parse(O.localStorage.getItem("timeRightNow-cardZones")))||(O.localStorage.setItem("timeRightNow-cardZones",JSON.stringify(w)),E=w)),O&&((y=JSON.parse(O.localStorage.getItem("timeRightNow-mainZone")))||(O.localStorage.setItem("timeRightNow-mainZone",JSON.stringify(C)),y=C));var I=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).timeNowFormat="H':'mm':'ss",n.dateNowFormat="ccc d LLL y",n.namedOffsetFormat="ZZZZZ",n.narrowOffsetFormat="Z",n.resetAll=n.resetAll.bind(S(n)),n.changeMainTimeZone=n.changeMainTimeZone.bind(S(n)),n.addTimeZone=n.addTimeZone.bind(S(n)),n.removeTimeZone=n.removeTimeZone.bind(S(n)),O&&(n.state={timeNow:l.DateTime.local().setZone(y.timeZone),mainTimeZone:y,cardZones:E}),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)},i.componentWillUnmount=function(){clearInterval(this.timerID)},i.tick=function(){this.setState({timeNow:l.DateTime.local().setZone(y.timeZone)})},i.resetAll=function(){var e={location:"Local Time",timeZone:l.DateTime.local().zone.name};O.localStorage.setItem("timeRightNow-mainZone",JSON.stringify(e)),O.localStorage.setItem("timeRightNow-cardZones",JSON.stringify(w)),this.setState({mainTimeZone:e,cardZones:w})},i.changeMainTimeZone=function(e){var t={location:e,timeZone:e};O.localStorage.setItem("timeRightNow-mainZone",JSON.stringify(t)),this.setState({mainTimeZone:t})},i.addTimeZone=function(e){var t={location:e,timeZone:e},n=JSON.parse(O.localStorage.getItem("timeRightNow-cardZones")).concat([t]);O.localStorage.setItem("timeRightNow-cardZones",JSON.stringify(n)),this.setState({cardZones:n})},i.removeTimeZone=function(e){var t=JSON.parse(O.localStorage.getItem("timeRightNow-cardZones")).filter((function(t,n){if(n!==e)return t}));O.localStorage.setItem("timeRightNow-cardZones",JSON.stringify(t)),this.setState({cardZones:t})},i.render=function(){var e=this;if(O)this.state.cardZones.map((function(t,n){return o.a.createElement(Z,{key:n,index:n,location:t.location,timeZone:t.timeZone,timeNow:e.state.timeNow,originTimeZone:e.state.mainTimeZone.timeZone,deleteButton:e.removeTimeZone})}));return o.a.createElement("div",null,o.a.createElement("div",{className:g.a.mainTimeContainer},o.a.createElement(s,{location:this.state.mainTimeZone.location,timeZone:this.state.mainTimeZone.timeZone,timeNow:this.state.timeNow}),o.a.createElement(N,{role:"Main",timeZone:this.state.mainTimeZone.timeZone,resetAllButtonClick:this.resetAll,selectMainTimeZone:this.changeMainTimeZone})),o.a.createElement("div",{className:g.a.TimeContainer},cards,o.a.createElement(N,{role:"Add Card",addButtonClick:this.addTimeZone})))},a}(a.Component);t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(r.a,{title:"Home"}),o.a.createElement(I,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-340660b3c5acf18498d7.js.map