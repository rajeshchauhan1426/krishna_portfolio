import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
