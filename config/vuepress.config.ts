import { pwaPlugin } from '@vuepress/plugin-pwa';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/pwa/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/pwa/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/pwa/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.webmanifest',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#000000',
      },
    ],
  ],
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
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
});
