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



### 新規記事作成

## 参考サイト
- [VuePress + Netlifyでブログ作成 ](https://meuniere.dev/posts/2020/08/06/create-vuepress.html) - むにえる牧場
- [VuePressで作ったblogに配布されているテーマを設定する](https://qiita.com/tomopict/items/9da7cf28c9bcd5f933cb) - tomopict