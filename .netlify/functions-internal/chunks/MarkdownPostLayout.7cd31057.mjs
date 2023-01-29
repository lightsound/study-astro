import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, f as renderSlot } from './astro.61fa549a.mjs';
import { $ as $$BaseLayout } from './pages/all.7828bac9.mjs';
/* empty css                                                                           */
const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "class": "astro-5GRSW2HI" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<p class="astro-5GRSW2HI">${frontmatter.pubDate.slice(0, 10)}</p><p class="astro-5GRSW2HI"><em class="astro-5GRSW2HI">${frontmatter.description}</em></p><p class="astro-5GRSW2HI">Written by: ${frontmatter.author}</p><img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")} class="astro-5GRSW2HI"><div class="tags astro-5GRSW2HI">
    ${frontmatter.tags.map((tag) => renderTemplate`<p class="tag astro-5GRSW2HI">
          <a${addAttribute(`/tags/${tag}`, "href")} class="astro-5GRSW2HI">${tag}</a>
        </p>`)}
  </div>${renderSlot($$result, $$slots["default"])}` })}`;
}, "/Users/koto/Desktop/study-astro/src/layouts/MarkdownPostLayout.astro");

export { $$MarkdownPostLayout as $ };
