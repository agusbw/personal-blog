import SentMessageForm from "@/components/sent-message-form";
import { Loader2 } from "lucide-react";

export default async function MessagePageLoading() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Kirimkan kesan & pesan anda!</h1>
      <p className="text-muted-foreground text-sm mt-1">
        Data yang ditampilkan hanya nama dan pesan
      </p>
      <div className="mt-4 max-w-sm rounded-md border p-5">
        <SentMessageForm />
      </div>
      <div className="w-full justify-center flex">
        <Loader2 className="animate-spin text-primary mt-8 w-8 h-8" />
      </div>
    </div>
  );
}
