import React from 'react';

function Title({classes,name="Title"}) {
    return (
        <>
        <h1 className={!classes?"text-5xl text-warning text-center m-2":classes}>{name}</h1>
        </>
    );
}

export default Title;