import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold">Get in touch</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <ul className="flex justify-center">
          <li>
            <a href="mailto:example@example.com" className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-envelope"></i> example@example.com
            </a>
          </li>
          <li>
            <a href="https://github.com/example" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://twitter.com/example" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;