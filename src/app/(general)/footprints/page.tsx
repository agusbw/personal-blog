import { getSortedFootprints } from "@/lib/server/keystatic";
import { Metadata } from "next";
import FootprintCard from "@/components/footprint-card";

export const metadata: Metadata = {
  title: "Footprints",
  description:
    "Foto dari tempat dan momen yang memiliki kesan tersendiri bagi saya.",
  openGraph: {
    type: "article",
    url: `https://bewe-blog.vercel.app/footprints`,
    description:
      "Foto dari tempat dan momen yang memiliki kesan tersendiri bagi saya.",
    title: "Footprints",
    images: `https://snapy.yenkzera.tech/get?url=https://bewe-blog.vercel.app/footprints`,
  },
  twitter: {
    card: "summary_large_image",
    site: "@agusbw_",
    description:
      "Foto dari tempat dan momen yang memiliki kesan tersendiri bagi saya",
    title: "Footprints",
    images: `https://snapy.yenkzera.tech/get?url=https://bewe-blog.vercel.app/footprints`,
  },
};

export default async function FootprintPage() {
  const footprints = await getSortedFootprints();

  return (
    <div>
      <h1 className="text-3xl font-medium font-schoolbell">Footprints 👣</h1>
      <p className="text-muted-foreground text-sm mt-1">
        Tempat saya menyimpan dan membagikan beberapa foto dari tempat dan
        momen.
      </p>
      {footprints.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 mt-7">
          {footprints.map((footprint) => (
            <FootprintCard
              key={footprint.slug}
              footprint={footprint.entry}
            />
          ))}
        </div>
      ) : (
        <p className="mt-7">Belum ada footprint yang ditinggalkan 😿</p>
      )}
    </div>
  );
}
