import { DarkThemeToggle } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 dark:bg-gray-800">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-2xl dark:text-white">GARAGE-HERO Test</h1>
        <DarkThemeToggle />
      </div>
      <Link href={"/login"} className="text-[#1A56DB] hover:brightness-90">
        Login or Signup
      </Link>
    </main>
  );
}
