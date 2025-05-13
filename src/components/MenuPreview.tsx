import React from "react";

const juices = [
  {
    name: "Green Revive",
    desc: "Kale, spinach, apple, cucumber, lemon, ginger.",
    img: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=768&q=80",
    price: "$6.50"
  },
  {
    name: "Sunshine Citrus",
    desc: "Orange, pineapple, mango, turmeric.",
    img: "https://plus.unsplash.com/premium_photo-1675667390417-d9d23160f4a6?auto=format&fit=crop&w=768&q=80",
    price: "$6.00"
  },
  {
    name: "Berry Boost",
    desc: "Strawberry, blueberry, raspberry, apple.",
    img: "https://images.unsplash.com/photo-1514995428455-447d4443fa7f?auto=format&fit=crop&w=768&q=80",
    price: "$6.75"
  },
  {
    name: "Tropical Bliss",
    desc: "Pineapple, coconut water, orange, chia seeds.",
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=768&q=80",
    price: "$7.00"
  },
  {
    name: "Beet Power",
    desc: "Beetroot, carrot, apple, lemon.",
    img: "https://images.pexels.com/photos/8215110/pexels-photo-8215110.jpeg?auto=compress&fit=crop&w=768&q=80",
    price: "$6.50"
  },
  {
    name: "Watermelon Wave",
    desc: "Watermelon, lime, mint.",
    img: "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&fit=crop&w=768&q=80",
    price: "$6.00"
  }
];

const MenuPreview = () => {
  return (
    <section className="py-16 px-4 bg-gray-50" id="menu">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-orange-500">Our Juices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {juices.map((juice) => (
            <div key={juice.name} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition duration-300 animate-fade-in">
              <img src={juice.img} alt={`${juice.name} juice`} className="w-28 h-28 object-cover rounded-full mb-4 shadow" loading="lazy" />
              <h3 className="text-xl font-semibold text-green-700 mb-2">{juice.name}</h3>
              <p className="text-gray-600 mb-2 text-center">{juice.desc}</p>
              <span className="text-orange-500 font-bold text-lg">{juice.price}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="/menu"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-green-200 transition-all duration-300"
            aria-label="View Full Menu"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
