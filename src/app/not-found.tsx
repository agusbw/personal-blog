import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 justify-center text-center items-center px-8 w-screen h-screen">
      <h2 className="text-2xl font-semibold">Resource tidak ditemukan 😿</h2>
      <p>Halaman yang kamu cari gaada disini!</p>
      <Button asChild>
        <Link href="/">Balik ke Home</Link>
      </Button>
    </div>
  );
}
