import React from 'react';
import {mishnaNumbers} from '../utils/utils';
import {hebrewNames} from '../utils/data';

const Heading = (props) => {
    const {start ,end, masechta} = props
  return (
    <div>
      <img src="https://mcusercontent.com/ba390245ba1e66face91e7941/images/3761ae58-6224-4458-ac31-8834a046406f.png" alt="Time4Mishna"/>
      <div className='heading'>
        <img src="https://mcusercontent.com/ba390245ba1e66face91e7941/images/1ab1305e-39aa-4beb-9511-a0a731675a40.png" alt="Jewish Futures logo" className="JFTlogo"/>
        <div className="title">
   <p>-----------------------------------------------------------------</p>
<h1>{hebrewNames[masechta]} {mishnaNumbers(start)} - {mishnaNumbers(end)} </h1>      
   <p>-----------------------------------------------------------------</p>
   </div>
    </div>
    </div>
  );
};

export default Heading;