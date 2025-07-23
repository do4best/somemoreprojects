import React, {useState} from 'react';
import ButtonClass from "../Testimonial/ButtonClass.jsx";
function Alert({type,message}) {
    const [showAlert, setShowAlert] = useState(true);
    return (
        <>
            {showAlert&&  <div className={`card bg-${type} text-primary-content`}>
                <div className="card-body">
                    <h2 className="card-title">{message}</h2>

                    <div className="card-actions justify-end">
                   <ButtonClass text="X" classes="btn btn-danger" onClick={()=>setShowAlert(false)}/>
                    </div>
                </div>
            </div>}

        </>
    );
}

export default Alert;