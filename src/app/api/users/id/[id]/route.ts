import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { href } = new URL(request.url);
  const id = parseInt(href.split("/").pop()!);
  const data = await prisma.user.findFirst({ where: { id: id } });

  return NextResponse.json(data);
}
