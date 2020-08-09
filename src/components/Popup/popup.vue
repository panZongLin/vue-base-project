<script>
export default {
	data() {
		return {
			visible: false,
			title: "默认标题",
			content: "默认内容",
			cancel: () => {}
		};
	},
	methods: {
		// showModal() {
		// 	this.visible = true;
		// },
		handleCancel() {
			this.cancel();
			this.visible = false;
		}
	},
	render() {
		const { visible, title, content } = this;
		return (
		<div>
			{/** 
					<a-modal visible={visible} title={title} footer="" onCancel={this.handleCancel}>
						<p>{content}</p>
					</a-modal>*/}
			<el-dialog title={title} visible={visible} onClose={this.handleCancel}>
				<p>{content}</p>
			</el-dialog>
		</div>
		);
	}
}
</script>
