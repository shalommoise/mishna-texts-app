import React from 'react';
import {masechtaNames} from '../utils/data'
import {  Link } from "@reach/router"
const Form = (props) => {

const changeForm =(event)=>{
  const {name, value} =event.target;

props.formFunc(name,value);

}
const shortname =(name)=>{
const arr = name.split(" ");
arr.shift();
return arr.join(' ')
 }
  const {start ,end, masechta, err} = props
    return (
      
      <div className="formPage">
        <div className="formTitle">

           <img src="https://mcusercontent.com/ba390245ba1e66face91e7941/images/3761ae58-6224-4458-ac31-8834a046406f.png" alt="Time4Mishna"/>
                   <h1>Create Mishna Texts</h1>
                   <h3>You can only 4 mishanyos at a time</h3>
        </div>
        <form action="" className="form"> 
        <label htmlFor="masechta">Masechta: </label>

<select name="masechta" id="masechta" onChange={changeForm}>
  <option key='chooseMasechta' value='chooseMasechta'>Choose a Masechta</option>
  {masechtaNames.map((masechtaName)=>{
return  <option key={masechtaName} value={masechtaName}>{shortname(masechtaName)}</option>
  })}

</select>
         <label htmlFor="start">Starts:</label>
<input key='start'  name='start'  type="number" onChange={changeForm}/>  
       <label htmlFor="ends">Ends:</label>
<input key='ends'  name='end'  type="number" onChange={changeForm}/>  

  
        </form>
        {err ? <p>Start mishna must be before the end mishna </p>:     <Link  to={`/mishna/${masechta}/start/${start}/end/${end}`}  className="button" id="genbutton">Generate Mishna</Link> }
      </div>
    );

}

export default Form;

