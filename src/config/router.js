import Vue from "vue";
import VueRouter from "vue-router";


import SliderLayout from "../layout/SliderLayout.vue";
import Welcome from "../views/welcome/welcome.vue";
import Test from "../views/other/test.vue";
import TableExample from "../views/tableExample/tableExample.vue";


import Page404 from "../views/page404.vue";

Vue.use(VueRouter);
const routes = [
	{
		path: "/",
		name: "SliderLayout",
		component: SliderLayout,
		children: [
			{
				path: "/",
				name: "home",
				component: Welcome,
			},
			{
				path: "/sub1",
				name: "subMenu/sub1",
				component: Test,
			},
			{
				path: "/tableExample",
				name: "tableExample",
				component: TableExample,
			}
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

const router = new VueRouter({
	routes
});

export default router;
