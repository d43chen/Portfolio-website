export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Get In <span className="text-blue-400">Touch</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-gray-900 p-6 rounded-lg">
                <span className="text-3xl">📧</span>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Email</h4>
                  <a
                    href="mailto:chendaniel873@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    chendaniel873@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-900 p-6 rounded-lg">
                <span className="text-3xl">📍</span>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Location</h4>
                  <p className="text-gray-300">Toronto, Canada</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-900 p-6 rounded-lg">
                <span className="text-3xl">🔗</span>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Social</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/daniel-chen-3164042b7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/d43chen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
