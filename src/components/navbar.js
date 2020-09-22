import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ links }) {
  const navLinks = links.map(link => (
    <li className="mr-6 font-semibold">
      <Link to={link.path} className="text-blue-900 hover:text-blue-600">
        {link.name}
      </Link>
    </li>
  ));

  return (
    <nav className="bg-gray-200 py-4 mb-4">
      <ul className="flex container mx-auto">{navLinks}</ul>
    </nav>
  );
}

Navbar.propTypes = {
  links: PropTypes.array.isRequired,
};
