import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Rust',
      description: 'Empower everyone to build reliable and efficient software',
    },
  },
  theme: defaultTheme({
    docsDir: 'docs',
    logo: '/images/logo.png',
    locales: {
      '/': {
        contributors: false,
        repoLabel: 'Source Code',
        repo: 'https://github.com/rust-lang/rust',
        editLink: false,
        navbar: [
          {
            text: 'Documentation',
            link: '/documentation/getting-started/index.md',
          },
          {
            text: 'v1.58',
            children: [
              {
                text: 'Changelog',
                link: 'https://github.com/rust-lang/rust/releases',
              },
            ],
          },
        ],
        sidebar: {
          '/documentation/': [
            {
              text: '1 Getting Started',
              link: '/documentation/getting-started/index.md',
            },
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [],
});
