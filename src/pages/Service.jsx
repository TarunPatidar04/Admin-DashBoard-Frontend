import React from "react";
import Navbar from "../components/Navbar";

const Service = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="max-w-3xl mx-auto">
            We provide end-to-end web development services
            to help you grow your business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Web Development",
                desc: "Modern and responsive websites using React & Next.js.",
                icon: "💻",
              },
              {
                title: "Backend APIs",
                desc: "Secure and scalable APIs using Node.js & Express.",
                icon: "⚙️",
              },
              {
                title: "Authentication",
                desc: "Login, Register, JWT and role-based access.",
                icon: "🔐",
              },
              {
                title: "UI/UX Design",
                desc: "Clean and user-friendly design with Tailwind CSS.",
                icon: "🎨",
              },
              {
                title: "Performance Optimization",
                desc: "Fast loading and optimized applications.",
                icon: "⚡",
              },
              {
                title: "Deployment",
                desc: "Deploy apps on cloud with best practices.",
                icon: "☁️",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3">
                  {service.icon} {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Need a Custom Solution?
        </h2>
        <p className="mb-8">
          Let’s build something amazing together.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-8">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </>
  );
};

export default Service;
