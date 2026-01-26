//What is a controlled component?
//in react form inout value is controlled by state

//Basic input with useState
import { useState} from "react";

function FormExample(){
    const [name, setname] = useState("");

    return(
        <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter your name"
        />
    );
}
//value=state
//onChange= updates State
//UI always reflects

//Form submit handling
function handleSubmit(e){
    e.preventDefault();
    console.log(name1);

}
<form onSubmit={handleSubmit}>
  <input
    type="text"
    value={name1}
    onChange={(e) => setName(e.target.value)}
  />
  <button type="submit">Submit</button>
</form>
//e.preventDefault()=stops reload

//Multiple Inputs
const [formData, setFormData] = useState({
  email: "",
  password: ""
});

<input
  name="email"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value
    })
  }
/>
