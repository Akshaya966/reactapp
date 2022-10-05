import {useState,useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const axios= require('axios')
function App() {
  
  const[main,setMain]=useState([]);
  useEffect(()=>{

    axios.get('https://dummyjson.com/products')
    .then(function (response) {
      // handle success
      console.log(response.data.products);
      setMain(response.data.products);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
   

  },[])
  return (
    <div className="App">
      <div className='App-header container'>
      

      {
          main.map((item,i)=>{
            return(
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.thumbnail}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>stock:-{item.stock}</ListGroup.Item>
        <ListGroup.Item>rating:-{item.rating}</ListGroup.Item>
        <ListGroup.Item>{item.price}$Only</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
              // <div key={i}>
              //   <img src={item.thumbnail} />
              //   <h2>{item.id}</h2>
              //   <h2>brand:-{item.brand}</h2>
              //   <h2>category:-{item.category}</h2>
              //   <h2>{item.description}</h2>
              //   <h2>{item.title}</h2>
              //   <h2>{item.price}$Only</h2>
              //   <h2>discount:-{item.discountPercentage}%Off</h2>
              //   <h2>stock:-{item.stock}</h2>
              //   <h2>rating:-{item.rating}</h2>
              // </div>
            )
            })
          

      }
      </div>
    </div>
  );
}

export default App;
