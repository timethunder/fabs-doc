import mathjax3 from 'markdown-it-mathjax3'
import { defineConfig } from 'vitepress'

const customElements = ['mjx-container']

const sidebars = {
	sdk: {
		text: 'FABS-SDK',
		collapsed: false,
		items: [
			{ text: '🧠 Accounting Concept', link: '/sdk/accounting-concept' },
			{ text: '➕ Equation', link: '/sdk/equation' },
			{ text: '🗂️ Trial Balance', link: '/sdk/trialbalance' },
			{ text: '📄 Trial Balance Record', link: '/sdk/trialbalance-record' },
			{ text: '🚏 Account Types', link: '/sdk/account-type' },
			{ text: '✅ Validator', link: '/sdk/validator' },
			{ text: '🏭 Data Builder', link: '/sdk/data-builder' },
			{
				text: '💰 Statement Of Financial Position',
				link: '/sdk/sof',
			},
			{
				text: '🥸 Statement of Changes in Equity',
				link: '/sdk/soc',
			},
			{ text: '🧩 Remark Row Generator', link: '/sdk/remark-row-gen' },
			{ text: '🧮 Corporate Income Tax', link: '/sdk/cit' },
		],
	},
	api: {
		text: 'FABS-API',
		collapsed: true,
		items: [
			{ text: '👀 Overview', link: '/api/overview' },
			{ text: '🔐 Authentication', link: '/api/authentication' },
			{ text: '🏢 Workspace', link: '/api/workspace' },
			{ text: '📂 Project', link: '/api/project' },
			{ text: '📊 TrialBalance', link: '/api/trial-balance' },
			{ text: '📦 Order & Payment', link: '/api/order-payment' },
		],
	},
	database: {
		text: 'DATABASE',
		collapsed: true,
		items: [
			{ text: '👀 Overview', link: '/database/overview' },
			{ text: '🏢 Workspace', link: '/database/workspace' },
			{ text: '📂 Project', link: '/database/project' },
			{ text: '📊 TrialBalance', link: '/database/trial-balance' },
			{ text: '🙋‍♂️ User', link: '/database/user' },
			{ text: '👥 User Role', link: '/database/user-role' },
			{ text: '📦 User Package', link: '/database/user-package' },
			{ text: '📦 Package', link: '/database/package' },
			{ text: '🔍 Order Package', link: '/database/order-package' },
			{ text: '💰 Order Payment', link: '/database/order-payment' },
			{ text: '🔑 Forgotten Password', link: '/database/forgotten-password' },
			{ text: '📧 Email Verification', link: '/database/email-verification' },
			{ text: '👥 Client', link: '/database/client' },
			{ text: '💼 Business Type', link: '/database/business-type' },
			{ text: '🏢 Company Type', link: '/database/company-type' },
		],
	},
}

export default defineConfig({
	lang: 'en-US',
	title: 'FABS',
	description: 'Fastastic Auto Balance Sheet',
	lastUpdated: true,
	cleanUrls: 'with-subfolders',
	markdown: {
		theme: {
			light: 'github-light',
			dark: 'github-dark',
		},
		config: (md) => {
			md.use(mathjax3)
		},
	},
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => customElements.includes(tag),
			},
		},
	},
	themeConfig: {
		logo: '/images/logo.png',
		siteTitle: 'Fabs',
		socialLinks: [{ icon: 'github', link: 'https://github.com/timethunder/fabs' }],
		editLink: {
			pattern: 'https://github.com/timethunder/fabs-doc/edit/main/:path',
			text: 'Edit this page on GitHub',
		},
		footer: {
			copyright: 'Copyright © 2022-present Timethunder Co., Ltd.',
		},
		sidebar: {
			'/': [sidebars['sdk'], sidebars['api'], sidebars['database']],
		},
	},
	plugins: [['@vite/vuepress-plugin-mathjax']],
	head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
	titleTemplate: ':title - FABS',
})
