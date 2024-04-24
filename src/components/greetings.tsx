import { getHomePage } from "@/lib/server/keystatic";
import profileImage from "@/../../public/images/profile.webp";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default async function Greetings() {
  const data = await getHomePage();

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <Image
          src={profileImage}
          alt="profile"
          className="rounded-full"
          placeholder="blur"
          width={100}
          height={100}
        />
        <div>
          <p
            className={cn(
              "text-3xl font-semibold font-schoolbell",
              "inline-block relative",
              "before:block before:-rotate-1 before:rounded-sm before:w-[120%] before:-left-2 before:-z-10 before:h-[110%] before:-top-1 before:bg-purple-500 before:absolute"
            )}
          >
            Hallo,
          </p>
          <p className="text-2xl font-medium font-schoolbell">
            Perkenalkan saya Bewee{" "}
            <span className="animate-wave text-3xl inline-block">👋🏻</span>
          </p>
        </div>
      </div>
      <p>{data?.description ? data.description : ""}</p>
    </div>
  );
}
