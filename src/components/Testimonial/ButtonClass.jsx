import React from 'react';

function ButtonClass({text='Click',classes,icon,onClick}) {
    return (
        <>
        <button className={!classes ? "btn btn-success" : classes} onClick={onClick}>{icon}{    text}</button>
        </>
    );
}

export default ButtonClass;