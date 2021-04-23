import React from 'react';
const Weather =(props)=>{
   
    return(
        <div>
            {
                props.details.temprature && <p>Temprature : {props.details.temprature}</p>
            }
            
            {
                props.details.city && <p>city : { props.details.city}</p>
            }
            
            {
                props.details.country && <p>Country : { props.details.country}</p>
            }
            
            
            {
                props.details.humidity && <p>Humidity : { props.details.humidity}</p>
            }
            {
                props.details.description && <p>Description : { props.details.description}</p>
            }
            {
                props.details.error && <p>Error : { props.details.error}</p>
            }
        </div>
    );
  
}
export default Weather;