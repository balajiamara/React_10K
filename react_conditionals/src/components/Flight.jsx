import { Component } from "react";

class Flight extends Component {

    constructor(){
        super();
        this.state={flightStarted: false}
    }
    takeOff=()=>{
        this.setState({flightStarted:true})
    }
    departure=()=>{
        this.setState({flightStarted:false})
    }
    render(){
    <h1>Flight Component</h1>
        if(this.state.flightStarted === true){
        return <div style={{backgroundColor:this.state.takeOff? "white":"black",color:this.state.takeOff? "black":"white"}}>
            <p> Plane is taking OFF</p>
            <button onClick={this.departure} style={{backgroundColor:this.state.takeOff? "black":"white"}}>Departure</button>
            
        </div>
    }else{
        return <div style={{backgroundColor:this.state.departure? "black":"white",color:this.state.departure? "white":"black"}}>
            <p>Plane is still on the Runway</p>
            <button onClick={this.takeOff}>Take OFF</button>
        </div>
    }

}
}
export default Flight;