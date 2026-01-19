import { Link } from "react-router-dom";

export default function ProjectUWPortal() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-16">
      <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-block text-blue-400 hover:text-blue-300 mb-8"
        >
          ← Back
        </Link>
      </div>

      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          UW Portal Room System
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Study Space Booking Solution
        </p>

        <div className="w-full h-96 rounded-lg overflow-hidden mb-12">
          <img
            src="/uw-portal.jpg"
            alt="UW Portal Room System"
            className="w-full h-full object-cover"
          />
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">The Problem</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Finding an available and suitable study space on the University of
            Waterloo's main campus can be a frustrating and time-consuming
            process. While existing solutions like the Waitz app provide some
            assistance, they have limited location selection and occasional
            inaccuracies that create usability gaps.
          </p>
          <p className="text-lg text-gray-300">
            Additionally, many students are unaware these study space tools even
            exist, making it difficult for them to plan their study schedules
            effectively.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Research</h2>
          <p className="text-lg text-gray-300 mb-6">
            We conducted interviews with diverse participants including
            undergraduate and graduate students to understand their pain points
            when searching for study areas. Our research goals were to:
          </p>
          <ul className="space-y-4">
            {[
              "Understand students' preferences and expectations",
              "Explore experiences with current availability-tracking tools",
              "Identify perspectives on potential solutions",
              "Discover key themes for improved availability tracking",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-blue-400 mr-3">→</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Key Findings
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Difficulty in Finding Study Spaces",
                desc: "Students struggle to locate available study areas quickly",
              },
              {
                title: "Study Environment Impact",
                desc: "The quality and type of study environment significantly affects productivity",
              },
              {
                title: "Awareness Gap",
                desc: "Many students are unaware existing study space tracking tools exist",
              },
              {
                title: "Web-Based Preference",
                desc: "Students prefer web-based reservation systems for accessibility",
              },
            ].map((finding, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-blue-300 mb-2">
                  {finding.title}
                </h4>
                <p className="text-gray-300">{finding.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Solution Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Room Filter System",
                desc: "Filter by noise level, room environment, and capacity",
              },
              {
                title: "Rating System",
                desc: "View previous user experiences and reviews",
              },
              {
                title: "Maps Integration",
                desc: "Get directions to your chosen study room",
              },
              {
                title: "Booking History",
                desc: "Track your previous bookings and preferences",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-blue-300 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Learning</h2>
          <p className="text-lg text-gray-300">
            This project demonstrated the power of user research, usability
            testing, and design systems in creating fully functional application
            designs ready for development. By listening to students' needs and
            iterating on solutions, we created a system that directly addresses
            real pain points in campus life.
          </p>
        </section>
      </section>
    </div>
  );
}
