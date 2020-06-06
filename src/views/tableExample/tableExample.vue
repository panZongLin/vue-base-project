<template>
  <div>
    <h3>A {{A}} doubleA {{doubleA}}</h3>
    <a-button type="primary" @click="tripleA">A*3</a-button>
    <a-button type="primary" @click="showModal('create')" :style="{marginLeft: 10+'px'}">create</a-button>

    <!-- 表格 -->
    <a-table :columns="columns" :data-source="tableList" :style="{marginTop: 10+'px'}">
      <span slot="customTitle"><a-icon type="smile-o" /> customName</span>
      <span slot="address" slot-scope="address">
        <a-tag color='green'>{{ address.city }}</a-tag>
        <a-tag color='red'>{{ address.street }}</a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a @click="showModal('edit', record)">Edit</a>
        <a-divider type="vertical" />
        <a-popconfirm
          title="Are you sure delete this task?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirmDelete"
          @cancel="cancelDelete"
        >
          <a href="#">Delete</a>
        </a-popconfirm>
      </span>     
    </a-table>

    <!-- 表单 -->
    <a-modal v-model="visible" :title="modalTitle" :footer="null" @cancel="cancelModal">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
        <a-form-item>
          <a-input v-decorator="['id']" :style="{display: 'none'}" />
        </a-form-item>
        <a-form-item label="name">
          <a-input
            v-decorator="['name', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
        <a-form-item label="username">
          <a-input v-decorator="['username']" />
        </a-form-item>
        <a-form-item label="website">
          <a-input v-decorator="['website']" />
        </a-form-item>
        <a-form-item label="phone">
          <a-input v-decorator="['phone']" />
        </a-form-item>
        <a-form-item label="address">
          <a-input v-decorator="['address']" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button @click="cancelModal" :style="{marginRight: 10+'px'}">
            Cancel
          </a-button>
          <a-button type="primary" html-type="submit">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
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
        modalTitle: 'create',
        formLayout: 'horizontal',
        form: this.$form.createForm(this, { name: 'coordinated' }),
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
      showModal(way, node) {
        this.visible = true;
        if(way=='edit') {
          this.modalTitle = 'edit';
          setTimeout(()=> this.form.setFieldsValue(node), 1000)
        }else {
          this.modalTitle = 'create';
        }
      },
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            this.$notification.open({
              message: 'Received values of form: ',
              description: JSON.stringify(values)
            });
          }
        });
      },
      cancelModal() {
        this.visible = false;
        this.form.resetFields();
      },
      confirmDelete() {
        this.$message.success('Click on Yes');
      },
      cancelDelete() {
        this.$message.error('Click on No');
      },
    }

  };
</script>

<style>
  .ant-form-item {
    margin-bottom: 6px;
  }
</style>