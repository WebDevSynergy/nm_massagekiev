import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <div className="mt-10 flex flex-col items-center justify-center gap-6">
        <h1 className=" text-[48px] text-white">WDS_template</h1>

        <Image
          src="https://res.cloudinary.com/dkwbqq1n1/image/upload/v1708091473/gfhzv7slpkemeq6svdi5.jpg"
          alt="Логотип"
          width={1200}
          height={630}
        />

        <Link
          className="block text-[48px] text-accent  underline"
          href="https://webdevsynergy.vercel.app/en"
        >
          Go to the website of our web studio.
        </Link>
      </div>
    </div>
  );
}
