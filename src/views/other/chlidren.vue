<!--
<template>
	<div>
		<slot name="name"></slot>
		<a-input @change="onChange" :style="{width: 250+'px'}" />
		<p>props: {{title}}</p>
	</div>
</template>

<script>
export default {
	props: ["title"],
	data() {
		return {};
	},
	methods: {
		onChange: function(e) {
			this.$emit("handleChange", e.target.value);
		}
	}
};
</script>
-->

<script>
export default {
	props: ["title", "desc"],
	data() {
		return {
			val: ""
		};
	},
	methods: {
		inputChange: function(value) {
			this.val = value;
			this.$emit("handleChange", value);
		}
	},
	render() {
		return (
		<div>
			{this.$slots.name}
			<span>{this.title}</span>
			<p>子组件的描述: {this.desc}</p>
			{/**
						<a-input 
							style={{width: '250px'}} 
							onChange={(e)=>this.$emit("handleChange", e.target.value)} 				
						/>
					*/}
			<el-input
				value={this.val}
				style={{ width: "250px" }}
				onInput={value => this.inputChange(value)}
			/>
		</div>
		);
	}
};
</script>
