// ErrorPage.js

import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold">Oops! Something went wrong</h1>
        <p className="mt-4">We're sorry, but there was an error.</p>
        <Link to="/" className="mt-4 inline-block bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
