import Image from "next/image";
import localFont from "next/font/local";
import Head from 'next/head';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
<>
<Head>
        <title>My Next.js App</title>
      </Head>
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold">Welcome to My Next.js App!</h1>
        <p className="mt-4">lmao<code>src/pages/index.tsx</code></p>
      </div>
</>
  );
}
