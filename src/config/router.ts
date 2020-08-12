import Vue from "vue";
import VueRouter from "vue-router";

import SliderLayout from "../layout/SliderLayout.vue";
import Welcome from "../views/welcome/welcome.vue";
import Farther from "../views/other/farther.vue";
import TableExample from "../views/tableExample/tableExample.vue";
import TableExampleJsx from "../views/tableExample/tableExampleJsx.vue";
import TableExampleWithTs from "../views/tableExample/tableExampleWithTs.vue";
import TableExampleJsxWithTs from "../views/tableExample/tableExampleJsxWithTs.tsx"; 

import Page404 from "../views/page404.vue";

Vue.use(VueRouter);
const routes: Array<any> = [
	{
		path: "/",
		name: "SliderLayout",
		component: SliderLayout,
		children: [
			{
				path: "/",
				name: "home",
				component: Welcome
			},
			{
				path: "/sub1",
				name: "subMenu/sub1",
				component: Farther
			},
			{
				path: "/tableExample",
				name: "tableExample", 
				component: TableExample
			},
			{
				path: "/tableExampleJsx",
				name: "tableExampleJsx",
				component: TableExampleJsx
			},
			{
				path: "/tableExampleWithTs",
				name: "tableExampleWithTs",
				component: TableExampleWithTs
			},
			{
				path: "/tableExampleJsxWithTs",
				name: "tableExampleJsxWithTs",
				component: TableExampleJsxWithTs
			},
		]
	},
	{
		path: "*",
		name: "404",
		component: Page404
	}
	// {
	//   path: "/about",
	//   name: "About",
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () =>
	//     import(/* webpackChunkName: "about" */ "../views/About.vue")
	// }
];

const router: VueRouter = new VueRouter({
	routes
});

export default router;
