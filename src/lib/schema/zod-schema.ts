import { z } from "zod";

export const messageSchema = z.object({
  sender_name: z.string().min(1),
  sender_contact: z.string().nullable(),
  message: z.string().min(1),
});
