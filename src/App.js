import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";

export default function App(){
  const [photoData, setPhotoData] = useState({})
  const [currentPhoto,setCurrentPhoto] = useState(null)


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-09-09`)
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

      <div className='allText'>
        <h3>NASA's Astronomy Picture of the Day<br></br>{photoData.date}</h3>

        <h1>{photoData.title}</h1>
        <p> {
          photoData.explanation} </p>
      </div>
      <button onClick={() => {
        }}>
        Test button
      </button>

      </div>
      
      {/* <img src={photoData.url} alt="NASA Photo of the Day" />  */}
      
      
    </div>
  );
}
