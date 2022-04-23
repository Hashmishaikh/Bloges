import axios from 'axios';
import React, { useState } from 'react';
import Cards from './Card'

const Home = () => {
    console.log("home")
    const [val,setVal] = useState()
    const data = "http://localhost:5000/blogs"
  return (
    <div>
      {/* { axios.get("http://localhost:5000/blogs")} */}
      <Cards />
    </div>
  )
}

export default Home