---
date: 2021-02-02
tag: 
  - メモ
  - vuepress
author: Osumi Akari
---
# VuePressをインストールした時のメモ

これはOsumi Akariが[VuePress](https://vuepress.vuejs.org/)をインストールした時のメモです。

## 事前準備
Node.jsとnpm(もしくはyarn)をインストールしておく。私はWindowsユーザーのため、[公式サイトのダウンロードページ](https://nodejs.org/ja/download/)からNode.jsを落とし、GUIの指示に従ってインストールを行った。Node.jsをインストールするとnpmもくっついてくるので、npmで満足の方はこれでOK。yarnが好きな人は[別途インストール](https://yarnpkg.com/)をどうぞ。

## ブログ作成
```
npm create vuepress [ブログ名]
```
1分弱でインストールされるため、案内に沿ってProject nameなどを入力する。この際、GitHubなどで管理したい場合は一番最後に「リポジトリ何？」のようなことを聞かれるので、予めリポジトリを作成しておき「https://github.com/ユーザー名/レポジトリ名.git」を入力すれば、<code>git init</code>しなくて済みます。便利です。

```
npm run dev
#OR
yarn dev
```
インストールが完了したら、インストールされたディレクトリにおいて、試しに上記コマンドを実行します。ここでセリフ体を基調とした、シックなデモサイトが表示されれば正解(のはず)です。しかしながらこのデザインが好みではない人もいると思います。当然ながらVuePressはデザインを強制したりしませんので、ユーザーが「テーマ」をインストールし、それぞれのサイトに適用することが可能なようになっています。[awesome-vuepress](https://github.com/vuepress/awesome-vuepress)を眺めながらお気に入りのテーマを探しましょう。

個人的には以下のテーマが気に入りました。
* [vuepress-theme-simple](https://github.com/viko16/vuepress-theme-simple) - シンプルなブログ用テーマ。文章のみで訴求するサイトにいいかも。
* [vuepress-theme-modern-blog](https://github.com/z3by/vuepress-theme-modern-blog) - 名前の通りモダンなデザイン。
* [vuepress-theme-seeker](https://github.com/wensonsmith/vuepress-theme-seeker) - カラフルな色遣い。
* [vuepress-theme-medium](https://github.com/z3by/vuepress-theme-medium) - [Medium](https://medium.com/)風デザインらしい。個人的には[デモサイト](https://vuepress-theme-medium.z3by.com/)を見る限り、微妙に似てると思っている。
* [vuepress-theme-blog-vuetify](https://github.com/ttskch/vuepress-theme-blog-vuetify/) - ミニマリズムとまではいかないがシンプルで必要十分な2カラムデザイン。

3秒も悩んだ結果、「vuepress-theme-modern-blog」をインストールすることに決めました。
```
yarn add vuepress-theme-modern-blog -D
```
[公式ドキュメント](https://github.com/z3by/vuepress-theme-modern-blog/blob/master/README.md)にも丁寧に解説されていますが、初めに上記コマンドを入力し、70秒ほどかけてインストールを行います。その後、<code>.vuepress/config/js</code>に移動したうえで、themeの部分を<code>theme: 'modern-blog'</code>と書き換えます。

### カスタマイズ
これでも十分きれいなのですが、ちょこっと手を加えていきます。

手始めに<code>yarn vuepress eject</code>を行い、今後<code>.vuepress\theme</code>以下のコンポーネントを編集すれば良いようにしておきます。しかしまずはそのような外観を設定する前に、細かいところを自分好みに変更します。

初めに<code>node_modules\vuepress-theme-modern-blog\src\styles\index.styl</code>(Stylusファイル)に移動し、フォントの設定を確認します。インストールしたままですと、bodyのフォントがOpen Sansもしくはサンセリフ体という設定となっており、フォントを外部から落とすことは不要な通信の発生と思っている私の考え方と、単純に日本語フォントの表示に支障が発生しそうです。そのため下記のように[Font-familyメーカー](https://saruwakakun.com/font-family)を利用して、<code>blog\.vuepress\styles\index.styl</code>において設定しました。また、テーマサイドのGoogle Fonts読み込みをコメントアウトしました。
```css
font-family: YuGothic,'Yu Gothic','メイリオ', Meiryo,'ヒラギノ角ゴシック','Hiragino Sans','TsukuARdGothic-Regular','Segoe UI','Helvetica','Arial',sans-serif;
```

次にリンク周りの設定を変更していきます。デフォルトですと、設定されたリンクを新しいタブで開いてしまう、<code>target="_blank"</code>が設定されてしまっているため、<code>blog\.vuepress\config.js</code>において設定を以下のように変更します。
```javascript
  markdown: {
    externalLinks: {
      target: ''
    },
    linkify: true,
  }
```
このようにすると別タブで開かないようになります。また<code>linkify</code>を<code>true</code>にしたので、URLだけでもリンクとなるようになりました。

3番目にはサイトマップを自動で生成するプラグインを入れましょう。[VuePress でサイトマップを設定する - hene](https://hene.dev/blog/2019/05/02/sitemap)を参考に設定しました。リンク先に詳しく書かれているのですが、要するに検索エンジンが読む用の「このサイトの地図」を生成するものです。毎度のごとくyarnを使ってインストールします。
```
yarn add vuepress-plugin-sitemap -D
```

インストールが終わったら[Sitemap.orgのドキュメント](https://www.sitemaps.org/ja/protocol.html)を参考にしつつ設定を<code>config.js</code>に入れておきます。
```javascript
  url: "", //実際に運用するURLを入力
  plugins: [
    [
      "sitemap",
      {
        hostname: url,
        changefreq: "daily"
      }
    ]
  ]
```

### 新規記事作成
なぜだか知りませんが、VuePressにはHexoでいうところの<code>hexo new</code>といった、新規記事をテンプレートから作成する機能が公式でついていません。人力でファイル名を打ち込んでもよいのですが、面倒なのでコマンドを入力するだけでどうにかなるようにしていきたいと思います。OpenJNYさんの[VuePress でテンプレートから記事生成](https://qiita.com/OpenJNY/items/9b6f23ac7ec863ea7255)を**参考にしつつ**設定していこうかと思います。

![テスト用SVG](/images/test.svg)

上に「テスト」とやる気のない字が表示されていたらば、恐らく画像表示に成功しています。失敗していたのならば連絡してください。

## 参考サイト
* [VuePress + Netlifyでブログ作成 ](https://meuniere.dev/posts/2020/08/06/create-vuepress.html) - むにえる牧場
* [VuePressで作ったblogに配布されているテーマを設定する](https://qiita.com/tomopict/items/9da7cf28c9bcd5f933cb) - tomopict
* [VuePress で始める静的サイトブログ](https://openjny.github.io/posts/2019/12/28/hello-vuepress/) - $(ls /openjny/blog)
* [VuePress：Markdownを設定変更やプラグイン追加によってカスタマイズする方法](https://www.nxworld.net/vuepress-markdown-customize.html) - NxWorld