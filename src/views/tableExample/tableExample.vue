<template>
  <div>
    <h3>A {{A}} doubleA {{doubleA}}</h3>
    <a-button type="primary" @click="tripleA">A*3</a-button>
    <a-button type="primary" @click="showModal" :style="{marginLeft: 10+'px'}">create</a-button>

    <a-table :columns="columns" :data-source="tableList" :style="{marginTop: 10+'px'}">
      <span slot="customTitle"><a-icon type="smile-o" /> customName</span>
      <span slot="address" slot-scope="address">
        <a-tag color='green'>{{ address.city }}</a-tag>
        <a-tag color='red'>{{ address.street }}</a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a>{{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Edit</a>
        <a-divider type="vertical" />
        <a>Delete</a>
      </span>     
    </a-table>

    <a-modal v-model="visible" :title="modalTitle" :footer="null">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script>
  import {mapState, mapActions, mapMutations } from 'vuex';

  const columns = [
    {
      dataIndex: 'name',
      key: 'name',
      slots: { title: 'customTitle' },
      scopedSlots: { customRender: 'name' },
    },
    {
      title: 'username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'address',
      key: 'address',
      dataIndex: 'address',
      scopedSlots: { customRender: 'address' },
    },
    {
      title: 'Action',
      key: 'action',
      scopedSlots: { customRender: 'action' },
    },
  ];
  export default {
    data() {
      return {
        columns,
        visible: false,
        modalTitle: 'create'
      }
    },

    mounted() {
      // this.$store.dispatch('tableExample/getTableList', {
      //   page: 1,
      //   pageSize: 10
      // })
      this.getTableList({
        page: 1,
        pageSize: 10
      })
      // this.$store.commit('tableExample/tripleA')
      // this.tripleA()

    },

    computed: {
      ...mapState('tableExample', {
        A: state => state.A,
        tableList: state => state.tableList
      }),
      doubleA: function() {
        return this.$store.getters['tableExample/doubleA']
      }
    },

    methods: {
      ...mapActions({
        getTableList: 'tableExample/getTableList'
      }),
      ...mapMutations({
        tripleA: 'tableExample/tripleA'
      }),
      showModal() {
        this.visible = true;
      },
    }

  };
</script>

<style>
  
</style>