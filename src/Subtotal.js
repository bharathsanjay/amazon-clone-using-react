import React from 'react'
import CurrencyFormat from "react-currency-format";
import {useStateValue} from './StateProvider';
import './Subtotal.css';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const[{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
        <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                </p>
                <small className="sub-gift">
                    <input type="checkbox"/> this order contains a gift
                </small>
                </>
            )}



            decimalScale ={2}
            value={getBasketTotal(basket)}
            displayType= {"text"}
            thousandSeparator = {true}
            prefix={"$"}
        />
        <button>proceed to checkout</button>    
        </div>
    )
}

export default Subtotal
