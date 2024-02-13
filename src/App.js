import { useState } from "react";

let x =0;
function App() {
  const [i, hhh] = useState(0);
  return (
    <main>
      <h1>{i}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque
        officiis amet. Dignissimos alias nostrum magnam velit sequi, quod est
        tempore commodi nam soluta assumenda ex dolor! Fugiat, sint rerum!
      </p>
      <br />
      <div className="btn">
        <button onClick={() => hhh(x++)}>+</button>
        <button onClick={() => hhh(x--)}>-</button>
      </div>
    </main>
  );
}

export default App;
