import React, {Component} from 'react';
import weather360 from './weather360.jpg'
// Import Materialize
import M from "materialize-css";

const API_KEY = "0af50758a99f71a7f213ebfc65742b93"; 

class SuperCoolComponent extends Component {
  constructor(props){
    super(props);
    this.getWeather = this.getWeather.bind(this)
    this.state ={
        temperature:undefined,
        city:undefined,
        country :undefined,
        humidity: undefined,
        description:undefined,
        error:undefined    
    }
  }   


    componentDidMount() {
    
        M.AutoInit();
    }
   

    getWeather = async (event) => {
      event.preventDefault()
      const city = event.target.elements.city.value
      const country = event.target.elements.country.value

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
      
      const response = await api_call.json();
      
      console.log(response);
      
     if (city&&country) {
      this.setState({
        temperature:response.main.temp,
        city:response.name,
        country :response.sys.country,
        humidity: response.main.humidity,
        description:response.weather[0].description,
        error:""
      })
     }else{
       this.setState({
        temperature:undefined,
        city:undefined,
        country :undefined,
        humidity: undefined,
        description:undefined,
        error:"Please enter the value"

       })

     }
      
    }
  		




    render() {
        return(
          
          <div>
          <body>
          <span class="blue-text text-darken-2">
                <div class="container">
                        <div class="lime accent-1">
                        
                        <h1>WeatherApp</h1>
                      
                </div>
    
            <h5>A powerful app to check your weather</h5>
            
            <div class="row">
                <form
                onSubmit={this.getWeather}
                // .bind(this) 
                class="col s12">
                <div class="row">
                    <div  class="input-field col s13">
                    <textarea id="textarea1" name="city" class="materialize-textarea"></textarea>
                    <label for="">Enter your city</label> 
                    </div>
                    <div  class="input-field col s14">
                    <textarea id="textarea2" name="country" class="materialize-textarea"></textarea>
                    <label for="">Enter your country</label>
                    </div>
                    <div >
                    <button
                    class="btn waves-effect waves-light" type="submit" name="action">Submit
                      <i class="material-icons right">send</i>
                    </button>
                    </div>
                </div>
                </form>
                
                <div>
                </div>                
                </div>

            </div>
            </span>
          </body>
         
          <span>
          <div style={{alignItems:'center',display:'flex'}} class="row">
          <div>
          <img 
          src={weather360}
          width="800"
          height="500"
          />
          </div>
          <div class="col s12 m6">
            <div class="card lime accent-1">
              <div class="card-content blue-text text-darken-2">
                <span class="card-title"><h1>Weather</h1></span>
                
          <div  >
         {this.state.city && <h4> City : {this.state.city}</h4>}
          {this.state.country &&<h4>Country : {this.state.country}</h4>}
          {this.state.temperature &&<h4>Temperature : {this.state.temperature}</h4>}
          {this.state.humidity &&<h4>Humidity : {this.state.humidity}</h4>}
          {this.state.description &&<h4>Description : {this.state.description}</h4>}
          {this.state.error &&<h4>Error : {this.state.error}</h4>}
          </div>
                </div>
            </div>
          </div>
        </div>
        </span>
          </div>
        )
    }
}

export default SuperCoolComponent;