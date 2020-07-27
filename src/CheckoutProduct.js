import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider"

function CheckoutProduct({id, title, img, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type: "remove_from_basket",
            id:id,

        })
    }

    return (
        <div className="check_product">
        <div className="checkout-left">
            <img className="product-img" src={img} alt=""/>
        <div className="product_info">
            <p className="product-title">{title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
        
            <div className="product-rating">
                 
                {
                    Array.from(Array(rating),i=>{
                        return <p>⭐</p>
                    })
                }
                </div>
            <button onClick={removeFromBasket} className="btn-remove">remove from basket</button>
            </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
