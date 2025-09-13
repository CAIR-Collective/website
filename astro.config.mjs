// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// Determine base & site for dev vs production (GH Pages at /website/)
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
    site: isProd ? 'https://CAIR-Collective.github.io' : 'http://localhost:4321',
    base: isProd ? '/website/' : '/',
    integrations: [mdx(), sitemap(), icon()],
});
