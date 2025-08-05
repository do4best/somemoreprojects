import React, {useState} from 'react';

function DialogBox({width=100}) {
    const [subscriptions,setSubscriptions] = useState({
        title:"Hello",
        description:"Do you like to proceed for subscription?",
        state:null,
        justifyContent:"justify-between",
    });
    const handelSubscription = ()=>{
        setSubscriptions({
            title:"Thank you",
            description:"Your subscription has been confirmed",
            state:"Success",
            justifyContent:"justify-center",
        })
    }
    return (
        <>

            <div className="flex flex-col justify-center items-center">
                <div role="alert" className={`alert alert-success h-50 w-${width} mt-10`}>

                    <div className="flex flex-col justify-around items-center">
<div className="flex flex-row justify-around items-start gap-30">
<h1 className={"text-xl  "}>{subscriptions.title}</h1>
    <h1 className={"text-xl "}>Icons</h1>
</div>
                    <div className="flex flex-row justify-center items-center ">
                    <span className={" m-5"}>{subscriptions.description}</span>
                    </div>
<div className={`flex flex-row ${subscriptions.justifyContent} items-center gap-4`}>
    {subscriptions.state === null && (<button className=" btn btn-primary ">Cancel</button>)}
    {subscriptions.state === "Success"?null:<button className="btn btn-warning   ">Subscribe</button>}
    {subscriptions.state === "Success"?<button className="btn btn-warning   ">UnSubscribe</button>:null}
</div>
                </div>
                </div>
            </div>



        </>
    );
}

export default DialogBox;