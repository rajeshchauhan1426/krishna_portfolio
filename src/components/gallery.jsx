import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    "1.jpeg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">My Work</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="border rounded overflow-hidden shadow-md transform transition duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openImage(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
