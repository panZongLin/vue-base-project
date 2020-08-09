<!--
<template>
	<div>
		<p>父组件: {{val}}</p>
		<children title="HAHA" v-on:handleChange="handleChange">
			<template v-slot:name>子组件: </template>
		</children>
	</div>
</template>

<script>
import children from './chlidren';
export default {
    data() {
		return {
			val: ''
		}
    },
    components: {
      	children
    },
    methods: {
		handleChange: function(val) {
			this.val = val;
		}
    }
} 
-->

<script>
import Children from "./chlidren";
export default {
	data() {
		return {
			val: ""
		};
	},
	// components: { //jsx写法可以直接使用组件
	//   Children
	// },
	methods: {
		handleChange00: function(val) {
			this.val = val;
		}
	},
	render() {
		return (
			<div>
				<p>父组件: {this.val}</p>
				<Children
					title="HAHA"
					desc="这里是一段描述"
					onHandleChange={this.handleChange00}
				>
					<span slot="name">子组件title: </span>
				</Children>
			</div>
		)
	}
};
</script>
