import React from 'react';

function Title({classes,name}) {
    return (
        <>
        <h1 className={!classes?"text-5xl text-warning text-center m-2":"text-center text-5xl"}>{name?name:"Title"}</h1>
        </>
    );
}

export default Title;