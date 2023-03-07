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
		items: [
			{ text: "App", link: "/api/hono" },
			{ text: "Routing", link: "/api/routing" },
			{ text: "Context", link: "/api/context" },
			{ text: "HonoRequest", link: "/api/request" },
			{ text: "Exception", link: "/api/exception" },
		],
	},
	backoffice: {
		text: "FABS-BACKOFFICE",
		collapsed: true,
		items: [
			{ text: "User", link: "/api/hono" },
			{ text: "Order", link: "/api/routing" },
		],
	},
	api: {
		text: "FABS-API",
		collapsed: true,
		items: [
			{ text: "Overview", link: "/api/overview" },
			{ text: "Test", link: "/api/test/t" },
			{ text: "Context", link: "/api/context" },
			{ text: "HonoRequest", link: "/api/request" },
			{ text: "Exception", link: "/api/exception" },
		],
	},
	database: {
		text: "DATABASE",
		collapsed: true,
		items: [
			{ text: "Overview", link: "/database/overview" },
			{ text: "Workspace", link: "/database/workspace" },
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
