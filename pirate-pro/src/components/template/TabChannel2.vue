<template>
  <div class="tab-channel2" :style="{'height':ContainerHeight}">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'TabChannel2',
  data () {
    return {
      msg: '我是TabChannel2',

    }
  },
  created:function(){
    var screenHeight = document.documentElement.clientHeight || docuemnt.body.clientHeight;
    var headerHeight = 150;
    var footerHeight = 250;
    this.ContainerHeight = screenHeight - headerHeight - footerHeight+ 'px';
    console.log("iiiiii",this.ContainerHeight,screenHeight);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-channel2{
  width: 100%;
  height: auto;
  background: #f4f8fb;
  color: #333;
}
</style>