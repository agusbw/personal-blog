import "server-only";

import prisma from "@/../../prisma/db";

export const getAllMessages = async () =>
  await prisma.messages.findMany({
    orderBy: {
      created_at: "desc",
    },
    select: {
      created_at: true,
      message: true,
      sender_name: true,
      id: true,
    },
  });
