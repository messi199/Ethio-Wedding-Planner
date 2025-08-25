import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-pink-50 relative overflow-hidden">
      {/* Floating petals */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float-slow absolute w-5 h-5 bg-rose-200 rounded-full opacity-50 top-10 left-10"></div>
        <div className="animate-float-slow absolute w-4 h-4 bg-rose-300 rounded-full opacity-40 bottom-20 right-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-rose-600">Get In Touch</h2>
          <p className="text-lg text-rose-700 mt-2">We'd love to hear from you. Send us a message!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Contact Info */}
          <div className="bg-white p-8 rounded-2xl border border-rose-100 shadow-lg animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-rose-600 mb-6">Contact Information</h3>
            <div className="flex items-start space-x-4 mb-4">
              <svg className="w-6 h-6 text-rose-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:contact@yourplanner.com" className="text-rose-600 hover:underline">contact@yourplanner.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-4 mb-6">
              <svg className="w-6 h-6 text-rose-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href="tel:+1234567890" className="text-rose-600 hover:underline">+1 (234) 567-890</a>
              </div>
            </div>

            {/* Social Media */}
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-rose-600 transition-transform transform hover:scale-110">
                {/* Facebook */}
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z"/></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-rose-600 transition-transform transform hover:scale-110">
                {/* Twitter */}
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06 1.8 1.16 3.94 1.84 6.23 1.84 7.47 0 11.55-6.19 11.55-11.55 0-.17 0-.35-.01-.52.8-.58 1.48-1.3 2.02-2.1z"/></svg>
              </a>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-right">
            <form onSubmit={handleSubmit}>
              {["name","email","message"].map((field, idx) => (
                <div className="mb-5" key={idx}>
                  <label className="block mb-2 font-medium text-gray-700 capitalize">{field === "name" ? "Full Name" : field === "email" ? "Email Address" : "Message"}</label>
                  {field === "message" ? (
                    <textarea name={field} rows="5" value={formData[field]} onChange={handleChange} required className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-rose-300"></textarea>
                  ) : (
                    <input type={field} name={field} value={formData[field]} onChange={handleChange} required className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-rose-300" />
                  )}
                </div>
              ))}
              <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
