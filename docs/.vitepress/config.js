import mathjax3 from "markdown-it-mathjax3";
import { defineConfig } from "vitepress";

const customElements = ["mjx-container"];

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
    collapsed: false,
    items: [
      { text: "🧠 Accounting Concept", link: "/sdk/accounting-concept" },
      { text: "➕ Equation", link: "/sdk/equation" },
      { text: "🗂️ Trial Balance", link: "/sdk/trialbalance" },
      { text: "📄 Trial Balance Record", link: "/sdk/trialbalance-record" },
      { text: "🚏 Account Types", link: "/sdk/account-type" },
      { text: "✅ Validator", link: "/sdk/validator" },
      { text: "🏭 Data Builder", link: "/sdk/data-builder" },
      { text: "🧩 Remark", link: "/sdk/remark" },
      { text: "💰 Statement Of Financial", link: "/sdk/statement-of-finacial" },
      {
        text: "🥸 Statement of Changes in Equity",
        link: "/sdk/statement-of-changes-in-equity",
      },
      { text: "🧮 Corporate Income Tax", link: "/sdk/cit" },
      { text: "📦 How to use", link: "/sdk/how-to-use" },
      { text: "⚙️ CI/CD", link: "/sdk/how-to-use" },
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
};

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
    config: (md) => {
      md.use(mathjax3);
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
        sidebars["database"],
      ],
    },
  },
  plugins: [["@vite/vuepress-plugin-mathjax"]],
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
});
