import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form className="max-w-lg mx-auto bg-gray-100 p-8 rounded shadow" onSubmit={handleSubmit}>
      <label className="block mb-4">
        <span className="text-gray-700">Name:</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Message:</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </label>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
