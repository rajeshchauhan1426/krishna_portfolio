import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    { title: 'Wedding Photography', img: '2.jpg' },
    { title: 'Travel Photography', img: 'travel.jpg' },
    { title: 'Portrait Photography', img: 'portrait.jpg' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">My Portfolio</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div key={index} className="border rounded shadow-lg overflow-hidden">
            <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
