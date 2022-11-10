"use strict";(self.webpackChunksamurai_social=self.webpackChunksamurai_social||[]).push([[958],{1958:function(e,n,r){r.r(n),r.d(n,{default:function(){return G}});var t=r(2791),s=r(8660),c=function(e){return e.chat.messages},o=function(e){return e.chat.connected},i=function(e){return e.chat.error},u=r(4165),a=r(5861),l=r(7745),d=r(3144),f=r(5671),h=(0,d.Z)((function e(){(0,f.Z)(this,e)}));h._socket=null,h._connected=!1,h._subscribers={"connection-changed":[],"messages-received":[],"error-occured":[]},h._onOpen=function(){h._connected=!0,h._subscribers["connection-changed"].forEach((function(e){return e(h._connected)}))},h._onMessage=function(e){var n=JSON.parse(e.data);h._subscribers["messages-received"].forEach((function(e){return e(n)}))},h._onError=function(){h._subscribers["error-occured"].forEach((function(e){return e("Some error occured while establishing connection")}))},h._onClose=function(){h._connected=!1,h._subscribers["connection-changed"].forEach((function(e){return e(h._connected)})),h._cleanUp(),h._socket=null,setTimeout(h._createSocket,3e3)},h._cleanUp=function(){var e,n,r,t;null===(e=h._socket)||void 0===e||e.removeEventListener("open",h._onOpen),null===(n=h._socket)||void 0===n||n.removeEventListener("message",h._onMessage),null===(r=h._socket)||void 0===r||r.removeEventListener("error",h._onError),null===(t=h._socket)||void 0===t||t.removeEventListener("close",h._onClose)},h._createSocket=function(){h._socket||(h._socket=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),h._socket.addEventListener("open",h._onOpen),h._socket.addEventListener("message",h._onMessage),h._socket.addEventListener("error",h._onError),h._socket.addEventListener("close",h._onClose))},h._deleteSocket=function(){var e;null===(e=h._socket)||void 0===e||e.close(),h._connected=!1,h._subscribers["connection-changed"].forEach((function(e){return e(h._connected)})),h._cleanUp(),h._socket=null},h.subscribe=function(e,n){h._subscribers[e].push(n),h._createSocket()},h.unsubscribe=function(e,n){h._deleteSocket(),h._subscribers[e]=h._subscribers[e].filter((function(e){return e!==n}))},h.sendMessage=function(e){var n;null===(n=h._socket)||void 0===n||n.send(e)};var m,p,v,_,g,x,b,k=h,Z=function(e){return function(n){e(l._.setConnected(n))}},j=function(e){return function(n){e(l._.newMessageReceived(n))}},E=function(e){return function(n){e(l._.setError(n))}},w=null,y=null,S=null,C=r(9785),L=r(8112),M=r(168),P=r(6444),O=P.ZP.div(m||(m=(0,M.Z)(["\n   flex: 1 1 auto;\n   display: flex;\n   flex-direction: column;\n"]))),T=r(885),H=P.ZP.div(p||(p=(0,M.Z)(["\n   flex: 1 1 auto;\n   height: 1px;\n   display: flex;\n   flex-direction: column;\n   overflow-y: auto;\n\n   &:not(:last-child) {\n      margin-bottom: 20px;\n   }\n"]))),I=P.ZP.ul(v||(v=(0,M.Z)(["\n   display: flex;\n   flex-direction: column;\n"]))),N=r(6731),R=r(4615),U=P.ZP.li(_||(_=(0,M.Z)(["\n   display: flex;\n   align-items: flex-start;\n\n   &:not(:last-child) {\n      margin-bottom: 10px;\n   }\n\n   .messageItemLink {\n      flex: 0 0 40px;\n      margin-right: 15px;\n   }\n"]))),z=(0,P.ZP)(C.qE)(g||(g=(0,M.Z)(["\n   height: 40px;\n   border: 1px solid ",";\n   border-radius: 50%;\n\n   img {\n      border-radius: 50%;\n   }\n"])),(function(e){return e.theme.colors.$gray})),B=P.ZP.div(x||(x=(0,M.Z)(["\n   display: flex;\n   flex-direction: column;\n\n   h4 {\n      margin-bottom: 5px;\n      font-size: 18px;\n      font-weight: 600;\n      color: ",";\n   }\n\n   p {\n\n   }\n"])),(function(e){return e.theme.colors.$green})),$=r(2424),q=r(184),A=t.memo((function(e){var n=e.messageBody,r=n.message,t=n.photo,s=n.userId,c=n.userName,o=t||R;return(0,q.jsxs)(U,{children:[(0,q.jsx)(N.OL,{className:"messageItemLink",to:$.n.PROFILE+"/".concat(s),children:(0,q.jsx)(z,{children:(0,q.jsx)("img",{src:o,alt:"Avatar"})})}),(0,q.jsxs)(B,{children:[(0,q.jsx)("h4",{children:c}),(0,q.jsx)("p",{children:r})]})]})})),D=t.memo((function(e){var n=e.messages,r=(0,t.useState)(!0),s=(0,T.Z)(r,2),c=s[0],o=s[1],i=t.useRef(null);(0,t.useEffect)((function(){i.current&&c&&(i.current.scrollTop=i.current.scrollHeight)}),[n]);return(0,q.jsx)(H,{onScroll:function(e){var n,r,t,s=null===(n=i.current)||void 0===n?void 0:n.clientHeight,u=(null===(r=i.current)||void 0===r?void 0:r.scrollHeight)-((null===(t=i.current)||void 0===t?void 0:t.scrollTop)+s)<120;u!==c&&o(u)},ref:i,children:(0,q.jsx)(I,{children:n.map((function(e,n){return(0,q.jsx)(A,{messageBody:e},n)}))})})})),F=r(2936),J=P.ZP.div(b||(b=(0,M.Z)(["\n   \n"]))),V=t.memo((function(e){var n=e.connected,r=e.onSubmit,s=(0,t.useState)(""),c=(0,T.Z)(s,2),o=c[0],i=c[1];return(0,q.jsx)(J,{children:(0,q.jsxs)(F.Z,{onSubmit:function(e){e.preventDefault(),o&&(r(o),i(""))},className:"d-flex flex-row gap-2",children:[(0,q.jsx)(F.Z.Control,{type:"text",value:o,onChange:function(e){i(e.target.value)},placeholder:"Type your message..."}),(0,q.jsx)(C.zx,{type:"submit",disabled:!n,children:"Send"})]})})})),W=function(e){var n=e.connected,r=e.messages,t=e.sendMessage;return(0,q.jsxs)(O,{children:[(0,q.jsx)(D,{messages:r}),(0,q.jsx)(V,{connected:n,onSubmit:t})]})},G=function(){var e=(0,s.C)(o),n=(0,s.C)(c),r=(0,s.C)(i),d=(0,s.T)();(0,t.useEffect)((function(){return d(function(){var e=(0,a.Z)((0,u.Z)().mark((function e(n){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w=Z(n),y=j(n),S=E(n),k.subscribe("connection-changed",w),k.subscribe("messages-received",y),k.subscribe("error-occured",S);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),function(){d(function(){var e=(0,a.Z)((0,u.Z)().mark((function e(n){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(l._.fetchingMessagesStopped()),w&&y&&S&&(k.unsubscribe("connection-changed",w),k.unsubscribe("messages-received",y),k.unsubscribe("error-occured",S));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}}),[]);var f=(0,t.useCallback)((function(e){d(function(e){return function(){var n=(0,a.Z)((0,u.Z)().mark((function n(r){return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:k.sendMessage(e);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e))}),[]);return r?(0,q.jsx)(L.Z,{error:r,onPage:!0}):(0,q.jsx)(C.T3,{children:(0,q.jsx)(C.xV,{children:(0,q.jsx)(W,{connected:e,messages:n,sendMessage:f})})})}},4615:function(e,n,r){e.exports=r.p+"static/media/default-user-photo.df06d9f651d45b9de774.jpg"}}]);
//# sourceMappingURL=958.394cc560.chunk.js.map