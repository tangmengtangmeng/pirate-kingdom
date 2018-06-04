<template>
  <div :style="{'height':popupheight,'top':popuptop}" class="bigpopup">
  	<div class="close" @click="closepopup"></div>
  	<div v-show="bigpopupBuymsg.buycard" class="buycard">
			<div class="role"></div>
		<div class="introduce">
		  	<div class="name"><p class="colorb">{{bigpopupBuymsg.buycard?$store.state.captain[bigpopupBuymsg.player - 1].name:""}}</p></div>
		  	<div class="moredetail colorb">{{bigpopupBuymsg.buycard?$store.state.captain[bigpopupBuymsg.player - 1].detail:""}}</div>
		  	<div class="ability">
		  		<div class="row"><div class="col-80"></div><div class="col-20"><p>{{bigpopupBuymsg.buycard?$store.state.captain[bigpopupBuymsg.player - 1].color:""}}</p></div></div>
		  		<div class="row"><div class="col-80"></div><div class="col-20"><p>{{bigpopupBuymsg.buycard?$store.state.captain[bigpopupBuymsg.player - 1].attack:""}}</p></div></div>
		  		<div class="row"><div class="col-80"></div><div class="col-20"><p>{{bigpopupBuymsg.buycard?$store.state.captain[bigpopupBuymsg.player - 1].strength:""}}</p></div></div>
		  		<div class="row"><div class="col-80"></div><div class="col-20"></div></div>
		  		<div class="row"><div class="col-80"></div><div class="col-20"><p>{{bigpopupBuymsg.buycard?$store.state.captain[bigpopupBuymsg.player - 1].defense:""}}</p></div></div>
		  	</div>
		  	<div class="btn" @click="buycard"><div>{{bigpopupBuymsg.buycard?$store.state.captain[bigpopupBuymsg.player - 1].price:""}}ETH</div></div>
		</div>
  	</div>
	<div v-show="bigpopupBuymsg.confirmbuycard" class="confirmbuycard">
		<div class="known"></div>
		<div class="price"></div>
		<div class="cancelbtn" @click="closepopup"></div>
		<div class="nextbtn" @click="buycard"></div>
	</div>
	<div v-show="bigpopupBuymsg.myassets" class="myassets">
		
	</div>
	<div v-show="bigpopupBuymsg.setnickname" class="setnickname">
		<input class="inputname" type="text" maxlength="16" v-bind:placeholder="alertplaceholder" ref="inputname" @focus="clearplace"/>
		<div class="cancelbtn" @click="closepopup"></div>
		<div class="nextbtn" @click="setnickname"></div>
	</div>	  	
  </div>
</template>

