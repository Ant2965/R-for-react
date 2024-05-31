import "./Product.css";
import Price from "./Price";

function Product({title,idx}){

    let oldPrices=["12,333","321313","3131","5434"];
    let newPrices=["4444","42424","5353","5323"];
    return(
        <div className="product">
             <h1>{Title}</h1>
            <p>Description</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Product;