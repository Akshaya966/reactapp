import About from './About';
import './App.css';
import Home from './Home';
const name="cdmi"
const email ="cdmi@gamil.com"
const arr =[1,2,3,4,5,6,7,8,9,10];
const arr_data=[
  {"name":"cdmi","age":"12"},
  {"name":"cdmi1","age":"1212"},
  {"name":"cdmi2","age":"120"},
  {"name":"cdmi3","age":"129"},
  {"name":"cdmi4","age":"128"},
  {"name":"cdmi5","age":"127"},
  {"name":"cdmi6","age":"126"},
  {"name":"cdmi7","age":"125"},
  {"name":"cdmi8","age":"124"},
  {"name":"cdmi8","age":"124"},
  {"name":"cdmi9","age":"123"}
]
function App() {
  return (
    <div>
      {name}
     <Home name={name} email={email}/>
     <ul>
      {
        arr.map((item)=>{
          return(
            <li>{item}</li>
          )
        })
      }
     </ul>
     {
        arr_data.map((item)=>{
          return(
            <About name={item.name} age={item.name}/>
          )
        })

     }
    </div>
  );
}

export default App;
