const menuConfig = [
	{
		title: 'home',
		to: '/',
		icon: 'desktop'
	},
	{
		title: 'subMenu',
		to: null,
		icon: 'pie-chart',
		sub: [
			{
				title: 'sub1',
				to: '/sub1',
			}
		]
	},
	{
		title: 'ant design vue',
		to: '/tableExample',
		icon: 'pie-chart'
	},
	{
		title: 'element ui',
		to: '/tableExample2',
		icon: 'pie-chart'
	},
]

export default menuConfig;