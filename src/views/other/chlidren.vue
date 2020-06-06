<template>
  <div>
    <slot name="name"></slot>
    <a-input @change="onChange" :style="{width: 250+'px'}" />
    <p>props: {{title}}</p>
  </div>
</template>

<script>
  export default {
    props: ['title'],
    data() {
      return {
      }
    },
    methods: {
      onChange: function(e) {
        this.$emit('handleChange', e.target.value)
      }
    }
  };
</script>

<style>
  
</style>