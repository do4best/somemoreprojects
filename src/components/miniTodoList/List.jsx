import React, {useEffect} from 'react';
import Fc from "./FC.jsx";

function List({todoList}) {
    useEffect(() => console.log(todoList))
    return (
        <>
<ul>{
    todoList.map((task,index)=><Fc task={task} key={index}/>)
}</ul>

        </>
    );
}

export default List;