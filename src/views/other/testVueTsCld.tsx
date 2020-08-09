import { Vue, Component, Emit, Prop } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
	@Prop(String) title!: string;

	@Emit('handleClick')
	clickButton() {
		return '子组件传回来的值'
	}
	
	render() {
		return (
			<div>
				{this.title}
				<a-button type="primary" onClick={this.clickButton}>
					{this.$slots.default}
				</a-button>
			</div>
		)
	}
}