function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{X3zk:function(n,t,e){"use strict";e.r(t);var o,i=e("tyNb"),r=e("ofXK"),a=e("ahC7"),c=e("fXoL"),l=((o=function(){function n(t){_classCallCheck(this,n),this.authService=t}return _createClass(n,[{key:"ngOnInit",value:function(){this.authService.authState.subscribe((function(n){console.log(n)}))}},{key:"signInWithFB",value:function(){this.authService.signIn(a.a.PROVIDER_ID)}}]),n}()).\u0275fac=function(n){return new(n||o)(c.Eb(a.b))},o.\u0275cmp=c.yb({type:o,selectors:[["app-login"]],decls:20,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-sm-9","col-md-7","col-lg-5","mx-auto"],[1,"card","card-signin","my-5"],[1,"card-body"],[1,"form-signin"],["src","../../assets/logo.png",1,"logo"],[1,"my-4"],["type","submit",1,"btn","btn-lg","btn-facebook","btn-block","text-uppercase",3,"click"],[1,"fab","fa-facebook-f","mr-2"],["href","http://retrotalk.herokuapp.com/privacypolicy.pdf","target","_blank",1,"policy"],["hidden",""],["src","../../assets/loader1.gif"]],template:function(n,t){1&n&&(c.Hb(0,"div",0),c.Hb(1,"div",1),c.Hb(2,"div",2),c.Hb(3,"div",3),c.Hb(4,"div",4),c.Hb(5,"form",5),c.Fb(6,"img",6),c.Fb(7,"br"),c.Hb(8,"p"),c.Sb(9,"Welcome to RetroTalk!"),c.Gb(),c.Fb(10,"hr",7),c.Hb(11,"button",8),c.Nb("click",(function(){return t.signInWithFB()})),c.Fb(12,"i",9),c.Sb(13," Sign in with Facebook"),c.Gb(),c.Gb(),c.Fb(14,"br"),c.Hb(15,"a",10),c.Hb(16,"p"),c.Sb(17,"Privacy Policy"),c.Gb(),c.Gb(),c.Hb(18,"div",11),c.Fb(19,"img",12),c.Gb(),c.Gb(),c.Gb(),c.Gb(),c.Gb(),c.Gb())},styles:["[_ngcontent-%COMP%]:root{--input-padding-x:1.5rem;--input-padding-y:.75rem}.logo[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}.policy[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{text-align:center;font-family:Retro Nouveau;color:#443d3c}.card-signin[_ngcontent-%COMP%]{border:0;border-radius:1rem;box-shadow:0 .5rem 1rem 0 rgba(0,0,0,.1)}.card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:2rem;font-weight:300;font-size:1.5rem}.card-signin[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:2rem}.form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-family:Retro Nouveau;font-size:80%;border-radius:5rem;letter-spacing:.1rem;font-weight:700;padding:1rem;-webkit-transition:all .2s;transition:all .2s}.btn-facebook[_ngcontent-%COMP%]{color:#fff;background-color:#3b5998}@supports (-ms-ime-align:auto){.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:none}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#777}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:none}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}}"]}),o);e.d(t,"LoginModule",(function(){return g}));var b,s=[{path:"",component:l}],g=((b=function n(){_classCallCheck(this,n)}).\u0275mod=c.Cb({type:b}),b.\u0275inj=c.Bb({factory:function(n){return new(n||b)},imports:[[i.a.forChild(s),r.b]]}),b)}}]);