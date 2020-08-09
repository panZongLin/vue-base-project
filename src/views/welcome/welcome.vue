<script>
export default {
	data: function() {
		return {
			a: 12345
		};
	},
	mounted() {
		this.$popup({
			title: "通知",
			content: "祝贺，这是一个全局弹窗！",
			cancel: () => {
				console.log("关闭弹窗时触发的事件");
			}
		});
	},
	methods: {
		hah: function(val) {
			console.log("this.a", this.a);
			console.log("val", val);
		}
	},
	render() {
		const { a } = this;
		return (
		<div>
			<p onClick={() => this.hah(a)}>热烈欢迎{this.a}</p>
		</div>
		);
	}
};
</script>

<style></style>
