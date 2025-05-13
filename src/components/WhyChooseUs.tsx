import React from "react";
import { FaLeaf, FaBox, FaTruck, FaSeedling } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf className="text-green-600" size={36} />,
    label: "100% Natural Ingredients"
  },
  {
    icon: <FaSeedling className="text-yellow-500" size={36} />,
    label: "No Added Sugar"
  },
  {
    icon: <FaBox className="text-orange-400" size={36} />,
    label: "Eco-Friendly Packaging"
  },
  {
    icon: <FaTruck className="text-green-500" size={36} />,
    label: "Same-Day Delivery"
  }
];

const WhyChooseUs = () => (
  <section className="py-16 px-4 bg-white" id="why-choose-us">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-700">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f) => (
          <div key={f.label} className="flex flex-col items-center animate-fade-in">
            {f.icon}
            <span className="mt-4 text-xl font-semibold text-gray-700 text-center">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
