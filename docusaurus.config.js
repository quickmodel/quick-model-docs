// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quick Model',
  tagline: 'Model library and level design tool for Unity and Godot',
  url: 'https://quickmodel.alpbyte.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'quickmodel', // Usually your GitHub org/user name.
  projectName: 'quick-model-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/quickmodel/quick-model-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Quick Model',
        logo: {
          alt: 'Quick Model Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'unity/setup',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/quickmodel/quick-model-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Unity-addon',
                to: '/docs/category/unity',
              },
              {
                label: 'Godot-addon',
                to: '/docs/category/godot',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Itch.io',
                href: 'https://quickmodel.itch.io/quick-model-godot',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/quickmodel/quick-model-docs',
              },
              {
                label: 'Alpbyte',
                href: 'https://alpbyte.com',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022-${new Date().getFullYear()} Martin Autio. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
