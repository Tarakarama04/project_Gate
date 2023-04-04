import React, { useState } from 'react'
import './RegisterPage.css'
function RegisterPage() {
    const[data,setData]=useState('')
  return (
    <div className='container'>
        <div className='child_container'>
        <label><h2>Vehicle Registration Number</h2></label>
        <input className='field' type='text' placeholder='your Reg No.' onClick={(e)=>setData(e.target.value)}/>
        <button className='btn'><h2>ADD</h2></button>
        </div>
    </div>
  )
}

export default RegisterPage