import React, {useEffect} from 'react';

function Fc({task}) {
    useEffect(() => console.log(task))
    return (
        <>
        <li>{task}</li>
        </>
    );
}

export default Fc;