import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"
import 'bootstrap/dist/css/bootstrap.min.css';



function ProductList() {
  const items = [
    {
      "id":1,
      "image":"1.jpg",
      "title":"IPhone 16",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 58000,
      "isActive": true
    },
    {
      "id":2,
      "image":"2.jpg",
      "title":"IPhone 16 Pro",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 88000,
      "isActive": true
    },
    {
      "id":3,
      "image":"3.jpg",
      "title":"IPhone 16 Pro Max",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 120000,
      "isActive": true
    },
    {
      "id":3,
      "image":"3.jpg",
      "title":"IPhone 16 Pro Max",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 120000,
      "isActive": true
    },
    {
      "id":3,
      "image":"3.jpg",
      "title":"IPhone 16 Pro Max",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 120000,
      "isActive": true
    },
    {
      "id":3,
      "image":"3.jpg",
      "title":"IPhone 16 Pro Max",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 120000,
      "isActive": true
    },
    {
      "id":3,
      "image":"3.jpg",
      "title":"IPhone 16 Pro Max",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 120000,
      "isActive": true
    },
    {
      "id":8,
      "image":"3.jpg",
      "title":"IPhone 16 Pro Max",
      "description":"Lorem ipsum dolor sit amet.",
      "price": 120000,
      "isActive": true
    }
  ]

  return (
    <>
    <h2 className='title'>Product List</h2>
    {items.length > 0 ? (
    <div id='product-list' className='row row-cols-2 row-cols-md-3 row-cols-xl-4 gap-4'>
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
    <div className='card shadow-small'>
      <img className='card-img-top p-2 p-md-3 border-bottom' src={"/img/" + productObj.image} />
      <div className='card-body'>
      <h2>{productObj.title}</h2>
      <p>{productObj.description}</p>
      <span className={`badge text-bg-${productObj.price > 60000 ? "primary" : "success"}`}>{productObj.price} ₺</span>
      </div>
    </div>
  )
}

function Header() {
  
  return (
    <header>
      <nav className='navbar navbar-expand bg-dark border-bottom border-body' data-bs-theme="dark">
      <div className='container'>
        <a href='#' className='navbar-brand'>Store App</a>
      </div>
      </nav>
    </header>
  )
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
    <div className='container mt-3'>
    <ProductList />
    </div>
  </StrictMode>,
)