<script>
export default {
  name: 'bigPopup',
  props:["bigpopupBuymsg"],
  data () {
    return {
      popupheight: "",
      popuptop: "",
      showbuypopup: "",
      showconfirmpopup: "",
      alertplaceholder: "",
      
    }
  },
  methods: {
  	closepopup: function () {
  		this.$refs.inputname.value = "";
  		this.alertplaceholder = "";
  		this.$store.dispatch("closebigpopup");
  	},
  	buycard: function () {
  		var i = this.bigpopupBuymsg.player;
  		this.service.buycard(i);
  		this.$store.dispatch("closebigpopup");
  	},
  	setnickname: function () {
  		var name = this.$refs.inputname.value;
  		console.log("设置新用户名是：",name);
  		if(name){
  			var data = {name:name}
	  		this.service.setnickname(data);
	  		this.closepopup();
  		}else{
  			this.alertplaceholder = "请输入新的昵称";
  		}
  	},
  	clearplace: function () {
  		this.alertplaceholder = "";
  	}
  },
  created () {
  	
  },
  mounted () {
    var val = document.documentElement.clientWidth;
    var val2 = document.documentElement.clientHeight;
    if(val > 1680){
      this.popupheight = "58%";
      this.popuptop = "21%";
    }else{
      this.popupheight = ((val)/ 1920 * 1080)* 0.58 + "px";
      this.popuptop = (val2 - parseInt(this.popupheight) )/2 + "px";
    }
    var _this = this;
    window.addEventListener("resize",function(){
        console.log("缩放")
        var val = document.documentElement.clientWidth;
        var val2 = document.documentElement.clientHeight;
        if(val > 1680){
          _this.popupheight = "58%";
          _this.popuptop = "21%";
        }else{
          _this.popupheight = ((val)/ 1920 * 1080)* 0.58 + "px";
          _this.popuptop = (val2 - parseInt(_this.popupheight) )/2 + "px";
        }
    })

    
  },
  computed: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bigpopup{
		width: 42%;
		margin: 0 29%;
		color: white;
		position: relative;
	}
	.close{
		position: absolute;
		right: 0;
		top: 0;
		width: 8.5%;
		height: 11%;
	}
	.buycard{
		width: 100%;
		height: 100%;
		background: url("/static/image/bigpopup.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.role{
		width: 34.4%;
		height: 71.4%;
		position: relative;
		top: 14.2%;
		left: 10%;
	}
	.introduce{
		width: 44.8%;
		height: 74.6%;
		position: absolute;
		top: 14.2%;
		left: 44.4%;
	}
	.name{
		width: 67.5%;
		height: 8.5%;
		position: absolute;
		left: 20%;
	}
	.moredetail{
		width: 100%;
		height: 21.3%;
		position: absolute;
		top: 8.5%;
		padding: 0 13.7%;
		box-sizing: border-box;
	}
	.ability{
		width: 100%;
		height: 51%;
		position: absolute;
		top: 29.8%;
	}
	.ability>.row{
		align-items: center;
		width: 74%;
		position: relative;
		left: 26%;
	}
	.ability>.row:nth-child(1){
		height: 14.6%;
		margin-top: 5%;
	}
	.ability>.row:nth-child(2){
		height: 15.9%;
	}
	.ability>.row:nth-child(3){
		height: 16.5%;
	}
	.ability>.row:nth-child(4){
		height: 17.5%;
	}
	.ability>.row:nth-child(5){
		height: 17%;
	}
	.ability>.row>.col-20,.ability>.row>.col-80{
		height: 100%;
		overflow-x: visible;
	}
	.ability>.row>.col-20{
		width: 24.1%;
		position: relative;
		display: table;
	}
	.ability>.row>.col-20>p{
		text-align: center;
		width: 100%;
		display: table-cell;
		vertical-align: middle;
	}
	.ability>.row:nth-child(1)>.col-80{
		background: url("/static/image/ability1.png") left top no-repeat;
		background-size: auto 100%;
	}
	.ability>.row:nth-child(1)>.col-20{
		left: -40.5%;
	}
	.ability>.row:nth-child(2)>.col-80{
		background: url("/static/image/ability2.png") left top no-repeat;
		background-size: auto 100%;
	}
	.ability>.row:nth-child(2)>.col-20{
		left: -37%;
	}
	.ability>.row:nth-child(3)>.col-80{
		background: url("/static/image/ability3.png") left top no-repeat;
		background-size: auto 100%;
	}
	.ability>.row:nth-child(3)>.col-20{
		left: -26%;
	}
	.ability>.row:nth-child(4)>.col-80{
		background: url("/static/image/ability4.png") left top no-repeat;
		background-size: auto 100%;
	}
	.ability>.row:nth-child(4)>.col-20{
		left: -51%;
	}
	.ability>.row:nth-child(5){
		background: url("/static/image/ability5.png") left top no-repeat;
		background-size: auto 81%;
	}
	.ability>.row:nth-child(5)>.col-20{
		left: -13%;
		top: -12%;
	}
	.btn{
		width: 60.3%;
		height: 18%;
		position: absolute;
		top: 80.8%;
		left: 14.1%;
		font-size: 24px;
	    color: rgb(254,238,0);
	    text-align: center;
	    display: table;
	}
	.btn>div{
		display: table-cell;
		vertical-align: middle;
	}
	/*确认购买卡牌弹窗样式*/
	.confirmbuycard{
		width: 100%;
		height: 100%;
		background: url("/static/image/bigpopup2.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.known{
		width: 100%;
		height: 27.4%;
		position: relative;
		top: 20%;
		padding: 4% 16% 6% 14%;
		box-sizing: border-box;
	}
	.price{
		width: 21.7%;
		height: 10.5%;
		margin: 0 auto;
		background:url("/static/image/price1.png") center center no-repeat; 
		background-size: 100% 100%;
		position: relative;
		top: 20%;
	}
	.cancelbtn,.nextbtn{
		width: 23.6%;
		height: 9.7%;
		float: left;
		position: relative;
		top: 37.4%;
	}
	.cancelbtn{
		margin: 0 10% 0 19.9%;
	}
	.cancelbtn:hover,.nextbtn:hover{
		cursor: pointer;
	}
	/*我的卡牌弹窗样式*/
	.myassets{
		width: 100%;
		height: 100%;
		background: url("/static/image/bigpopup3.png") center center no-repeat;
		background-size: 100% 100%;
	}
	/*设置昵称弹窗样式*/
	.setnickname{
		width: 100%;
		height: 100%;
		background: url("/static/image/bigpopup4.png") center center no-repeat;
		background-size: 100% 100%;
	}
	.inputname{
		width: 51%;
	    height: 8%;
	    display: block;
	    margin: 0 auto;
	    position: relative;
	    top: 32.4%;
	    left: -1.2%;
	    outline: none;
	    border: 0;
	    background: transparent;
	    color: rgb(119,93,71);
	}
	.setnickname .cancelbtn,.setnickname .nextbtn{
		position: relative;
		top: 66.5%;
	}
</style>

