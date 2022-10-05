import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  
  const [user,setuser] = useState(0);
  const btnhandler = () =>{
      setuser(user+1)
  }
  const btn = () =>
  {
    setuser(user-1)
  }
  return (
    <div className="App">
    
       <h4>{user}</h4>
       <br></br>
       <input type="button" value="+" onClick={btnhandler} />    <input type="button" value="-" onClick={btn}/>
    </div>
  );
}

export default App;
