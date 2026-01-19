import { Link } from "react-router-dom";

export default function ProjectGBDA() {
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
        <h1 className="text-5xl md:text-6xl font-bold mb-4">GBDA Society</h1>
        <p className="text-xl text-gray-300 mb-8">
          Global HR Outsourcing Platform
        </p>

        <div className="w-full h-96 rounded-lg overflow-hidden mb-12">
          <img
            src="/gbda-society.jpg"
            alt="GBDA Society Platform"
            className="w-full h-full object-cover"
          />
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Purpose</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            A global support system to bridge the gap between companies looking
            to outsource specialized HR services. GBDA Society connects HR
            consultancy firms with companies seeking to optimize their human
            resources operations across the world.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Key Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Cost Savings", value: "22%" },
              { label: "Employee Satisfaction", value: "+15%" },
              { label: "Company Satisfaction", value: "78%" },
              { label: "Global Coverage", value: "180+ Countries" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-lg text-center border border-blue-600"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Target Audience
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            HR consultancy firms and companies looking to outsource their
            specialized HR services. The platform is designed for enterprises
            seeking to reduce costs while maintaining or improving employee
            satisfaction.
          </p>
          <p className="text-lg text-gray-300">
            Available across 180+ countries with plans to expand service
            offerings including IT, Education, and Onboarding solutions.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Analytics and Insights",
              "User Experience Optimization",
              "Data-Driven Decision Making",
              "AI-Powered Chat Support",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <p className="text-lg text-blue-300">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Go-To-Market
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            <strong>Launch Offer:</strong> 30-Day Free Demo for new clients
          </p>
          <p className="text-lg text-gray-300">
            <strong>Future Expansion:</strong> Plans to offer additional
            services including IT outsourcing, Education solutions, and
            comprehensive Onboarding services.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Backend</h2>
          <p className="text-lg text-gray-300">
            Powered by Cludo - an intelligent website search engine for tracking
            progress and delivering analytics insights.
          </p>
        </section>
      </section>
    </div>
  );
}
