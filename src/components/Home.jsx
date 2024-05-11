import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const name = query.get('name');

  return (
    <div>
      <h2>Home Page</h2>
      {name && <p>Hello, {name}!</p>}
    </div>
  );
};

export default Home;