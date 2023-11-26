"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/../../prisma/db";
import { messageSchema } from "../schema/zod-schema";

export async function sentMessage(formData: FormData) {
  const parsed = messageSchema.parse({
    sender_name: formData.get("name"),
    sender_contact: formData.get("contact"),
    message: formData.get("message"),
  });

  //save to database
  await prisma.messages.create({
    data: {
      sender_name: parsed.sender_name.toString(),
      sender_contact: parsed.sender_contact?.toString(),
      message: parsed.message.toString(),
    },
  });

  revalidatePath("/");
}
