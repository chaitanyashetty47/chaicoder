import Link from 'next/link';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chai-foam via-chai-light to-chai-foam">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3D2C20] mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-lg text-[#3D2C20]/80 mb-8">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/blogs"
          className="inline-flex items-center bg-[#2A9D8F] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#238B7A] transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
