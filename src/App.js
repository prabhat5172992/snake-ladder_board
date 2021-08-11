import React, { useState } from "react";
import "./App.css";

function App() {
  const [data] = useState(createSLB());

  function createSLB() {
    let rows = [];
    let arr = [];

    for (let i = 100, j = 1; i > 0; i--, j++) {
      arr.push(i);
      if (j % 10 === 0) {
        if (rows.length % 2 === 0) {
          rows.push(arr);
        } else {
          rows.push(arr.reverse());
        }

        arr = [];
      }
    }
    return rows;
  }
  console.log(data);
  return (
    <div className="App">
      <h1>Sanke & Ladder board</h1>
      <table className="outer_wrap"><tbody>
        {data.map((item, i) => (
          <tr key={`key_${i}`}>
            {item.map((itm) => (
              <td key={`item_${i+itm}`} className={itm%2 === 0 ? 'board-color' : 'board-white'}>{itm}</td>
            ))}
          </tr>
        ))}
      </tbody></table>
    </div>
  );
}

export default App;
