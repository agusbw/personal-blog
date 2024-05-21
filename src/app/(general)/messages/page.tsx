import SentMessageForm from "@/components/sent-message-form";
import { getAllMessages } from "@/lib/server/data";
import MessageCard, { MessageContainer } from "@/components/message-card";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kesan & Pesan",
  description: "Kesan & pesan dari para pengunjung",
  openGraph: {
    type: "article",
    url: `https://bewe-blog.vercel.app/messages`,
    description: "Kesan & pesan dari para pengunjung",
    title: "Kesan & Pesan",
    images: `https://snapy.yenkzera.tech/get?url=https://bewe-blog.vercel.app/messages`,
  },
  twitter: {
    card: "summary_large_image",
    site: "@agusbw_",
    description: "Kesan & pesan dari para pengunjung",
    title: "Kesan & Pesan",
    images: `https://snapy.yenkzera.tech/get?url=https://bewe-blog.vercel.app/messages`,
  },
};

export default async function MessagesPage() {
  const messages = await getAllMessages();

  return (
    <div>
      <h1 className="text-3xl font-medium font-schoolbell">
        Kirimkan kesan & pesan anda!
      </h1>
      <p className="text-muted-foreground text-sm mt-1">
        Data yang ditampilkan hanya nama dan pesan
      </p>
      <div className="mt-4 max-w-sm rounded-md border p-5">
        <SentMessageForm />
      </div>
      <MessageContainer>
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
          />
        ))}
      </MessageContainer>
    </div>
  );
}
