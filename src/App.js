import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";
//import Text from './Text.js'
import {API_KEY, BASE_URL} from './Constants.js'

export default function App(){
  const [photoData, setPhotoData] = useState({})
  // const [visibleText,setVisibleText] = useState(true)

  // const makeVisible = () => {
  //   setVisibleText(!visibleText)
  // }

  useEffect(() => {
    axios.get(`${BASE_URL}?${API_KEY}&date=2020-09-09`)
      .then (res => {
        setPhotoData(res.data)
        console.log(res.data)
      })
      .catch (err => {
        debugger
      })
  }, [])




  return (
    <div className="App">
      <div className='backgroundImage'
        style={{backgroundImage: `url(${photoData.url})`, }}
        alt='NASA Picture of the Day'> 
        {/* <img src={photoData.url} alt="NASA Photo of the Day" />  */}
      
        {/* <Text date = {photoData.data}
            title = {photoData.title}
            explanation = {photoData.explanation} /> */}
      
        <div className='allText'>
            <h3>NASA's Astronomy Picture of the Day<br></br>{photoData.date}</h3>

            <h1>{photoData.title}</h1> 
            <p> {
                photoData.explanation} </p>
        </div>

        {/* <button onClick={() => {
          makeVisible}}>
          Make Text Transparent
        </button> */}
      
      </div>


    </div>
  );
}
