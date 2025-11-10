import {Theme} from './Components/theme'
// import { useState } from 'react'
import ColorChanger from './Components/TaskNov10';
import {MessageToggle} from './Components/TaskNov10'
import {StudentList} from './Components/TaskNov10'
import {StudentScore} from './Components/TaskNov10'
import {ProductCard} from './Components/TaskNov10'


function App(){

  //   const[dark, setTheme]=useState(true)

  //   const changeTheme=()=>{
  //       setTheme(!dark)
  //     }


  // return(<div className='boddy'>  
  //   <h1>THEME CHANGE</h1>
        
  //       <button onClick={()=>changeTheme()}>{dark? 'DARK':'LIGHT'}</button>

  // </div>
// )

  const students = ["Balaji", "Subbu", "Narasimha", "Satish", "Srinu"];

  const studentScore = [
    { name: "Subbu", score: 85 },
    { name: "Narasimha", score: 38 },
    { name: "Satish", score: 70 },
    { name: "Srinu", score: 24 },
  ];


  const products = [
    { name: "Laptop", price: 60000 },
    { name: "Headphones", price: 2000 },
    { name: "Smartwatch", price: 5000 },
  ];

  return (<>
  <ColorChanger/>
  <hr />
  <MessageToggle/>
  <hr />
  <div>
      <h1>Student List:</h1>
      <StudentList names={students} />
  </div>
    <hr />
  <div>
      <h2>Student Scores:</h2>
      {studentScore.map((studentScore, index) => (
        <StudentScore key={index} name={studentScore.name} score={studentScore.score} />
      ))}
  </div>
      <hr />
    <div style={{display:'flex'}}>
      <h2>Product List:</h2>
      {products.map((item, index) => (
        <ProductCard key={index} name={item.name} price={item.price} />
      ))}
    </div>
  </>)
}

export default App;