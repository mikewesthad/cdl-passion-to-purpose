(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,a){e.exports={wrap:"page-wrapper_wrap__181li"}},143:function(e,t,a){e.exports={container:"container_container__2_dvV"}},148:function(e,t,a){e.exports={button:"button_button__Mzi9L"}},151:function(e,t,a){e.exports=a(275)},16:function(e,t,a){e.exports={enterDurationMs:"600",exitDurationMs:"300",enter:"page-transition_enter__15S3q",enterActive:"page-transition_enterActive__1ebnh",exit:"page-transition_exit__3jzR8",exitActive:"page-transition_exitActive__1A7jv"}},27:function(e,t,a){e.exports={form:"prompt-template_form__3jsF-",formError:"prompt-template_formError__2H-eF",prompt:"prompt-template_prompt__1ujlr",promptLabel:"prompt-template_promptLabel__2UWLV",promptLabelNumber:"prompt-template_promptLabelNumber__1lIc4",promptInput:"prompt-template_promptInput__11z8k"}},271:function(e,t){},273:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),s=a.n(o),i=a(19),c=a(2),l=a(3),m=a(5),u=a(4),p=a(6),h=a(291),d=a(292),b=a(288),f=a(290),v=a(289),g=a(7),E=a(110),O=a(16),y=a.n(O),j={appear:y.a.appear,appearActive:y.a.appearActive,enter:y.a.enter,enterActive:y.a.enterActive,enterDone:y.a.enterDone,exit:y.a.exit,exitActive:y.a.exitActive,exitDone:y.a.exitDone},_={enter:parseFloat(y.a.enterDurationMs),exit:parseFloat(y.a.exitDurationMs)},N=function(){return window.scrollTo(0,0)};function k(e){var t=e.pageKey,a=e.children;return r.a.createElement(E.TransitionGroup,{component:null},r.a.createElement(E.CSSTransition,{key:t,timeout:_,classNames:j,onExited:N},r.a.createElement("div",{style:{width:"100%"}},a)))}var S=a(141),w=a.n(S);function C(e){var t=e.children,a=Object(i.a)(e,["children"]);return r.a.createElement("div",Object.assign({className:w.a.wrap},a),t)}var A=a(81),P=a(82),x=console.log,M=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.map(function(e){return JSON.stringify(e,null,2)})},D={initialize:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return x.apply(void 0,["Analytics initialized: "].concat(Object(P.a)(M(t))))},pageview:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return x.apply(void 0,["Analytics pageview: "].concat(Object(P.a)(M(t))))},event:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return x.apply(void 0,["Analytics event: "].concat(Object(P.a)(M(t))))}},L=a(111),R=a.n(L),Z=!1;function V(){var e=new R.a(Z?"http://localhost:3000":"."),t=new R.a(window.location).pathname.slice().replace(e.pathname,"");return t.startsWith("/")&&(t=t.slice(1)),""===t?"default":t}var I=V(),F=function(e){function t(e){var a;return Object(c.a)(this,t),((a=Object(m.a)(this,Object(u.a)(t).call(this,e))).props.dummyLog?D:A.a).initialize(a.props.trackingId),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"logCurrentPage",value:function(){var e=this.props,t=e.location,a=e.dummyLog,n=t.pathname;(a?D:A.a).pageview("".concat(I).concat(n))}},{key:"logEvent",value:function(e){(this.props.dummyLog?D:A.a).event(e)}},{key:"componentDidMount",value:function(){this.logCurrentPage(),this.logEvent({category:"Game",action:"Game Started"})}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.location,n=t.gameStartRoute,r=t.gameEndRoute,o=a.pathname;e.location.pathname!==o&&(this.logCurrentPage(),o===n?this.logEvent({category:"Game",action:"Game Restarted"}):o===r&&this.logEvent({category:"Game",action:"Game Completed"}))}},{key:"render",value:function(){return null}}]),t}(n.Component);F.defaultProps={dummyLog:!1};var H=Object(h.a)(F),J=a(277),B=a(143),Q=a.n(B);function T(e){var t=e.children,a=Object(i.a)(e,["children"]);return r.a.createElement("div",Object.assign({className:Q.a.container},a),t)}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var W=r.a.createElement("title",null,"CDL Logo"),G=r.a.createElement("g",{id:"convergence"},r.a.createElement("path",{d:"M51.26,19.7V34.32H49.92v-2a4.49,4.49,0,0,1-4,2.15,5,5,0,0,1-5.17-4.83c0-.15,0-.3,0-.45a5,5,0,0,1,4.73-5.26h.43A4.55,4.55,0,0,1,49.86,26V19.7Zm-1.38,9.44a3.86,3.86,0,0,0-7.71-.39,2.54,2.54,0,0,0,0,.39,3.86,3.86,0,1,0,7.71.39A2.54,2.54,0,0,0,49.88,29.14Z"}),r.a.createElement("path",{d:"M65.32,29.57H56.65a3.84,3.84,0,0,0,4.07,3.6h0a4.08,4.08,0,0,0,3.17-1.35l.79.9a5.47,5.47,0,0,1-9.43-3.58,5,5,0,0,1,10.08,0C65.34,29.25,65.32,29.41,65.32,29.57Zm-8.67-1H64a3.68,3.68,0,0,0-7.35,0Z"}),r.a.createElement("path",{d:"M67.9,33.13l.63-1.1a6.26,6.26,0,0,0,3.69,1.16c2,0,2.77-.67,2.77-1.69,0-2.7-6.71-.57-6.71-4.67,0-1.69,1.45-2.95,4.09-2.95a7.08,7.08,0,0,1,3.67,1L75.43,26a5.28,5.28,0,0,0-3.06-.88c-1.87,0-2.69.73-2.69,1.71,0,2.8,6.71.69,6.71,4.67,0,1.79-1.57,3-4.27,3A6.9,6.9,0,0,1,67.9,33.13Z"}),r.a.createElement("path",{d:"M79.8,20.69a1,1,0,1,1,1,1A1,1,0,0,1,79.8,20.69ZM80.12,24h1.39V34.32H80.12Z"}),r.a.createElement("path",{d:"M96.15,24v9.1c0,3.56-1.75,5.18-5.18,5.18a7.23,7.23,0,0,1-4.83-1.6l.71-1.06A6.23,6.23,0,0,0,90.93,37c2.62,0,3.82-1.21,3.82-3.77V31.91a4.63,4.63,0,0,1-4,2,5,5,0,0,1,0-10A4.65,4.65,0,0,1,94.81,26V24Zm-1.36,4.92a3.93,3.93,0,1,0-4.06,3.8h.12a3.7,3.7,0,0,0,3.93-3.45,2.54,2.54,0,0,0,0-.39Z"}),r.a.createElement("path",{d:"M110.75,28.31v6h-1.4V28.45c0-2.19-1.14-3.31-3.11-3.31a3.4,3.4,0,0,0-3.64,3.14,4,4,0,0,0,0,.6v5.44h-1.39V24h1.33v1.91a4.35,4.35,0,0,1,3.94-2C109,23.88,110.75,25.33,110.75,28.31Z"}),r.a.createElement("path",{d:"M122,19.7h1.4V34.32H122Z"}),r.a.createElement("path",{d:"M136.26,27.9v6.42h-1.34V32.7a3.89,3.89,0,0,1-3.57,1.72c-2.34,0-3.78-1.23-3.78-3,0-1.59,1-2.93,4-2.93h3.29v-.63c0-1.78-1-2.74-2.93-2.74a5.3,5.3,0,0,0-3.45,1.22l-.63-1a6.56,6.56,0,0,1,4.21-1.4C134.74,23.88,136.26,25.22,136.26,27.9Zm-1.4,3.31v-1.7h-3.25c-2,0-2.66.79-2.66,1.85s1,2,2.62,2A3.32,3.32,0,0,0,134.86,31.21Z"}),r.a.createElement("path",{d:"M151.71,29.14A5,5,0,0,1,147,34.42h-.46a4.47,4.47,0,0,1-4-2.15v2H141.2V19.7h1.39v6.23a4.55,4.55,0,0,1,3.94-2.05,5,5,0,0,1,5.18,4.81A3.38,3.38,0,0,1,151.71,29.14Zm-1.4,0a3.87,3.87,0,0,0-7.73-.39,2.54,2.54,0,0,0,0,.39,3.87,3.87,0,0,0,7.73.39A2.54,2.54,0,0,0,150.31,29.14Z"}),r.a.createElement("path",{d:"M40.38,11.89c0-2.67,2.06-4.57,4.95-4.57a4.07,4.07,0,0,1,4,2.26l-2,1.07a2.23,2.23,0,0,0-2-1.22A2.29,2.29,0,0,0,43,11.65a1.93,1.93,0,0,0,0,.24,2.28,2.28,0,0,0,2.09,2.45h.24a2.2,2.2,0,0,0,2-1.22l2,1.08a4.12,4.12,0,0,1-4,2.25C42.44,16.46,40.38,14.56,40.38,11.89Z"}),r.a.createElement("path",{d:"M50,11.89a4.58,4.58,0,0,1,4.58-4.58h.32a4.58,4.58,0,0,1,.6,9.14h-.6A4.59,4.59,0,0,1,50,12.21C50,12.1,50,12,50,11.89Zm7.15,0a2.28,2.28,0,0,0-4.54-.43,3.08,3.08,0,0,0,0,.43,2.28,2.28,0,0,0,4.54.43A3.08,3.08,0,0,0,57.15,11.89Z"}),r.a.createElement("path",{d:"M70.55,11.25v5.08H68V11.64c0-1.43-.66-2.09-1.8-2.09a2.11,2.11,0,0,0-2.13,2.39v4.39H61.48V7.45h2.46v1a3.87,3.87,0,0,1,2.94-1.17C69,7.32,70.55,8.54,70.55,11.25Z"}),r.a.createElement("path",{d:"M81.53,7.45l-3.75,8.88H75.13L71.4,7.45h2.65l2.46,6,2.54-6Z"}),r.a.createElement("path",{d:"M91,12.61H84.27a2.36,2.36,0,0,0,2.54,1.79A3,3,0,0,0,89,13.54L90.4,15a4.63,4.63,0,0,1-3.66,1.44c-3.07,0-5.06-1.93-5.06-4.57A4.51,4.51,0,0,1,86.14,7.3h.27A4.39,4.39,0,0,1,91,11.48a3.23,3.23,0,0,1,0,.44Zm-6.75-1.5h4.38a2.22,2.22,0,0,0-4.38,0Z"}),r.a.createElement("path",{d:"M98.26,7.32V9.69h-.58a2.19,2.19,0,0,0-2.36,2.48v4.19H92.75V7.45h2.46V8.62A3.54,3.54,0,0,1,98.26,7.32Z"}),r.a.createElement("path",{d:"M108.87,7.45v7.39c0,3.3-1.79,4.82-5,4.82a7.3,7.3,0,0,1-4.35-1.22l1-1.85a5.27,5.27,0,0,0,3.14,1c1.81,0,2.6-.83,2.6-2.43v-.38a3.64,3.64,0,0,1-2.8,1.11,4.23,4.23,0,0,1-4.44-4V11.6a4.22,4.22,0,0,1,4.16-4.29h.28a3.52,3.52,0,0,1,2.93,1.27V7.45Zm-2.54,4.16a2.34,2.34,0,1,0-2.49,2.17H104a2.15,2.15,0,0,0,2.32-2A1.34,1.34,0,0,0,106.33,11.61Z"}),r.a.createElement("path",{d:"M119.91,12.61h-6.72a2.37,2.37,0,0,0,2.54,1.79,3,3,0,0,0,2.23-.86L119.33,15a4.67,4.67,0,0,1-3.66,1.44c-3.07,0-5.07-1.93-5.07-4.57a4.53,4.53,0,0,1,4.46-4.58h.28A4.39,4.39,0,0,1,120,11.46a3.23,3.23,0,0,1,0,.44A2.8,2.8,0,0,1,119.91,12.61Zm-6.75-1.5h4.37a2.22,2.22,0,0,0-4.37,0Z"}),r.a.createElement("path",{d:"M130.75,11.25v5.08h-2.58V11.64c0-1.43-.66-2.09-1.8-2.09a2.1,2.1,0,0,0-2.12,2.39v4.39h-2.58V7.45h2.46v1a3.87,3.87,0,0,1,2.94-1.17C129.16,7.32,130.75,8.54,130.75,11.25Z"}),r.a.createElement("path",{d:"M132.51,11.89c0-2.67,2.07-4.57,5-4.57a4.09,4.09,0,0,1,4,2.26l-2,1.07a2.23,2.23,0,0,0-2-1.22,2.25,2.25,0,0,0-2.33,2.46,2.26,2.26,0,0,0,2.07,2.45h.26a2.2,2.2,0,0,0,2-1.22l2,1.08a4.13,4.13,0,0,1-4,2.25C134.58,16.46,132.51,14.56,132.51,11.89Z"}),r.a.createElement("path",{d:"M151.45,12.61h-6.71a2.37,2.37,0,0,0,2.54,1.79,3,3,0,0,0,2.23-.86L150.88,15a4.67,4.67,0,0,1-3.67,1.44c-3.06,0-5.06-1.93-5.06-4.57a4.51,4.51,0,0,1,4.46-4.57h.27a4.39,4.39,0,0,1,4.62,4.15,3.38,3.38,0,0,1,0,.45C151.5,12.12,151.47,12.4,151.45,12.61Zm-6.74-1.5h4.37a2.22,2.22,0,0,0-4.37,0Z"})),z=function(e){return r.a.createElement("svg",U({id:"Logo",viewBox:"0 0 153.79 42"},e),W,r.a.createElement("g",{id:"convergence-circles"},r.a.createElement("path",{d:"M18.08,11.94A20.74,20.74,0,0,0,7.37,28.15a20.6,20.6,0,0,0,21.41,0A20.76,20.76,0,0,0,18.08,11.94Z",style:{fill:"#fff"}}),r.a.createElement("path",{d:"M18.08,4.83A10.87,10.87,0,0,0,7.21,15.7v1.06A10.86,10.86,0,0,0,12.47,25,10.85,10.85,0,0,1,28.9,16.76c0-.35.05-.7.05-1.06A10.87,10.87,0,0,0,18.08,4.83Z",style:{fill:"#97cf3e"}}),r.a.createElement("path",{d:"M28.9,16.76a10.81,10.81,0,0,0-10.82-.25A10.89,10.89,0,0,1,23.69,25v1.05A10.88,10.88,0,0,1,18,35.6,10.88,10.88,0,0,0,28.9,16.76Z",style:{fill:"#d43ccd"}}),r.a.createElement("path",{d:"M23.69,25A10.88,10.88,0,0,1,7.26,16.76a10.87,10.87,0,1,0,16.48,9.29C23.74,25.7,23.72,25.35,23.69,25Z",style:{fill:"#ff9a21"}})),G)},q=(a.p,a(74)),K=a.n(q),X=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",this.props,r.a.createElement("div",{className:K.a.attributionText},"A free tool built by:"),r.a.createElement("a",{className:K.a.logoLink,href:"https://convergencedesignlab.org/"},r.a.createElement(z,{className:K.a.logo})))}}]),t}(n.Component);var Y=a(27),$=a.n(Y),ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showError:!1},a.onSubmit=function(e){var t=a.props,n=t.store,r=t.history,o=t.nextRoute;e.preventDefault(),n.areAllResponsesValid()?r.push(o):a.setState({showError:!0})},a.setPassion=function(e,t){a.props.store.setResponse(e,t),a.setState({showError:!1})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showError,a=this.props,n=a.store,o=a.stepNumber,s=a.title,i=a.description,c=a.description2,l=a.medium1,m=a.afterPromptComponent,u=n.getQuestions().map(function(t,a){var o="prompt-".concat(a),s=n.responses[a]||"";return r.a.createElement("div",{className:$.a.prompt,key:o},r.a.createElement("label",{className:$.a.promptLabel,htmlFor:o},r.a.createElement("span",{className:$.a.promptLabelNumber},a+1,"."),r.a.createElement("span",{className:$.a.promptLabelText},t)),r.a.createElement("input",{type:"text",className:$.a.promptInput,value:s,id:o,onChange:function(t){return e.setPassion(a,t.target.value)},placeholder:"Type something here..."}))});return r.a.createElement(T,null,r.a.createElement("div",{className:"step-count"},"Step ",o,"/6"),r.a.createElement("h1",{className:"title"},s),r.a.createElement("div",{className:"description"},i),r.a.createElement("div",{className:"description2"},c),r.a.createElement("div",{className:"medium1"},l),r.a.createElement("form",{className:$.a.form,onSubmit:this.onSubmit},u,t&&r.a.createElement("div",{className:$.a.formError},"*Fill out all the prompts to continue!"),m,r.a.createElement("div",{className:"navigation"},r.a.createElement("input",{className:"button submit-button",type:"submit",value:"Next \u279e"}))))}}]),t}(r.a.Component),te=Object(g.c)(ee),ae=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.gameData;return r.a.createElement(te,Object.assign({},this.props,{store:e.passionStore,title:r.a.createElement(r.a.Fragment,null,"What is your ",r.a.createElement("span",{className:"title-emphasis"},"passion"),"?"),description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"What do you geek out about? What do you do in your free time?")),stepNumber:"1"}))}}]),t}(r.a.Component),ne=Object(g.b)("gameData")(Object(g.c)(ae)),re=a(48),oe=a.n(re),se=a(75),ie=a.n(se),ce=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.value,n=e.onChange,o=e.checked,s=e.label,c=Object(i.a)(e,["id","value","onChange","checked","label"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"checkbox",className:ie.a.input,id:t,name:t,value:a,onChange:n,checked:o},c)),r.a.createElement("label",{htmlFor:t,className:oe()(ie.a.label,o&&ie.a.labelChecked)},s))}}]),t}(n.Component),le=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).togglePremissions=function(){var e=a.props.gameData;e.setUserPermission(!e.hasUserPermission)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.gameData,t=e.hasUserPermission;return r.a.createElement(te,Object.assign({},this.props,{store:e.purposeStore,title:r.a.createElement(r.a.Fragment,null,"What is your ",r.a.createElement("span",{style:{fontWeight:800}},"purpose"),"?"),description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"What issues do you care about? Where do you want to make an impact?")),afterPromptComponent:r.a.createElement("div",{style:{margin:"2rem 0"}},r.a.createElement(ce,{id:"sharing-checkbox",label:"Share your passions & purposes anonymously to help us improve the tool.",onChange:this.togglePremissions,checked:t})),stepNumber:"2"}))}}]),t}(r.a.Component),me=Object(g.b)("gameData")(Object(g.c)(le)),ue=a(73),pe=a(278),he=a(279),de=a(280),be=a(281),fe=a(282),ve=a(283),ge=a(284),Ee=a(285),Oe=a(286),ye=a(287),je=a(28),_e=a.n(je),Ne="https://www.convergencedesignlab.org/p2p",ke=["PassionToPurpose"],Se=(n.Component,a(56)),we=a.n(Se),Ce=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).getNextCombination=function(){a.setState(function(e){return{combinationNumber:e.combinationNumber+1}})},a.storeP2P=function(){a.props.store.setPurpose(a.render.purpose),console.log(a.render.purpose)},a.props.gameData.generateCombinations(),a.state={combinationNumber:0},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.gameData.saveToFirebase()}},{key:"render",value:function(){var e=this.props,t=e.gameData,a=e.nextRoute,n=this.state.combinationNumber,o=t.combinations,s=Object(ue.a)(o[n%o.length],2),i=s[0],c=s[1],l=t.passionStore.responses[i],m=t.getPurposesWithVerb()[c];return r.a.createElement(T,null,r.a.createElement("div",{className:"step-count"},"Step 3/6"),r.a.createElement("h1",{className:"title"},"How might we...?"),r.a.createElement("div",{className:"description"},"Let\u2019s combine your passion and purpose \u2013 it\u2019s okay if the ideas are crazy!"),r.a.createElement("div",{className:we.a.generatedQuestion},"How might we use ",r.a.createElement("span",{className:we.a.generatedPassion},l)," to"," ",r.a.createElement("span",{className:we.a.generatedPurpose},m),"?",r.a.createElement("div",{className:we.a.generateButtonContainer},r.a.createElement("button",{className:"button button__stacked",onClick:this.getNextCombination},"Give Me Another")),r.a.createElement("div",{className:"text-center"},r.a.createElement(J.a,{className:"button",to:a,onClick:(t.setPurpose(m),t.setPassion(l))},"Continue \u279e"))))}}]),t}(r.a.Component),Ae=Object(g.b)("gameData")(Object(g.c)(Ce)),Pe=a(77),xe=a.n(Pe),Me=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showError:!1},a.onSubmit=function(e){var t=a.props,n=t.store,r=t.history,o=t.nextRoute;e.preventDefault(),""!==n.action?r.push(o):a.setState({showError:!0})},a.setPassion=function(e,t){a.props.store;a.setState({showError:!1})},a.onChange=function(e){a.props.store.setAction(e.target.value),console.log(e.target.value)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.showError,t=this.props,a=t.store,n=t.stepNumber,o=t.title,s=t.description,i=t.description2,c=t.medium1,l=t.afterPromptComponent;return r.a.createElement(T,null,r.a.createElement("div",{className:"step-count"},"Step ",n,"/6"),r.a.createElement("h1",{className:"title"},o),r.a.createElement("div",{className:"description"},s),r.a.createElement("div",{className:"description2"},i),r.a.createElement("div",{className:"medium1"},c),r.a.createElement("form",{className:xe.a.form,onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",className:xe.a.promptInput,value:a.action,onChange:this.onChange}),e&&r.a.createElement("div",{className:xe.a.formError},"*Fill out all the prompts to continue!"),l,r.a.createElement("div",{className:"navigation"},r.a.createElement("input",{className:"button submit-button",type:"submit",value:"Next \u279e"}))))}}]),t}(r.a.Component),De=Object(g.c)(Me),Le=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.gameData;return r.a.createElement(De,Object.assign({},this.props,{store:e,title:r.a.createElement(r.a.Fragment,null,"What ",r.a.createElement("span",{className:"title-emphasis"},"action")," will you take?"),description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"How should you answer your How Might We?"),r.a.createElement("p",null,"What do you want to do?")),description2:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("ul",{class:"columns","data-columns":"2"},r.a.createElement("li",null," Raise Awareness"),r.a.createElement("li",null," Change Behavior"),r.a.createElement("li",null," Connect People to Opportunities"),r.a.createElement("li",null,"Make a Task Easier"),r.a.createElement("li",null,"Change Policies"),r.a.createElement("li",null," Change Perception"),r.a.createElement("li",null,"Teach a Skill"),r.a.createElement("li",null,"Raise Money ")))),medium1:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"I want to...")),stepNumber:"4"}))}}]),t}(r.a.Component),Re=Object(g.b)("gameData")(Object(g.c)(Le)),Ze=a(78),Ve=a.n(Ze),Ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showError:!1},a.onSubmit=function(e){var t=a.props,n=t.store,r=t.history,o=t.nextRoute;e.preventDefault(),""!==n.medium?r.push(o):a.setState({showError:!0})},a.setPassion=function(e,t){a.props.store;a.setState({showError:!1})},a.onChange=function(e){a.props.store.setMedium(e.target.value),console.log(e.target.value)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.showError,t=this.props,a=t.store,n=t.stepNumber,o=t.title,s=t.description,i=t.description2,c=t.medium1,l=t.afterPromptComponent;return r.a.createElement(T,null,r.a.createElement("div",{className:"step-count"},"Step ",n,"/6"),r.a.createElement("h1",{className:"title"},o),r.a.createElement("div",{className:"description"},s),r.a.createElement("div",{className:"description2"},i),r.a.createElement("div",{className:"medium1"},c),r.a.createElement("form",{className:Ve.a.form,onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",className:Ve.a.promptInput,value:a.medium,onChange:this.onChange}),e&&r.a.createElement("div",{className:Ve.a.formError},"*Fill out all the prompts to continue!"),l,r.a.createElement("div",{className:"navigation"},r.a.createElement("input",{className:"button submit-button",type:"submit",value:"Next \u279e"}))))}}]),t}(r.a.Component),Fe=Object(g.c)(Ie),He=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.gameData;Ae.chosenPassion;return r.a.createElement(Fe,Object.assign({},this.props,{store:e,title:r.a.createElement(r.a.Fragment,null,"What will you ",r.a.createElement("span",{className:"title-emphasis"},"make"),"?"),description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"What medium best serves your action?"),r.a.createElement("p",null,"Examples:")),description2:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("ul",{class:"columns","data-columns":"2"},r.a.createElement("li",null,"Poster"),r.a.createElement("li",null,"Community Event"),r.a.createElement("li",null,"Board Game"),r.a.createElement("li",null,"Movie"),r.a.createElement("li",null,"Podcast"),r.a.createElement("li",null,"Website"),r.a.createElement("li",null,"Sculpture")))),medium1:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"I will make a...")),stepNumber:"5"}))}}]),t}(r.a.Component),Je=Object(g.b)("gameData")(Object(g.c)(He)),Be=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.gameData;return r.a.createElement(te,Object.assign({},this.props,{store:e.audienceStore,title:r.a.createElement(r.a.Fragment,null,"Who is the intended ",r.a.createElement("span",{className:"title-emphasis"},"audience")," for this project?"),description:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Visualizing your audience/user will help develop your project."),r.a.createElement("p",null,"EX: Elementary School Student, Millenials, Carpenters, etc."),r.a.createElement("p",null,"Type in your choice of audience below.")),stepNumber:"7"}))}}]),t}(r.a.Component),Qe=(Object(g.b)("gameData")(Object(g.c)(Be)),a(38)),Te=a.n(Qe),Ue=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).getNextCombination=function(){a.setState(function(e){return{combinationNumber:e.combinationNumber+1}})},a.props.gameData.generateCombinations(),a.state={combinationNumber:0},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.gameData.saveToFirebase()}},{key:"render",value:function(){var e=this.props.gameData,t=this.state.combinationNumber,a=e.combinations,n=Object(ue.a)(a[t%a.length],2),o=n[0],s=n[1],i=e.passionStore.responses[o];e.getPurposesWithVerb()[s];return r.a.createElement(T,null,r.a.createElement("div",{className:"step-count"},"Step 6/6"),r.a.createElement("h1",{className:"title"},"Define"),r.a.createElement("div",{className:"description"},"Let\u2019s combine your action and medium to define your project!"),r.a.createElement("div",{className:Te.a.generatedQuestion},"How might we use ",r.a.createElement("span",{className:Te.a.generatedPassion},i)," to"," ",r.a.createElement("span",{className:Te.a.generatedPurpose},e.purpose),"? ",r.a.createElement("br",null),"Let's make a ",r.a.createElement("span",{className:Te.a.generatedPassion},e.medium)," to"," ",r.a.createElement("span",{className:Te.a.generatedPassion},e.action),".",r.a.createElement("div",{className:Te.a.generateButtonContainer})))}}]),t}(r.a.Component),We=Object(g.b)("gameData")(Object(g.c)(Ue)),Ge=[{key:"home",path:"/",exact:!0,Component:function(e){return r.a.createElement(T,null,r.a.createElement("h1",{className:"title"},"Imagine"),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,"How can you make something meaningful?"),r.a.createElement("p",null,"Go through the various steps of the design process.")),r.a.createElement("div",{className:"text-center"},r.a.createElement(J.a,{className:"button",to:e.nextRoute},"Let's Get Started \u279e")),r.a.createElement(X,{style:{marginTop:"2rem",textAlign:"center"}}))}},{key:"passion",path:"/passion",Component:ne},{key:"purpose",path:"/purpose",Component:me},{key:"generator",path:"/generator",Component:Ae},{key:"action",path:"/action",Component:Re},{key:"medium",path:"/medium",Component:Je},{key:"makegenerator",path:"/make-generator",Component:We}],ze=Ge.reduce(function(e,t){return e[t.key]=t,e},{}),qe=a(148),Ke=a.n(qe),Xe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onMouseDown=function(e){e.preventDefault(),a.props.onMouseDown&&a.props.onMouseDown()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.onClick,n=e.children,o=Object(i.a)(e,["className","onClick","children"]);return r.a.createElement("button",Object.assign({onMouseDown:this.onMouseDown,onClick:a,className:oe()(Ke.a.button,t)},o),n)}}]),t}(n.PureComponent);function Ye(){return(Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var $e=r.a.createElement("title",null,"restart"),et=function(e){return r.a.createElement("svg",Ye({id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 512 512"},e),$e,r.a.createElement("path",{d:"M255.74,112.05a143.49,143.49,0,0,0-99.18,39.87l-20.73-20.73A13.93,13.93,0,0,0,112.05,141v77.81A13.93,13.93,0,0,0,126,232.78H203.8A13.93,13.93,0,0,0,213.65,209l-24.24-24.23a96.84,96.84,0,0,1,65.73-26.28c53.63-.46,98.83,42.94,98.37,98.35-.44,52.56-43.06,96.67-97.51,96.67a96.79,96.79,0,0,1-64.21-24.12,7,7,0,0,0-9.5.32l-23,23a7,7,0,0,0,.28,10.12A143.94,143.94,0,0,0,400,256C400,176.59,335.14,111.91,255.74,112.05Z",style:{fill:"#fff"}}))};a.p;function tt(){return(tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var at=r.a.createElement("title",null,"back"),nt=function(e){return r.a.createElement("svg",tt({id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 512 512"},e),at,r.a.createElement("path",{d:"M391.67,234.41v43.23a13,13,0,0,1-13,13H253.31V363c0,11.56-13.94,17.29-22.16,9.18l-107-107a13,13,0,0,1,0-18.37l107-107A13,13,0,0,1,253.31,149v72.42H378.7A13,13,0,0,1,391.67,234.41Z",style:{fill:"#fff"}}))},rt=(a.p,a(79)),ot=a.n(rt),st=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.disabled,a=void 0!==t&&t,n=e.onBack,o=e.onRestart;return r.a.createElement("nav",{className:ot.a.nav},r.a.createElement(Xe,{className:ot.a.back,disabled:a,onClick:n},r.a.createElement(nt,null)),r.a.createElement(Xe,{className:ot.a.restart,disabled:a,onClick:o},r.a.createElement(et,null)))}}]),t}(n.PureComponent),it=a(8),ct=a(80),lt=a.n(ct),mt=(a(260),lt.a.database.ServerValue.TIMESTAMP);lt.a.initializeApp({apiKey:"AIzaSyDR7oVEHOfGiwmeK-UvRKvQAjDBiEXEfHc",authDomain:"p2p-demo-7453f.firebaseapp.com",databaseURL:"https://p2p-demo-7453f.firebaseio.com",projectId:"p2p-demo-7453f",storageBucket:"p2p-demo-7453f.appspot.com",messagingSenderId:"774495015841"});var ut=new(function(){function e(t){Object(c.a)(this,e),this.db=t}return Object(l.a)(e,[{key:"getResponseRef",value:function(e,t){return this.db.ref("rooms/".concat(t,"/").concat(e,"/responses")).push()}},{key:"saveResponses",value:function(e,t,a,n,r,o){var s=e.set({passions:n,purposes:r,timestamp:mt,combinations:o}),i=this.db.ref("roomDirectory/".concat(a,"/").concat(t,"/updatedAt")).set(mt);return Promise.all([s,i])}}]),e}())(lt.a.database()),pt=a(149),ht=a.n(pt),dt=a(150),bt=a.n(dt),ft=function(){function e(t){Object(c.a)(this,e),this.setSeed(t)}return Object(l.a)(e,[{key:"setSeed",value:function(e){this.rng=bt()(e)}},{key:"number",value:function(e,t){return this.rng()*(t-e)+e}},{key:"int",value:function(e,t){return Math.floor(this.rng()*(t-e+1)+e)}}]),e}();function vt(e,t){return Array(t-e).fill(0).map(function(t,a){return a+e})}function gt(e,t,a){var n=[];return e.forEach(function(e){t.forEach(function(t){n.push([e,t])})}),function(e,t){for(var a=new ft(t),n=e.length-1;n>0;n-=1){var r=a.int(0,n),o=e[n];e[n]=e[r],e[r]=o}}(n,a),n}var Et=function(e){return new Array(e).fill("")},Ot=function(e){return""!==e},yt="1.1.0".replace(/\./g,"-"),jt=function(){function e(){var t=this;Object(c.a)(this,e),this.generateCombinations=Object(it.d)(function(){var e=vt(0,t.passionStore.numQuestions),a=vt(0,t.purposeStore.numQuestions),n=vt(0,t.mediumStore.numQuestions);vt(0,t.actionStore.numQuestions),vt(0,t.audienceStore.numQuestions);t.combinations=gt(e,a,n)}),this.setMedium=Object(it.d)(function(e){t.medium=e}),this.setAction=Object(it.d)(function(e){t.action=e}),this.setPurpose=Object(it.d)(function(e){t.purpose=e}),this.setPassion=Object(it.d)(function(e){t.passion=e}),this.setUserPermission=Object(it.d)(function(e){t.hasUserPermission=e}),Object(it.g)(this,{lastSaved:null,hasUserPermission:!0,gameRoom:V(),combinations:[],medium:"",action:"",passion:"",purpose:""}),this.passionStore=new _t(this,["I like to make","I have a background in","I spend my time"]),this.purposeStore=new _t(this,["I want to say something about","I want to challenge","I want to express that"]),this.actionStore=new _t(this,["I want to"]),this.mediumStore=new _t(this,[""]),this.audienceStore=new _t(this,[""])}return Object(l.a)(e,[{key:"saveToFirebase",value:function(){if(this.hasUserPermission){var e={passions:this.passionStore.toJSON(),purposes:this.purposeStore.toJSON(),actions:this.actionStore.toJSON(),mediums:this.mediumStore.toJSON(),audiences:this.audienceStore.toJSON()};if(!ht()(e,this.lastSaved)){var t=JSON.stringify(this.combinations);this.responseRef=ut.getResponseRef(yt,this.gameRoom),ut.saveResponses(this.responseRef,yt,this.gameRoom,e.passions,e.purposes,e.actions,e.mediums,e.audiences,t).catch(console.log),this.lastSaved=e}}}},{key:"getPurposesWithVerb",value:function(){var e=this;return this.purposeStore.responses.map(function(t,a){return e.purposeStore.questions[a].replace("I want to ","")+" "+t})}},{key:"reset",value:function(){this.passionStore.reset(),this.purposeStore.reset(),this.actionStore.reset(),this.mediumStore.reset(),this.audienceStore.reset()}},{key:"toJSON",value:function(){return{passions:this.passionStore.toJSON(),purposes:this.purposeStore.toJSON(),actions:this.actionStore.toJSON(),mediums:this.mediumStore.toJSON(),audiences:this.audienceStore.toJSON(),hasUserPermission:this.hasUserPermission,lastSaved:this.lastSaved}}},{key:"fromJSON",value:function(e){e.passions&&this.passionStore.fromJSON(e.passions),e.purposes&&this.purposeStore.fromJSON(e.purposes),e.actions&&this.actionStore.fromJSON(e.actions),e.mediums&&this.mediumStore.fromJSON(e.mediums),e.audiences&&this.audienceStore.fromJSON(e.audiences),e.lastSaved&&(this.lastSaved=e.lastSaved),void 0!==e.hasUserPermission&&(this.hasUserPermission=e.hasUserPermission)}}]),e}(),_t=function(){function e(t,a){var n=this;Object(c.a)(this,e),this.setResponse=Object(it.d)(function(e,t){n.responses[e]=t}),this.setResponses=Object(it.d)(function(e){n.responses=e}),this.reset=Object(it.d)(function(){n.responses=Et(n.numQuestions)}),this.rootStore=t,this.questions=a,this.numQuestions=a.length,Object(it.g)(this,{responses:Et(this.numQuestions)})}return Object(l.a)(e,[{key:"getQuestions",value:function(){return this.questions}},{key:"isResponseValid",value:function(e){return Ot(this.responses[e])}},{key:"areAllResponsesValid",value:function(){return this.responses.every(Ot)}},{key:"toJSON",value:function(){return this.responses.slice()}},{key:"fromJSON",value:function(e){e.length&&this.setResponses(e.slice(0,this.numQuestions))}}]),e}(),Nt=new jt,kt=Object(h.a)(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).goBack=function(){return a.props.history.goBack()},a.restart=function(){return a.props.history.push(ze.home.path)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.location;return r.a.createElement(g.a,{gameData:Nt},r.a.createElement(C,null,r.a.createElement(st,{disabled:e.pathname===ze.home.path,onBack:this.goBack,onRestart:this.restart}),r.a.createElement(H,{dummyLog:!1,trackingId:"UA-114340105-6",gameStartRoute:ze.home.path,gameEndRoute:ze.generator.path}),r.a.createElement(k,{pageKey:e.pathname},r.a.createElement(d.a,{location:e},Ge.map(function(e,t){var a=t<Ge.length-1?Ge[t+1].path:Ge[0].path,n=e.key,o=e.path,s=e.Component,c=Object(i.a)(e,["key","path","Component"]);return r.a.createElement(b.a,Object.assign({key:n,path:o},c,{render:function(e){return r.a.createElement(s,Object.assign({nextRoute:a},e))}}))}),r.a.createElement(f.a,{to:ze.home.path})))))}}]),t}(n.Component)),St=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(kt,null))}}]),t}(n.Component);a(272),a(273),a(274);s.a.render(r.a.createElement(St,null),document.getElementById("root"))},28:function(e,t,a){e.exports={callToAction:"social-share_callToAction__3hfEH",shareButtons:"social-share_shareButtons__1xQ8l",shareButton:"social-share_shareButton__3k77f"}},38:function(e,t,a){e.exports={generatedQuestion:"make-generator_generatedQuestion__3DRsV",generatedPassion:"make-generator_generatedPassion__2N_k_",generatedPurpose:"make-generator_generatedPurpose__2E9NS",generateButtonContainer:"make-generator_generateButtonContainer__28Ylh"}},56:function(e,t,a){e.exports={generatedQuestion:"generator_generatedQuestion__1TA3x",generatedPassion:"generator_generatedPassion__2-KRv",generatedPurpose:"generator_generatedPurpose__12o4J",generateButtonContainer:"generator_generateButtonContainer__21FDQ"}},74:function(e,t,a){e.exports={logo:"attribution_logo__GMN10",logoLink:"attribution_logoLink__2or6t",attributionText:"attribution_attributionText__1qTrd"}},75:function(e,t,a){e.exports={input:"checkbox_input__HdePS",label:"checkbox_label__2genq",labelChecked:"checkbox_labelChecked__3V4o6"}},77:function(e,t,a){e.exports={form:"action-prompt-template_form__15QY6",formError:"action-prompt-template_formError__n25Pk",prompt:"action-prompt-template_prompt__2VkiZ",promptLabel:"action-prompt-template_promptLabel__1u1Rf",promptLabelNumber:"action-prompt-template_promptLabelNumber__2Kojz",promptInput:"action-prompt-template_promptInput__2caAI"}},78:function(e,t,a){e.exports={form:"medium-prompt-template_form__3QXxs",formError:"medium-prompt-template_formError__2qMl0",prompt:"medium-prompt-template_prompt__18iFd",promptLabel:"medium-prompt-template_promptLabel__1HYdS",promptLabelNumber:"medium-prompt-template_promptLabelNumber__16HoU",promptInput:"medium-prompt-template_promptInput__3bUJC"}},79:function(e,t,a){e.exports={nav:"nav_nav__18nSB",back:"nav_back__r7a2I",restart:"nav_restart__2p_Cs"}}},[[151,1,2]]]);
//# sourceMappingURL=main.635552f7.chunk.js.map