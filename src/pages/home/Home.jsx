import React from 'react'
import Login from '../login/Login'
import axios from "axios";
import { useState,useEffect } from 'react';

const Home = () => {
  const [allFoods,SetAllFoods] = useState([])
  const [loading,setLoading] = useState(true)
  const [query,setSQuery] =useState("")
  const [meal,setMeal] =useState("")
  const APP_ID = "46ffef88";
  const APP_KEY = "c1a82b8a8b8442386dd97244e230ccaf";
  // const url = "";

  const getFoods = async() => {
    const {data} =await axios.get("https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}")
    console.log(data);
  }
  getFoods()
// useEffect(() => {
//   getFoods()
// }, [])


  return (
    <div>
   
      
    </div>
  )
}

export default Home