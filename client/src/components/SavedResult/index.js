import React from "react"; 
import "./style.css";

function SavedResult({children}) {  
    return (

        <div className="card border-0">
          <h5 className="card-header border-0 text-white bg-dark py-4 px-5">SAVED RESULTS</h5>
          <div className="card-body">{children}</div>
        </div>
    );
}

export default  SavedResult; 