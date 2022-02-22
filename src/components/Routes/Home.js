import React from 'react';
import Header from '../Header';
import {HomeObjOne} from './DATA'
 function Home() {
     return (
        <>
        <Header {...HomeObjOne} />
        </>
     );
 }

 export default Home;