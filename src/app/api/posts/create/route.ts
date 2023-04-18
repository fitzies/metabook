import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const req = await request.json();

  const post = prisma.post
    .create({
      data: {
        content: req.content,
        authorId: req.authorId,
      },
    })
    .then((res) => {
      return NextResponse.json("Post created");
    });
}
