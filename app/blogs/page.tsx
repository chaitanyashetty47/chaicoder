import Link from 'next/link';
import { getAllBlogs } from '@/lib/blog';
import Header from '@/components/Header';

export const metadata = {
  title: 'Blog | The Chai Coder',
  description: 'Read our latest articles about web development, MVP building, and startup advice.',
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen bg-gradient-to-br from-chai-foam via-chai-light to-chai-foam">
      <Header />
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3D2C20] mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-[#3D2C20]/80">
            Insights, tutorials, and stories from our journey building MVPs and helping startups succeed.
          </p>
        </div>

        <div className="space-y-8">
          {blogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#3D2C20]/60">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            blogs.map((blog) => (
              <article
                key={blog.slug}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
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

                <h2 className="text-2xl md:text-3xl font-bold text-[#3D2C20] mb-3 hover:text-[#E07A5F] transition-colors">
                  <Link href={`/blogs/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>

                <p className="text-[#3D2C20]/80 mb-4 leading-relaxed">
                  {blog.description}
                </p>

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="inline-flex items-center text-[#2A9D8F] font-semibold hover:text-[#238B7A] transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
