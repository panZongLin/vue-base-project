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
		title: 'tableExample',
		to: '/tableExample',
		icon: 'pie-chart'
	},
]

export default menuConfig;