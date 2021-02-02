import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(62061803);
  const persons = [
    {
      name: "Peerawas muanfoo 620610803",
      gender: "male",
      age: "19"
    },
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  return (
    <div class="ml-2">
      {}
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(62061803)}>reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Peerawas muanfoo 620610803</td>
            <td>male</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Alice</td>
            <td>female</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
