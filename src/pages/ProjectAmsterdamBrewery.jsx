import { Link } from "react-router-dom";

export default function ProjectAmsterdamBrewery() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-block text-blue-400 hover:text-blue-300 mb-8"
        >
          ← Back to Projects
        </Link>
      </div>

      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Amsterdam Brewery
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Product Redesign & Brand Identity
        </p>

        <div className="w-full h-96 rounded-lg overflow-hidden mb-12">
          <img
            src="/amsterdam-brewery.jpg"
            alt="Amsterdam Brewery Branding"
            className="w-full h-full object-cover"
          />
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            About the Brand
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Amsterdam Brewery makes high-quality beers that bring people
            together in Toronto. Since 1986, Amsterdam Brewery has served unique
            Toronto beers at three lively locations.
          </p>
          <p className="text-lg text-gray-300">
            <strong>Target Audience:</strong> 20-40 year-olds seeking quality
            brews and community
            <br />
            <strong>Message:</strong> Amsterdam Brewery unites Toronto with
            quality brews for winding down or game time
            <br />
            <strong>Distribution:</strong> LCBO (Liquor Control Board of
            Ontario)
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Design Concept
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            The logo serves as the focal point on the can, surrounded by deeper
            colors that complement white text. A white outline enhances the logo
            further. The design draws inspiration from Toronto's iconic CN
            Tower, symbolizing the brand's welcoming community and conversation
            values.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            The concept extends to packaging with the beer's creation date
            displayed above the logo. Wave patterns illustrate the location of
            Amsterdam Bar at Toronto's waterfront, creating a true statement of
            Toronto that communicates both the beer's originality and the
            brewery's community-focused mission.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Typography</h2>
          <div className="space-y-6">
            {[
              {
                font: "AZO SANS",
                use: "AMSTERDAM",
                rationale:
                  "Represents the font of Toronto. Provides an authentic Toronto vibe and modern feel.",
              },
              {
                font: "ALKALINE",
                use: "BREWERY",
                rationale:
                  "Cursive style provides a nostalgic feel, connecting to the brewery's heritage and classic roots.",
              },
              {
                font: "BEBAS NEUE",
                use: "EST",
                rationale:
                  "Simplistic and forward-thinking, appeals to the demographic range of 20-40 year-olds.",
              },
            ].map((type, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-2xl font-bold text-blue-300">
                    {type.font}
                  </h4>
                  <span className="text-gray-400 text-lg">{type.use}</span>
                </div>
                <p className="text-gray-300">{type.rationale}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Color Palette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div
                className="w-full h-32 rounded-lg mb-6"
                style={{ backgroundColor: "#FED700" }}
              ></div>
              <h4 className="text-2xl font-bold text-blue-300 mb-2">
                YELLOW - #FED700
              </h4>
              <p className="text-gray-300">
                Represents the richness and color of the beer itself. Creates a
                warm, inviting visual that stands out on shelves.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div
                className="w-full h-32 rounded-lg mb-6"
                style={{ backgroundColor: "#D92827" }}
              ></div>
              <h4 className="text-2xl font-bold text-blue-300 mb-2">
                RED - #D92827
              </h4>
              <p className="text-gray-300">
                The brand's signature color maintained through years of
                redesigns. Conveys energy, passion, and the brewery's heritage.
              </p>
            </div>
          </div>
          <p className="text-gray-300 mt-6 text-center">
            Together, these colors provide a sense of premium quality and
            straightforward authenticity.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Learning</h2>
          <p className="text-lg text-gray-300">
            This project demonstrated the importance of user research, strategic
            branding, and cohesive brand identity. It showcased how different
            design components—typography, color, imagery, and spatial
            design—work together to create a memorable brand presence that
            resonates with target audiences and differentiates products in the
            marketplace.
          </p>
        </section>
      </section>
    </div>
  );
}
