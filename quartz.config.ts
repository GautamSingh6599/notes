import { QuartzConfig } from "./quartz/cfg";
import * as Plugin from "./quartz/plugins";

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
	configuration: {
		pageTitle: "Technical Notes",
		pageTitleSuffix: "",
		enableSPA: true,
		enablePopovers: true,
		analytics: {
			provider: "plausible",
		},
		locale: "en-US",
		baseUrl: "gautamsingh6599.github.io",
		ignorePatterns: ["private", "templates", ".obsidian"],
		defaultDateType: "modified",
		theme: {
			fontOrigin: "googleFonts",
			cdnCaching: true,
			typography: {
				header: "EB Garamond",
				body: "Noto Serif",
				code: "IBM Plex Mono",
			},
			colors: {
				lightMode: {
					light: "#faf8f8",
					lightgray: "#e5e5e5",
					gray: "#b8b8b8",
					darkgray: "#4e4e4e",
					dark: "#2b2b2b",
					secondary: "#284b63",
					tertiary: "#84a59d",
					highlight: "rgba(143, 159, 169, 0.15)",
					textHighlight: "#fff23688",
				},
				darkMode: {
					light: "#161616", // Dark background (slightly adjusted for consistency)
					lightgray: "#393939", // Secondary background (adjusted for consistency)
					gray: "#525252", // Neutral mid-tone
					darkgray: "#f4f4f4", // Light text color
					dark: "#ffffff", // Bright text/foreground
					secondary: "#78a9ff", // IBM blue accent
					tertiary: "#3ddbd9", // Teal accent (typical Oxocarbon)
					highlight: "rgba(120, 169, 255, 0.15)", // Blue highlight with transparency
					textHighlight: "#ee538b88", // Pink highlight with transparency (Oxocarbon accent)
				},
			},
		},
	},
	plugins: {
		transformers: [
			Plugin.FrontMatter(),
			Plugin.CreatedModifiedDate({
				priority: ["frontmatter", "git", "filesystem"],
			}),
			Plugin.SyntaxHighlighting({
				theme: {
					light: "github-light",
					dark: "github-dark",
				},
				keepBackground: false,
			}),
			Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
			Plugin.GitHubFlavoredMarkdown(),
			Plugin.TableOfContents(),
			Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
			Plugin.Description(),
			Plugin.Latex({ renderEngine: "katex" }),
		],
		filters: [Plugin.RemoveDrafts()],
		emitters: [
			Plugin.AliasRedirects(),
			Plugin.ComponentResources(),
			Plugin.ContentPage(),
			Plugin.FolderPage(),
			Plugin.TagPage(),
			Plugin.ContentIndex({
				enableSiteMap: true,
				enableRSS: true,
			}),
			Plugin.Assets(),
			Plugin.Static(),
			Plugin.NotFoundPage(),
			// Comment out CustomOgImages to speed up build time
			Plugin.CustomOgImages(),
		],
	},
};

export default config;
