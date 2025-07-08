import React from 'react';

function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold">My projects</h2>
        <ul className="flex flex-wrap justify-center">
          <li className="w-full md:w-1/2 xl:w-1/3 p-4">
            <a href="#" className="block">
              <img src="https://via.placeholder.com/300" alt="Project 1" />
              <h3 className="text-lg font-bold">Project 1</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </a>
          </li>
          <li className="w-full md:w-1/2 xl:w-1/3 p-4">
            <a href="#" className="block">
              <img src="https://via.placeholder.com/300" alt="Project 2" />
              <h3 className="text-lg font-bold">Project 2</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </a>
          </li>
          <li className="w-full md:w-1/2 xl:w-1/3 p-4">
            <a href="#" className="block">
              <img src="https://via.placeholder.com/300" alt="Project 3" />
              <h3 className="text-lg font-bold">Project 3</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;