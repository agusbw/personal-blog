import { Twitter, Instagram, Github } from "lucide-react";
import Link from "next/link";
import siteConfig from "@/lib/site-config";

export default function Footer() {
  return (
    <div className="text-center mx-auto mt-12">
      <p className="mb-2">Let&apos;s connect: </p>
      <div className="flex gap-3 justify-center">
        <Link
          href={siteConfig.socials.twitter}
          target="_blank"
          aria-label="Twitter"
        >
          <Twitter className="text-blue-400" />
        </Link>
        <Link
          href={siteConfig.socials.instagram}
          target="_blank"
          aria-label="Instagram"
        >
          <Instagram className="text-pink-500" />
        </Link>
        <Link
          href={siteConfig.socials.github}
          target="_blank"
          aria-label="Github"
        >
          <Github />
        </Link>
      </div>
    </div>
  );
}
