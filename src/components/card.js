import React from "react";


function Card(props) {
    return(
      <div className="card text-center m-2">
      <div className="card-body">
        <h5 className="card-title h2">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.question}</h6>
        <p className="card-text">{props.children}</p>
      </div>
    </div>
    )

}
export default Card;


