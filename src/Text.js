
import React from 'react';

export default function Text(date,title,explanation){
    return(
        <div className='allText'>
            <h3>NASA's Astronomy Picture of the Day<br></br>{date}</h3>
            <h1>{title}</h1> 
            <p> {explanation} </p>
        </div>
    )
}
