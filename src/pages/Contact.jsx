import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../store/auth";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setFormData({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Data 👉", formData);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-gray-200">
            Have questions or want to work with us? Fill the form and we get
            back to you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Extra Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">
            We usually respond within 24 hours
          </h3>
          <p className="text-gray-600">
            Your message is important to us. Lets build something great
            together.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-8">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </>
  );
};

export default Contact;
