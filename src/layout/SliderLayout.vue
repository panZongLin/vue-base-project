<template>
	<a-layout id="leyout-wapper" style="height: 100vh">
		<a-layout-sider v-model="collapsed" collapsible class="fixedSider">
			<div class="logo" />
			<!-- 菜单 -->
			<a-menu theme="dark" :default-selected-keys="['0']" mode="inline">
				<template v-for="(item, index) in menuConfig">
				<a-menu-item :key="index" v-if="!item.sub">
					<router-link :to="item.to">
						<a-icon :type="item.icon " />
						<span>{{item.title}}</span>
					</router-link>
				</a-menu-item>

				<a-sub-menu :key="index" v-if="item.sub">
					<span slot="title">
						<a-icon :type="item.icon" />
						<span>{{item.title}}</span>
					</span>
					<a-menu-item v-for="(sub, idx) in item.sub" :key="'sub'+idx">
						<router-link :to="sub.to">{{sub.title}}</router-link>
					</a-menu-item>
				</a-sub-menu>
				</template>
			</a-menu>
		</a-layout-sider>

		<a-layout :style="contentMargin">
		<a-layout-header class="header">
			<!-- 面包屑 -->
			<a-breadcrumb>
				<a-breadcrumb-item>{{breadCrumb}}</a-breadcrumb-item>
			</a-breadcrumb>
		</a-layout-header>
		<a-layout-content class="contentWrap">
			<div class="content">
			<!-- 路由 -->
			<router-view></router-view>
			</div>
		</a-layout-content>
		<a-layout-footer class="footer">Ant Design ©2018 Created by Ant UED</a-layout-footer>
		</a-layout>
	</a-layout>
</template>
<script>
import menuConfig from "../config/menu";
export default {
  data() {
    return {
      collapsed: false,
      menuConfig: menuConfig
    };
  },
  computed: {
    contentMargin: function() {
      if (this.collapsed) {
        return { marginLeft: "80px" };
      }
      return { marginLeft: "200px" };
    },
    breadCrumb: function() {
      return this.$route.name;
    }
  }
};
</script>

<style scoped>
#leyout-wapper .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.fixedSider {
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
}
.header {
  height: 60px;
  background-color: #fff;
  padding-left: 20px;
  padding-top: 25px;
}
.contentWrap {
  margin: 16px;
  margin-right: 0px;
  overflow-y: scroll;
}
.content {
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  padding: 16px;
}
.footer {
  height: 40px;
  background-color: #ccc;
  padding: 0px;
  text-align: center;
  line-height: 40px;
}
</style>