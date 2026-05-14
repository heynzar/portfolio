import { GithubCalendar } from "@/components/github-calendar";
import Logo from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { Folder } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 px-6 sm:px-2 justify-center items-center max-w-xl mx-auto min-h-dvh py-10 overflow-y-auto w-full">
      <Logo />

      <h1 className="font-serif-i text-6xl sm:text-7xl tracking-tighter capitalize leading-[84%] text-center">
        <span className="sm:hidden">Love, Logic And TypeScript</span>
        <span className="hidden sm:inline">I build with love</span>
      </h1>

      <GithubCalendar username="heynzar" />

      <p>
        I'm a Web Software Engineer based in{" "}
        <a
          href="https://www.google.com/search?q=morocco"
          className="text-[#0066ff] underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Morocco
        </a>
        . Who treats code as art. My work is driven by love, purpose, and a
        responsibility to make the web a little better. Find me anywhere as{" "}
        <Link href="/links" className="text-[#0066ff] underline">
          @heynzar
        </Link>{" "}
        or reach me by{" "}
        <a href="mailto:heynzar@gmail.com" className="text-[#0066ff] underline">
          email
        </a>
        .
      </p>

      <footer className="flex items-center gap-2">
        <Link
          href="/projects"
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "text-sm gap-1.5 font-medium",
          )}
        >
          <Folder />
          Projects
        </Link>

        <ModeToggle />
      </footer>
    </div>
  );
}
