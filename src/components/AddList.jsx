import React, { useState } from "react";

function AddList(props){
    const [btn, setBtn] = useState();

    function rich(evt){        
        evt.target.style.textDecoration === "line-through" ? evt.target.style.textDecoration = "" : evt.target.style.textDecoration = "line-through";
    }

    function btnStaton(sts){
        btn ? setBtn("") : setBtn(<span onClick={delet}> x </span>);
    }
    
    function delet(id){
        props.chameFunc(props.id)
        console.log("clicou")
    }
    
    return(
        <li onClick={rich} onMouseOver={btnStaton} onMouseOut={btnStaton}>{props.text} {btn} </li>
    )
}

export default AddList;