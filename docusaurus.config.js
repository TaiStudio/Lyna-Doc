/*-----------------------------------------------------------------------------------------\
|  _______                 _____  .               _                ___    ___/  ___    __  |
| '   /      ___  `       (      _/_   ,   .   ___/ `   __.       /   \ .'  /\ /   \ .'    |
|     |     /   ` |        `--.   |    |   |  /   | | .'   \        _-' |  / |   _-' |---. |
|     |    |    | |           |   |    |   | ,'   | | |    |       /    |,'  |  /    |   | |
|     /    `.__/| /      \___.'   \__/ `._/| `___,' /  `._.'      /___, /`---' /___, `._.' |
|                                                 `                                        |                                                                                                                                                                                                                                                 
\-----------------------------------------------------------------------------------------*/
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lyna - Doc',
  tagline: 'Bienvenu sur la doc lyna',
  url: 'https://doc-lyna.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/lyna.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TaiStudio', // Usually your GitHub org/user name.
  projectName: 'Lyna', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Lyna',
        logo: {
          alt: 'Lyna Logo',
          src: 'img/lyna.png',
        },
        items: [
          {
            href: 'https://github.com/TaiStudio/Lyna',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://tai-studio.netlify.app',
            label: 'Tai Studio',
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
                label: '➕ Crée une page',
                to: '/#-créer-une-page',
              },
              {
                label: '✏️ Éditer une page',
                to: '/#%EF%B8%8F-éditer-une-page',
              },
            ],
          },
          {
            title: 'Tai Studio',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/kHWRn2x',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Tai_Tetsuyuki',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCZiVWB8_UNH4NLzr7XbaI8A',
              },
              {
                label: 'Lyna',
                href: 'https://lyna.netlify.app/taistudio',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/TaiStudio/Lyna',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tai Studio, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: lightCodeTheme,
      },
    }),
};

module.exports = config;
