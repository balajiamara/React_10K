import {Component} from 'react';
import Categories from './components/Categories';
import Unmounting from './components/Unmounting'
// import axios from 'axios';


// export class App extends Component{
//   constructor(){
//     super();
//     this.state={users:[],posts:[]}
//   }

//   fetchUsers(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=> res.json())      // it will return a promise
//     .then(data=>this.setState({users:data}))      // resolving the promise
//     .catch(er=>console.log(er))
//   }

//   fetchPosts(){
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(res=>this.setState({posts:res.data}))
//   }

//   componentDidMount(){
//     this.fetchUsers()
//     this.fetchPosts()
//   }

//   render(){
//     console.log(this.state.users)
//     return(<>
//     <h1>Life Cycle Components</h1>
//     <div>
//       {this.state.users.map((user=> <div key={user.name}>
//         <p>{user.name}</p>


//       </div>))}
//     </div>
//     <div>
      
//       <h2>Posts using Axios</h2>
//       {this.state.posts.slice(0,5).map((post=> <div>
//         <p>{post.id}: &nbsp; {post.title}</p>
//       </div> ))}
//     </div>
//     </>)
//   }
// }



export class App extends Component{

  constructor(){
    super();
    this.state={visible:false}
  }
  toggle(){
    this.setState({visible: !this.state.visible})
  }
  render(){
    return <>
    <Categories/>
    {/* <button onClick={()=>this.toggle()}>{this.state.visible}</button>
    {this.state.visible && Unmounting} */}
    {/* <Unmounting/> */}
    </>
    
  }
}
