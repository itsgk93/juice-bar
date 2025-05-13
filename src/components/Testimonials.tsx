import React from "react";

const testimonials = [
  {
    name: "Amanda J.",
    text: "Juice Bar delivers the freshest juices in town! Love the eco-friendly bottles and fast delivery.",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=freshwoman1",
    stars: 5
  },
  {
    name: "Chris P.",
    text: "The Green Revive is my favorite. Clean flavors, all natural – I feel healthier every day!",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=coolman",
    stars: 4
  },
  {
    name: "Priya S.",
    text: "Great variety and superb taste. Signing up for the newsletter scored me a sweet discount too!",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=freshwoman2",
    stars: 5
  }
];

const Star = ({ filled }: { filled: boolean }) => (
  <svg className={filled ? "text-yellow-400" : "text-gray-300"} width="20" height="20" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <title>{filled ? 'Filled' : 'Empty'} star</title>
    <polygon points="9.9,2 3.3,18 19.8,7.3 0,7.3 16.5,18" />
  </svg>
);

const Testimonials = () => (
  <section className="py-16 px-4 bg-green-50" id="testimonials">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-orange-500">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center animate-fade-in">
            <img src={t.avatar} alt={`${t.name} avatar`} className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-green-200" loading="lazy" />
            <p className="text-lg mb-4 text-gray-700">“{t.text}”</p>
            <div className="flex mb-2" aria-label={`Rated ${t.stars} stars`}>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={`star-${t.name}-${i}`} filled={i < t.stars} />
              ))}
            </div>
            <span className="text-green-800 font-bold">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
