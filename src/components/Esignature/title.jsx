import React from 'react';

function Title({name}) {
    return (
        <>
        <h1 className={"text-3xl text-warning"}>{name?name:""}</h1>
        </>
    );
}

export default Title;