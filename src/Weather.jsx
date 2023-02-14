import React from 'react'
import './weather.css'

const Weather = ({data}) => {
  return (
   <>
    <h4>{data.name.toUpperCase()}</h4>
    <h6>{data.weather[0].main.toUpperCase()}</h6>
    
    <h1 className='temp'>{data.main.temp}<sup>&deg;</sup></h1>
    <div className="container">
        <div className="details">
            <p>MAX</p>
            <span className='avg'>{data.main.temp_max}<sup>&deg;</sup></span>
        </div>
        <div className="details">
            <p>MIN</p>
            <span>{data.main.temp_min}<sup>&deg;</sup></span>
        </div>
    </div>
   </>
  )
}

export default Weather