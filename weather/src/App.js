import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Input from './component/Input';
function App(){
  const[degrees,setDegrees]=useState(null);
  const[location,setLocation]=useState(null);
  const[user,setUser]=useState("");
  const[descripation,setDescripation]=useState(null);
  const[icon,setIcon]=useState(null);
  const[hamidity,setHamidity]=useState(null);
  const[wind ,setWind]=useState(null);
  const[country,setCountry]=useState(null);

  const Api_Key="8fbdf0ac06596a263164a99313f007ec";
  const fetchData=async(e)=>{



    
    e.preventDefault()
    const res =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${user}&appid=${ Api_Key}&units=metric`)
    const data = await res.data
    setDegrees(data.main.temp)
    setLocation(data.name)
    setDescripation(data.weather[0].descripation)
    setIcon(data.weather[0].icon)
    setHamidity(data.main.hamidity)
    setWind(data.wind.speed)
    setCountry(data.sys.country)

    console.log(data)
  }
  useEffect(()=>{
    // fetchData()
  },[])

  return(
    <div className="App" >
      
      <div className="weather ">
        
        <Input text={(e)=>setUser(e.target.value) }
        submit={fetchData}/>
        <div className='weather_display'>
        <div className='weather_location'>
        <h2>Weather in {location}</h2>
        
  
</div>
<h1 className='weather_degree'>{degrees} c</h1>
<div>
</div>
<div className='weather_description'>
<div className>

<div className='weather_description_head'>
<span className='weather_icon'>
<img src ={`http://openweathermap.org/img/w/${icon}.png `}></img>
</span>
<h3>{descripation}</h3> 

</div>
<h3>Humididity: {hamidity}%</h3>
<h3>Wind Speed  :{wind} m/s</h3>
</div>

<div className='.weather-country ' >
<h3 > {country}</h3>
<h3 className='weather-date'>4/30/2022, 2:05:24 pm</h3>
</div>
</div>
</div>
</div>
    </div>
  )
}
export default App;
