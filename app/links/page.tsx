import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "Instagram",
    icon: "/instagram.svg",
    link: "https://www.instagram.com/heynzar",
  },
  {
    label: "LinkedIn",
    icon: "/linkedin.svg",
    link: "https://www.linkedin.com/in/heynzar",
  },
  {
    label: "BlueSky",
    icon: "/bluesky.svg",
    link: "https://bsky.app/profile/heynzar.bsky.social",
  },
  {
    label: "GitHub",
    icon: "/github.svg",
    link: "https://github.com/heynzar",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-10 px-6 sm:px-2 justify-center items-center max-w-xl mx-auto h-dvh w-full">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={500}
          height={200}
          alt="nzar dev logo"
          className="h-8 w-auto"
        />
      </Link>

      <h1 className="font-serif-i text-6xl sm:text-7xl tracking-tighter capitalize leading-[84%] text-center">
        Find Me Online
      </h1>

      <p className="text-center">
        I go by <span className="text-[#0066ff]">@heynzar</span> everywhere.
        Mostly active on the links below. <br className="hidden sm:block" /> Or
        reach me by{" "}
        <a href="mailto:heynzar@gmail.com" className="text-[#0066ff] underline">
          email
        </a>
        .
      </p>

      <main className="flex max-w-sm w-full flex-col items-center gap-2">
        {links.map(({ icon, label, link }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm rounded-md bg-secondary w-full h-10 px-4 flex items-center gap-2 font-medium hover:opacity-80 transition-opacity"
          >
            <Image
              width={14}
              height={14}
              alt={`${label} logo`}
              src={icon}
              className={cn(
                "h-3.5 w-auto",
                label === "GitHub" && "dark:invert",
              )}
            />
            {label}
            <ArrowUpRight strokeWidth={1.5} className="ml-auto size-4" />
          </a>
        ))}
      </main>
    </div>
  );
}
