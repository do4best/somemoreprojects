import React from 'react';

function Button({text='Click',classes,icon,onClick}) {
    return (
        <>
        <button className={!classes ? "btn btn-success" : classes} onClick={onClick}>{icon}{    text}</button>
        </>
    );
}

export default Button;