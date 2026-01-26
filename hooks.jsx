// what are hooks?
// hooks are special function  that letd us t
// to use state
// life cycle features
// after||inside functional components

// const [count, setCount] = useState(0);


//components loads
import {useEffect} from "react";

useEffect(()=>{
    console.log("componet loaded");
},[]);//runs 1 time
//Api call ,initial setup ,console,log

//document change
useEffect(()=>{
    document.title="React Learning";
},[]);

// API Call
 useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => console.log(data));
 },[]);

 // run when the staes changes
 useEffect(()=>{
    console.log("Count changed"); 
 },[count]);

 //cleanup 
 useEffect(()=>{
    const timer = setInterval(()=>{
        console.log("Running...");
    },1000);

    return () = clearInterval(timer);
 },[]);

