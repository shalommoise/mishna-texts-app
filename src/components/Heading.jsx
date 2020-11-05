import React from 'react';
import {mishnaNumbers} from '../utils/utils';
import {hebrewNames} from '../utils/data';

const Heading = (props) => {
    const {start ,end, masechta} = props
  return (
    <div>
      <img src={require("../imgs/T4MtextLogo.png")} alt="Time4Mishna" className="t4mLogo"/>
      <div className='heading'>
        <img src={require("../imgs/jftLogo.png")} alt="Jewish Futures logo" className="JFTlogo"/>
      
   
  <h1>{hebrewNames[masechta]} {mishnaNumbers(start)}{"  "}-{"  "}{mishnaNumbers(end)} </h1>      
   <div></div>
  
    </div>
    </div>
  );
};

export default Heading;