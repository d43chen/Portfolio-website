export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Replica - uXperience Design Jam",
      description:
        "AI-powered financial literacy app for high school graduates. Features budgeting tools, savings recommendations, financial impact simulations, community support, and progress tracking.",
      tech: ["UX Design", "Figma", "Design Strategy"],
      image: "💰",
      details: "Role: UX Designer & Design Strategist | Team Project",
    },
    {
      id: 2,
      title: "GBDA Society",
      description:
        "Global HR outsourcing platform achieving 22% cost savings and 78% client satisfaction. Available across 180+ countries with analytics, UX optimization, and AI chat integration.",
      tech: ["Product Strategy", "Analytics", "Platform Design"],
      image: "🌍",
      details: "Global platform connecting HR firms with companies",
    },
    {
      id: 3,
      title: "UW Portal Room System",
      description:
        "Comprehensive study space booking system. Features room filtering by noise level, rating system, maps integration, and booking history. Addresses student pain points in finding study spaces.",
      tech: ["UX Research", "Design Systems", "User Testing"],
      image: "📚",
      details: "Designed using Figma after conducting user interviews",
    },
    {
      id: 4,
      title: "Amsterdam Brewery - Redesign & Branding",
      description:
        "Complete logo redesign and brand identity overhaul. New packaging design inspired by CN Tower and Toronto's waterfront. Target audience: 20-40 year-olds. Color palette: Yellow (#FED700) & Red (#D92827).",
      tech: ["Branding", "Illustrator", "Photoshop"],
      image: "🍺",
      details: "Presented to business judges and approved for implementation",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-3 text-sm">{project.details}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
