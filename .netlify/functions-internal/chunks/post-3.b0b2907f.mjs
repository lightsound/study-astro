import { l as createVNode, F as Fragment } from './astro.61fa549a.mjs';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout.7cd31057.mjs';
import 'path-to-regexp';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'slash';
import 'html-escaper';
import './pages/all.7828bac9.mjs';
import '@astrojs/rss';
/* empty css                          *//* empty css                                                                  *//* empty css                                                               *//* empty css                                                               *//* empty css                           *//* empty css                                                                   *//* empty css                          *//* empty css                                                                           */
const html = "<p>It wasn’t always smooth sailing, but I’m enjoying building with Astro. And, the <a href=\"https://astro.build/chat\">Discord community</a> is really friendly and helpful!</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Third Blog Post","author":"Astro Learner","description":"I had some challenges, but asking in the community really helped!","image":{"url":"https://astro.build/assets/blog/community-day/cover.jpg","alt":"The word community with a heart."},"pubDate":"2022-07-15","tags":["astro","learning in public","setbacks","community"]};
				const file = "/Users/koto/Desktop/study-astro/src/content/posts/post-3.md";
				const url = undefined;
				function rawContent() {
					return "\nIt wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$MarkdownPostLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const collectedLinks = ["_astro/BaseLayout.astro_astro_type_style_index_0_lang.08b5c524.css","_astro/Footer.astro_astro_type_style_index_0_lang.dcb19650.css","_astro/MarkdownPostLayout.astro_astro_type_style_index_0_lang.4144177e.css","_astro/Social.astro_astro_type_style_index_0_lang.a28fedb9.css","_astro/ThemeIcon.astro_astro_type_style_index_0_lang.821d0d1b.css","_astro/global.fdff1238.css"];
					const collectedStyles = "@@ASTRO-STYLES@@";

export { Content, collectedLinks, collectedStyles, getHeadings };
