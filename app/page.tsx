import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image className="object-cover w-full h-full" src="/nigga.jpg" alt="Next.js logo" fill priority />
    </div>
  );
}
