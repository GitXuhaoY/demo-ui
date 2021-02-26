<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <de-button :round="true" :loading="loading" @click="clickfn">按钮文案</de-button>
  </div>
</template>

<script>
import deButton from './../packages/x-button'

export default {
    name: 'App',
    components: {
      deButton
    },
    data() {
      return {
          // size:"medium",
          size:"medium",
          plain:false,
          loading:false,
          //medium small / mini
      }
    },
    mounted() {
      
    },
    methods: {
        clickfn(e){
          console.log("点击了",e);
          this.loading = true;
            setTimeout(()=>{
              this.loading = false
            },3000)
        }
    },
}
</script>
<style lang="scss" scoped>
  /deep/.de-button {
    width: 5rem;
    display: block;
    margin: auto;
    margin-bottom: .2rem;
  }
</style>
<style lang="scss">
@import './../packages/style/reset.scss'
</style>
