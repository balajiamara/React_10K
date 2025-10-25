import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import New from "./NewArrival"

class Section extends React.Component{
    render(){
        return <div>
            {/* <p>This is Banner Section</p> */}
            <Hero/>
            <Category/>
            <New/>
        </div>
    }
}

export default Section