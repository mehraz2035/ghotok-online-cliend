// ContactUs.js

import  { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can add logic here to send the form data to your server
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            onChange={handleChange}
            value={formData.subject}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Subject"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={formData.message}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 w-full rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
