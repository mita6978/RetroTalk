function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"ct+p":function(t,n,e){"use strict";e.r(n);var a,i,o,r=e("ofXK"),s=e("tyNb"),c=e("fXoL"),l=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=c.Gb({type:i,selectors:[["app-account"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Rb(0,"p"),c.Ac(1,"account works!"),c.Qb())},styles:[""]}),i),d=((a=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=c.Gb({type:a,selectors:[["app-about"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Rb(0,"p"),c.Ac(1,"about works!"),c.Qb())},styles:[""]}),a),b=e("1kSV"),u=((o=function(){function t(n){_classCallCheck(this,t),this.activeModal=n}return _createClass(t,[{key:"ngOnInit",value:function(){console.log("I ran")}}]),t}()).\u0275fac=function(t){return new(t||o)(c.Mb(b.a))},o.\u0275cmp=c.Gb({type:o,selectors:[["app-make-call"]],inputs:{name:"name"},decls:78,vars:0,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body","retro-modal-body","modal-table"],["colspan","3"],["src","../../../assets/profile.jpeg"],[1,"btn","btn-primary"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"]],template:function(t,n){1&t&&(c.Rb(0,"div",0),c.Rb(1,"h4",1),c.Ac(2,"Who do you want to call?"),c.Qb(),c.Rb(3,"button",2),c.dc("click",(function(){return n.activeModal.dismiss("Cross click")})),c.Rb(4,"span",3),c.Ac(5,"\xd7"),c.Qb(),c.Qb(),c.Qb(),c.Rb(6,"div",4),c.Rb(7,"table"),c.Rb(8,"tr"),c.Rb(9,"th",5),c.Ac(10,"Contacts"),c.Qb(),c.Qb(),c.Rb(11,"tr"),c.Rb(12,"td"),c.Nb(13,"img",6),c.Qb(),c.Rb(14,"td"),c.Ac(15," Contact 1 "),c.Qb(),c.Rb(16,"td"),c.Rb(17,"button",7),c.Ac(18,"Call"),c.Qb(),c.Qb(),c.Qb(),c.Rb(19,"tr"),c.Rb(20,"td"),c.Nb(21,"img",6),c.Qb(),c.Rb(22,"td"),c.Ac(23," Contact 2 "),c.Qb(),c.Rb(24,"td"),c.Rb(25,"button",7),c.Ac(26,"Call"),c.Qb(),c.Qb(),c.Qb(),c.Rb(27,"tr"),c.Rb(28,"td"),c.Nb(29,"img",6),c.Qb(),c.Rb(30,"td"),c.Ac(31," Contact 3 "),c.Qb(),c.Rb(32,"td"),c.Rb(33,"button",7),c.Ac(34,"Call"),c.Qb(),c.Qb(),c.Qb(),c.Rb(35,"tr"),c.Rb(36,"td"),c.Nb(37,"img",6),c.Qb(),c.Rb(38,"td"),c.Ac(39," Contact 4 "),c.Qb(),c.Rb(40,"td"),c.Rb(41,"button",7),c.Ac(42,"Call"),c.Qb(),c.Qb(),c.Qb(),c.Rb(43,"tr"),c.Rb(44,"td"),c.Nb(45,"img",6),c.Qb(),c.Rb(46,"td"),c.Ac(47," Contact 5 "),c.Qb(),c.Rb(48,"td"),c.Rb(49,"button",7),c.Ac(50,"Call"),c.Qb(),c.Qb(),c.Qb(),c.Rb(51,"tr"),c.Rb(52,"td"),c.Nb(53,"img",6),c.Qb(),c.Rb(54,"td"),c.Ac(55," Contact 6 "),c.Qb(),c.Rb(56,"td"),c.Rb(57,"button",7),c.Ac(58,"Call"),c.Qb(),c.Qb(),c.Qb(),c.Rb(59,"tr"),c.Rb(60,"td"),c.Nb(61,"img",6),c.Qb(),c.Rb(62,"td"),c.Ac(63," Contact 7 "),c.Qb(),c.Rb(64,"td"),c.Rb(65,"button",7),c.Ac(66,"Call"),c.Qb(),c.Qb(),c.Qb(),c.Rb(67,"tr"),c.Rb(68,"td"),c.Nb(69,"img",6),c.Qb(),c.Rb(70,"td"),c.Ac(71," Contact 8 "),c.Qb(),c.Rb(72,"td"),c.Rb(73,"button",7),c.Ac(74,"Call"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(75,"div",8),c.Rb(76,"button",9),c.dc("click",(function(){return n.activeModal.close("Close click")})),c.Ac(77,"Close"),c.Qb(),c.Qb())},styles:[".dark-modal .modal-content{background-color:#292b2c;color:#fff}.dark-modal .close{color:#fff}.light-blue-backdrop{background-color:#5cb3fd}.retro-modal-body{min-height:200px;max-height:400px;overflow-y:auto;font-family:Retro Nouveau}.modal-table img{border-radius:70%;border:2px solid #000;width:50px;height:50px}.modal-table td,.modal-table th{padding:10px 10px 5px 20px}.modal-table th{font-size:20px}.modal-table tr{border-bottom:1px solid #ccc}.modal-table table{width:100%}"],encapsulation:2}),o),m=["video"],h=["chatOrb"],g=["aboutOrb"],f=["codeOrb"],p=["blankVideoBG"],O=["phoneCallVid"],v=["phoneRingMP3"],C=["arthurOfflineImg"],I=["arthurOnlineImg"],R=["arthurCallingImg"],k=["starmanOnlineImg"],L=["starmanOfflineImg"],Q=["starmanCallingImg"];function _(t,n){if(1&t){var e=c.Sb();c.Rb(0,"div",26),c.Rb(1,"div",27),c.Rb(2,"div",28),c.Rb(3,"div",29),c.Ac(4,"\xa0"),c.Qb(),c.Qb(),c.Qb(),c.Rb(5,"div",27),c.Rb(6,"div",30),c.Rb(7,"div",31),c.Rb(8,"img",32),c.dc("load",(function(){return c.sc(e),c.fc().pageLoaded()})),c.Qb(),c.Nb(9,"img",33),c.Nb(10,"video",34,35),c.Qb(),c.Qb(),c.Qb(),c.Rb(12,"div",27),c.Rb(13,"div",36),c.Rb(14,"button",37),c.Ac(15,"START CALL "),c.Nb(16,"i",38),c.Qb(),c.Qb(),c.Rb(17,"div",39),c.Rb(18,"button",40),c.Ac(19,"END CALL "),c.Nb(20,"i",41),c.Qb(),c.Qb(),c.Qb(),c.Rb(21,"div",27),c.Nb(22,"div",42),c.Qb(),c.Qb()}}function y(t,n){1&t&&c.Nb(0,"img",43)}var E,N,M=((N=function(){function t(n){_classCallCheck(this,t),this.modalService=n,this.chatOrbLoaded=!1,this.aboutOrbLoaded=!1,this.codeOrbLoaded=!1,this.blankVideoBGLoaded=!1,this.phoneCallVidLoaded=!1,this.phoneRingMP3Loaded=!1,this.arthurOfflineImgLoaded=!1,this.arthurOnlineImgLoaded=!1,this.arthurCallingImgLoaded=!1,this.starmanOnlineImgLoaded=!1,this.starmanOfflineImgLoaded=!1,this.starmanCallingImgLoaded=!1}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var t=this;this.chatOrb.nativeElement.onload=function(){t.chatOrbLoaded=!0},this.aboutOrb.nativeElement.onload=function(){t.aboutOrbLoaded=!0},this.codeOrb.nativeElement.onload=function(){t.codeOrbLoaded=!0},this.blankVideoBG.nativeElement.onload=function(){t.blankVideoBGLoaded=!0},this.phoneCallVid.nativeElement.onloadeddata=function(){t.phoneCallVidLoaded=!0},this.phoneRingMP3.nativeElement.onloadeddata=function(){t.phoneRingMP3Loaded=!0},this.arthurOfflineImg.nativeElement.onload=function(){t.arthurOfflineImgLoaded=!0},this.arthurOnlineImg.nativeElement.onload=function(){t.arthurOnlineImgLoaded=!0},this.arthurCallingImg.nativeElement.onload=function(){t.arthurCallingImgLoaded=!0},this.starmanOnlineImg.nativeElement.onload=function(){t.starmanOnlineImgLoaded=!0},this.starmanOfflineImg.nativeElement.onload=function(){t.starmanOfflineImgLoaded=!0},this.starmanCallingImg.nativeElement.onload=function(){t.starmanCallingImgLoaded=!0}}},{key:"pageLoaded",value:function(){this.video.nativeElement.play()}},{key:"open",value:function(){this.modalService.open(u).componentInstance.name="World"}},{key:"showLoader",get:function(){return!1===this.chatOrbLoaded||!1===this.aboutOrbLoaded||!1===this.codeOrbLoaded||!1===this.blankVideoBGLoaded||!1===this.phoneCallVidLoaded||!1===this.phoneRingMP3Loaded||!1===this.arthurOfflineImgLoaded||!1===this.arthurOnlineImgLoaded||!1===this.arthurCallingImgLoaded||!1===this.starmanOfflineImgLoaded||!1===this.starmanOnlineImgLoaded}}]),t}()).\u0275fac=function(t){return new(t||N)(c.Mb(b.b))},N.\u0275cmp=c.Gb({type:N,selectors:[["app-chat"]],viewQuery:function(t,n){var e;1&t&&(c.Ec(m,!0),c.Ec(h,!0),c.Ec(g,!0),c.Ec(f,!0),c.Ec(p,!0),c.Ec(O,!0),c.Ec(v,!0),c.Ec(C,!0),c.Ec(I,!0),c.Ec(R,!0),c.Ec(k,!0),c.Ec(L,!0),c.Ec(Q,!0)),2&t&&(c.qc(e=c.ec())&&(n.video=e.first),c.qc(e=c.ec())&&(n.chatOrb=e.first),c.qc(e=c.ec())&&(n.aboutOrb=e.first),c.qc(e=c.ec())&&(n.codeOrb=e.first),c.qc(e=c.ec())&&(n.blankVideoBG=e.first),c.qc(e=c.ec())&&(n.phoneCallVid=e.first),c.qc(e=c.ec())&&(n.phoneRingMP3=e.first),c.qc(e=c.ec())&&(n.arthurOfflineImg=e.first),c.qc(e=c.ec())&&(n.arthurOnlineImg=e.first),c.qc(e=c.ec())&&(n.arthurCallingImg=e.first),c.qc(e=c.ec())&&(n.starmanOnlineImg=e.first),c.qc(e=c.ec())&&(n.starmanOfflineImg=e.first),c.qc(e=c.ec())&&(n.starmanCallingImg=e.first))},decls:26,vars:2,consts:[["class","container",4,"ngIf"],["src","../../assets/loader1.gif","class","tv-loader",4,"ngIf"],["src","../../assets/blank_video_bg.jpg","hidden",""],["blankVideoBG",""],["src","../../assets/chat/phone_call_final.mp4","hidden","","preload","auto"],["phoneCallVid",""],["src","../../assets/chat/phone_ring.mp3","hidden","","preload","auto"],["phoneRingMP3",""],["src","../../assets/chat/arthur_offline.png","hidden","",1,"user-status"],["arthurOfflineImg",""],["src","../../assets/chat/arthur_online.png","hidden","",1,"user-status"],["arthurOnlineImg",""],["src","../../assets/chat/arthur_calling.png","hidden","",1,"user-status"],["arthurCallingImg",""],["src","../../assets/chat/starman_online.png","hidden","",1,"user-status"],["starmanOnlineImg",""],["src","../../assets/chat/starman_offline.png","hidden","",1,"user-status"],["starmanOfflineImg",""],["src","../../assets/chat/starman_calling.png","hidden","",1,"user-status"],["starmanCallingImg",""],["src","../../assets/menu/chat.gif","hidden",""],["chatOrb",""],["src","../../assets/menu/about.gif","hidden",""],["aboutOrb",""],["src","../../assets/menu/docs.gif","hidden",""],["codeOrb",""],[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"header-buffer"],[1,"col-sm-12","text-center"],[1,"big-tv-container"],["src","../../assets/tv_overlay.png",1,"tv-overlay",3,"load"],["src","../../assets/chat/arthur_calling.png",1,"user-status"],["poster","../../../assets/blank_video_bg.jpg","src","../../assets/chat/waiting_video_final.mp4","loop","",1,"video"],["video",""],[1,"col-sm-4","offset-sm-1","text-center"],["type","button",1,"btn","btn-success","btn-lg"],[1,"fa","fa-phone"],[1,"col-sm-4","offset-sm-2","text-center"],["type","button",1,"btn","btn-danger","btn-lg"],[1,"fa","fa-times"],[1,"col-sm-12","footer-buffer"],["src","../../assets/loader1.gif",1,"tv-loader"]],template:function(t,n){1&t&&(c.yc(0,_,23,0,"div",0),c.yc(1,y,1,0,"img",1),c.Nb(2,"img",2,3),c.Nb(4,"video",4,5),c.Nb(6,"audio",6,7),c.Nb(8,"img",8,9),c.Nb(10,"img",10,11),c.Nb(12,"img",12,13),c.Nb(14,"img",14,15),c.Nb(16,"img",16,17),c.Nb(18,"img",18,19),c.Nb(20,"img",20,21),c.Nb(22,"img",22,23),c.Nb(24,"img",24,25)),2&t&&(c.kc("ngIf",!n.showLoader),c.zb(1),c.kc("ngIf",n.showLoader))},directives:[r.j],styles:[".header-buffer[_ngcontent-%COMP%]{height:20px;width:100%}.footer-buffer[_ngcontent-%COMP%]{height:50px;width:100%}"]}),N),w=((E=function(){function t(n){_classCallCheck(this,t),this.activeModal=n}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||E)(c.Mb(b.a))},E.\u0275cmp=c.Gb({type:E,selectors:[["app-answer-call-modal"]],inputs:{name:"name"},decls:13,vars:0,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["src","../../../../assets/placeholder_tv.png"],["type","button",1,"btn","btn-outline-light","btn-success",3,"click"],["type","button",1,"btn","btn-outline-light","btn-danger",3,"click"]],template:function(t,n){1&t&&(c.Rb(0,"div",0),c.Rb(1,"h4",1),c.Ac(2,"Incoming Call"),c.Qb(),c.Rb(3,"button",2),c.dc("click",(function(){return n.activeModal.dismiss("Cross click")})),c.Rb(4,"span",3),c.Ac(5,"\xd7"),c.Qb(),c.Qb(),c.Qb(),c.Rb(6,"div",4),c.Nb(7,"img",5),c.Rb(8,"div"),c.Rb(9,"button",6),c.dc("click",(function(){return n.activeModal.close("Close click")})),c.Ac(10,"Accept"),c.Qb(),c.Rb(11,"button",7),c.dc("click",(function(){return n.activeModal.close("Close click")})),c.Ac(12,"Decline"),c.Qb(),c.Qb(),c.Qb())},styles:[".dark-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{background-color:#292b2c;color:#fff}.dark-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#fff}.light-blue-backdrop[_ngcontent-%COMP%]{background-color:#5cb3fd}.modal-body[_ngcontent-%COMP%]{text-align:center;font-family:Retro Nouveau}.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:7px;display:inline-block;font-size:20px;padding-left:40px;padding-right:40px;margin:10px 20px}.modal-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;width:300px;padding:20px}"]}),E),A=["chatOrb"],P=["aboutOrb"],x=["codeOrb"],V=["blankVideoBG"],q=["phoneCallVid"],G=["phoneRingMP3"],B=["arthurOfflineImg"],j=["arthurOnlineImg"],S=["arthurCallingImg"],T=["starmanOnlineImg"],z=["starmanOfflineImg"],J=["starmanCallingImg"];function W(t,n){1&t&&(c.Rb(0,"div",25),c.Rb(1,"div",26),c.Rb(2,"a",27),c.Nb(3,"img",28),c.Qb(),c.Rb(4,"a",29),c.Nb(5,"img",30),c.Qb(),c.Nb(6,"img",31),c.Qb(),c.Qb())}var D,K=((D=function(){function t(n){_classCallCheck(this,t),this.modalService=n,this.chatOrbLoaded=!1,this.aboutOrbLoaded=!1,this.codeOrbLoaded=!1,this.blankVideoBGLoaded=!1,this.phoneCallVidLoaded=!1,this.phoneRingMP3Loaded=!1,this.arthurOfflineImgLoaded=!1,this.arthurOnlineImgLoaded=!1,this.arthurCallingImgLoaded=!1,this.starmanOnlineImgLoaded=!1,this.starmanOfflineImgLoaded=!1,this.starmanCallingImgLoaded=!1}return _createClass(t,[{key:"ngAfterViewInit",value:function(){var t=this;this.chatOrb.nativeElement.onload=function(){t.chatOrbLoaded=!0},this.aboutOrb.nativeElement.onload=function(){t.aboutOrbLoaded=!0},this.codeOrb.nativeElement.onload=function(){t.codeOrbLoaded=!0},this.blankVideoBG.nativeElement.onload=function(){t.blankVideoBGLoaded=!0},this.phoneCallVid.nativeElement.onloadeddata=function(){t.phoneCallVidLoaded=!0},this.phoneRingMP3.nativeElement.onloadeddata=function(){t.phoneRingMP3Loaded=!0},this.arthurOfflineImg.nativeElement.onload=function(){t.arthurOfflineImgLoaded=!0},this.arthurOnlineImg.nativeElement.onload=function(){t.arthurOnlineImgLoaded=!0},this.arthurCallingImg.nativeElement.onload=function(){t.arthurCallingImgLoaded=!0},this.starmanOnlineImg.nativeElement.onload=function(){t.starmanOnlineImgLoaded=!0},this.starmanOfflineImg.nativeElement.onload=function(){t.starmanOfflineImgLoaded=!0},this.starmanCallingImg.nativeElement.onload=function(){t.starmanCallingImgLoaded=!0}}},{key:"open",value:function(){this.modalService.open(w).componentInstance.name="World"}},{key:"showMenu",get:function(){return!0===this.chatOrbLoaded&&!0===this.aboutOrbLoaded&&!0===this.codeOrbLoaded&&!0===this.blankVideoBGLoaded&&!0===this.phoneCallVidLoaded&&!0===this.phoneRingMP3Loaded&&!0===this.arthurOfflineImgLoaded&&!0===this.arthurOnlineImgLoaded&&!0===this.arthurCallingImgLoaded&&!0===this.starmanOfflineImgLoaded&&!0===this.starmanCallingImgLoaded&&!0===this.starmanOnlineImgLoaded}}]),t}()).\u0275fac=function(t){return new(t||D)(c.Mb(b.b))},D.\u0275cmp=c.Gb({type:D,selectors:[["app-home"]],viewQuery:function(t,n){var e;1&t&&(c.Ec(A,!0),c.Ec(P,!0),c.Ec(x,!0),c.Ec(V,!0),c.Ec(q,!0),c.Ec(G,!0),c.Ec(B,!0),c.Ec(j,!0),c.Ec(S,!0),c.Ec(T,!0),c.Ec(z,!0),c.Ec(J,!0)),2&t&&(c.qc(e=c.ec())&&(n.chatOrb=e.first),c.qc(e=c.ec())&&(n.aboutOrb=e.first),c.qc(e=c.ec())&&(n.codeOrb=e.first),c.qc(e=c.ec())&&(n.blankVideoBG=e.first),c.qc(e=c.ec())&&(n.phoneCallVid=e.first),c.qc(e=c.ec())&&(n.phoneRingMP3=e.first),c.qc(e=c.ec())&&(n.arthurOfflineImg=e.first),c.qc(e=c.ec())&&(n.arthurOnlineImg=e.first),c.qc(e=c.ec())&&(n.arthurCallingImg=e.first),c.qc(e=c.ec())&&(n.starmanOnlineImg=e.first),c.qc(e=c.ec())&&(n.starmanOfflineImg=e.first),c.qc(e=c.ec())&&(n.starmanCallingImg=e.first))},decls:26,vars:1,consts:[["style","width:100%; text-align: center;",4,"ngIf"],["src","../../../assets/blank_video_bg.jpg","hidden",""],["blankVideoBG",""],["src","../../../assets/chat/phone_call_final.mp4","hidden","","preload","auto"],["phoneCallVid",""],["src","../../../assets/chat/phone_ring.mp3","hidden","","preload","auto"],["phoneRingMP3",""],["src","../../../assets/chat/arthur_offline.png","hidden","",1,"user-status"],["arthurOfflineImg",""],["src","../../../assets/chat/arthur_online.png","hidden","",1,"user-status"],["arthurOnlineImg",""],["src","../../../assets/chat/arthur_calling.png","hidden","",1,"user-status"],["arthurCallingImg",""],["src","../../../assets/chat/starman_online.png","hidden","",1,"user-status"],["starmanOnlineImg",""],["src","../../../assets/chat/starman_offline.png","hidden","",1,"user-status"],["starmanOfflineImg",""],["src","../../../assets/chat/starman_calling.png","hidden","",1,"user-status"],["starmanCallingImg",""],["src","../../../assets/menu/chat.gif","hidden",""],["chatOrb",""],["src","../../../assets/menu/about.gif","hidden",""],["aboutOrb",""],["src","../../../assets/menu/docs.gif","hidden",""],["codeOrb",""],[2,"width","100%","text-align","center"],[1,"retro-menu"],["routerLink","/home/chat"],["src","../../../assets/menu/chat.gif"],["routerLink","/home/about"],["src","../../../assets/menu/about.gif"],["src","../../../assets/menu/docs.gif"]],template:function(t,n){1&t&&(c.yc(0,W,7,0,"div",0),c.Nb(1,"router-outlet"),c.Nb(2,"img",1,2),c.Nb(4,"video",3,4),c.Nb(6,"audio",5,6),c.Nb(8,"img",7,8),c.Nb(10,"img",9,10),c.Nb(12,"img",11,12),c.Nb(14,"img",13,14),c.Nb(16,"img",15,16),c.Nb(18,"img",17,18),c.Nb(20,"img",19,20),c.Nb(22,"img",21,22),c.Nb(24,"img",23,24)),2&t&&c.kc("ngIf",n.showMenu)},directives:[r.j,s.d,s.b],styles:[".retro-menu[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:15px;width:552px;display:inline-block;background-image:url(menu-bar-bg.f8f816a5dbd13696d846.png);background-repeat:no-repeat;background-position:50%}.retro-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;margin-left:50px;margin-right:25px;border:3px solid #282310;-webkit-transition:all 1s;transition:all 1s}.retro-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{border-color:#ff3603;-webkit-transform:scale(1.2);transform:scale(1.2)}"]}),D);e.d(n,"HomeModule",(function(){return F}));var X,H=[{path:"",component:K,children:[{path:"chat",component:M},{path:"about",component:d},{path:"account",component:l},{path:"",redirectTo:"/home/chat",pathMatch:"full"}]}],F=((X=function t(){_classCallCheck(this,t)}).\u0275mod=c.Kb({type:X}),X.\u0275inj=c.Jb({factory:function(t){return new(t||X)},imports:[[s.c.forChild(H),r.b]]}),X)}}]);