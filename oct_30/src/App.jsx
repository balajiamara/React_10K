import React from "react";
// import UserInput from "./components/UserInput"
import FruitList from "./components/RenderListProps";
import StudentList from "./components/StudentList";
import ProductList from "./components/Products";
import products from "./components/data.json";

function App() {
  const fruits = ["Guava", "Banana", "Mango", "Apple", "Pineapple"];

  const students = [
    { id: 1, name: "John", grade: "A" },
    { id: 2, name: "Emma", grade: "B" },
    { id: 3, name: "Liam", grade: "C" }
  ];

  return (
    <div style={{ margin: "30px", fontFamily: "Arial" }}>


      {/* Task 2 */}
      <section>
        <h2> Task 1 — Render a List Using Props</h2>
        <FruitList fruits={fruits} />
      </section>

      <hr />

      {/* Task 3 */}
      <section>
        <h2> Task 2 — Render a List of Objects</h2>
        <StudentList students={students} />
      </section>

      <hr />

      {/* Task 4 */}
      <section>
        <h2> Task 3 — Product List from JSON</h2>
        <ProductList products={products}/>
      </section>
    </div>
  );
}

export default App;