import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();


export async function main() {
  try {
    await prisma.$connect();
  }
  catch (err) {
    return Error("DB接続に失敗しました");
  }
  finally {

  }
}

//  ブログ全記事取得用のAPI

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    // 作成したスキーマからpostを参照している
    const posts = await prisma.post.findMany();
    return NextResponse.json ({ message: "Success", posts}, { status: 200});
  }
  catch(err) {
    return NextResponse.json ({ message: "Error", err }, { status: 500});
  }
  //  どちらでもない場合には接続を止めてあげる
  finally{
    await prisma.$disconnect();
  }
};


//  ブログ投稿用のAPI

export const POST = async (req: Request, res: NextResponse) => {
  try {

    const { title, description } = await req.json();

    await main();
    // idは自動で発行されるので、作成必要なし、title,descにはreqから参照する
    const post = await prisma.post.create({data: {title, description }});
    return NextResponse.json ({ message: "Success", post}, { status: 201});
  }
  catch(err) {
    return NextResponse.json ({ message: "Error", err }, { status: 500});
  }
  //  どちらでもない場合には接続を止めてあげる
  finally{
    await prisma.$disconnect();
  }
};