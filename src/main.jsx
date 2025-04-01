import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


function ProductList() {
  const items = [
    {
      "id":1,
      "image":"1.png",
      "title":"IPhone 16",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 58000
    },
    {
      "id":2,
      "image":"2.png",
      "title":"IPhone 16 Pro",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 88000
    },
    {
      "id":3,
      "image":"3.png",
      "title":"IPhone 16 Pro Max",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 120000
    }
  ]

  return (
    <>
    <h2>Product List</h2>
    <div>
      {items.map((product, index) => (
        <Product key={index} 
        productObj = {product}
        />
      ))
    
      }
    </div>
    
    </>
  ) 
}

function Product(props) {
  console.log(props);
  return(
    <div>
      <img src={"/img/" + props.productObj.image} />
      <h2>{props.productObj.title}</h2>
      <p>{props.productObj.description}</p>
      <span>{props.productObj.price} ₺</span>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductList />
  </StrictMode>,
)
