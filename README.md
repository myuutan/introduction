# Portfolio Website - Nozawa Miu

モダンでスタイリッシュな就活用ポートフォリオサイトです。

## 特徴

- **レスポンシブデザイン**: スマートフォン、タブレット、PCに対応
- **ダークモード対応**: ライト/ダークテーマの切り替え機能
- **スムーススクロール**: セクション間の滑らかなスクロール
- **アニメーション効果**: 視覚的に魅力的なアニメーション
- **開発経験セクション**: 技術スタックや役割、苦労した点を詳しく記載

## ファイル構成

```
introduction/
├── index.html          # メインHTMLファイル
├── styles.css          # スタイルシート
├── script.js           # JavaScript機能
├── profile.jpg         # プロフィール画像
└── README.md          # このファイル
```

## セクション

1. **Home**: ヒーローセクションと基本情報
2. **About**: 自己紹介と学歴情報
3. **Experience**: 詳細な開発経験（技術スタック、役割、苦労したこと、工夫したこと）
4. **Skills**: 習得している技術スタック（視覚的な進捗バー付き）
5. **Projects**: プロジェクトポートフォリオ
6. **Contact**: お問い合わせフォーム

## カスタマイズ方法

### 1. 基本情報の変更

[index.html](index.html) の以下の部分を編集してください：

- 名前、学校名（ヒーローセクション）
- About セクションの自己紹介文
- 連絡先情報（メールアドレス、SNSリンク）

### 2. 開発経験の追加

[index.html](index.html) の `Experience Section` で、以下の項目を実際の内容に置き換えてください：

```html
<!-- Main Project -->
<div class="experience-card featured">
    <div class="card-header">
        <h3>プロジェクト名を記入</h3>
        <span class="project-period">期間を記入</span>
    </div>
    ...
</div>
```

記載すべき項目：
- プロジェクト名と期間
- プロジェクト概要
- 技術スタック（tech-tags に追加）
- 開発体制（チーム規模、期間）
- 役割・担当
- 苦労したこと（具体的な技術的課題）
- 工夫したこと（課題への対応方法）
- 成果
- GitHub/デモサイトのURL

### 3. スキルレベルの調整

[index.html](index.html) のスキルバーの幅を調整：

```html
<div class="skill-progress" style="width: 90%"></div>
```

パーセンテージを実際のスキルレベルに合わせて変更してください。

### 4. プロジェクトの追加

[index.html](index.html) の `Projects Section` に、プロジェクトカードを追加：

```html
<div class="project-card">
    <div class="project-image">
        <img src="プロジェクト画像のパス" alt="プロジェクト名">
        <div class="project-overlay">
            <a href="GitHubのURL" class="overlay-btn">
                <i class="fab fa-github"></i>
            </a>
            <a href="デモサイトのURL" class="overlay-btn">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
    <div class="project-info">
        <h3>プロジェクト名</h3>
        <p>プロジェクトの説明</p>
        <div class="project-tags">
            <span>技術1</span>
            <span>技術2</span>
        </div>
    </div>
</div>
```

### 5. 連絡先の変更

[index.html](index.html) のContact セクションで、実際の連絡先情報に更新してください：

```html
<p>your.email@example.com</p>
<p><a href="https://github.com/myuutan">github.com/myuutan</a></p>
```

## 使用方法

1. このディレクトリの内容をそのままWebサーバーにアップロードするか、GitHub Pagesでホスティングします
2. ブラウザで `index.html` を開いて確認できます

### GitHub Pagesでの公開方法

1. GitHubリポジトリを作成
2. このディレクトリの内容をプッシュ
3. Settings > Pages で `main` ブランチを選択
4. 数分後、`https://yourusername.github.io/repository-name/` でアクセス可能になります

## 技術スタック

- **HTML5**: セマンティックなマークアップ
- **CSS3**: カスタムプロパティ、Grid、Flexbox、アニメーション
- **JavaScript**: バニラJS（ライブラリ不要）
- **Font Awesome**: アイコン

## ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## カスタマイズのヒント

### カラースキームの変更

[styles.css](styles.css) の `:root` セクションで色を変更：

```css
:root {
    --primary-color: #667eea;    /* メインカラー */
    --secondary-color: #764ba2;  /* セカンダリカラー */
    --accent-color: #f093fb;     /* アクセントカラー */
}
```

### フォントの変更

[styles.css](styles.css) の `body` セクションで `font-family` を変更：

```css
body {
    font-family: 'お好きなフォント', sans-serif;
}
```

Google Fontsを使用する場合は、[index.html](index.html) の `<head>` に以下を追加：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=フォント名&display=swap" rel="stylesheet">
```

## ライセンス

このテンプレートは自由に使用・カスタマイズしていただけます。

## お問い合わせ

質問や改善案があれば、お気軽にご連絡ください。

---

**作成者**: Nozawa Miu
**GitHub**: [https://github.com/myuutan](https://github.com/myuutan)
**更新日**: 2025年11月
