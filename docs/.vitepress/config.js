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
			{ text: "App", link: "/api/hono" },
			{ text: "Routing", link: "/api/routing" },
			{ text: "Context", link: "/api/context" },
			{ text: "HonoRequest", link: "/api/request" },
			{ text: "Exception", link: "/api/exception" },
		],
	},
}

export default defineConfig({
	lang: "en-US",
	title: "Hono",
	description:
		"Ultrafast web framework for Cloudflare Workers, Fastly Compute@Edge, Deno, Bun, Vercel, Lagon, Node.js, and others. Fast, but not only fast.",
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
			message: "Released under the MIT License.",
			copyright: "Copyright © 2022-present Yusuke Wada & Hono contributors",
		},
		sidebar: {
			"/": [
				sidebars["sdk"],
				sidebars["web"],
				sidebars["backoffice"],
				sidebars["api"],
			],
		},
	},
	head: [
		[
			"meta",
			{
				property: "og:image",
				content: "https://hono.dev/images/hono-title.png",
			},
		],
		["meta", { property: "og:type", content: "website" }],
		["meta", { property: "twitter:domain", content: "hono.dev" }],
		[
			"meta",
			{
				property: "twitter:image",
				content: "https://hono.dev/images/hono-title.png",
			},
		],
		["meta", { property: "twitter:card", content: "summary_large_image" }],
		["link", { rel: "shortcut icon", href: "/favicon.ico" }],
	],
	titleTemplate: ":title - Hono",
})
