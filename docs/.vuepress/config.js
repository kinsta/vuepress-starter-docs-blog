module.exports = {
	title: 'Kinsta Vuepress',
	description: 'A VuePress QuickStart for Kinsta',
	dest: 'public',
	themeConfig: {
		nav: [
			{
				text: 'Guide',
				link: '/guide/',
			},
			{ text: 'Blog', link: '/blog/' },
			{
				text: 'Static Site Hosting',
				link: 'https://kinsta.com/static-site-hosting/',
			},
		],
		sidebar: {
			'/guide/': [
				{
					title: 'Guide',
					collapsable: false,
					children: ['', 'using-kinsta-stsh'],
				},
			],
		},
	},
};
