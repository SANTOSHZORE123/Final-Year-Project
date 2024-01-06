import React from 'react'
import "./Services.css"
const Services = () => {

  const crashHandler=()=>{
    console.log("crashed....")
  }
  return (<>
      <div style={{width:"70%",margin:"auto"}}>
          <h1 style={{textAlign:"center"}}>Our Services</h1>
          <p style={{textAlign:"center"}} className='quote-style'>"Embark on a journey with confidence as our unwavering commitment to safety, seamlessly integrated into our services, enhances your air travel experience, offering tranquility at every altitude."</p>
      </div>
      <div className='services'>
        <div className='s1'>
          <img src="/assets/crash.jpg" alt="" />
          <h3>Crash Detection</h3>
          <p className='quote-style'>"we used ML techniques to check airplane crash before its actual takeoff"</p>
          <p onClick={crashHandler} className='gets'>Get Started</p>
        </div>

        <div className='s1'>
          <img src="/assets/severity.jpg" alt="" />
          <h3>Severity Prediction</h3>
          <p className='quote-style'>"we used ML techniques to check Severity of airplane crash before its actual takeoff"</p>
  
        </div>
        <div className='s1'>
          <img src="/assets/forecast.jpg" alt="" />
          <h3>Weather Forecast</h3>
          <p className='quote-style'>"we used Weather API to fetch Latest Weather Data."</p>
          <p className='gets'>Get Started</p>
        </div>
      </div>
    </>
  )
}

export default Services
