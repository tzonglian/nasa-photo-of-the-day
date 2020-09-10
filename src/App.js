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
        style={{backgroundImage: `url(${photoData.url})`,
           }}>
          <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
          </p>
      </div>
      {/* <img src={photoData.url} alt="NASA Photo of the Day" />  */}
      
      <button onClick={() => {
        }}>
        Test button
      </button>
      
    </div>
  );
}
