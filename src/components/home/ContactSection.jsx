// src/components/home/ContactSection.jsx

import React, { useState } from 'react';

export default function ContactSection() {
  // State to manage the form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // A single handler to update the form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Placeholder function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // --- BACKEND API INTEGRATION POINT ---
    // LATER, you will send the `formData` to a backend endpoint.
    // e.g., await api.post('/contact', formData);
    
    alert(`Thank you for your message, ${formData.name}! We will get back to you soon.`);
    
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-lg text-gray-600 mt-2">We'd love to hear from you. Send us a message!</p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* --- LEFT COLUMN: CONTACT INFO --- */}
          <div className="bg-rose-50 p-8 rounded-lg border border-rose-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            
            {/* Email */}
            <div className="flex items-start space-x-4 mb-4">
              <div className="mt-1">
                <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:contact@yourplanner.com" className="text-rose-600 hover:underline">contact@yourplanner.com</a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 mb-6">
              <div className="mt-1">
                 <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href="tel:+1234567890" className="text-rose-600 hover:underline">+1 (234) 567-890</a>
              </div>
            </div>

            {/* Social Media */}
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add your actual social media links here */}
              <a href="#" className="text-gray-500 hover:text-rose-600">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5.52 4.5 10.02 10 10.02 5.5 0 10-4.5 10-10.02C22 6.53 17.5 2.04 12 2.04zM13.6 18.31h-3.1v-7.1h-1.6v-2.7h1.6v-1.8c0-1.3.6-3.3 3.3-3.3h2.3v2.7h-1.9c-.4 0-.9.2-.9.9v1.5h2.8l-.4 2.7h-2.4v7.1z"></path></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-rose-600">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06 1.8 1.16 3.94 1.84 6.23 1.84 7.47 0 11.55-6.19 11.55-11.55 0-.17 0-.35-.01-.52.8-.58 1.48-1.3 2.02-2.1z"></path></svg>
              </a>
            </div>
          </div>
          
          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-rose-300"/>
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-rose-300"/>
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-rose-300"></textarea>
              </div>
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