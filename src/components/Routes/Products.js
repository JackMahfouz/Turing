import React from 'react';
import Header from '../Header';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './ProductsData';


function Products() {
  return (
    <>
      <Header {...homeObjOne} />
      <Header {...homeObjTwo} />
    </>
  );
}

export default Products;