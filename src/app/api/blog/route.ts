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