import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


function ProductList() {
  const items = [
    {
      "id":1,
      "image":"1.png",
      "title":"IPhone 16",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 58000,
      "isActive": true
    },
    {
      "id":2,
      "image":"2.png",
      "title":"IPhone 16 Pro",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 88000,
      "isActive": true
    },
    {
      "id":3,
      "image":"3.png",
      "title":"IPhone 16 Pro Max",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 120000,
      "isActive": false
    }
  ]

  return (
    <>
    <h2>Product List</h2>
    {items.length > 0 ? (
    <div id='product-list'>
      {items.map((product, index) => (
        <Product key={index} 
        productObj = {product}
        />
      )) 
    
      }
    </div> ) : 
    <p>Hiç ürün yok.</p>
}
    </>
  ) 
}

function Product({productObj}) {
  if (!productObj.isActive) return null;
  return(
    <div>
      <img src={"/img/" + productObj.image} />
      <h2>{productObj.title}</h2>
      <p>{productObj.description}</p>
      <span>{productObj.price} ₺</span>
    </div>
  )
}

function Header() {
  return <h1>Header</h1>
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 20;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)

  return(
    <footer>
      {
        isOpen ? (
          <p>Akşam {closeHour}'e kadar sipariş verebilirsiniz.</p>
        ) : 
        (
          <p>Şuan kapalıyız. Açılış saatimiz: {openHour}</p>
        ) 
      }
    </footer>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ProductList />
    <Footer />
  </StrictMode>,
)
