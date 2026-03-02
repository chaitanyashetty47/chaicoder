import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  getCaseStudyBySlug,
  getCaseStudySlugs,
  getCaseStudyMetadata,
} from '@/lib/case-study';
import { extractHeadings } from '@/lib/headings';
import { getGalleryForSlug } from '@/lib/case-study-galleries';
import { VisualProofGallery } from '@/components/case-study/VisualProofGallery';
import { TableOfContents } from '@/components/ui/table-of-contents';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const metadata = getCaseStudyMetadata(slug);

  if (!metadata) {
    return {
      title: 'Case Study Not Found | The Chai Coder',
    };
  }

  return {
    title: `${metadata.title} | The Chai Coder`,
    description: metadata.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  let headings = extractHeadings(caseStudy.content);
  
  // Add Visual Proof heading when case study has a gallery
  if (getGalleryForSlug(caseStudy.slug).length > 0) {
    headings = [
      ...headings,
      { id: 'visual-proof', text: 'Visual Proof', level: 2 }
    ];
  }

  const generateId = (children: unknown): string => {
    const extractText = (node: unknown): string => {
      if (typeof node === 'string') return node;
      if (Array.isArray(node)) return node.map(extractText).join('');
      if (node && typeof node === 'object' && 'props' in node) {
        const props = (node as { props?: { children?: unknown } }).props;
        if (props?.children) return extractText(props.children);
      }
      return '';
    };

    const text = extractText(children);
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-chai-foam via-chai-light to-chai-foam">
      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          <article className="flex-1 max-w-4xl w-full">
            {/* Client logo */}
            <div className="mb-6 flex justify-start">
              <Image
                src="/str-compressed.png"
                alt={caseStudy.clientName}
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Label */}
            <p className="text-sm font-medium tracking-widest text-teal uppercase mb-4">
              Case Study
            </p>

            {/* Title */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
                {caseStudy.title}
              </h1>
            </header>

            {/* Client Overview - outside white card */}
            <div className="mb-8 space-y-3">
              <ul className="space-y-2 text-text-dark/90">
                <li className="flex gap-2">
                  <span className="font-semibold min-w-[140px]">Industry:</span>
                  <span>{caseStudy.projectBrief.industry}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold min-w-[140px]">Business Model:</span>
                  <span>{caseStudy.projectBrief.businessModel}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold min-w-[140px]">Stage:</span>
                  <span>{caseStudy.projectBrief.stage}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold min-w-[140px]">Market:</span>
                  <span>{caseStudy.projectBrief.market}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold min-w-[140px]">Offering:</span>
                  <span>{caseStudy.projectBrief.offering}</span>
                </li>
              </ul>
              <p className="text-text-dark/90 leading-relaxed pt-2">
                {caseStudy.projectBrief.uniqueValue}
              </p>
            </div>

            {/* 2. Testimonial Card */}
            {caseStudy.testimonial.quote && (
              <div className="mb-10">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 border-t-4 border-t-teal p-6 md:p-8">
                  <blockquote className="italic text-text-dark/90 text-base md:text-lg leading-relaxed mb-6">
                    &ldquo;{caseStudy.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    {caseStudy.testimonial.avatar && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={caseStudy.testimonial.avatar}
                          alt={caseStudy.testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-primary-orange">
                        {caseStudy.testimonial.author}
                      </p>
                      <p className="text-sm text-text-dark/70">
                        {caseStudy.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Main content (The Challenge through Results) */}
            <div className="prose prose-lg max-w-none bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="p-6 md:p-8">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, children, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { node?: unknown }) => {
                    const id = generateId(children);
                    return (
                      <h1
                        id={id}
                        className="text-3xl md:text-4xl font-bold text-text-dark mt-8 mb-4 first:mt-0"
                        {...props}
                      >
                        {children}
                      </h1>
                    );
                  },
                  h2: ({ node, children, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { node?: unknown }) => {
                    const id = generateId(children);
                    return (
                      <h2
                        id={id}
                        className="text-2xl md:text-3xl font-bold text-text-dark mt-8 mb-4 border-b border-gray-200 pb-2"
                        {...props}
                      >
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ node, children, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { node?: unknown }) => {
                    const id = generateId(children);
                    return (
                      <h3
                        id={id}
                        className="text-xl md:text-2xl font-semibold text-text-dark mt-6 mb-3"
                        {...props}
                      >
                        {children}
                      </h3>
                    );
                  },
                  p: ({ node, ...props }) => (
                    <p
                      className="text-text-dark/90 leading-relaxed mb-4 text-base md:text-lg"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul
                      className="list-disc list-inside mb-4 space-y-2 text-text-dark/90 ml-4"
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="list-decimal list-inside mb-4 space-y-2 text-text-dark/90 ml-4"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="ml-2 leading-relaxed" {...props} />
                  ),
                  code: ({
                    node,
                    className,
                    children,
                    ...props
                  }: React.HTMLAttributes<HTMLElement> & {
                    node?: unknown;
                    className?: string;
                  }) => {
                    const isInline = !className;
                    return isInline ? (
                      <code
                        className="bg-[#3D2C20]/10 text-[#E07A5F] px-1.5 py-0.5 rounded text-sm font-mono"
                        {...props}
                      >
                        {children}
                      </code>
                    ) : (
                      <code
                        className="block bg-[#3D2C20]/5 p-4 rounded-lg overflow-x-auto text-sm font-mono text-[#3D2C20] whitespace-pre"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                  pre: ({ node, children, ...props }) => (
                    <pre
                      className="bg-[#3D2C20]/5 p-4 rounded-lg overflow-x-auto mb-4 -mx-4 md:mx-0"
                      {...props}
                    >
                      {children}
                    </pre>
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="text-[#2A9D8F] hover:text-[#238B7A] underline transition-colors"
                      {...props}
                    />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-[#E07A5F] pl-4 italic text-[#3D2C20]/80 my-4 bg-[#E07A5F]/5 py-2 rounded-r"
                      {...props}
                    />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-bold text-text-dark" {...props} />
                  ),
                  hr: ({ node, ...props }) => (
                    <hr className="my-8 border-gray-300" {...props} />
                  ),
                  table: ({ node, ...props }) => (
                    <div className="overflow-x-auto my-4">
                      <table
                        className="min-w-full border-collapse border border-gray-300"
                        {...props}
                      />
                    </div>
                  ),
                  th: ({ node, ...props }) => (
                    <th
                      className="border border-gray-300 px-4 py-2 bg-[#3D2C20]/5 font-semibold text-left"
                      {...props}
                    />
                  ),
                  td: ({ node, ...props }) => (
                    <td className="border border-gray-300 px-4 py-2" {...props} />
                  ),
                }}
              >
                {caseStudy.content}
              </ReactMarkdown>

              {/* Visual Proof gallery – shown when case study has gallery images */}
              {getGalleryForSlug(caseStudy.slug).length > 0 && (
                <section className="mt-8 pt-8 border-t border-gray-200">
                  <h2 id="visual-proof" className="text-2xl md:text-3xl font-bold text-text-dark mb-6">
                    Visual Proof
                  </h2>
                  <VisualProofGallery slug={caseStudy.slug} />
                </section>
              )}
              </div>
            </div>
          </article>

          <aside className="flex-shrink-0">
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </div>
    </div>
  );
}
