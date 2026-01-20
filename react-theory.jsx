//components=small reusable part of UI
// types of components
//1. functional component(modern & recommended)
//2. class component

//functional component
// function Welcome(){
//     return <h1>hello react</h1>
// }

export default Welcome;

// what is JSX?
// JSX= javascript + HTML

const name = "Zoe";

return <h1>hello{name}</h1>

//Props(properties)
function Greeting(props){
    return <h2>Hello{props.name}</h2>
    
}
// state(Data thst changes)
import { useState } from"react";
function Counter(){
    const[count,setCount]=useState(0);

    return(
        <button onClick={() => setCount(count + 1)}>
            Clicked{count} times
        </button>
    );
}