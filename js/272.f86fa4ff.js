"use strict";(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[272],{3272:function(s,t,e){e.r(t),e.d(t,{default:function(){return b}});var i=e(47),a=(e(5331),e(9648),e(2105)),n=(e(9092),e(6768)),l=e(5130);const o={class:"login"},r={class:"login-container"};function g(s,t,e,g,c,u){const p=a.WK,h=i.S2;return(0,n.uX)(),(0,n.CE)("div",o,[t[3]||(t[3]=(0,n.Lk)("img",{id:"bg1",class:"background-image1",alt:"Background Image"},null,-1)),t[4]||(t[4]=(0,n.Lk)("img",{id:"bg2",class:"background-image2",alt:"Background Image"},null,-1)),(0,n.Lk)("div",r,[t[2]||(t[2]=(0,n.Lk)("h1",null,"Login",-1)),(0,n.bF)(p,{class:"password-input",modelValue:c.password,"onUpdate:modelValue":t[0]||(t[0]=s=>c.password=s),placeholder:"输入认证码，若未设置留空即可~",type:"password","show-password":"",onKeyup:(0,l.jR)(u.login,["enter","native"])},null,8,["modelValue","onKeyup"]),(0,n.bF)(h,{class:"submit",type:"primary",onClick:u.login},{default:(0,n.k6)((()=>t[1]||(t[1]=[(0,n.eW)("登录")]))),_:1},8,["onClick"])])])}e(4114);var c=e(4570),u=e.n(c),p=e(4373),h=e(782),d={data(){return{password:"",writtenPass:"",bingWallPaperIndex:0,customWallPaperIndex:0}},computed:{...(0,h.L8)(["userConfig","bingWallPapers"]),bkInterval(){return this.userConfig?.bkInterval||3e3},bkOpacity(){return this.userConfig?.bkOpacity||1}},mounted(){const s=document.getElementById("bg1"),t=document.getElementById("bg2");"bing"===this.userConfig?.loginBkImg?this.$store.dispatch("fetchBingWallPapers").then((()=>{s.src=this.bingWallPapers[this.bingWallPaperIndex]?.url,s.onload=()=>{s.style.opacity=this.bkOpacity},setInterval((()=>{let e=0!=s.style.opacity?s:t,i=0!=s.style.opacity?t:s;e.style.opacity=0,this.bingWallPaperIndex=(this.bingWallPaperIndex+1)%this.bingWallPapers.length,i.src=this.bingWallPapers[this.bingWallPaperIndex]?.url,i.onload=()=>{i.style.opacity=this.bkOpacity}}),this.bkInterval)})):this.userConfig?.loginBkImg instanceof Array&&this.userConfig?.loginBkImg?.length>1?(s.src=this.userConfig.loginBkImg[this.customWallPaperIndex],s.onload=()=>{s.style.opacity=this.bkOpacity},setInterval((()=>{let e=0!=s.style.opacity?s:t,i=0!=s.style.opacity?t:s;e.style.opacity=0,this.customWallPaperIndex=(this.customWallPaperIndex+1)%this.userConfig.loginBkImg.length,i.src=this.userConfig.loginBkImg[this.customWallPaperIndex],i.onload=()=>{i.style.opacity=this.bkOpacity}}),this.bkInterval)):this.userConfig?.loginBkImg instanceof Array&&1==this.userConfig?.loginBkImg?.length?(s.src=this.userConfig.loginBkImg[0],s.onload=()=>{s.style.opacity=this.bkOpacity}):(s.src=e(732),s.onload=()=>{s.style.opacity=this.bkOpacity})},methods:{login(){""===this.password?this.writtenPass="unset":this.writtenPass=this.password,p.A.post("/api/login",{authCode:this.password}).then((s=>{200===s.status?(u().set("authCode",this.writtenPass,"14d"),this.$router.push("/"),this.$message.success("登录成功~")):this.$message.error("登录失败，请检查认证码是否正确~")})).catch((s=>{this.$message.error("登录失败，请检查认证码是否正确~")}))}}},y=e(1241);const m=(0,y.A)(d,[["render",g],["__scopeId","data-v-4007a1a9"]]);var b=m},732:function(s,t,e){s.exports=e.p+"img/background.b5342fc0.jpg"}}]);
//# sourceMappingURL=272.f86fa4ff.js.map