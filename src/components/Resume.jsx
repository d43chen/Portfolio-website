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
                <h4 className="text-xl font-semibold mb-1">Senior Developer</h4>
                <p className="text-gray-400 mb-2">
                  Tech Company Inc. • 2021 - Present
                </p>
                <p className="text-gray-300">
                  Led development of key features and mentored junior
                  developers.
                </p>
              </div>

              <div className="border-l-2 border-blue-600 pl-6">
                <h4 className="text-xl font-semibold mb-1">
                  Full Stack Developer
                </h4>
                <p className="text-gray-400 mb-2">Startup Co. • 2019 - 2021</p>
                <p className="text-gray-300">
                  Built and maintained web applications using React and Node.js.
                </p>
              </div>

              <div className="border-l-2 border-blue-600 pl-6">
                <h4 className="text-xl font-semibold mb-1">Junior Developer</h4>
                <p className="text-gray-400 mb-2">
                  Web Solutions Ltd. • 2018 - 2019
                </p>
                <p className="text-gray-300">
                  Developed responsive websites and fixed bugs under
                  supervision.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-400">Education</h3>
            <div className="space-y-8">
              <div className="border-l-2 border-blue-600 pl-6">
                <h4 className="text-xl font-semibold mb-1">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-gray-400 mb-2">University Name • 2018</p>
                <p className="text-gray-300">
                  Graduated with honors. Focus on web development and software
                  engineering.
                </p>
              </div>

              <div className="border-l-2 border-blue-600 pl-6">
                <h4 className="text-xl font-semibold mb-1">
                  Professional Certifications
                </h4>
                <p className="text-gray-400 mb-2">
                  Various Online Platforms • 2019 - 2024
                </p>
                <ul className="text-gray-300 list-disc list-inside">
                  <li>React Advanced Patterns</li>
                  <li>Node.js Mastery</li>
                  <li>Web Design Fundamentals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-16 text-center">
          <a
            href="#"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            ⬇️ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
