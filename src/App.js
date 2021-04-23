import React, { Component } from 'react';
import Form from './components/From/Form';
import Weather from './components/Weather/Weather';
const Api_key="9cfbc2062323be1b46a2c4fba91e0d8e";
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {
  state = {
    temprature :'',
    city :'',
    country :'',
    humidity :'',
    description :'',
    error:''
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;
    const api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2Ce${country}&appid=${Api_key}`);
    const data =await api.json();
    
    if(city&&country){
      this.setState({
        temprature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity :data.main.humidity,
        description :data.weather[0].description,
        error:''
      })
    }else{
      this.setState({
        temprature :'',
        city :'',
        country :'',
        humidity :'',
        description :'',
        error:'please enter your city'
      })
    }
   
  }
 render(){ 
    return (
      <div className="App">
        <Form  getWeather={this.getWeather}/>
        <Weather details={this.state}/>
      </div>
    );
  }
}

export default App;
