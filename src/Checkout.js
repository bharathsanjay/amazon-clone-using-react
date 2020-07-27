import React from 'react'
import {useStateValue} from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
        <div className="checkout-left">
        <img  className="checkout_ad" src="https://images-na.ssl-images-amazon.com/
        images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"  />
            
         
        {basket?.length === 0 ? (
            <div>
                <h2>your basket is empty</h2>
            </div>
        ) : (
            <div>
            <h2 className="checkout-title">your shopping basket</h2>
            {basket.map(item=>(
                <CheckoutProduct
                    id = {item.id}
                    title ={item.title}
                    img ={item.img}
                    price ={item.price}
                    rating={item.rating}
                />
            ))}
            </div>

        ) }
        </div>
        { basket.length >0 &&(
            <div className="checkout-right">
            <Subtotal/>
            </div>
        ) }
        </div>
       
    )
}

export default Checkout
