import type React from "react";
import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // For demo, save emails to localStorage (can be changed to backend/CSV export)
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email && /.+@.+\..+/.test(email)) {
      const emails = JSON.parse(localStorage.getItem('juiceBarEmails') || '[]');
      emails.push(email);
      localStorage.setItem('juiceBarEmails', JSON.stringify(emails));
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className="py-16 px-4 bg-white" id="newsletter">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">Get 10% Off Your First Order!</h2>
        <p className="mb-6 text-gray-600">Join our newsletter for the latest specials, news, and fresh juice vibes.</p>
        {submitted ? (
          <div className="text-green-600 font-semibold text-lg">Thank you for subscribing!</div>
        ) : (
          <form className="flex flex-col sm:flex-row gap-4 items-center justify-center" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full sm:w-auto px-6 py-3 rounded-full border-2 border-green-200 focus:outline-none focus:border-green-600 text-lg"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
