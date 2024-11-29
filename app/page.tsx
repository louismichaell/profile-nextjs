import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/code.svg"
          alt="Code Logo"
          width={180}
          height={38}
          priority
        />
        <p className="text-lg text-center sm:text-left">
          Hello World, My Name is Louis Michael
          <br />
          -<b> Android Developer </b>| hobi turuuu.
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Check out My latest work and projects{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              on GitHub
            </code>
          </li>
          <li>Stay tuned for more my turuuu v2</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/louismichaell"
          >
            <Image
              className="dark:invert"
              src="/github.svg"
              alt="Github"
              width={20}
              height={20}
            />
            View Projects
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/louismichaell/louismichaell/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Docs
          </a>
        </div>
      </main>
    </div>
  );
}