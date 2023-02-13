import React from 'react'

const Weather = ({data}) => {
  return (
    <div>
        <h1>
            City :{data.name}
        </h1>
        <h1>
            Temperature : {data.main.temp}
        </h1>
        <h1>
        Humidity : {data.main.humidity}
        </h1>
        <h1>
            Weather : {data.weather[0].main}
        </h1>
    </div>
  )
}

export default Weather