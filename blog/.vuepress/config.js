module.exports = {
  title: 'Osumi Akari blog',
  description: 'Osumi Akariのブログです。',
  theme: 'modern-blog',
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    lang: 'ja-JP',
    head: [
      'meta', {
          name: 'og:title',
          content: 'Osumi Akariのブログ',
        },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/Osumi-Akari',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/Kig_OsumiAkari',
        },
      ],
      copyright: [
        {
          text: 'CC BY-SA',
          link: '',
        },
      ],
    },
  },
  markdown: {
    externalLinks: {
      target: '' //リンク属性を変更
    },
    linkify: true, //リンクを張っただけでリンクと認識させる
  }
}
