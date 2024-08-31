import ProductItem from "../../Pages/ProductItem";
import Footer from "../Footer";
import Header from "../Header";
import WindowProduct from "../WindowProduct";
import "./Home.css"
import { useEffect, useState } from "react";

function Home() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts = async( )=> {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])

  return (
    <div className="Home">
        <Header/>
        {
            products.length > 0 ?
            <WindowProduct products={products}/>
            :
            <div className="loading">Loading....</div> 
        }
        <WindowProduct/>
        <ProductItem/>
        <Footer/>
    </div>
  );
}

export default Home;
