'use client';

import { useEffect, useState, useRef } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const activeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0% -66% 0%' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  useEffect(() => {
    if (activeButtonRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const button = activeButtonRef.current;
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      if (buttonRect.top < containerRect.top || buttonRect.bottom > containerRect.bottom) {
        button.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [activeId]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 hidden lg:flex flex-col h-[calc(100vh-8rem)] w-64 xl:w-72 bg-white rounded-lg p-4">
      <div 
        ref={scrollContainerRef} 
        className="flex-1 overflow-y-auto overflow-x-hidden hover:overflow-y-scroll toc-scrollbar"
      >
        <div className="px-2">
          <p className="text-[#3D2C20] text-md font-extrabold mb-4 sticky top-0 bg-white pb-2 z-10">
            On This Page
          </p>
          <nav className="flex flex-col gap-1">
            {headings.map((heading) => (
              <button
                ref={activeId === heading.id ? activeButtonRef : null}
                key={heading.id}
                onClick={() => handleClick(heading.id)}
                className={`text-left text-[0.8rem] transition-all duration-200 py-1.5 px-2 rounded ${
                  heading.level === 3 ? 'pl-6' : ''
                } ${
                  activeId === heading.id
                    ? 'text-[#2A9D8F] font-bold'
                    : 'text-[#3D2C20]/90 hover:text-[#2A9D8F]'
                }`}
              >
                {heading.text}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-8 bg-primary-orange/15 rounded-lg border border-[#3D2C20]/10 p-6 flex flex-col gap-3">
        <h3 className="text-base font-semibold text-[#3D2C20] leading-tight">
          Have any ideas to ship?
        </h3>
        <p className="text-sm font-medium text-[#3D2C20]/70">
          Let's bring your vision to life with modern web solutions.
        </p>
        <button 
          onClick={() => window.open('https://calendly.com/chaitanyashetty47/the-chaicoder-discovery-call', '_blank')}
          className="bg-[#2A9D8F] text-white px-4 py-2.5 rounded-lg font-bold text-sm transition-all duration-300  hover:bg-[#238B7A] mt-2"
        >
          Book Your Call
        </button>
      </div>
    </div>
  );
}
