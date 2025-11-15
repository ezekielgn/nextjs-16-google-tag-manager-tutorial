import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white py-32 px-16 dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Google Tag Manager in Next.js 16.
          </h1>

          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This example shows how to install Google Tag Manager with
            <code className="mx-1 rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-900">
              @next/third-parties/google
            </code>
            and send a custom event using{" "}
            <code className="mx-1 rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-900">
              sendGTMEvent
            </code>
            . Use it as a starting point to wire your own CTAs to GA4.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          {/* Full tutorial button – update href to your actual tutorial URL */}
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-5 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200 md:w-[190px]"
            href="/gtm-nextjs-tutorial"
          >
            View full tutorial
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 text-black transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-[#1a1a1a] md:w-[190px]"
            href="https://developers.google.com/tag-platform/tag-manager/web"
            target="_blank"
            rel="noopener noreferrer"
          >
            GTM Web docs
          </a>
        </div>
      </main>
    </div>
  );
}
