import React from 'react';


function Form(props) {
    return(
            <div className="row d-flex justify-content-center mt-4">
                <input className="form-control form-control-lg w-50 text-center" type="text"{...props}/>
            </div>
    )

}

export default Form;