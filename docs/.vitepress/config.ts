import { defineConfig } from 'vitepress'

export default defineConfig({
	titleTemplate: 'Paul Combet',
	description: 'Paul Combet personnal website',
	themeConfig: {
		siteTitle: false,
		logo: '/todo.svg',
		nav: [
			{ text: 'Skills', link: '/skill/introduction' },
			{ text: 'Experiences', link: '/experience/' },
		],
		sidebar: {
			'/skill/': [
				{
					text: 'Introduction',
					collapsible: true,
					items: [{ text: 'Preface', link: '/skill/introduction' }],
				},
				{
					text: 'Backend',
					collapsible: true,
					items: [{ text: 'Index', link: '/skill/backend' }],
				},
				{
					text: 'Frontend',
					collapsible: true,
					items: [{ text: 'Index', link: '/skill/frontend' }],
				},
			],
			'/experience/': [
				{
					text: 'Experiences',
					collapsible: true,
					items: [{ text: 'Introduction', link: '/experiences/' }],
				},
			],
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/aza-rian' },
			{ icon: 'twitter', link: 'https://twitter.com/PaulCombet' },
			{ icon: 'linkedin', link: 'https://www.linkedin.com/in/paul-combet' },
		],
		footer: {
			message: 'Released under the GPL License.',
			copyright: 'Copyleft Paul Combet',
		},
	},
})
