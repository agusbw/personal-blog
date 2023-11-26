"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/submit-button";
import { sentMessage } from "@/lib/server/actions";
import { useRef } from "react";

export default function SentMessageForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        await sentMessage(formData);
        formRef.current?.reset();
      }}
      className="space-y-4"
      ref={formRef}
    >
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">
          Nama <span className="text-red-500">*</span>
        </Label>
        <Input
          type="text"
          id="name"
          placeholder="Nama anda"
          name="name"
          required
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="contact">Kontak</Label>
        <Input
          type="text"
          id="contact"
          name="contact"
          placeholder="Instagram: @agus_bw"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="message">
          Pesan <span className="text-red-500">*</span>
        </Label>
        <Textarea
          placeholder="Tulis pesan anda disini"
          id="message"
          name="message"
          required
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <SubmitButton type="submit">Kirim</SubmitButton>
      </div>
    </form>
  );
}
