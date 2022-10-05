import {useState,useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const axios= require('axios')


function App() {
  const[main,setMain]=useState([]);
  axios.get('https://rickandmortyapi.com/api/character')
  .then(function (response) {
    // handle success
    console.log(response.data.results);
    setMain(response.data.results)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
},[])
  .then(function () {
    // always executed
  });
  return (
    <div className="App">
      
        {
          
        main.map((item,i)=>{
          return(
            <Card>
              <Card.Img variant="top" src={item.image} />
                <Card.Body>
                <Card.Title><div className='text-white text-bg-dark p-3'>{item.title}</div></Card.Title>
                <Card.Text>
                <div className='text-bg-secondary p-2'>
                <h1>Name:-{item.name}</h1>
                <h2>Status:-{item.status}</h2>
                <h2>Species:-{item.species}</h2>
                <h2>Gender:-{item.gender}</h2>
                </div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted ">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
              // <div key={i}>
                /* <img src={item.image} />
                <h1>Name:-{item.name}</h1>
                <h2>Status:-{item.status}</h2>
                <h2>Species:-{item.species}</h2>
                <h2>Gender:-{item.gender}</h2> */
                // </div>
                
          )
        })
      }
    </div>
  );
}

export default App;
