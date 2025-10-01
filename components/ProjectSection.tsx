import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Revolutionary Data Analytics Platform",
      description: "A cutting-edge solution for real-time data processing and visualization, leveraging AI/ML for predictive insights.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      isWorkInProgress: true
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description: "Modern shopping experience with seamless checkout, personalized recommendations, and real-time inventory management.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      isWorkInProgress: false
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "Comprehensive patient management platform with appointment scheduling, medical records, and telemedicine integration.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
      isWorkInProgress: true
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Text Content */}
            <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#3D2C20] font-sansation leading-tight">
                {project.title}
              </h2>
              <p className="text-lg text-[#3D2C20] font-inter leading-relaxed">
                {project.description}
              </p>
              <div className="pt-2">
                <a href="#" className="inline-flex items-center text-[#2A9D8F] font-semibold font-inter hover:text-[#238B7A] transition-colors duration-300">
                  Explore More 
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Card */}
            <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
              <div className="space-y-1">
                {/* Image Container */}
                <div className="relative h-64 lg:h-80 overflow-hidden bg-white rounded-2xl shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Work In Progress Ribbon */}
                  {project.isWorkInProgress && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl flex items-center justify-center">
                      <div className="w-[120%] h-16 transform -rotate-6 shadow-lg">
                        {/* Black and white diagonal stripes background */}
                        <div className="absolute inset-0 flex">
                          {[...Array(20)].map((_, i) => (
                            <div
                              key={i}
                              className={`flex-1 ${i % 2 === 0 ? 'bg-black' : 'bg-white'}`}
                              style={{ transform: 'skewX(-45deg)' }}
                            />
                          ))}
                        </div>
                        {/* Yellow background for text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-yellow-400 px-8 py-2 border-y-2 border-black">
                            <span className="text-black font-bold text-lg tracking-wider whitespace-nowrap">
                              WORK IN PROGRESS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  
                {/* Buttons Container */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-[#2A9D8F] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#238B7A] transition-colors duration-300 font-inter">
                    Checkout Website
                  </button>
                  <button className="flex-1 bg-white text-[#2A9D8F] border-2 border-[#2A9D8F] font-semibold py-3 px-4 rounded-lg hover:bg-[#2A9D8F] hover:text-white transition-all duration-300 font-inter">
                    Explore Case Study
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;