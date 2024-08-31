import Header from "../Components/Header";
import "./ProductItem.css"

function ProductItem() {
  return (
    <div className="ProductItem">
      <h1>Basket</h1>
      <div className="productDetalis">
        <div>
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"/>
          <h1>$109.95</h1>
          <h2>men's clothing</h2>
          <div className="btnCont">
            <button>-</button>
            <h1>1</h1>
            <button>+</button>
          </div>               
        </div>

      </div>
    </div>
  );
}

export default ProductItem;
