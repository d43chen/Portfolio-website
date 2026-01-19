import { Link } from "react-router-dom";

export default function ProjectReplica() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-16">
      {/* Back Button */}
      <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-block text-blue-400 hover:text-blue-300 mb-8"
        >
          ← Back
        </Link>
      </div>

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Replica</h1>
        <p className="text-xl text-gray-300 mb-8">uXperience Design Jam 2024</p>

        {/* Hero Image */}
        <div className="w-full h-96 rounded-lg overflow-hidden mb-12">
          <img
            src="/replica-design.jpg"
            alt="Replica App Design"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Role</h3>
            <p className="text-gray-300">UX Designer & Design Strategist</p>
          </div>
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Team</h3>
            <p className="text-gray-300">
              Noah Figueiredo, Jackson Hood, Damsith Abeysinghe, Smit Mhatre
            </p>
          </div>
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">Tools</h3>
            <p className="text-gray-300">Google Slides, Figma</p>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Overview</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Replica is an app designed to support recent high school graduates
            who are navigating the early stages of financial literacy. Many
            students face challenges when it comes to budgeting, saving, and
            making informed financial decisions—Replica aims to fill that gap.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Using AI, Replica takes students' questions and concerns about money
            and transforms them into practical, personalized simulations.
          </p>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Budgeting Tools",
                desc: "Interactive modules that help students plan their income and expenses.",
              },
              {
                title: "Savings Recommendations",
                desc: "Tailored suggestions for beginner-friendly savings accounts.",
              },
              {
                title: "Financial Impact Simulations",
                desc: "Visual representations of how recurring purchases affect finances over weeks, months, and years.",
              },
              {
                title: "Community Support",
                desc: "A space to connect with peers or mentors to ask questions and share financial experiences.",
              },
              {
                title: "Progress Graphs",
                desc: "Easy-to-understand charts showing how students can improve and sustain their budgeting.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Target Audience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Target Audience
          </h2>
          <p className="text-lg text-gray-300">
            Recent high school graduates navigating the early stages of
            financial literacy who need practical, accessible tools to
            understand budgeting and financial planning.
          </p>
        </section>
      </section>
    </div>
  );
}
