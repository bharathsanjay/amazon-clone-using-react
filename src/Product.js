import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
function Product({id,title,img,price,rating}) {

    const [{basket},dispatch] = useStateValue();


    const addToBasket = () =>{
        dispatch({
            type  : 'add_to_basket',
            item : {
                id,
                title,
                img,
                price,
                rating
            }
        })
    }



    return (
        <div className="product">
            <div className="product-info">
            <p>{title}</p>
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

            </div>
           
             <img src={img} alt="" srcset=""/>
             <button onClick = {addToBasket}>add to basket</button>
        </div>
    );
}

export default Product
