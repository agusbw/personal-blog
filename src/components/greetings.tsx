import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import siteConfig from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";

export default function Greetings() {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <Avatar className="w-16 h-16">
          <AvatarImage src="/images/profile.png" />
        </Avatar>
        <div>
          <p className="text-3xl font-semibold">Hallo,</p>
          <p className="text-xl font-semibold">Perkenalkan aku Bewee👋🏻</p>
        </div>
      </div>
      <p>
        Di tempat ini aku menuangkan pikiran-pikiran aneh yang datangnya juga
        secara random. Aku bukan penulis, jadi ya alakadarnya. Selamat datang
        dan selamat membaca!💜
      </p>
      <div>
        <p className="mb-1">Kalau mau yang lebih serius:</p>
        <Link
          href={siteConfig.personalWebsite}
          className={buttonVariants({
            variant: "default",
            size: "sm",
          })}
          target="_blank"
        >
          Personal Site
        </Link>
      </div>
    </div>
  );
}
