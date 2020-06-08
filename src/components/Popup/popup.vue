<template>
  <div>
    <a-modal 
      v-model="visible" 
      :title="title" 
      :footer="null"
      @cancel="handleCancel"
    >
      <p>{{content}}</p>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      title: '默认标题',
      content: '默认内容',
      cancel: ()=>{}
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleCancel() {
      this.cancel();
      this.visible = false;
    },
  },
};
</script>
