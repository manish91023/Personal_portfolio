import React, { useEffect, useState } from 'react'
import axios from "axios"

const FormTesting = () => {
    useEffect(async()=>{
      const res=await axios.get('http://localhost:3000/project/get')
      console.log(res)
      const parsedArray = JSON.parse(res.data[0]);
      console.log(parsedArray)
    },[])

  return (
    <div>
      <h1>project testing</h1>
    </div>
  )
}

export default FormTesting 