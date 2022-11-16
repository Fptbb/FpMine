// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const data = {
  title: 'FP MINE',
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: data.title,
  tagline: 'Ip: m.fpt.icu',
  url: 'https://m.fpt.icu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon-transparent.svg',
  organizationName: 'fptbb', // Usually your GitHub org/user name.
  projectName: 'FpMine', // Usually your repo name.
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
        defaultMode: 'dark',
      },

      navbar: {
        title: data.title,
        logo: {
          alt: 'Logo',
          src: 'img/icon-transparent.svg',
          width: 50,
          height: 50,
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/regras', label: 'Regras', position: 'left' },
          { to: '/doador', label: 'VIRE UM DOADOR', position: 'left' },
        ],
      },

      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} fptbb. Feito com Docussaurus.`,
      },

      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config