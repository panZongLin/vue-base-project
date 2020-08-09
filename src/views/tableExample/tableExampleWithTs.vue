<template>
	<div>
		<h3>A {{ A }} doubleA {{ doubleA }}</h3>
		<el-button type="primary" @click="tripleA">A*3</el-button>
		<el-button type="primary" @click="showModal('create')" :style="{ marginLeft: '10px' }">create</el-button>
		
		<h2 :style="{marginTop: '10px'}">element ui</h2>
		<!--表格 -->
		<el-table :data="tableList.slice((currentPage - 1) * pageSize, currentPage * pageSize)">
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
				<el-tag size="medium" :style="{ marginRight: '10px' }">
					{{scope.row.address.city}}
				</el-tag>
				<el-tag size="medium" type="warning">
					{{scope.row.address.street}}
				</el-tag>
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
			:page-sizes="[1, 5, 10, 20]"
			:page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="tableList.length"
			:style="{ float: 'right', marginTop: '10px' }"
		>
		</el-pagination>

		<!--表单 -->
		<el-dialog :title="modalTitle" :visible="visible" width="30%" @close="cancelModal">
		<el-form :model="ruleForm" :rules="rules" ref="ruleFormRef">
			<el-form-item label prop="id" label-width="80px">
				<el-input v-model="ruleForm.id" :style="{ display: 'none' }"></el-input>
			</el-form-item>
			<el-form-item label="name" prop="name" label-width="80px" :style="{ marginBottom: '22px' }">
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
				<el-button @click="cancelModal" :style="{ marginLeft: '80px' }">Cancel</el-button>
				<el-button type="primary" @click="handleSubmit('ruleFormRef', ruleForm)">Submit</el-button>
			</el-form-item>
		</el-form>
		</el-dialog>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
//State, Getter, Action, Mutation
//不是局部模块的state，getter等可以通过以上装饰器直接获取
import { namespace } from 'vuex-class';

//模块内的state，getter等则需要通过namespace来获取
const tableExampleModule = namespace('tableExample');
interface ruleForm {
    id?: string,
    name: string,
    username: string,
    website: string,
    phone: string,
    address: string 
}
interface rules {
    name: object[]
}

@Component({})
export default class TableExampleWithTs extends Vue {
    currentPage: number = 1;
    pageSize: number = 10;
	visible: boolean = false;
	modalTitle: string = "create";
    ruleForm: ruleForm = {
        id: "",
        name: "",
        username: "",
        website: "",
        phone: "",
        address: ""
    }
    rules: rules = {
        name: [{ required: true, message: "please input name", trigger: "blur" }]
	}

	// 	 @State('foo') stateFoo: any
	//   @State(state => state.bar) stateBar: any
	//   @Getter('foo') getterFoo: any
	//   @Action('foo') actionFoo: any
	//   @Mutation('foo') mutationFoo: any
	@tableExampleModule.State('A') A: any
	@tableExampleModule.State('tableList') tableList: any
	@tableExampleModule.Getter('doubleA') doubleA: any
	@tableExampleModule.Action('getTableList') getTableList: any
	@tableExampleModule.Mutation('tripleA') tripleA: any


	mounted() {
		this.getTableList({
			page: 1,
			pageSize: 10
		});
	}

	handleSizeChange(val: number) {
		console.log(`每页 ${val} 条`);
		this.currentPage = 1;
		this.pageSize = val;
	}
	handleCurrentChange(val: number) {
		console.log(`当前页: ${val}`);
		this.currentPage = val;
	}
	showModal(way: string, node: any) {
		this.visible = true;
		if (way == "edit") {
			this.modalTitle = "edit";
			let editNode = {
			...node,
			address: node.address["city"] + "-" + node.address["street"]
			};
			this.ruleForm = editNode;
		} else {
			this.modalTitle = "create";
		}
	}
	handleSubmit(formName: string, formObject: object) {
		(this.$refs[formName] as any).validate((valid: boolean) => {
			if (!valid) {
				console.log("error submit!!");
				return false;
			}
			console.log("formObject", formObject);
		});
	}
	cancelModal() {
		this.visible = false;
		this.ruleForm = {
			id: "",
			name: "",
			username: "",
			website: "",
			phone: "",
			address: ""
		};
	}
	confirmDelete() {
		this.$message.success("Click on Yes");
	}
	cancelDelete() {
		this.$message.error("Click on No");
	}
}
</script>

<style>
.el-form-item {
  	margin-bottom: 6px;
}
</style>
