import { defineConfig } from "vitepress"

const sidebars = {
	concepts: {
		text: "Concepts",
		collapsed: true,
		items: [
			{ text: "Philosophy", link: "/concepts/philosophy" },
			{ text: "Benchmarks", link: "/concepts/benchmarks" },
			{ text: "Hono Stacks", link: "/concepts/stacks" },
		],
	},
	sdk: {
		text: "FABS-SDK",
		collapsed: true,
		items: [
			{ text: "App", link: "/api/hono" },
			{ text: "Routing", link: "/api/routing" },
			{ text: "Context", link: "/api/context" },
			{ text: "HonoRequest", link: "/api/request" },
			{ text: "Exception", link: "/api/exception" },
		],
	},
	web: {
		text: "FABS-WEB",
		collapsed: true,
		items: [{ text: "Overview", link: "/web/overview" }],
	},
	backoffice: {
		text: "FABS-BACKOFFICE",
		collapsed: true,
		items: [{ text: "Overview", link: "/backoffice/overview" }],
	},
	api: {
		text: "FABS-API",
		collapsed: true,
		items: [{ text: "Overview", link: "/api/overview" }],
	},
	database: {
		text: "DATABASE",
		collapsed: true,
		items: [
			{ text: "Overview", link: "/database/overview" },
			{ text: "Workspace", link: "/database/workspace" },
			{ text: "Project", link: "/database/project" },
			{ text: "User", link: "/database/user" },
			{ text: "User Role", link: "/database/user-role" },
			{ text: "User Package", link: "/database/user-package" },
			{ text: "Package", link: "/database/package" },
			{ text: "Order Package", link: "/database/order-package" },
			{ text: "Order Payment", link: "/database/order-payment" },
			{ text: "Forgotten Password", link: "/database/forgotten-password" },
			{ text: "Email Verification", link: "/database/email-verification" },
			{ text: "Client", link: "/database/client" },
			{ text: "Business Type", link: "/database/business-type" },
			{ text: "Company Type", link: "/database/company-type" },
		],
	},
}

export default defineConfig({
	lang: "en-US",
	title: "Fabs",
	description: "Fantastic auto balance sheets",
	lastUpdated: true,
	cleanUrls: "with-subfolders",
	markdown: {
		theme: {
			light: "github-light",
			dark: "github-dark",
		},
	},
	themeConfig: {
		logo: "/images/logo.png",
		siteTitle: "Fabs",
		socialLinks: [
			{ icon: "github", link: "https://github.com/timethunder/fabs" },
		],
		editLink: {
			pattern: "https://github.com/timethunder/fabs-doc/edit/main/:path",
			text: "Edit this page on GitHub",
		},
		footer: {
			copyright:
				"Copyright © 2022-Present Timethunder Co., Ltd. All rights reserved",
		},
		sidebar: {
			"/": [
				sidebars["sdk"],
				sidebars["web"],
				sidebars["backoffice"],
				sidebars["api"],
				sidebars["database"],
			],
		},
	},
	head: [
		[
			"meta",
			{
				property: "og:image",
				content: "https://pimngob.com/assets/images/pm-logo.png",
			},
		],
		["link", { rel: "shortcut icon", href: "/favicon.ico" }],
	],
	titleTemplate: ":title - Fabs",
})
