import React, { useState } from 'react'
import './Product.css'


const Product = ({color, backgroundColor}) => {
  const style={color:color||"white", backgroundColor:backgroundColor|| "grey"}
  const[counter, setCounter]= useState(1)
  const handleChange=()=>{
    // setCounter({...counter,[e.target.name]:e.target.value});
    setCounter(counter +1)
  }  
  return (
    <>
    <input type="text" className='row-column-input' placeholder='Rows'name='number'  />X
    <input type="text" placeholder='Columns' />


    <div className='row-column-flex'>
      <div style={style}>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div>{counter}</div>
      <div> {counter}</div>
      
    </div>
    <button type='submit' onClick={handleChange}>click me</button>
    </>
  )
}

export default Product

