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
const html = "<p>Welcome to my <em>new blog</em> about learning Astro! Here, I will share my learning journey as I build a new website.</p>\n<h2 id=\"what-ive-accomplished\">What I’ve accomplished</h2>\n<ol>\n<li>\n<p><strong>Installing Astro</strong>: First, I created a new Astro project and set up my online accounts.</p>\n</li>\n<li>\n<p><strong>Making Pages</strong>: I then learned how to make pages by creating new <code>.astro</code> files and placing them in the <code>src/pages/</code> folder.</p>\n</li>\n<li>\n<p><strong>Making Blog Posts</strong>: This is my first blog post! I now have Astro pages and Markdown posts!</p>\n</li>\n</ol>\n<h2 id=\"whats-next\">What’s next</h2>\n<p>I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My First Blog Post","pubDate":"2022-07-01","description":"This is the first post of my new Astro blog.","author":"Astro Learner","image":{"url":"https://astro.build/assets/blog/astro-1-release-update/cover.jpeg","alt":"The Astro logo with the word One."},"tags":["astro","blogging","learning in public"]};
				const file = "/Users/koto/Desktop/study-astro/src/content/posts/post-1.md";
				const url = undefined;
				function rawContent() {
					return "\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\n\n## What I've accomplished\n\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\n\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\n\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\n\n## What's next\n\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-ive-accomplished","text":"What I’ve accomplished"},{"depth":2,"slug":"whats-next","text":"What’s next"}];
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
