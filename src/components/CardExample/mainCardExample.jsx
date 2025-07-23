import React from 'react';
import Alert from "./Alert.jsx";

function MainCardExample(props) {
    return (
        <>
<div className="mt-4 flex flex-col justify-center  gap-3">
        <Alert type={"primary"} message={"Successfull login"}/>
            <Alert type={"primary"} message={"Successfull login"}/>
            <Alert type={"primary"} message={"Successfull login"}/>
            <Alert type={"primary"} message={"Successfull login"}/>
</div>
        </>
    );
}

export default MainCardExample;