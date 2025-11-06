import { Component } from "react";

// Method 1 Binding in a Constructor
export class Message extends Component {
    constructor(){
        super();            // Calls the parent class (Component) constructor
        
        this.state={quest:'hi what are you doing'};     // Initialize component state with a property 'quest'


        // Bind the methods so that 'this' refers to the class instance
        this.giveAns=this.giveAns.bind(this);
        this.askQuest=this.askQuest.bind(this)
    }

    // Method to update the state with a new message (answer)
    giveAns(){
        this.setState({quest:'I am writing some React code'})
    }
    askQuest(){
        this.setState({quest:'hi what are you doing'})
    }

    render(){
        return <div>
            <h2>This is a message component</h2>

            {/* Display the current value of 'quest' from component state */}
            <h2>{this.state.quest}</h2>

            {/* Buttons to trigger the giveAns() and askQuest() method */}
            <button onClick={this.giveAns}>Answer</button>
            <button onClick={this.askQuest}> Question</button>
        </div>
    }
}


// Method 1 Binding in a Constructor
// export class Random extends Component {   
//     constructor(){
//         super();
//         this.state={num:Math.random()};

//         this.ranNum=this.ranNum.bind(this);
//     }
//     ranNum(){
//         this.setState({num: Math.random()})
//     };
    
//     render(){
//         return (<div>
//             <h2>This is a random number component</h2>
//             <h2>{this.state.num}</h2>
//             <button onClick={this.ranNum}>Random</button>
//         </div>
//         );
//     }
// }

// Method 2 and Method 3
export class CounterApp extends Component {
    constructor(){
        super();
        this.state={count:0};
    }

    // Method 2: Using arrow function isside Render
    increment(){
        if (this.state.count>=10){
            this.setState({count:10});
        }
        else{
            this.setState({count:this.state.count+1});

        }
    }

    // Method 3: Using arrow function as class property
    decrement=()=>{
        if (this.state.count<=0){
            this.setState({count:0});
        }
        else{
            this.setState({count:this.state.count-1});

        }
    }
    reset=()=>{
        this.setState({count:0});
    }
    render(){
        return <div>
            <h2>This is a counter component</h2>
            <h4>{this.state.count}</h4>
            <button onClick={()=>this.increment()}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
        </div>

    }
}


export class Randomnum extends Component{
    constructor(){
        super();
        this.state={num:Math.random()};
    }
        Randomnum=()=>{
            this.setState({num:Math.random()})
        }
        render(){
            return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.Randomnum}>Generate</button>
            </div>
                
            )
        }
}



export class InputBox extends Component{
    constructor(){
        super();
        this.state={text:''};
    }
    textChange(event){
        this.setState({text:event.target.value})
    }
    render(){
        return(
            <div>
                <input type="text" onChange={event}=>this.textChange(event) />
            </div>
        )    
}
}