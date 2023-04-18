import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { href } = new URL(request.url);
  const address = href.split("/").pop()!;
  const data = await prisma.user.findFirst({ where: { address: address } });

  return NextResponse.json(data);
}
