import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        width={500}
        height={200}
        alt="nzar dev logo"
        className="h-8 w-auto"
      />
    </Link>
  );
}
