import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-mono gap-4">
      <p>Mbit Finland</p>

      <p>FI28178724</p>

      <p>Mikko Kohtala</p>

      <div className="flex flex-row gap-2">
        <a
          href="https://github.com/pitkane"
          target="_blank"
          rel="external"
          className="underline"
        >
          GitHub
        </a>
        <p className="mx-2">|</p>
        <a
          href="https://twitter.com/mikko_kohtala"
          target="_blank"
          rel="external"
          className="underline"
        >
          Twitter
        </a>
      </div>
    </main>
  );
}
