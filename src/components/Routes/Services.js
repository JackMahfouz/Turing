import React from 'react';
import Header from '../Header';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './ServicesData';
import Pricing from '../Priceing';

function Services() {
  return (
    <>
      <Pricing />
      <Header {...homeObjOne} />
      <Header {...homeObjThree} />
    </>
  );
}

export default Services;