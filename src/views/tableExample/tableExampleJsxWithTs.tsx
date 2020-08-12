import { Vue, Component, Prop } from 'vue-property-decorator';
import { Form } from 'ant-design-vue';
//State, Getter, Action, Mutation
//不是局部模块的state，getter等可以通过以上装饰器直接获取
import { namespace } from 'vuex-class';
//模块内的state，getter等则需要通过namespace来获取
const tableExampleModule = namespace('tableExample');


@Component({
    props: { //需手动声明，否则Form.create不生效
        form: Object
    }
})
class TableExampleJsxWithTs extends Vue {
    @Prop(Object) form!: any;

    visible: boolean = false;
    modalTitle: string = "create";

    @tableExampleModule.State('A') A!: number
	@tableExampleModule.State('tableList') tableList!: object[]
	@tableExampleModule.Getter('doubleA') doubleA!: number
	@tableExampleModule.Action('getTableList') getTableList!: any
	@tableExampleModule.Mutation('tripleA') tripleA!: any


	mounted() {
		this.getTableList({
			page: 1,
			pageSize: 10
		});
	}

    showModal(way: string, node?: any) {
        this.visible = true;
        if (way == "edit") {
            this.modalTitle = "edit";
            let editNode = {
                ...node,
                address: node.address['city']+'-'+node.address['street']
            }
            this.form.setFieldsValue(editNode)
        } else {
            this.modalTitle = "create";
        }
    }
    handleSubmit(e: any) {
        e.preventDefault();
        this.form.validateFields((err: boolean, values: object) => {
            if (!err) {
                this.$notification.open({
                    message: "Received values of form: ",
                    description: JSON.stringify(values)
                });
            }
        })
    }
    cancelModal() {
        this.visible = false;
        this.form.resetFields();
    }
    confirmDelete() {
        this.$message.success("Click on Yes");
    }
    cancelDelete() {
        this.$message.error("Click on No");
    }


	render() {
        const columns = [  //似乎只能放这里才能获取上下文 
            {				
                dataIndex: "name",
                key: "name",
                slots: { title: 'name' },
            },
            {
                title: "username",
                dataIndex: "username",
                key: "username"
            },
            {
                title: "website",
                dataIndex: "website",
                key: "website"
            },
            {
                title: "phone",
                dataIndex: "phone",
                key: "phone"
            },
            {
                title: "address",
                key: "address",
                dataIndex: "address",
                customRender: (text: any)=> {
                    return(
                        <span>
                            <a-tag color="green">{text.city}</a-tag>
                            <a-tag color="red">{text.street}</a-tag>
                        </span>
                    )
                }
            },
            {
                title: "Action",
                key: "action",
                customRender: (text: any, record: any)=> {
                    return(
                        <span>
                            <a onClick={()=>this.showModal('edit', record)}>Edit</a>
                            <a-divider type="vertical" />
                            <a-popconfirm
                                title="Are you sure delete this task?"
                                ok-text="Yes"
                                cancel-text="No"
                                onConfirm={this.confirmDelete}
                                onCancel={this.cancelDelete}
                                >
                                <a href="#">Delete</a>
                            </a-popconfirm>
                        </span>
                    )
                }
            }
        ];
        const {A, doubleA, tableList, visible, modalTitle, form} = this;
		const { getFieldDecorator } = form;
		return(
			<div>
				{/**ant design vue */}
				<h3>A {A} doubleA {doubleA}</h3>				
				<a-button type="primary" onClick={this.tripleA}>A*3</a-button>
				<a-button type="primary" onClick={()=>this.showModal('create')} style={{marginLeft: '10px'}}>create</a-button>			

				<h2 style={{marginTop: '10px'}}>ant design vue</h2>
				{/**表格 */}
				<a-table columns={columns} data-source={tableList} rowKey={(record: any)=>record.id} style={{marginTop: '10px'}}>
					<span slot="name">
						<a-icon type="smile-o" /> name
					</span>				
				</a-table>

				{/**表单 */}
				<a-modal visible={visible} title={modalTitle} footer="" onCancel={this.cancelModal}>
					<a-form form={form} label-col={{ span: 5 }} wrapper-col={{ span: 12 }} onSubmit={this.handleSubmit}>
						<a-form-item>
							{getFieldDecorator('id', {})(<a-input style={{display: 'none'}} />)}
						</a-form-item>
						<a-form-item label="name">
							{
								getFieldDecorator('name', {
									rules: [{required: true, message: 'Please input your note!'}] 
								})(<a-input />)
							}							
						</a-form-item>
						<a-form-item label="username">
							{getFieldDecorator('username', {})(<a-input />)}
						</a-form-item>
						<a-form-item label="website">
							{getFieldDecorator('website', {})(<a-input />)}
						</a-form-item>
						<a-form-item label="phone">
							{getFieldDecorator('phone', {})(<a-input />)}
						</a-form-item>
						<a-form-item label="address">
							{getFieldDecorator('address', {})(<a-input placeholder="city-street" />)}
						</a-form-item>
						<a-form-item wrapper-col={{ span: 12, offset: 5 }}>
							<a-button onClick={this.cancelModal} style={{marginRight: '10px'}}>Cancel</a-button>
							<a-button type="primary" html-type="submit">Submit</a-button>
						</a-form-item>
					</a-form>
				</a-modal>
			</div>
		)
	}
}

export default Form.create({})(TableExampleJsxWithTs);
