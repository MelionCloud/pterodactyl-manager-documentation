module.exports = {
    base: '/',
    title: 'PterodactylManager',
    description: 'PterodactylManager aims to help out in every aspect of pterodactyl addon development and integration.',
    plugins: [
        ['@vuepress/google-analytics', {
            ga: 'G-HBN8GEJR6B'
        },],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['vuepress-plugin-container', {
            type: 'warning',
        }],
        ['vuepress-plugin-container', {
            type: 'tip',
        }],
        ['vuepress-plugin-container', {
            type: 'danger',
        }],
        ['tabs'],
    ],
    configureWebpack: {
        serve: {
            hot: {
                port: 9091,
            },
        },
    },
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' }],
        ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#0e4688' }],
        ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
        ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
        ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
        ['meta', { name: 'theme-color', content: '#0e4688' }],
    ],
    themeConfig: {
        repo: 'pterodactyl/panel',
        docsRepo: 'pterodactyl/documentation',
        repoLabel: 'GitHub',
        editLinkText: 'Help us improve this page.',
        editLinks: true,
        logo: '/logos/pterry.svg',
        nav: [
            {
                text: 'Documentation',
                link: '/project/introduction.md',
            },
            {
                text: 'Get Help',
                link: 'https://discord.gg/devsky'
            }
        ],
        sidebar: {
            '/': [
                {
                    title: 'Project Information',
                    collapsable: false,
                    children: [
                        '/project/introduction.md',
                        '/project/about.md',
                        '/project/terms.md',
                        '/project/community.md',
                    ]
                },
                {
                    title: 'Development Guides',
                    collapsable: false,
                    children: [
                        '/developer/guidelines.md'
                    ],
                }
            ],
        },
    },
    postcss: {
        plugins: [
            require('postcss-import'),
            require('tailwindcss')('./tailwind.js'),
            require('precss'),
            require('autoprefixer'),
            require('cssnano'),
        ]
    },
};
