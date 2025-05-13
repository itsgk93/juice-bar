import type React from "react";
import { useState } from "react";

const ContactSection = () => {
  const [status, setStatus] = useState("");

  // Demo handler (replace with backend/Formspree for real use)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Your message has been sent! Thank you.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-16 px-4 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start">
        {/* Contact Form */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-8 mb-10 md:mb-0 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Contact Us</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} aria-label="Contact form">
            <label htmlFor="name" className="sr-only">Name</label>
            <input id="name" name="name" type="text" required placeholder="Your Name" className="px-4 py-3 rounded-lg border-2 border-green-200 focus:outline-none focus:border-green-600 text-lg" />
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" name="email" type="email" required placeholder="Your Email" className="px-4 py-3 rounded-lg border-2 border-green-200 focus:outline-none focus:border-green-600 text-lg" />
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" required placeholder="Your Message" rows={4} className="px-4 py-3 rounded-lg border-2 border-green-200 focus:outline-none focus:border-green-600 text-lg" />
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all duration-300">Send Message</button>
            {status && <span className="text-green-600 mt-2 font-semibold">{status}</span>}
          </form>
        </div>
        {/* Contact Info with Map */}
        <div className="flex-1 flex flex-col gap-4 animate-fade-in">
          <h3 className="text-xl font-semibold text-orange-500">Our Location</h3>
          <p>123 Fresh Ave, Suite 12<br />Juicetown, JS 90210</p>
          <p><span className="font-semibold">Phone:</span> (234) 567-8901</p>
          <div className="w-full h-60 rounded-2xl overflow-hidden border-2 border-green-100">
            <iframe
              title="Juice Bar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183949017363!2d-73.98811752440061!3d40.75797873480023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1747163356924!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-hidden="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
