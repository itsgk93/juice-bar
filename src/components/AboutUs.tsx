import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 px-4 md:py-24 bg-white" id="about">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">About Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to Juice Bar! We’re passionate about fresh, healthy, and delicious cold-pressed juices. Our mission is to fuel your day with nature’s purest flavors—always made from sustainably sourced, seasonal fruits and veggies.
        </p>
        <p className="text-gray-500">
          Every bottle is packed with natural vitamins and nutrients. No added sugars. No artificial ingredients. Just 100% revitalizing refreshment served conveniently and eco-consciously.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
