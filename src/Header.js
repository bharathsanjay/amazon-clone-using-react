import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();
    return (
        <nav className="header">
         {/*amazon logo on left*/ }
         <Link to="/">
         <img
            className="header__logo" 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="amazon-logo"
         /> 
         </Link>
         
         {/* search bar */ }
         <div className="header-search">
          <input type="text" className="header__searchInput"/>
          <SearchIcon className="header__searchIcon"/>
         </div>
         {/* 3 links */}
         <div className="header__nav">
             {/* 1st link */}
                <Link to="/login" className="header-link">
                <div className="header-option">
                    <span className="line1">hello</span>
                    <span className="line2">sign in</span>
                </div>
                 </Link>

             {/* 2nd link */}
             <Link to="/" className="header-link">
                <div className="header-option">
                    <span className="line1">returns</span>
                    <span className="line2">& orders</span>
                </div>
                 </Link>
             {/* 3rd link */}
             <Link to="/" className="header-link">
                <div className="header-option">
                    <span className="line1">your</span>
                    <span className="line2">prime</span>
                </div>
            </Link>
            {/* 4th link */}
            <Link to="/checkout" className="header-link">
            <div className="header_basket">
            <ShoppingBasketIcon/>
            <span className="line2 header_basketcount">{basket.length}</span>
            </div>
            
          </Link>
         </div>
       
        </nav>
    )
}

export default Header
