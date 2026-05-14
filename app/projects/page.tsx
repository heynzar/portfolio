import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 px-6 sm:px-2 justify-center items-center max-w-xl mx-auto h-dvh py-20 w-full">
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
        Selected Projects
      </h1>
      <div className="flex flex-col gap-1">
        <p className="text-center">
          Still cooking some things worth showing...
        </p>
      </div>
    </div>
  );
}
