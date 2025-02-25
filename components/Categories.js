// Categories.js

import React from 'react';
import Mobile from './Mobile';
import Computing from './Computing';
import Camera from './Camera';
import Accessories from './Accessories';

const Categories = () => {
  return (
    <div style={{ backgroundColor: '#f6f6f6', padding: '20px' }}>
      <Mobile />
      <Computing />
      <Camera />
      <Accessories />
    </div>
  );
};

export default Categories;
