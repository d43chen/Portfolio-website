export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A modern web application built with React and Tailwind CSS",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      image: "🎨",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Full-stack application with database integration",
      tech: ["Node.js", "MongoDB", "React"],
      image: "💻",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Mobile-responsive design with advanced animations",
      tech: ["React", "CSS3", "JavaScript"],
      image: "🚀",
    },
    {
      id: 4,
      title: "Project Four",
      description: "E-commerce platform with payment integration",
      tech: ["React", "Stripe", "Node.js"],
      image: "🛍️",
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
