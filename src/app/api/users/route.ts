import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const req = await request.json();

  const exists = !!(await prisma.user.findFirst({
    where: { address: req.user },
  }));

  if (!exists) {
    prisma.user
      .create({ data: { address: req.user } })
      .then(() => {
        return NextResponse.json("User created");
      })
      .catch(() => {
        return NextResponse.json("User failed to created");
      });
  }

  return NextResponse.json(req.user);
}
