export default function About() {
  const skills = [
    ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    ["HTML", "CSS", "JavaScript"],
    ["Python", "Java", "Racket"],
    ["Adobe Express", "Microsoft Office", "Design Systems"],
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="w-48 h-48 mx-auto md:mx-0 mb-8 rounded-lg bg-gray-700 flex items-center justify-center text-7xl">
              👨‍💻
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Hi, I'm Daniel Chen, a Global Business and Digital Arts student at
              the University of Waterloo. With experience across UX design,
              marketing, business strategy, and product development, I create
              user-centered solutions that bridge the gap between design and
              business goals.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My approach combines research, creative problem-solving, and a
              deep understanding of user needs to deliver meaningful experiences
              and products. During my free time, I love watching programming and
              design tutorial videos to enhance my projects.
            </p>

            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="grid grid-cols-1 gap-4">
              {skills.map((skillGroup, index) => (
                <div key={index} className="flex flex-wrap gap-3">
                  {skillGroup.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
