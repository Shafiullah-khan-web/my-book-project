// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Spec-Driven Book',
  tagline: 'Create books using AI + Specs + Docusaurus',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  organizationName: 'Shafiullah-khan-web',
  projectName: 'YOUR-REPO',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Shafiullah-khan-web/YOUR-REPO',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Shafiullah-khan-web/YOUR-REPO',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: 'AI Spec-Driven Book',
      logo: {
        alt: 'Book Logo',
        src: 'img/my-logo.png',
      },
      items: [
        { to: '/docs/intro', label: 'Book', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/Shafiullah-khan-web/YOUR-REPO', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Tutorial', to: '/docs/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'X', href: 'https://x.com/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/Shafiullah-khan-web/YOUR-REPO' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;

