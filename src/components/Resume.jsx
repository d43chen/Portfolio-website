export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-blue-400">Resume</span> & Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-400">
              Experience
            </h3>
            <div className="space-y-8">
              <div className="border-l-2 border-blue-600 pl-6">
                <h4 className="text-xl font-semibold mb-1">AI Developer</h4>
                <p className="text-gray-400 mb-2">
                  Toronto Catholic District School Board • Sep 2025 - Dec 2025
                </p>
                <ul className="text-gray-300 list-disc list-inside text-sm space-y-1">
                  <li>
                    Developed and deployed a Copilot Studio AI guidance agent
                    within TCDSB SharePoint allowing self-service resolution for
                    70% of common issues
                  </li>
                  <li>
                    Optimized markdown instructions for declarative agents
                    increasing test answer utility to 90% accuracy
                  </li>
                  <li>
                    Integrated ticket management abilities into the AI guidance
                    agent by incorporating Ivanti REST API
                  </li>
                  <li>
                    Tested and optimized agent prompts delivering solutions and
                    securing executive approval
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-400">Education</h3>
            <div className="space-y-8">
              <div className="border-l-2 border-blue-600 pl-6">
                <h4 className="text-xl font-semibold mb-1">
                  Honours Global Business and Digital Arts (Computing Minor)
                </h4>
                <p className="text-gray-400 mb-2">
                  University of Waterloo • Expected Jun 2028
                </p>
                <p className="text-gray-300 text-sm mb-3">
                  Relevant Coursework: User Experience Design, Web Development,
                  Digital Media, Data Structures, Management Information Systems
                </p>
              </div>

              <div className="border-l-2 border-blue-600 pl-6">
                <h4 className="text-xl font-semibold mb-1">Technical Skills</h4>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Tools:</strong> Figma, Adobe Creative Suite, Microsoft
                  Copilot Studio, Canva, Postman
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Languages:</strong> JavaScript, Python, CSS, HTML,
                  React, JSON, SQL
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-16 text-center">
          <a
            href="/Resume 2026.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
