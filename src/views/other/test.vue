<template>
  <div>
    <p>父组件: {{val}}</p>
    <children title="HAHA" v-on:handleChange="handleChange">
      <template v-slot:name>子组件: </template>
    </children>
  </div>
</template>

<script>
  import children from './chlidren';
  export default {
    data() {
      return {
        val: ''
      }
    },
    components: {
      children
    },
    methods: {
      handleChange: function(val) {
        this.val = val;
      }
    }
  };
</script>

<style>
  
</style>