import React from "react";
import { useState } from "react";
import AddList from "./AddList";

function App() {

  const [item, setItem] = useState();
  const [arrItens, setArrItens] = useState([]);
  
  function getInput(evt){
    const newValue = evt.target.value;
    setItem(newValue);
  }

  function submit(){
    setArrItens(() => [item, ...arrItens]);
    setItem("");
  }

  function deletItem(id){
    setArrItens( (array) => { 
      return array.filter( (array, index) => {
        return index !== id
      }   
    )})           
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={getInput} type="text" value={item}/>
        <button onClick={submit} >
          <span>Adicionar</span>
        </button>
      </div>

      <div>
        <ul>

          {
            arrItens.map( (itens, index)=> <AddList key={index} id={index} text={itens} chameFunc={deletItem}/>)

          }

        </ul>
      </div>
    </div>
  );
}

export default App;
