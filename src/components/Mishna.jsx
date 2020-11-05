import React, { Component } from 'react';
import {getNumbers, mishnaSubHeading} from '../utils/utils';
import Heading from './Heading'
import MishnaText from './MishnaText'
import Pdf from "react-to-pdf";
import {  Link } from "@reach/router"
const ref = React.createRef();
class Mishna extends Component {
   
  render() {
        const {start ,end, masechta} = this.props
     const shortname =(name)=>{
const arr = name.split(" ");
arr.shift();
return arr.join(' ')
 }
    return (
      <div>
        <div className="heading">
           <Pdf targetRef={ref} filename={`${shortname(masechta)}_${start}-${end}.pdf`}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
       
      </Pdf>
<div> <Link to="/" className="button">Back</Link> </div> </div>
      <div ref={ref}>
   <Heading masechta={masechta} start={start} end={end}/>
    {getNumbers(start,end).map((mishna)=>{
      return (
        <div key={mishna} className="mishna">
        <h2>{mishnaSubHeading(mishna)}</h2>
        <MishnaText number={mishna} masechta={masechta}/>
        </div>
      )
    })}
      </div>
      </div>
    );
  }
}

export default Mishna;