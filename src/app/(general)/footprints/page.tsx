import Image from "next/image";
import { cn } from "@/lib/utils";
import { getSortedFootprints } from "@/lib/server/keystatic";
import { FootprintEntry } from "@/lib/types";

function FootprintCard({ footprint }: { footprint: FootprintEntry }) {
  return (
    <div
      className={cn(
        "relative p-4 group break-inside-avoid",
        "before:block before:absolute before:w-[100%] before:inset-0 before:-z-10 before:h-[100%]  before:rounded-lg before:transition-all before:duration-300 before:scale-95",
        "hover:before:bg-muted-foreground/10 hover:before:scale-100"
      )}
    >
      <Image
        src={footprint.thumbnail}
        alt="placeholder"
        className="rounded-lg object-cover w-full h-auto"
        sizes="100vw"
        width={1000}
        height={1000}
      />

      <p className="text-right font-semibold mt-1">{footprint.title}</p>
      <p className="text-xs">{footprint.description}</p>
      <p className="mt-2 text-purple-400 lg:text-muted-foreground group-hover:text-purple-400 text-sm hover:text-purple-600 transition-colors duration-300 font-semibold text-right">
        {new Date(footprint.createdAt).toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}

export default async function Footprint() {
  const footprints = await getSortedFootprints();

  return (
    <div>
      <h1 className="text-3xl font-semibold">Footprints 👣</h1>
      <p className="text-muted-foreground text-sm mt-1">
        Beberapa foto dari tempat dan momen yang memiliki kesan tersendiri bagi
        saya.
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
