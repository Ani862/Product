import './Product.css'


function WindowProduct({products = []}
  
) {
  return (
    <div className="WindowProduct">
      <div>
        {
            products.map((product)=>{
                console.log(product, "product")
                const {id, title, price, description, category, image } = product;
                return(

                      <div className='productsItem'>
                        <img alt={title} src={image}/>
                        <h1>${price}</h1>
                        <h2>{category}</h2>
                        <p>{title}</p>
                        <button>Аdd to basket</button>
                      </div>
                )

            })
        }
        </div>
    </div>
  );
}

export default WindowProduct;
