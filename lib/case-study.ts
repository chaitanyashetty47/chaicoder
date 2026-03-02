import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const caseStudiesDirectory = path.join(process.cwd(), 'case-study');

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface CaseStudyProjectBrief {
  industry: string;
  businessModel: string;
  stage: string;
  market: string;
  offering: string;
  uniqueValue: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  date: string;
  clientName: string;
  clientAnonymous: boolean;
  projectBrief: CaseStudyProjectBrief;
  summary: string;
  testimonial: CaseStudyTestimonial;
  content: string;
}

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(caseStudiesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(caseStudiesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  try {
    const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      clientName: data.clientName || '',
      clientAnonymous: data.clientAnonymous ?? false,
      projectBrief: {
        industry: data.projectBrief?.industry || '',
        businessModel: data.projectBrief?.businessModel || '',
        stage: data.projectBrief?.stage || '',
        market: data.projectBrief?.market || '',
        offering: data.projectBrief?.offering || '',
        uniqueValue: data.projectBrief?.uniqueValue || '',
      },
      summary: data.summary || '',
      testimonial: {
        quote: data.testimonial?.quote || '',
        author: data.testimonial?.author || '',
        role: data.testimonial?.role || '',
        avatar: data.testimonial?.avatar,
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading case study ${slug}:`, error);
    return null;
  }
}

export function getAllCaseStudies(): CaseStudy[] {
  const slugs = getCaseStudySlugs();
  return slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((cs): cs is CaseStudy => cs !== null)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getCaseStudyMetadata(slug: string) {
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) {
    return null;
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    date: caseStudy.date,
    clientName: caseStudy.clientName,
  };
}
