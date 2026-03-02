import type { CaseStudyImage } from "@/components/case-study/ImageCarouselDialog";

/**
 * Gallery images per case study slug.
 * Add a new entry when you add a case study with a Visual Proof section.
 */
export const CASE_STUDY_GALLERIES: Record<string, CaseStudyImage[]> = {
  strentor: [
    {
      src: "/strentor-case-study/strentor-dashboard.png",
      alt: "Client Dashboard",
      title: "Client Dashboard",
    },
    {
      src: "/strentor-case-study/workout-plan.png",
      alt: "Workout Plan",
      title: "Workout Plan",
    },
    {
      src: "/strentor-case-study/personal-records.png",
      alt: "Personal Records",
      title: "Personal Records",
    },
    {
      src: "/strentor-case-study/weekly-img.png",
      alt: "Weekly Progress",
      title: "Weekly Progress",
    },
    {
      src: "/strentor-case-study/overall-img.png",
      alt: "Overall Progress",
      title: "Overall Progress",
    },
    {
      src: "/strentor-case-study/strentor-calculator-bmi.png",
      alt: "BMI Calculator",
      title: "BMI Calculator",
    },
    {
      src: "/strentor-case-study/calculator-ideal-weight.png",
      alt: "Ideal Weight Calculator",
      title: "Ideal Weight Calculator",
    },
  ],
  // Add more case studies here, e.g.:
  // otherClient: [
  //   { src: "/other-client-case-study/...", alt: "...", title: "..." },
  // ],
};

export function getGalleryForSlug(slug: string): CaseStudyImage[] {
  return CASE_STUDY_GALLERIES[slug] ?? [];
}
