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
const html = "<p>After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Second Blog Post","author":"Astro Learner","description":"After learning some Astro, I couldn't stop!","image":{"url":"https://astro.build/assets/blog/astro-showcase/astro-showcase-screenshot.jpg","alt":"Thumbnails of websites from the Astro Showcase site."},"pubDate":"2022-07-08","tags":["astro","blogging","learning in public","successes"]};
				const file = "/Users/koto/Desktop/study-astro/src/content/posts/post-2.md";
				const url = undefined;
				function rawContent() {
					return "\nAfter a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!\n";
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
