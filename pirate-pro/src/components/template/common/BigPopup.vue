<template>
  <div :style="{'height':popupheight,'top':popuptop}" class="bigpopup">
  	<div class="close" @click="closepopup"></div>
  	<div class="role"></div>
  	<div class="introduce">
  		<div class="name"><p> </p></div>
  		<div class="moredetail"> </div>
  		<div class="ability">
  			<div class="row"><div class="col-80"></div><div class="col-20"></div></div>
  			<div class="row"><div class="col-80"></div><div class="col-20"></div></div>
  			<div class="row"><div class="col-80"></div><div class="col-20"></div></div>
  			<div class="row"><div class="col-80"></div><div class="col-20"></div></div>
  			<div class="row"><div class="col-80"></div><div class="col-20"></div></div>
  		</div>
  		<div class="btn" @click="buycard(i)"></div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'bigPopup',
  data () {
    return {
      popupheight: "",
      popuptop: "",
    }
  },
  methods: {
  	closepopup: function () {
  		this.$store.dispatch("showbigpopup");
  	},
  	buycard: function (i) {
  		this.service.buycard(i);
  	}
  },
  created () {
    console.log("公用弹窗组件");
  },
  mounted () {
    this.popupheight = ((document.documentElement.clientWidth)/ 1920 * 1080)*0.58 + "px";
    this.popuptop = (document.documentElement.clientHeight - parseInt(this.popupheight) )/2 + "px";
    var _this = this;
    window.addEventListener("resize",function(){
        console.log("缩放")
        var val = document.documentElement.clientWidth;
        var val2 = document.documentElement.clientHeight;
        if(val > 1680){
          _this.popupheight = "58%";
          _this.popuptop = (val2 - parseInt(_this.popupheight) )/2 + "px";
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
		background: url("../../../assets/bigpopup.png") center center no-repeat;
		background-size: 100%;
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
	}
	.ability>.row:nth-child(1)>.col-80{
		background: url("../../../assets/ability1.png") left top no-repeat;
		background-size: auto 100%;
	}
	.ability>.row:nth-child(1)>.col-20{
		left: -40.5%;
	}
	.ability>.row:nth-child(2)>.col-80{
		background: url("../../../assets/ability2.png") left top no-repeat;
		background-size: auto 100%;
	}
	.ability>.row:nth-child(2)>.col-20{
		left: -37%;
	}
	.ability>.row:nth-child(3)>.col-80{
		background: url("../../../assets/ability3.png") left top no-repeat;
		background-size: auto 100%;
	}
	.ability>.row:nth-child(3)>.col-20{
		left: -26%;
	}
	.ability>.row:nth-child(4)>.col-80{
		background: url("../../../assets/ability4.png") left top no-repeat;
		background-size: auto 100%;
	}
	.ability>.row:nth-child(4)>.col-20{
		left: -51%;
	}
	.ability>.row:nth-child(5){
		background: url("../../../assets/ability5.png") left top no-repeat;
		background-size: auto 81%;
	}
	.ability>.row:nth-child(5)>.col-20{
		left: -12%;
	}
	.btn{
		width: 60.3%;
		height: 18%;
		position: absolute;
		top: 80.8%;
		left: 14.1%;
	}
</style>

