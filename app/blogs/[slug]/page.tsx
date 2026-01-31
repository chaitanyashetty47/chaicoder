import { notFound } from 'next/navigation';
import { getBlogBySlug, getBlogSlugs, getBlogMetadata } from '@/lib/blog';
import { extractHeadings } from '@/lib/headings';
import Header from '@/components/Header';
import { TableOfContents } from '@/components/ui/table-of-contents';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const metadata = getBlogMetadata(slug);

  if (!metadata) {
    return {
      title: 'Blog Post Not Found | The Chai Coder',
    };
  }

  return {
    title: `${metadata.title} | The Chai Coder`,
    description: metadata.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const headings = extractHeadings(blog.content);

  // Generate IDs for headings - helper function
  const generateId = (children: any): string => {
    const extractText = (node: any): string => {
      if (typeof node === 'string') return node;
      if (Array.isArray(node)) return node.map(extractText).join('');
      if (node?.props?.children) return extractText(node.props.children);
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
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          <article className="flex-1 max-w-4xl w-full">
        <header className="mb-8">
          <div className="mb-4">
            <a
              href="/blogs"
              className="inline-flex items-center text-[#2A9D8F] font-semibold hover:text-[#238B7A] transition-colors mb-3"
            >
              ← Back to Blog
            </a>
          </div>
          <div className="mb-4">
            <time className="text-sm text-[#3D2C20]/60">
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="mx-2 text-[#3D2C20]/40">•</span>
            <span className="text-sm text-[#3D2C20]/60">{blog.author}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3D2C20] mb-4">
            {blog.title}
          </h1>
          <p className="text-xl text-[#3D2C20]/80 leading-relaxed">
            {blog.description}
          </p>
        </header>

        <div className="prose prose-lg max-w-none bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-sm">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, children, ...props }: any) => {
                const id = generateId(children);
                return (
                  <h1 id={id} className="text-3xl md:text-4xl font-bold text-[#3D2C20] mt-8 mb-4 first:mt-0" {...props}>
                    {children}
                  </h1>
                );
              },
              h2: ({ node, children, ...props }: any) => {
                const id = generateId(children);
                return (
                  <h2 id={id} className="text-2xl md:text-3xl font-bold text-[#3D2C20] mt-8 mb-4 border-b border-gray-200 pb-2" {...props}>
                    {children}
                  </h2>
                );
              },
              h3: ({ node, children, ...props }: any) => {
                const id = generateId(children);
                return (
                  <h3 id={id} className="text-xl md:text-2xl font-semibold text-[#3D2C20] mt-6 mb-3" {...props}>
                    {children}
                  </h3>
                );
              },
              p: ({ node, ...props }) => (
                <p className="text-[#3D2C20]/90 leading-relaxed mb-4 text-base md:text-lg" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside mb-4 space-y-2 text-[#3D2C20]/90 ml-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside mb-4 space-y-2 text-[#3D2C20]/90 ml-4" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="ml-2 leading-relaxed" {...props} />
              ),
              code: ({ node, className, children, ...props }: any) => {
                const isInline = !className;
                return isInline ? (
                  <code className="bg-[#3D2C20]/10 text-[#E07A5F] px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                    {children}
                  </code>
                ) : (
                  <code className="block bg-[#3D2C20]/5 p-4 rounded-lg overflow-x-auto text-sm font-mono text-[#3D2C20] whitespace-pre" {...props}>
                    {children}
                  </code>
                );
              },
              pre: ({ node, children, ...props }: any) => (
                <pre className="bg-[#3D2C20]/5 p-4 rounded-lg overflow-x-auto mb-4 -mx-4 md:mx-0" {...props}>
                  {children}
                </pre>
              ),
              a: ({ node, ...props }) => (
                <a className="text-[#2A9D8F] hover:text-[#238B7A] underline transition-colors" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-[#E07A5F] pl-4 italic text-[#3D2C20]/80 my-4 bg-[#E07A5F]/5 py-2 rounded-r" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong className="font-bold text-[#3D2C20]" {...props} />
              ),
              hr: ({ node, ...props }) => (
                <hr className="my-8 border-gray-300" {...props} />
              ),
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full border-collapse border border-gray-300" {...props} />
                </div>
              ),
              th: ({ node, ...props }) => (
                <th className="border border-gray-300 px-4 py-2 bg-[#3D2C20]/5 font-semibold text-left" {...props} />
              ),
              td: ({ node, ...props }) => (
                <td className="border border-gray-300 px-4 py-2" {...props} />
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
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
