import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("blue");

  const toggleColor = () => {
    setColor(color === "blue" ? "red" : "blue");
  };

  return (
    <div>
        <h1 style={{color:'green'}}>Change Colour</h1>
      <h2 style={{ color: color }}>
        My favourrite color is {color} {color === "blue" ? "💙" : "❤"}
      </h2>
      <button onClick={toggleColor}>Change the Color</button>
    </div>
  );
}

export default ColorChanger;


export function MessageToggle() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleMessage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
        <h1>Show / Hide Message</h1>
      <button onClick={toggleMessage}>{isVisible? 'Hide Message':'Show Message'}</button>
      {isVisible && <p>Welcome to React Hooks</p>}
    </div>
  );
}



export function StudentList({ names }) {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}


export function StudentScore({ name, score }) {
  const color = score >= 50 ? "green" : "red";
  const symbol = score >= 50 ? "✅" : "❌";

  return (
    <p style={{ color: color }}>
      {name} — {score} {symbol}
    </p>
  );
}


export function ProductCard({ name, price }) {
  const cardStyle = {
    border: "1px solid gray",
    padding: "10px",
    margin: "8px",
    width: "200px",
    borderRadius: "6px",
    backgroundColor: "#F5E2A2",
  };

  return (
    <div style={cardStyle}>
        <h4>{name}</h4>
        <p>₹{price}</p>
    </div>
  );
}