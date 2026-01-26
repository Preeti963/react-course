// conditional rendering
// in react accoding to condition the UI is change
// logged in = show dashboard
// not logged in = show login button

// simple Concept 
{isLoggedIn &&<h2>Welcome back!</h2>}
// or
{count > 5 ?<p>High</p> : <p>Low</p>}

// event handling
// react uses camelCasesevents
<button onClick={handelClick}>Click me</button>

//with function 
function handleClick(){
    console.log("Button Clicked");
    
}