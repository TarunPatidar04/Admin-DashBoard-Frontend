import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Build Modern Web Applications
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-lg">
            A complete starter project using Next.js, React and Tailwind CSS
            with authentication ready UI.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="/register"
              className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              Login
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Our Platform</h2>
            <p className="text-gray-600 mb-4">
              This project is designed for developers who want a clean and
              scalable UI architecture. Perfect for startups, SaaS products
              and personal projects.
            </p>
            <p className="text-gray-600">
              Built with best practices and ready to connect with any backend
              API.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-400">
            Image / Illustration
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Authentication Ready",
              "Responsive Design",
              "Clean Code Structure",
              "Reusable Components",
              "Modern UI/UX",
              "Scalable Architecture",
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">
                  🚀 {feature}
                </h3>
                <p className="text-gray-600">
                  Built using industry best practices for performance and
                  scalability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">1️⃣ Register</h3>
              <p className="text-gray-600">
                Create your account in seconds using the register page.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">2️⃣ Login</h3>
              <p className="text-gray-600">
                Securely login with your credentials.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">3️⃣ Build</h3>
              <p className="text-gray-600">
                Start building and scaling your application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Developers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {["Tarun", "Rahul", "Aman"].map((name, i) => (
              <div
                key={i}
                className="bg-gray-800 p-8 rounded-xl"
              >
                <p className="text-gray-300 mb-4">
                  “This starter UI saved me hours of setup time. Clean and
                  easy to extend.”
                </p>
                <h4 className="font-semibold">— {name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="mb-8">
          Create your account and start building today.
        </p>
        <a
          href="/register"
          className="px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Join Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-center py-8">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </>
  );
};

export default Home;
