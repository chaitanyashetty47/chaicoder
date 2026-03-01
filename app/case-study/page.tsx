import Link from 'next/link';
import { getAllCaseStudies } from '@/lib/case-study';
import Header from '@/components/Header';

export const metadata = {
  title: 'Case Study | The Chai Coder',
  description:
    'Real projects, real impact. See how we help brands build and ship products that scale.',
};

export default function CaseStudyListPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="min-h-screen bg-gradient-to-br from-chai-foam via-chai-light to-chai-foam">
      <div className="container mx-auto px-8 py-12 md:py-16 max-w-4xl">
        <div className="mb-12">
          <p className="text-sm font-medium tracking-widest text-teal uppercase mb-2">
            Case Study
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Our Work in Action
          </h1>
          <p className="text-lg text-text-dark/80">
            Real projects, real impact. Here&apos;s how we&apos;ve helped brands build and ship products that scale.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-dark/60">No case studies yet. Check back soon!</p>
            </div>
          ) : (
            caseStudies.map((cs) => (
              <article
                key={cs.slug}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="mb-4">
                  <span className="text-sm text-text-dark/60">{cs.clientName}</span>
                  {cs.date && (
                    <>
                      <span className="mx-2 text-text-dark/40">•</span>
                      <time className="text-sm text-text-dark/60">
                        {new Date(cs.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </>
                  )}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-3 hover:text-primary-orange transition-colors">
                  <Link href={`/case-study/${cs.slug}`}>{cs.title}</Link>
                </h2>

                <p className="text-text-dark/80 mb-4 leading-relaxed">{cs.summary}</p>

                <Link
                  href={`/case-study/${cs.slug}`}
                  className="inline-flex items-center text-teal font-semibold hover:text-teal-hover transition-colors"
                >
                  Read case study →
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
