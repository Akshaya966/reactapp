import { useState } from 'react';
import './App.css';

function App() {
  const [name,setname]=useState("");
  const[email,setemail]=useState("");
  const[number,setnumber]=useState("");
  const[arr,setArr]=useState([]);
  const btnhandler=()=>{
    const obj={
      'name':name,
      'email':email,
      'number':number
    }
    setArr([...arr,obj])
  }
  return (
    <div className="App">
     name:<input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
     email:<input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
     number:<input type="text" value={number} onChange={(e)=>{setnumber(e.target.value)}}/>
      <input type="button" value={"click here"} onClick={btnhandler} />
      <table border="2px">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
          </tr>
          
            {
              arr.map((item)=>{
                return(
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                  </tr>
                )
              })
            }
          
      </table>
    </div>
  );
}

export default App;
