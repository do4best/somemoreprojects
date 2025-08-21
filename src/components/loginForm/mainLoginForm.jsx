
import React, { useEffect, useState } from 'react';

function MainLoginForm() {
const [actions,setActions] = useState("Log In")
    return (
        <><div className="flex flex-col justify-center items-center gap-10 mt-50 shodow-lg shadow-red-500 rounded-xl">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">{actions}</legend>
                {actions === "Sign Up"?<><label className="label">Full Name</label>
                    <input type="text" className="input" placeholder="Full Name" />
                   </> :<p></p>}
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                {actions === "Sign Up" ?     <p>Don't Have account Sign Up?</p>:"Already have an account Login"}
<div className="flex flex-row justify-center items-center gap-5">
                <button className={actions === "Log In"?"btn btn-primary mt-4 px-5 hover:bg-base-300":'disabled'} onClick={()=>setActions("Log In")}>Login</button>
                <button className={actions === "Sign Up"?"btn btn-primary mt-4 hover:bg-base-300":'disabled'} onClick={()=>setActions("Sign Up")}>Registered</button>
</div>
            </fieldset>
        </div>
        </>
    );
}

export default MainLoginForm;