import { Component } from "react";


class Unmounting extends Component{

    constructor(){
        super()
        this.state={time:0, timer:''}
        console.log('counstructor')
    }

    componentDidMount(){

    }

    render(){
        return <>
        <h1>Unmounting phase</h1>
        </>
    }
}


export default Unmounting