<template>
  <div>
    <p>热烈欢迎</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
      this.$popup({
        title: '通知',
        content: '保时捷官方最新消息：保时捷Taycan将在6月底推出一款新车型，并同时公布售价。根据此前外媒曝光的产品信息来看，该车很有可能为此前保时捷Taycan低续航的入门版车型，不排除会采用后轮驱动形式，电池容量也会进一步缩小，届时新车无论是在动力还是在售价方面都要低于Taycan 4S，这也将进一步降低Taycan的起售门槛，极有可能成为未来的主销车型。',
        cancel: ()=> {
          console.log('关闭弹窗时触发的事件')
        }
      })
    }
  };
</script>

<style>
  
</style>