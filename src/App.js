import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Salman', 'Bappi', 'shuvo'];
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Adobe Premier', price: '$249'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to react</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Munna" job="Footbal"></Person>
        <Person name="Masud" job="Dorshok"></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  
  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      {
        console.log(users)
      }
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  };
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{border: '2px solid gold', width: '400px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  );
}


export default App;
