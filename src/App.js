import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled, {keyframes} from 'styled-components'

import "./App.css";
import Text from './Text.js'
import {API_KEY, BASE_URL} from './Constants.js'

const StyledApp = styled.div` 
/* child component, component being used */
    /* transition: all .2s ease-in-out; */
    /* opacity: {visibleText}?  */
    .allText {
      opacity: ${pr => pr.visibleText? '1' : '0'};
    }
  `

export default function App(){
  const [photoData, setPhotoData] = useState({})
  const [visibleText,setVisibleText] = useState(true)

  const makeVisible = () => {
    setVisibleText(!visibleText)
    // console.log('visibleText: ',visibleText)

    // if (visibleText === true){
    //   // set opacity to 1
    //   return ('Make Text Transparent')}
    // else {
    //   // set opacity to 0
    //   return ('Make Text Visible')} 
  }

  useEffect(() => {
    axios.get(`${BASE_URL}?${API_KEY}&date=2020-09-10`)
    // to change date: &date=2020-09-10
      .then (res => {
        setPhotoData(res.data)
        console.log(res.data)
      })
      .catch (err => {
        debugger
      })
  }, [])

  

  return (
    <StyledApp className="App" visibleText={visibleText}> 
    {/* child of App, fed prop of visibleText, component declared*/}
      <div className='backgroundImage'
        style={{backgroundImage: `url(${photoData.url})`, }}
        alt='NASA Picture of the Day'> 
        {/* <img src={photoData.url} alt="NASA Photo of the Day" />  */}
      
        <Text date = {photoData.date}
            title = {photoData.title}
            explanation = {photoData.explanation} />

        <button onClick={makeVisible}>
          {visibleText ? 'Make Text Invisible': 'Make Text Visible'}
        </button>
      
      </div>


    </StyledApp>
  );
}
