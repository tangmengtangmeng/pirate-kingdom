<template>
  <div class="tab-channel4" :style="{'height':ContainerHeight}">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'TabChannel4',
  data () {
    return {
      msg: '我是TabChannel4',
      ContainerHeight: document.documentElement.clientHeight + "px"
    }
  },
  created:function(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-channel4{
  width: 100%;
  height: auto;
  background: #f4f8fb;
  color: #333;
}
</style>