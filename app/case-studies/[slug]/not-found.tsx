import Link from 'next/link';
import Header from '@/components/Header';

export default function CaseStudyNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chai-foam via-chai-light to-chai-foam">
      <Header />
      <div className="container mx-auto px-8 py-24 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
          Case Study Not Found
        </h1>
        <p className="text-lg text-text-dark/80 mb-8">
          The case study you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/case-studies"
          className="inline-flex items-center bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-hover transition-colors"
        >
          ← Back to Case Studies
        </Link>
      </div>
    </div>
  );
}
