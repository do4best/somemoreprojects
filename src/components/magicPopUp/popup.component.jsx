import React from 'react';

function PopupComponent({type,title,text,handelClose,trigger}) {

    return trigger &&(
        <>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className={`alert ${!type?'alert-error':type} h-1/8 w-1/2`}>

                        <div className="flex flex-col">
                            <h4 className="mb-2 text-primary font-semibold text-xl">{title ? title : "Pop Title"}</h4>
                            <p className={"text-warning"}>{text && text}</p>
                        </div>
                    <button className="btn btn-success relative left-90" onClick={()=>handelClose(false)}>X</button>

                </div>
            </div>
        </>
    );
}

export default PopupComponent;