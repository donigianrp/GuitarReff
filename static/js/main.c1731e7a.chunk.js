(this.webpackJsonpguitarreff=this.webpackJsonpguitarreff||[]).push([[0],{19:function(e,n,t){e.exports=t(33)},24:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),l=(t(24),t(1)),i=t(2),u=t(3);function d(){var e=Object(l.a)(["\n  width: 10px;\n  height: 10px;\n  background-color: #daa520;\n  border-radius: 30px;\n  position: absolute;\n  top: 196px;\n  left: 22.5px;\n"]);return d=function(){return e},e}function f(){var e=Object(l.a)(["\n  width: 10px;\n  height: 10px;\n  background-color: #daa520;\n  border-radius: 30px;\n  position: absolute;\n  top: 94px;\n  left: 22.5px;\n"]);return f=function(){return e},e}function s(){var e=Object(l.a)(["\n  width: 10px;\n  height: 10px;\n  background-color: #daa520;\n  border-radius: 30px;\n"]);return s=function(){return e},e}function p(){var e=Object(l.a)(["\n  position: absolute;\n  top: 145px;\n  left: 22.5px;\n"]);return p=function(){return e},e}function b(){var e=Object(l.a)(["\n  width: 100%;\n"]);return b=function(){return e},e}var m=i.a.div(b()),h=i.a.div(p()),x=i.a.div(s()),g=i.a.div(f()),v=i.a.div(d()),E=function(e){var n=e.boardMarkers;return a.a.createElement(m,null,2===n&&a.a.createElement("div",null,a.a.createElement(g,null),a.a.createElement(v,null)),1===n&&a.a.createElement(h,null,a.a.createElement(x,null)))};function j(){var e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  height: 300px;\n  width: 3px;\n  background: #ccc;\n"]);return j=function(){return e},e}var O=i.a.div(j()),y=function(e){return a.a.createElement(O,null)};function S(){var e=Object(l.a)(["\n  background-color: #ccc;\n  width: 25px;\n  height: 25px;\n  color: #333;\n  border-radius: 25px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 15px;\n  top: -12.5px;\n  font-weight: 600;\n"]);return S=function(){return e},e}function w(){var e=Object(l.a)(["\n  height: 2px;\n  width: 55px;\n  background-color: #ccc;\n  position: relative;\n"]);return w=function(){return e},e}function M(){var e=Object(l.a)(["\n  width: 100%;\n  height: 300px;\n  border-bottom: 2px solid #ccc;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]);return M=function(){return e},e}var k=i.a.div(M()),N=i.a.div(w()),C=i.a.div(S()),L=function(e){for(var n=e.fretPosition,t=Object(u.c)((function(e){return e.fretboard})).boardDisplay,r=[],o=5;o>=0;o--)r.push(t[o][n]);return a.a.createElement(k,null,r.map((function(e,n){return a.a.createElement(N,{key:n},e.isSelected&&a.a.createElement(C,null,e.note))})))};function A(){var e=Object(l.a)(["\n  height: 304px;\n  width: 3px;\n  background: #ccc;\n  margin-top: 37px;\n"]);return A=function(){return e},e}function D(){var e=Object(l.a)(["\n  position: relative;\n  border-top: 2px solid #ccc;\n"]);return D=function(){return e},e}function T(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  margin-bottom: 10px;\n"]);return T=function(){return e},e}function _(){var e=Object(l.a)(["\n  display: flex;\n"]);return _=function(){return e},e}var P=i.a.div(_()),R=i.a.div(T()),z=i.a.div(D()),B=i.a.div(A()),I=function(e){var n=e.fretPosition,t=e.markerAmount,r=Object(u.c)((function(e){return e.fretboard})).boardDisplay;return a.a.createElement(P,null,a.a.createElement("div",null,a.a.createElement(R,null,n),a.a.createElement(z,null,a.a.createElement(L,{fretboard:r,fretPosition:n}),a.a.createElement(E,{boardMarkers:t}),a.a.createElement(y,null))),22===n&&a.a.createElement(B,null))};function F(){var e=Object(l.a)(["\n  width: 100%;\n  border-left: none;\n  display: flex;\n"]);return F=function(){return e},e}var G=i.a.div(F()),U=function(e){var n=function(){for(var e=[],n=0;n<=22;n++)[3,5,7,9,15,17,19,21].includes(n)?e.push(a.a.createElement(I,{key:n,fretPosition:n,markerAmount:1})):12===n?e.push(a.a.createElement(I,{key:n,fretPosition:n,markerAmount:2})):e.push(a.a.createElement(I,{key:n,fretPosition:n,markerAmount:0}));return e}();return a.a.createElement("div",null,a.a.createElement(G,null,n))};function J(){var e=Object(l.a)(["\n  min-width: 1200px;\n  display: flex;\n  justify-content: center;\n"]);return J=function(){return e},e}var W=i.a.div(J()),V=function(e){return a.a.createElement(W,null,a.a.createElement(U,null))},X=t(6);function Y(){var e=Object(l.a)(["\n  background-color: #fff;\n  height: 10px;\n  width: 10px;\n  border-radius: 5px;\n  background: transparent;\n"]);return Y=function(){return e},e}function $(){var e=Object(l.a)(["\n  position: absolute;\n  bottom: 0px;\n  left: 58px;\n  background: radial-gradient(#fff 2%, #444);\n  height: 60px;\n  width: 60px;\n  border-radius: 30px;\n  cursor: grab;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n"]);return $=function(){return e},e}function q(){var e=Object(l.a)(["\n  height: 176px;\n  width: 176px;\n  border-radius: 88px;\n  background: transparent;\n  position: relative;\n  transform: rotate(","deg);\n"]);return q=function(){return e},e}var H=i.a.div.attrs((function(e){return{angle:e.angle||0}}))(q(),(function(e){return e.angle})),K=i.a.div($()),Q=i.a.div(Y()),Z=function(e){var n=e.center,t=e.setSelected,o=e.angle,c=e.setAngle,l=e.disabled,i=Object(r.useState)(!1),u=Object(X.a)(i,2),d=u[0],f=u[1],s=function(e){if(e.stopPropagation(),d&&!l){var t=function(e,n,t){var r=e-t.x,a=n-t.y,o=Math.floor(180*Math.atan(a/r)/Math.PI);return o+=r<0&&a>=0||r<0&&a<0?90:270}(e.pageX,e.pageY,n);o!==t&&c(t)}};return a.a.createElement(H,{angle:o,onMouseDown:function(e){f(!0)},onMouseUp:function(e){f(!1)},onMouseEnter:function(){t(!0)},onMouseLeave:function(){f(!1),t(!1)},onMouseMove:function(e){return s(e)}},a.a.createElement(K,null,a.a.createElement(Q,null)))},ee=[{note:"A",isSelected:!1,highlight:[]},{note:"A#",isSelected:!1,highlight:[]},{note:"B",isSelected:!1,highlight:[]},{note:"C",isSelected:!1,highlight:[]},{note:"C#",isSelected:!1,highlight:[]},{note:"D",isSelected:!1,highlight:[]},{note:"D#",isSelected:!1,highlight:[]},{note:"E",isSelected:!1,highlight:[]},{note:"F",isSelected:!1,highlight:[]},{note:"F#",isSelected:!1,highlight:[]},{note:"G",isSelected:!1,highlight:[]},{note:"G#",isSelected:!1,highlight:[]}],ne={"Natural Major":[0,2,4,5,7,9,11],"Natural Minor":[0,2,3,5,7,8,10],"Major Pentatonic":[0,2,4,7,9],"Minor Pentatonic":[0,3,5,7,10],"Major Blues":[0,2,3,4,7,9],"Minor Blues":[0,3,5,6,7,10]},te={Ionian:0,Dorian:1,Phrygian:2,Lydian:3,Mixolydian:4,Aeolian:5,Locrian:6},re=[{note:"E",isSelected:!1,highlight:[]},{note:"A",isSelected:!1,highlight:[]},{note:"D",isSelected:!1,highlight:[]},{note:"G",isSelected:!1,highlight:[]},{note:"B",isSelected:!1,highlight:[]},{note:"E",isSelected:!1,highlight:[]}],ae=t(7),oe=(t(32),function(e){return function(e){return function(n){return e(n)}}}),ce=t(4),le=t(5),ie=t(35),ue=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:22,t=e.map((function(e){var t=fe(e.note);return[].concat(Object(ce.a)(t),Object(ce.a)(null===t||void 0===t?void 0:t.slice(0,n-11)))}));return t},de=function(e,n){return e.map((function(e){return e.map((function(e){return n.includes(e.note)?Object(le.a)({},e,{isSelected:!0}):Object(le.a)({},e,{isSelected:!1})}))}))},fe=function(e){var n=ee.findIndex((function(n){return n.note===e}));return[].concat(Object(ce.a)(ee.slice(n)),Object(ce.a)(ee.slice(0,n)))},se=function(e){var n=fe(e.note);return ne[e.name].map((function(e){return n[e]}))},pe=function(e,n){var t=function(e){console.log(e);var n=se({name:e.scale,note:e.note});return 0===te[e.name]?n:[].concat(Object(ce.a)(n.slice(te[e.name])),Object(ce.a)(n.slice(0,te[e.name])))}(n),r=[].concat(Object(ce.a)(t),Object(ce.a)(t),Object(ce.a)(t)),a=null;return e.reduce((function(e,n,t){return[].concat(Object(ce.a)(e),[n.reduce((function(e,n,o){var c=!1;return 0!==t||a||r[0].note!==n.note||(a=o),a&&function(e,n){var t=!1;return e&&n>=e-1&&n<=e+3&&(t=!0),t}(a,o)&&r[0].note===n.note&&(r=Object(ce.a)(r.slice(1)),c=!0),[].concat(Object(ce.a)(e),[Object(le.a)({},n,{isSelected:c})])}),[])])}),[])},be={boardDisplay:ue(re),tuning:re,fretboard:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:22,t=e.map((function(e){var t=fe(e.note);return{open:t[0].note,frets:[].concat(Object(ce.a)(t.map((function(e){return e.note}))),Object(ce.a)(null===t||void 0===t?void 0:t.slice(0,n-11).map((function(e){return e.note}))))}}));return t}(re),selectedNotes:[],selectedScale:null,selectedScaleName:"none",selectedMode:null,selectedModeName:"all",selectedRoot:"none"},me=Object(ie.a)({UPDATE_TUNING:function(e,n){return n.payload?Object(le.a)({},e,{tuning:n.payload,boardDisplay:ue(n.payload)}):e},SELECT_NOTE:function(e,n){if(n.payload&&e.selectedNotes.includes(n.payload)){var t=e.selectedNotes.filter((function(e){return e!==n.payload})),r=de(e.boardDisplay,t);return Object(le.a)({},e,{selectedNotes:t,boardDisplay:r})}if(n.payload){var a=de(e.boardDisplay,[].concat(Object(ce.a)(e.selectedNotes),[n.payload]));return Object(le.a)({},e,{selectedNotes:[].concat(Object(ce.a)(e.selectedNotes),[n.payload]),boardDisplay:a})}return e},SELECT_SCALE:function(e,n){if(n.payload){var t=se(n.payload).map((function(e){return e.note})),r=de(e.boardDisplay,t);return Object(le.a)({},e,{selectedNotes:[],selectedScale:n.payload,boardDisplay:r})}return Object(le.a)({},e,{selectedNotes:[],selectedScale:null,boardDisplay:ue(re)})},SELECT_MODE:function(e,n){return n.payload?Object(le.a)({},e,{selectedNotes:[],selectedMode:n.payload,boardDisplay:pe(e.boardDisplay,n.payload)}):Object(le.a)({},e,{selectedNotes:[],selectedMode:null,boardDisplay:ue(re)})},SELECT_ROOT:function(e,n){return n.payload?Object(le.a)({},e,{selectedRoot:n.payload}):e},SELECT_SCALE_NAME:function(e,n){return n.payload?Object(le.a)({},e,{selectedScaleName:n.payload}):e},SELECT_MODE_NAME:function(e,n){return n.payload?Object(le.a)({},e,{selectedModeName:n.payload}):e}},be),he=Object(ae.combineReducers)({fretboard:me});var xe=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.fretboard})),t=n.selectedScaleName,r=n.selectedModeName,a=n.selectedRoot;return{setSelectedNote:function(n){e({type:"SELECT_NOTE",payload:n})},setSelectedScale:function(n){if("none"!==n&&"none"!==a&&"all"!==r)e({type:"SELECT_MODE",payload:{scale:n,name:r,note:a}});else if("none"!==n&&"none"!==a){e({type:"SELECT_SCALE",payload:{name:n,note:a}})}else"none"===n&&e({type:"SELECT_SCALE",payload:null})},setSelectedMode:function(n){if("all"!==n&&"none"!==t&&"none"!==a)e({type:"SELECT_MODE",payload:{scale:t,name:n,note:a}});else if("all"===n&&"none"!==t&&"none"!==a){e({type:"SELECT_SCALE",payload:{name:t,note:a}})}},handleRootChange:function(n){if("none"===n)e({type:"SELECT_SCALE",payload:null});else if("none"!==t){if("all"!==r)e({type:"SELECT_MODE",payload:{scale:t,name:r,note:n}});else e({type:"SELECT_SCALE",payload:{name:t,note:n}})}},setSelectedScaleName:function(n){return e({type:"SELECT_SCALE_NAME",payload:n})},setSelectedModeName:function(n){return e({type:"SELECT_MODE_NAME",payload:n})},setSelectedRoot:function(n){e({type:"SELECT_ROOT",payload:n})}}},ge=function(e,n){var t=Object(r.useState)(e),a=Object(X.a)(t,2),o=a[0],c=a[1];return Object(r.useEffect)((function(){var t=setTimeout((function(){c(e)}),n);return function(){clearTimeout(t)}}),[e,n]),o};function ve(){var e=Object(l.a)(["\n  position: absolute;\n  bottom: ","px;\n  left: ","px;\n  color: ",";\n  font-weight: ",";\n  font-size: 0.8rem;\n  width: 70px;\n"]);return ve=function(){return e},e}var Ee=i.a.p.attrs((function(e){return{bottom:e.bottom||0,left:e.left||0,selected:e.selected||!1,disabled:e.disabled||!1}}))(ve(),(function(e){return e.bottom}),(function(e){return e.left}),(function(e){return e.disabled?"#666":e.selected?"#3553ff":"#fff"}),(function(e){return e.selected&&!e.disabled?"600":"400"})),je=[{label:"Ionian",bottom:30,left:90},{label:"Dorian",bottom:115,left:50},{label:"Phrygian",bottom:205,left:75},{label:"Lydian",bottom:235,left:182},{label:"Mixolydian",bottom:205,left:275},{label:"Aeolian",bottom:115,left:310},{label:"Locrian",bottom:30,left:270}],Oe=a.a.memo((function(e){var n=e.angle,t=e.min,o=e.max,c=e.disabled,l=Object(u.c)((function(e){return e.fretboard})).selectedModeName,i=xe(),d=i.setSelectedModeName,f=i.setSelectedMode,s=ge(l,200),p=je.reduce((function(e,n,r){return e[n.label]=[t(r+1),o(r+1)],e}),{}),b=t(0),m=o(0);return Object(r.useEffect)((function(){f(s)}),[s]),a.a.createElement(a.a.Fragment,null,je.map((function(e,t){return n>=p[e.label][0]&&n<p[e.label][1]&&e.label!==l?d(e.label):(n>=b||n<=m)&&"all"!==l&&d("all"),a.a.createElement("div",{key:e.label},a.a.createElement(Ee,{bottom:e.bottom,left:e.left,selected:e.label===l,disabled:c},e.label),a.a.createElement(Ee,{bottom:0,left:190,selected:"all"===l,disabled:c},"All"))})))}));function ye(){var e=Object(l.a)(["\n  position: absolute;\n  bottom: ","px;\n  left: ","px;\n  color: ",";\n  font-weight: ",";\n  font-size: 0.8rem;\n  width: 70px;\n"]);return ye=function(){return e},e}var Se=i.a.p.attrs((function(e){return{bottom:e.bottom||0,left:e.left||0,selected:e.selected||!1}}))(ye(),(function(e){return e.bottom}),(function(e){return e.left}),(function(e){return e.selected?"#3553ff":"#fff"}),(function(e){return e.selected?"600":"400"})),we=[{label:"Natural Minor",bottom:25,left:70},{label:"Natural Major",bottom:130,left:50},{label:"Major Blues",bottom:220,left:120},{label:"Minor Blues",bottom:220,left:250},{label:"Major Pentatonic",bottom:130,left:308},{label:"Minor Pentatonic",bottom:25,left:280}],Me=a.a.memo((function(e){var n=e.angle,t=e.min,o=e.max,c=we.reduce((function(e,n,r){return e[n.label]=[t(r+1),o(r+1)],e}),{}),l=t(0),i=o(0),d=Object(u.c)((function(e){return e.fretboard})).selectedScaleName,f=xe(),s=f.setSelectedScaleName,p=f.setSelectedScale,b=ge(d,200);return Object(r.useEffect)((function(){p(b)}),[b]),a.a.createElement(a.a.Fragment,null,we.map((function(e,t){return n>=c[e.label][0]&&n<c[e.label][1]&&e.label!==d?s(e.label):(n>=l||n<=i)&&"none"!==d&&s("none"),a.a.createElement("div",{key:e.label},a.a.createElement(Se,{bottom:e.bottom,left:e.left,selected:e.label===d},e.label),a.a.createElement(Se,{bottom:0,left:183,selected:"none"===d},"None"))})))}));function ke(){var e=Object(l.a)(["\n  position: absolute;\n  bottom: ","px;\n  left: ","px;\n  color: ",";\n  font-weight: ",";\n  font-size: 0.8rem;\n  width: 70px;\n"]);return ke=function(){return e},e}function Ne(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  width: 400px;\n  height: 240px;\n  position: relative;\n  padding-bottom: 40px;\n"]);return Ne=function(){return e},e}var Ce=i.a.div(Ne()),Le=(i.a.p.attrs((function(e){return{bottom:e.bottom||0,left:e.left||0,selected:e.selected||!1}}))(ke(),(function(e){return e.bottom}),(function(e){return e.left}),(function(e){return e.selected?"#3553ff":"#fff"}),(function(e){return e.selected?"600":"400"})),function(e){var n=e.children,t=e.type,o=e.angle,c=e.setAngle,l=Object(u.c)((function(e){return e.fretboard})).selectedScaleName;Object(r.useEffect)((function(){"modes"===t&&"none"===l&&c(0)}),[l]);var i="scales"===t?360/(Object.keys(ne).length+1):360/(Object.keys(te).length+1),d=i/2,f=function(e){return 0===e?360-d:e*i-d},s=function(e){return e*i+d};return a.a.createElement(Ce,null,"scales"===t?a.a.createElement(Me,{angle:o,min:f,max:s}):a.a.createElement(Oe,{angle:o,min:f,max:s,disabled:"none"===l}),n)});function Ae(){var e=Object(l.a)(["\n  height: 176px;\n  width: 176px;\n  border-radius: 88px;\n  background: linear-gradient(315deg, #222 1%, #ccc 80%);\n  position: relative;\n"]);return Ae=function(){return e},e}function De(){var e=Object(l.a)(["\n  height: 186px;\n  width: 186px;\n  border-radius: 93px;\n  background: linear-gradient(315deg, #000, #888);\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return De=function(){return e},e}function Te(){var e=Object(l.a)(["\n  height: 200px;\n  width: 200px;\n  border-radius: 100px;\n  background-color: ",";\n  box-shadow: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Te=function(){return e},e}function _e(){var e=Object(l.a)(["\n  display: flex;\n"]);return _e=function(){return e},e}var Pe=i.a.div(_e()),Re=i.a.div.attrs((function(e){return{selected:e.selected}}))(Te(),(function(e){return e.selected?"#3553ff":"#97a6ff"}),(function(e){return e.selected?"0 0px 10px #4863ff":"none"})),ze=i.a.div(De()),Be=i.a.div(Ae()),Ie=function(e){var n=e.type,t=Object(r.useState)(!1),o=Object(X.a)(t,2),c=o[0],l=o[1],i=Object(r.useState)(0),d=Object(X.a)(i,2),f=d[0],s=d[1],p=Object(r.useRef)(null),b=Object(r.useState)({x:0,y:0}),m=Object(X.a)(b,2),h=m[0],x=m[1],g=Object(r.useState)(!1),v=Object(X.a)(g,2),E=v[0],j=v[1],O=Object(u.c)((function(e){return e.fretboard})).selectedScaleName;return Object(r.useEffect)((function(){if(p.current&&0===h.x){var e=p.current.getBoundingClientRect(),n=e.x,t=e.y;x({x:n+88,y:t+88})}}),[]),Object(r.useEffect)((function(){"modes"===n&&"none"===O?j(!0):E&&j(!1)}),[O]),a.a.createElement(Pe,null,a.a.createElement(Le,{type:n,angle:f,setAngle:s},a.a.createElement(Re,{selected:c},a.a.createElement(ze,null,a.a.createElement(Be,{ref:p},a.a.createElement(Z,{setSelected:l,center:h,angle:f,setAngle:s,disabled:E}))))))};function Fe(){var e=Object(l.a)(["\n  margin: 0 5px;\n  width: 60px;\n  height: 62px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 3px solid ",";\n  box-shadow: ",";\n  -webkit-box-shadow: ",";\n  -moz-box-shadow: ",";\n  -ms-box-shadow: ",";\n  -o-box-shadow: ",";\n  transition: all 0.1s ease-in-out;\n"]);return Fe=function(){return e},e}function Ge(){var e=Object(l.a)(["\n  height: 62px;\n  background: linear-gradient(315deg, #222 1%, #888);\n  border-radius: 2px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: ",";\n  margin-top: ",";\n"]);return Ge=function(){return e},e}function Ue(){var e=Object(l.a)(["\n  color: #fff;\n"]);return Ue=function(){return e},e}function Je(){var e=Object(l.a)(["\n  display: flex;\n  padding: 10px;\n"]);return Je=function(){return e},e}var We=i.a.div(Je()),Ve=i.a.div(Ue()),Xe=i.a.div.attrs((function(e){return{selected:e.selected}}))(Ge(),(function(e){return e.selected?"none":"0 3px 0px #777"}),(function(e){return e.selected?"0px":"-2px"})),Ye=i.a.div.attrs((function(e){return{selected:e.selected}}))(Fe(),(function(e){return e.selected?"#3553ff":"#97a6ff"}),(function(e){return e.selected?"0 0px 10px #4863ff":"none"}),(function(e){return e.selected?"0 0px 10px #4863ff":"none"}),(function(e){return e.selected?"0 0px 10px #4863ff":"none"}),(function(e){return e.selected?"0 0px 10px #4863ff":"none"}),(function(e){return e.selected?"0 0px 10px #4863ff":"none"})),$e=function(e){var n=Object(u.c)((function(e){return e.fretboard})).selectedNotes,t=xe().setSelectedNote;return a.a.createElement(We,null,ee.map((function(e){var r=n.includes(e.note);return a.a.createElement(Ye,{key:e.note,selected:r},a.a.createElement(Xe,{selected:r,onClick:function(){t(e.note)}},a.a.createElement(Ve,null,e.note)))})))};function qe(){var e=Object(l.a)(["\n  flex: 1;\n  font-size: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n"]);return qe=function(){return e},e}function He(){var e=Object(l.a)(["\n  font-size: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return He=function(){return e},e}function Ke(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 235px;\n  margin-top: 8px;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(l.a)(["\n  transform: rotate(270deg);\n  width: 250px;\n  margin-top: 130px;\n\n  .slider {\n    flex: 6;\n    -webkit-appearance: none;\n    width: 100%;\n    height: 5px;\n    border-radius: 5px;\n    background: #fff;\n    outline: none;\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      appearance: none;\n      width: 40px;\n      height: 25px;\n      background: linear-gradient(to right, #333 5%, #fff 20%, #444 80%, #ccc);\n      cursor: pointer;\n      border-radius: 5px;\n    }\n    &::-moz-range-thumb {\n      width: 25px;\n      height: 25px;\n      background: linear-gradient(to top, #333 5%, #ccc 20%, #000 %50, #eee 5%);\n      cursor: pointer;\n    }\n  }\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(l.a)(["\n  height: 280px;\n  width: 150px;\n"]);return Ze=function(){return e},e}var en=i.a.div(Ze()),nn=i.a.div(Qe()),tn=i.a.div(Ke()),rn=i.a.div(He()),an=i.a.div(qe()),on=function(e){var n=Object(r.useState)(-1),t=Object(X.a)(n,2),o=t[0],c=t[1],l=Object(r.useRef)(null),i=Object(u.c)((function(e){return e.fretboard})).selectedRoot,d=xe(),f=d.setSelectedRoot,s=d.handleRootChange,p=ge(i,200);return Object(r.useEffect)((function(){f(o>=0?ee[o].note:"none")}),[o]),Object(r.useEffect)((function(){s(p)}),[p]),a.a.createElement(a.a.Fragment,null,a.a.createElement(en,null,a.a.createElement(nn,null,a.a.createElement("input",{ref:l,className:"slider",type:"range",min:"-1",max:"11",step:"1",value:o,onChange:function(e){c(Number(e.target.value))}}))),a.a.createElement(tn,null,a.a.createElement(rn,null,"G#"),a.a.createElement(an,null,"none"!==i?i:"Off"),a.a.createElement(rn,null,"A")))};function cn(){var e=Object(l.a)(["\n  display: flex;\n  background: #1b1b1b;\n  box-shadow: 2px 2px 2px #222;\n  padding: 10px 0;\n"]);return cn=function(){return e},e}function ln(){var e=Object(l.a)(["\n  display: flex;\n  background: #1b1b1b;\n  border-radius: 10px 10px 0 0;\n  box-shadow: 2px 2px 2px #222;\n  padding: 10px 0;\n"]);return ln=function(){return e},e}function un(){var e=Object(l.a)(["\n  width: 1264px;\n"]);return un=function(){return e},e}function dn(){var e=Object(l.a)(["\n  margin-top: 40px;\n  font-size: 1.5em;\n  min-width: 1260px;\n  display: flex;\n  justify-content: center;\n"]);return dn=function(){return e},e}var fn=i.a.div(dn()),sn=i.a.div(un()),pn=i.a.div(ln()),bn=i.a.div(cn()),mn=function(e){return a.a.createElement(fn,null,a.a.createElement(sn,null,a.a.createElement(pn,null,a.a.createElement(Ie,{type:"scales"}),a.a.createElement(Ie,{type:"modes"}),a.a.createElement(on,null)),a.a.createElement(bn,null,a.a.createElement($e,null))))};function hn(){var e=Object(l.a)(["\n  display: flex;\n"]);return hn=function(){return e},e}function xn(){var e=Object(l.a)(["\n  display: flex;\n  font: normal 2em Varela Round;\n  padding: 20px;\n"]);return xn=function(){return e},e}function gn(){var e=Object(l.a)(["\n  font: normal 14px Open Sans;\n  padding: 30px;\n  position: relative;\n"]);return gn=function(){return e},e}var vn=i.a.div(gn()),En=(i.a.div(xn()),i.a.div(hn()),function(){return a.a.createElement(vn,null,a.a.createElement("div",null,a.a.createElement(V,null),a.a.createElement(mn,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var jn=function(e){var n=Object(ae.applyMiddleware)(oe);return Object(ae.createStore)(he,e,n)}();c.a.render(a.a.createElement(u.a,{store:jn},a.a.createElement(En,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.c1731e7a.chunk.js.map