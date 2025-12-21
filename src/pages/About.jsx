import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We build modern, scalable and user-friendly web applications
            using the latest technologies.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              We are passionate developers focused on creating high-quality
              software solutions for startups and businesses.
            </p>
            <p className="text-gray-600">
              Our goal is to deliver clean code, great UI/UX and scalable
              architecture.
            </p>
          </div>

          <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
            Team / Image
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold mb-4">🎯 Our Mission</h3>
            <p className="text-gray-600">
              To help developers and businesses build fast, secure and
              scalable applications.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold mb-4">🚀 Our Vision</h3>
            <p className="text-gray-600">
              To become a trusted platform for modern web development.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-8">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </>
  );
};

export default About;
