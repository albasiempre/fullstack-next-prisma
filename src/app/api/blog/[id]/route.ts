import { NextResponse } from "next/server";
import { main } from "../route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


//  ブログ詳細記事取得用のAPI（blog配下）


export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/blog/")[1]);
    await main();
    // 作成したスキーマからpostを参照している
    const post = await prisma.post.findFirst({ where: { id } }); // http://localhost:3000/api/blog/1...
    return NextResponse.json ({ message: "Success", post}, { status: 200});
  }
  catch(err) {
    return NextResponse.json ({ message: "Error", err }, { status: 500});
  }
  finally{
    await prisma.$disconnect();
  }
};

//  ブログ詳細記事編集用のAPI（blog配下）

export const PUT = async (req: Request, res: NextResponse) => {

  try {
    const id: number = parseInt(req.url.split("/blog/")[1]);

    const { title, description } = await req.json();

    await main();
    // 作成したスキーマからpostを参照している
    const post = await prisma.post.update({
      data: { title, description },
      where: {id},
    }); // http://localhost:3000/api/blog/1...

    return NextResponse.json ({ message: "Success", post}, { status: 200});
  }
  catch(err) {
    return NextResponse.json ({ message: "Error", err }, { status: 500});
  }
  finally{
    await prisma.$disconnect();
  }
};


//  ブログ詳細記事削除用のAPI（blog配下）
export const DELETE = async (req: Request, res: NextResponse) => {

  try {
    const id: number = parseInt(req.url.split("/blog/")[1]);

    await main();
    // 作成したスキーマからpostを参照している
    const post = await prisma.post.delete({
      where: {id},
    }); // http://localhost:3000/api/blog/1...

    return NextResponse.json ({ message: "Success", post}, { status: 200});
  }
  catch(err) {
    return NextResponse.json ({ message: "Error", err }, { status: 500});
  }
  finally{
    await prisma.$disconnect();
  }
};