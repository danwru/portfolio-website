import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Personal Project
          </div>
          <a
            href="https://dannyru-react-movieproject.netlify.app/"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Movies Application
          </a>
          <p className="mt-2 text-slate-500">
            A movie search web application made with React.js. The app neatly
            organizes movie information extracted from The Movie Database API
            when searching for movies to watch.
          </p>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Personal Project
          </div>
          <a
            href="https://dannyru-react-movieproject.netlify.app/"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Movies Application
          </a>
          <p className="mt-2 text-slate-500">
            A movie search web application made with React.js. The app neatly
            organizes movie information extracted from The Movie Database API
            when searching for movies to watch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
