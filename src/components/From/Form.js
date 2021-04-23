import React from 'react';
const Form = (props) => {
   
    return(
        <form onSubmit ={props.getWeather}>
          <input type="text"  placeholder="type your city" id="city"  name="city"/>
          <input type="text" placeholder="type your country" id="country" name="country" />
          <button >Get Weather</button>
        </form>
    );
    
}
export default Form;