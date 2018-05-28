<template>
  <div class="footer-bar" :style="{'height':footerHeight}">
    <div class="topfooter">
      <ul class="list1">
        <li></li>
        <li v-for="(item,index) in items1"><a v-bind:href="item.href">{{item.title}}</a></li>
      </ul>
      <ul class="list2">
        <li></li>
        <li v-for="(item,index) in items2"><a v-bind:href="item.href">{{item.title}}</a></li>
      </ul>
      <ul class="list3">
        <li v-for="(item,index) in items3"><a v-bind:href="item.href">{{item.title}}</a></li>
      </ul>
      <ul class="list4">
        <li v-for="(item,index) in items4"><a v-bind:href="item.href">{{item.title}}</a></li>
      </ul>
    </div>
    <div class="botfooter"></div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
    return {
      msg: 'FooterBar',
      footerHeight: document.documentElement.clientWidth / 1920 * 360 + "px",
      items1: [{title:"Home",href:this.configData.foot_ul1.foot_ul1_1},{title:"How it works",href:this.configData.foot_ul1.foot_ul1_2},{title:"FAQ",href:this.configData.foot_ul1.foot_ul1_3},{title:"TOS",href:this.configData.foot_ul1.foot_ul1_4},{title:"Pravacy Policy",href:this.configData.foot_ul1.foot_ul1_5}],
      items2: [{title:"Marketplace",href:this.configData.foot_ul2.foot_ul2_1},{title:"My Contacts",href:this.configData.foot_ul2.foot_ul2_2}],
      items3: [{title:"FACEBOOK",href:this.configData.foot_ul3.foot_ul3_1},{title:"TWITTER",href:this.configData.foot_ul3.foot_ul3_2}],
      items4: [{title:"METAMASK",href:this.configData.foot_ul4.foot_ul4_1},{title:"ETHERRUM",href:this.configData.foot_ul4.foot_ul4_2},{title:"BITGUILD",href:this.configData.foot_ul4.foot_ul4_3}]
    }
  },
  methods: {
    goto: function (i,p) {
      if(p.indexOf("ul1")>-1){
        alert("ul1");
        window.open(this.configData.foot_ul1.foot_ul1_1,"_self");
      }else if(p.indexOf("ul2")>-1){
        alert("ul2");
      }else if(p.indexOf("ul3")>-1){
        var arrurl = [this.configData.foot_ul3.foot_ul3_1,this.configData.foot_ul3.foot_ul3_2] ;
        window.open(arrurl[i],"_self");
      }else{
        var arrurl = [this.configData.foot_ul4.foot_ul4_1,this.configData.foot_ul4.foot_ul4_2,this.configData.foot_ul4.foot_ul4_3] ;
        window.open(arrurl[i],"_self");
      }
    }
  },
  mounted:function(){
    var _this = this;
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      console.log("footerHeight",val);
      _this.footerHeight = val / 1920 * 360 + "px";
    })
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-bar{
  width: 100%;
  background:url("../../assets/footer.png") center center no-repeat;
  background-size: cover;
}
.topfooter{
  width: 100%;
  height: 72.22%;
}
.botfooter{
  width: 100%;
  height: 27.78%;
}
ul{
  height: 100%;
  float: left;
  box-sizing: border-box;
}
ul>li{
  box-sizing: border-box;
}
ul>li>a{
  font-family: Windlass,Georgia,"serif";
  font-weight: 400;
  font-size: 15px;
  font-variant: small-caps;
  color: rgb(67,63,52);
}
.list1{
  width: 9.2%; 
  margin-left: 19.95%;
}
.list1 li:nth-child(1){
  height: 30.8%;
  padding-left: 0;
  background:url("../../assets/footer1-1.png") center center no-repeat;
}
.list1 li:nth-child(2){
  height: 10.8%;
  padding-left: 4%;
  padding-top: 1%;
}
.list1 li:nth-child(3){
  height: 13.1%;
  padding-left: 4%;
  padding-top: 2%;
}
.list1 li:nth-child(4){
  height: 13.1%;
  padding-left: 4%;
  padding-top: 3%;
}
.list1 li:nth-child(5){
  height: 11.5%;
  padding-left: 4%;
  padding-top: 3%;
}
.list1 li:nth-child(6){
  height: 12.3%;
  padding-left: 4%;
  padding-top: 3%;
}
.list2{
  width: 9.4%;
  margin-left:3.4%;
}
.list2 li:nth-child(1){
  height: 30.8%;
  background:url("../../assets/footer2-1.png") center center no-repeat;
}
.list2 li:nth-child(2){
  height: 10.8%;
  padding-left: 4%;
  padding-top: 2%;
}
.list2 li:nth-child(3){
  height: 13.1%;
  padding-left: 4%;
  padding-top: 2%;
}
.list3{
  width: 9%;
  margin-left:9.5%; 
}
.list3 li:nth-child(1){
  height: 35.8%;
  background:url("../../assets/footer3-1.png") center center no-repeat;
  padding-left: 24%;
  padding-top: 30%;
}
.list3 li:nth-child(2){
  height: 18.8%;
  background:url("../../assets/footer3-2.png") center center no-repeat;
  padding-left: 24%;
  padding-top: 11%;
}
.list4{
  width: 10.4%;
  margin-left:12.3%;
}
.list4 li:nth-child(1){
  height: 35.8%;
  background:url("../../assets/footer4-1.png") center center no-repeat;
  padding-left: 30%;
  padding-top: 26%;
}
.list4 li:nth-child(2){
  height: 33.8%;
  background:url("../../assets/footer4-2.png") center center no-repeat;
  padding-left: 30%;
  padding-top: 20%;
}
.list4 li:nth-child(3){
  height: 28.5%;
  background:url("../../assets/footer4-3.png") center center no-repeat;
  padding-left: 30%;
  padding-top: 13%;
}
.list1 li:nth-child(1),.list2 li:nth-child(1),.list3 li:nth-child(1),
.list3 li:nth-child(2),.list4 li:nth-child(1),.list4 li:nth-child(2),.list4 li:nth-child(3){
  background-size: 100% 100%;
}
.list1,.list2,.list3,.list4{
  box-sizing: border-box;
}
.botfooter{
  width: 100%;
  height: 27.77%;
  background:url("../../assets/footer5.png") center center no-repeat;
  background-size: contain; 
}
</style>