import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import siteConfig from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";

export default function Greetings() {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <Avatar className="w-16 h-16">
          <AvatarImage
            alt="Bewe's profile image"
            src="/images/profile.webp"
          />
        </Avatar>
        <div>
          <p className="text-3xl font-semibold">Hallo,</p>
          <p className="text-xl font-semibold">Perkenalkan aku Bewee👋🏻</p>
        </div>
      </div>
      <p>
        Ini adalah tempat untuk menuangkan pikiran-pikiran aneh yang datangnya
        juga secara random. Bukan penulis, jadi ya alakadarnya. Selamat datang
        dan selamat membaca!💜
      </p>
      <div>
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
