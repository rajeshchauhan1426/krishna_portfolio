import React from 'react';
import ContactForm from '../components/contactform';

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Have a project in mind or just want to say hi? Feel free to reach out using the form below.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
