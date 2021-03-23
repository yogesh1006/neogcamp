import { useState } from "react";

const products = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000,
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500,
  },
  {
    id: 3,
    name: "jalebi",
    price: 50,
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000,
  },
];
function Like({ like, setlike }) {
  return (
    <button
      style={{
        backgroundColor: "green",
        color: "white",
        padding: "0.5rem",
        borderRadius: "4px",
        outline:"none",
      }}
      onClick={() => setlike(like + 1)}
    >
      Like{" "}<span>{like}</span>
    </button>
  );
}
function List({ item }) {
  const [like, setLike] = useState(0);
  console.log(item);
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "1px",
        margin: "1rem",
        padding: "1rem",
      }}
    >
      <h3>{item.name}</h3>
      <h4>{item.price}</h4>
      <Like like={like} setlike={setLike} />
    </div>
  );
}

function Likes() {
  return (
    <div>
      <h1>Like List</h1>
      {products.map((item, index) => {
        return <List key={index} item={item} />;
      })}
    </div>
  );
}

export default Likes;
