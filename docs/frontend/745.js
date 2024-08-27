"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[745],{7745:(j,C,a)=>{a.r(C),a.d(C,{WalletWeb3Module:()=>k});var T=a(6895),c=a(4006),W=a(6630),B=a(4550),b=a(3546),w=a(4144),E=a(4859),x=a(7009),u=a(5861),M=a(5376),m=a(328),O=a(6003),h=a(4323),p=a(5159),g=a(2064),Z=a(4304),f=a(9978),t=a(4650),L=a(5004),A=a(1195),y=a(9549);function N(r,d){1&r&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"BTN_CONNECT_METAMASK")))}function S(r,d){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.AsE("",e.userData.address.substring(0,6),"...",e.userData.address.slice(-6),"")}}const{ethereum:U}=window,v="0x413744D59d31AFDC2889aeE602636177805Bd7b0";(0,Z.j)({autoConnect:!0,provider:(0,O.yl)()});let P=(()=>{class r{constructor(e,n,o){this.keysService=e,this.snackBarHelperService=n,this.changeDetectorRef=o,this.session=!1,this.walletBalance="0",this.myBEEBalance=0,this.inputAmount=null,this.successResponse=!1,this.mintButtonDisabled=!0,this.challengeSolved=!1,this.errorMessage="",this.metamaskAddress=""}ngOnInit(){this.handleAuth(),window.ethereum.on("chainChanged",this.handleChainChanged.bind(this))}handleChainChanged(e){var n=this;return(0,u.Z)(function*(){yield n.handleAuth()})()}depositETH(){var e=this;return(0,u.Z)(function*(){try{const o=new h.Q(window.ethereum).getSigner(),s=new p.CH(v,m.F1,o),l=e.inputAmount.toString();yield(yield s.ethdeposit(e.metamaskAddress,{value:g.parseEther(l)})).wait(),e.getUserEthBalance()}catch(n){e.errorMessage=n.message}})()}withdrawETH(){var e=this;return(0,u.Z)(function*(){try{const o=new h.Q(window.ethereum).getSigner(),s=new p.CH(v,m.F1,o),l=e.inputAmount.toString();yield(yield s.withdraw(g.parseEther(l))).wait(),e.getUserEthBalance()}catch(n){e.errorMessage=n.message}})()}getUserEthBalance(){var e=this;return(0,u.Z)(function*(){try{const o=new h.Q(window.ethereum).getSigner(),l=yield new p.CH(v,m.F1,o).balanceOf(e.metamaskAddress),i=g.formatEther(l);e.walletBalance=i}catch(n){e.errorMessage=n.message}})()}handleAuth(){var e=this;return(0,u.Z)(function*(){try{const{isConnected:n}=(0,f.D0)();if(n&&(yield(0,f.zP)()),!window.ethereum)return void e.snackBarHelperService.open("PLEASE_INSTALL_WEB3_WALLET","errorBar");const o=yield(0,f.$j)({connector:new Z.I});e.metamaskAddress=o.account,e.keysService.walletAddressSend(e.metamaskAddress).subscribe(i=>{i.success&&(e.successResponse=i.status,e.mintButtonDisabled=!0)},i=>{console.error(i)}),e.userData={address:o.account,chain:o.chain.id,network:"evm"},yield U.request({method:"wallet_addEthereumChain",params:[{chainId:"0xaa36a7",chainName:"Sepolia Test Network",nativeCurrency:{name:"SepoliaETH",symbol:"ETH",decimals:18},rpcUrls:["https://ethereum-sepolia.blockpi.network/v1/rpc/public"],blockExplorerUrls:["https://sepolia.etherscan.io/"]}]});const s="11155111",l=String(o.chain?.id);o&&l!==s?(e.session=!1,e.snackBarHelperService.open("PLEASE_CONNECT_TO_SEPOLIA_NETWORK","errorBar")):(e.session=!0,e.getUserEthBalance()),e.changeDetectorRef.detectChanges()}catch(n){console.log(n)}})()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(M.t),t.Y36(L.H),t.Y36(t.sBO))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-wallet-web3"]],decls:37,vars:20,consts:[[1,"mat-elevation-z6"],[1,"header_container"],[1,"metamask-button"],["mat-raised-button","","color","accent","type","button",3,"click"],[1,"material-icons"],[4,"ngIf"],["translate",""],[1,"confirmation"],["color","accent","appearance","outline",2,"width","100%"],["matInput","","type","number","id","inputAmount","aria-label","Text field for the withdrawal amount",3,"placeholder","ngModel","ngModelChange"],[1,"error"],[1,"dwbutton_container"],["type","submit","mat-raised-button","","color","primary","aria-label","Button to deposit",1,"deposit_withdraw_button",3,"click"],["type","submit","mat-raised-button","","color","warning","aria-label","Button to withdraw",1,"deposit_withdraw_button",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",2)(6,"button",3),t.NdJ("click",function(){return n.handleAuth()}),t.TgZ(7,"i",4),t._uU(8," account_balance_wallet "),t.qZA(),t.YNc(9,N,3,3,"span",5),t.YNc(10,S,2,2,"span",5),t.qZA()()(),t.TgZ(11,"p")(12,"b")(13,"span",6),t._uU(14,"LABEL_WALLET_BALANCE"),t.qZA(),t.TgZ(15,"span",7),t._uU(16),t.qZA()()(),t.TgZ(17,"div")(18,"mat-form-field",8)(19,"mat-label"),t._uU(20),t.ALo(21,"translate"),t.qZA(),t.TgZ(22,"input",9),t.NdJ("ngModelChange",function(s){return n.inputAmount=s}),t.ALo(23,"translate"),t.qZA()(),t.TgZ(24,"h5",10),t._uU(25),t.qZA()(),t.TgZ(26,"div",11)(27,"button",12),t.NdJ("click",function(){return n.depositETH()}),t.TgZ(28,"i",4),t._uU(29," monetization_on "),t.qZA(),t._uU(30),t.ALo(31,"translate"),t.qZA(),t.TgZ(32,"button",13),t.NdJ("click",function(){return n.withdrawETH()}),t.TgZ(33,"i",4),t._uU(34," local_atm "),t.qZA(),t._uU(35),t.ALo(36,"translate"),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(t.lcZ(4,10,"TITLE_CRYPTO_WALLET")),t.xp6(6),t.Q6J("ngIf",!n.session),t.xp6(1),t.Q6J("ngIf",n.session),t.xp6(6),t.hij(" ",n.walletBalance," ETH"),t.xp6(4),t.Oqu(t.lcZ(21,12,"LABEL_AMOUNT")),t.xp6(2),t.Q6J("placeholder",t.lcZ(23,14,"ENTER_ETHER_AMOUNT"))("ngModel",n.inputAmount),t.xp6(3),t.Oqu(n.errorMessage),t.xp6(5),t.hij(" ",t.lcZ(31,16,"BTN_DEPOSIT")," "),t.xp6(5),t.hij(" ",t.lcZ(36,18,"BTN_WITHDRAW")," "))},dependencies:[T.O5,A.Pi,c.Fj,c.wV,c.JJ,c.On,E.lW,b.a8,y.KE,y.hX,w.Nt,A.X$],styles:[".header_container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:30px}.dwbutton_container[_ngcontent-%COMP%]{display:flex;gap:12px;justify-content:space-between}mat-card[_ngcontent-%COMP%]{display:block;margin-left:30%;margin-right:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px;width:100%}.form-container[_ngcontent-%COMP%]{min-width:350px}.deposit_withdraw_button[_ngcontent-%COMP%]{width:100%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}@media (max-width: 1100px){mat-card[_ngcontent-%COMP%]{margin-left:20%;margin-right:20%}}@media (max-width: 580px){mat-card[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.header_container[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:16px}}"]}),r})();var H=a(8184);const I=[{path:"",component:P}];let k=(()=>{class r{constructor(e,n){this.configurationService=e,this.overlayContainer=n,e.getApplicationConfiguration().subscribe(o=>{n.getContainerElement().classList.add(o.application.theme+"-theme")})}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(B.e),t.LFG(H.Xj))},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[T.ez,W.Bz.forChild(I),A.aw,c.u5,c.UX,E.ot,b.QW,w.c,x.ZX]}),r})()}}]);