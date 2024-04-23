"use client";

import type { Message } from "@/lib/types";
import React from "react";
import { Fade } from "react-awesome-reveal";

type MessageWithoutContact = Omit<Message, "sender_contact">;

export function MessageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-7 space-y-4">
      <Fade
        cascade
        triggerOnce
        direction="up"
      >
        {children}
      </Fade>
    </div>
  );
}

export default function MessageCard({
  message,
}: {
  message: MessageWithoutContact;
}) {
  return (
    <div className="rounded-md border p-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold capitalize">
            {message.sender_name}
          </h1>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            {new Date(message.created_at).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm">{message.message}</p>
      </div>
    </div>
  );
}
