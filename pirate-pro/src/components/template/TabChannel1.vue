<template>
  <div class="tab-channel1" :style="{'height':ContainerHeight}">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'TabChannel1',
  data () {
    return {
      msg: '我是TabChannel1',
      ContainerHeight: document.documentElement.clientHeight + "px"
    }
  },
  created:function(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-channel1{
  width: 100%;
  height: auto;
  background: #f4f8fb;
  color: #333;
}
</style>