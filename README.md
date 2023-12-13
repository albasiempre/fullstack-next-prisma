# ここにタイトルを入れる
  簡易ブログ（CRUD機能のみ）
## DEMO

  - デプロイしている場合はURLを記入（任意）

## 紹介と使い方

  ブログのようにタイトルと内容をかける

## 工夫した点

  - supabase, prismaでバックエンドの構築をしてみた
  - nextでの構築は慣れていたので、firebase以外の環境下で開発をしてみた

## 苦戦した点

  - 環境構築
  - プラグインをエディターに入れていないと、prismaのスキーマが動かないので、この辺は勉強になった。
  - prisma上で、JSで書くようにDBを設計できるのは非常に良い。マイクロサービスには向いている。
  - toastというUIを初めて使ったが、編集の際にバグが出てしまうので、ここを修正しないといけない（多分書き方が悪い）

## 参考にした web サイトなど

  - 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
