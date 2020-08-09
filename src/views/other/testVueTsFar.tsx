import { Vue, Component, Watch } from 'vue-property-decorator';
import ChlidrenBtn from './testVueTsCld';

@Component({ // 一定要用Component修饰
	components: { ChlidrenBtn }
})
export default class Test extends Vue {
	//显式赋值断言来帮助类型系统识别类型，这样能够让属性会被间接地初始化，但未赋值
	value!: string;
	//显式初始化类型并赋值
	val: string = '1';
	//隐式初始化类型并赋值
	a = 1; b = 2;

	get count() {
		return this.a + this.b;
	}

	@Watch('a')
	changeCount(newval: number, oldval: number) {
		console.log(newval, oldval)
	}

	handleButtonClick(date: string) {
		console.log('========', date)
	}
	
	render() {
		setTimeout(() => { this.a = 22 }, 1000)
		return (
			<div>
				{this.count}<br />
				<Chlidren-btn title="标题" onhandleClick={this.handleButtonClick}>
					我是按钮
        		</Chlidren-btn>
			</div>
		)
	}
}