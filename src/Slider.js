import { useState } from "react";

export function Slider({ data }) {
  const [datalist, setData] = useState(data);
  const [index, setIndex] = useState(0);

  let sculpture = datalist[index];

  function HandleClick() {
    setIndex(index + 1);
    if (index === 11) {
      setIndex(0);
    }
  }

  return (
    <div id="design">
      <h2> Our latest designs</h2>
      <button onClick={HandleClick}>Next</button>

      <h3>
        {sculpture.name} by{sculpture.artist}
      </h3>
      <p>
        ({index + 1} of {datalist.length})
      </p>
      <img src={sculpture.url} alt={sculpture.name}></img>
      <p>{sculpture.description}</p>
    </div>
  );
}
