import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { likeFact } from "./reduxStuff";

export default function Main() {
  const [fact, setFact] = useState("");
  const myDispatch = useDispatch();

  function factGetir() {
    axios
      .get("https://catfact.ninja/fact")
      .then(response => {
        if (response.status === 200) {
          setFact(response.data.fact)
        }
      })
  }

  useEffect(() => {
    factGetir();
  }, []);

  function handleBegen() {
    // dispatch edeceğim {tip: "like", payload: {id: timestamp, yazi: fact}}
    myDispatch(likeFact(fact));
    // like işleminden sonra yeni bilgi getir
    // setTimeout(factGetir, 2000);
  }

  return (
    <div>
      <div className='fact'>
        <p>{fact}</p>
      </div>
      <div className='fact-buttons'>
        <button onClick={handleBegen}>Beğen</button>
        <button onClick={factGetir}>Yeni</button>
      </div>
    </div>
  )
}