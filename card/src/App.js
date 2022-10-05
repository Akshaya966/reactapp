~import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
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
    <div className="">
      <h1>Hello Ak</h1>
      <Card/>
      {
        arr_data.map((item)=>{
          return(
            <Card name={item.name} age={item.name}/>
          )
        })

     }
    </div>
  );
}

export default App;
