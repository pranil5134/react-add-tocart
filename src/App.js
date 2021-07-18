import './App.css';
import Menu from './Menu';
import Banner from './Banner';
import Cards from './Cards';
import React, { Component, useState } from 'react';
import { buildQueries } from '@testing-library/react';


function App() {
  const [count,setcount] = useState(0)
  const [disable,setDisable] = useState(false)
  const [lable,setLabel] = useState("NUll")
  const [id,setId] =useState(-1)
  async function addtocart  (label,id)  {
   if(label == "Add to cart")
   {
      await setcount(count+1)
      setDisable(true)
      setId(id)
      setLabel(label)
      console.log(id)
      console.log("hello", label)
   }
   else if(label == "Remove from cart")
   {
      await setcount(count-1)
      setDisable(true)
      setId(id)
      setLabel(label)
      console.log(id)
      console.log("hello", label)
   }
    
    }
 
  return (
    <div className="App">
    <Menu dataParentToChild = {count}/>
    <Banner/>
    <Cards addtocart={addtocart.bind(this)} disableToChild = {id} buttonlabel = {lable}/>
        <p>
          save to reload.
        </p>   
    </div>
   
  );
}

export default App;
