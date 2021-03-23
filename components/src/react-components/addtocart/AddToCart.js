import { useState } from "react";
const products = [
  {
    id: "101",
    name: "Oreo",
    price: 30.0
  },
  {
    id: "102",
    name: "Red Bull",
    price: 99.0
  },
  {
    id: "103",
    name: "Dairy Milk Silk",
    price: 175.0
  }
];
export default function App() {
  const [cart, setCart] = useState([]);

  console.log("fgbnbvc", cart);
  const cartHandler = (item) => {
    setCart([...cart, { item }]);
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <ul style={{ listStyle: "none" }}>
        {products.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.name}</h3>
              <h3>$ {item.price}</h3>
              <button onClick={() => cartHandler(item)}>Add to Cart</button>
            </li>
          );
        })}
      </ul>

      <h1>Cart</h1>
      <ul style={{ listStyle: "none" }}>
        {cart.map((i, index) => {
          console.log("asd", cart);

          return (
            <li key={index}>
              <h3>{i.item.name}</h3> 
              <h3>{i.item.price}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
