import React from 'react';


function Answer(props){
    
    return(
        <div className="m-3">
            <h3>{props.header} {props.cutoff}:</h3><h5>{props.answer}</h5>
        </div>
    )
}

export default Answer;