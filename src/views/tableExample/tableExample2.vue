<template>
	<div>
		<h3>A {{A}} doubleA {{doubleA}}</h3>
		<el-button type="primary" @click="tripleA">A*3</el-button>
		<el-button type="primary" @click="showModal('create')" :style="{marginLeft: '10px'}">create</el-button>

		<!--表格 -->
        <el-table :data="tableList.slice((currentPage-1)*pageSize, currentPage*pageSize)">
            <el-table-column prop="name" label="name">
				<template slot="header">
					<i class="el-icon-ice-cream-round"></i> name
				</template>
			</el-table-column>
            <el-table-column prop="username" label="username"></el-table-column>
            <el-table-column prop="website" label="website"></el-table-column>
            <el-table-column prop="phone" label="phone"></el-table-column>
            <el-table-column label="address">
                <template slot-scope="scope">
                    <el-tag size="medium" :style="{marginRight: '10px'}">{{ scope.row.address.city }}</el-tag>
                    <el-tag size="medium" type="warning">{{ scope.row.address.street }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="action">
                <template slot-scope="scope">
                    <a @click="showModal('edit', scope.row)">edit</a>
                    <el-divider direction="vertical"></el-divider>
                    <el-popconfirm title="这是一段内容确定删除吗？" @onConfirm="confirmDelete" @onCancel="cancelDelete">
                        <a slot="reference">delete</a>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
		<el-pagination  
			@size-change="handleSizeChange" 
			@current-change="handleCurrentChange" 
			:current-page="currentPage" 
			:page-sizes="[1,5,10,20]" 
			:page-size="pageSize" 
			layout="total, sizes, prev, pager, next, jumper" 
			:total="tableList.length"
			:style="{float: 'right', marginTop: '10px'}"
		>
        </el-pagination>

		<!--表单 -->
		<el-dialog :title="modalTitle" :visible="visible"  width="30%" @close="cancelModal">
			<el-form :model="ruleForm" :rules="rules" ref="ruleFormRef">
				<el-form-item label="" prop="id" label-width="80px">
					<el-input v-model="ruleForm.id" :style="{display: 'none'}"></el-input>
				</el-form-item>
				<el-form-item label="name" prop="name" label-width="80px" :style="{marginBottom: '22px'}">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="username" prop="username" label-width="80px">
					<el-input v-model="ruleForm.username"></el-input>
				</el-form-item>
				<el-form-item label="website" prop="website" label-width="80px">
					<el-input v-model="ruleForm.website"></el-input>
				</el-form-item>
				<el-form-item label="phone" prop="phone" label-width="80px">
					<el-input v-model="ruleForm.phone"></el-input>
				</el-form-item>
				<el-form-item label="address" prop="address" label-width="80px">
					<el-input v-model="ruleForm.address" placeholder="city-street"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="cancelModal" :style="{marginLeft: '80px'}">Cancel</el-button>
					<el-button type="primary" @click="handleSubmit('ruleFormRef', ruleForm)">Submit</el-button>				
				</el-form-item>
			</el-form>
		</el-dialog>
    </div>
</template>  

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
	data() {	
		return {
			currentPage: 1, 
			pageSize: 10,			       
			visible: false,
			modalTitle: "create",
			ruleForm: {
				id: '',
				name: '',
				username: '',
				website: '',
				phone: '',
				address: ''
			},
			rules: {
				name: [
					{ required: true, message: 'please input name', trigger: 'blur' },
				]
			}
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
		});
		// this.$store.commit('tableExample/tripleA')
		// this.tripleA()
	},

	computed: {		 
		...mapState("tableExample", {
			A: state => state.A,
			tableList: state => state.tableList,
		}),
		doubleA: function() {
			return this.$store.getters["tableExample/doubleA"];
		}
	},

	methods: {
		...mapActions({
			getTableList: "tableExample/getTableList"
		}),
		...mapMutations({
			tripleA: "tableExample/tripleA"
		}),
		handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.currentPage = 1;
            this.pageSize = val;
		},
		handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
        },
		showModal(way, node) {
			this.visible = true;
			if (way == "edit") {
				this.modalTitle = "edit";
				let editNode = {
					...node,
					address: node.address['city']+'-'+node.address['street']
				}
				this.ruleForm = editNode;
			} else {
				this.modalTitle = "create";
			}
		},
		handleSubmit(formName, formObject) { 
			this.$refs[formName].validate((valid) => {
				if (!valid) {
					console.log('error submit!!');
					return false
				}
				console.log('formObject', formObject)
			})
		},
		cancelModal() {
			this.visible = false;
			this.ruleForm = {
				id: '',
				name: '',
				username: '',
				website: '',
				phone: '',
				address: ''
			}
		},
		confirmDelete() {
			this.$message.success("Click on Yes");
		},
		cancelDelete() {
			this.$message.error("Click on No");
		}
	}
}
</script>

<style>
.el-form-item {
  margin-bottom: 6px;
}

</style>