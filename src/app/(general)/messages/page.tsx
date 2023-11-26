import SentMessageForm from "@/components/sent-message-form";
import { getAllMessages } from "@/lib/server/data";
import { Message } from "@/lib/types";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kesan & Pesan",
  description: "Kesan & pesan dari para pengunjung blog",
};

type MessageWithoutContact = Omit<Message, "sender_contact">;

function MessageCard({ message }: { message: MessageWithoutContact }) {
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

export default async function MessagesPage() {
  const messages = await getAllMessages();

  return (
    <div>
      <h1 className="text-3xl font-semibold">Kirimkan kesan & pesan anda!</h1>
      <p className="text-muted-foreground text-sm mt-1">
        Data yang ditampilkan hanya nama dan pesan
      </p>
      <div className="mt-4 max-w-sm rounded-md border p-5">
        <SentMessageForm />
      </div>
      <div className="mt-7 space-y-4">
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
          />
        ))}
      </div>
    </div>
  );
}
