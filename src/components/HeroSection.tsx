import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center bg-center bg-cover text-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80)'
      }}
      aria-label="Fresh Juice Bar Hero"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative z-10 text-white max-w-xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in">
          Fresh, Cold-Pressed Juices Delivered Daily
        </h1>
        <p className="text-lg md:text-2xl mb-6 animate-fade-in delay-75">
          Pure taste. Real nutrition. Healthy living made effortless.
        </p>
        <a
          href="#menu"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all duration-300 animate-fade-in delay-100"
        >
          See Menu
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
