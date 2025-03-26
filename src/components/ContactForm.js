import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-16 bg-gray-50 mt-10">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-12 uppercase">Contact Us</h3>
        
        <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-lg">
          {/* Left - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h4>

            {submitted && (
              <p className="text-green-500 text-sm mb-4">Your message has been sent successfully!</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-gray-800 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 text-gray-800 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    placeholder="Your Email"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="w-1/2">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 text-gray-800 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                    placeholder="Your Phone"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-gray-800 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Google Map */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              className="w-full h-full min-h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7784.408711044719!2d79.6635549!3d12.700081!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1742753590273!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
