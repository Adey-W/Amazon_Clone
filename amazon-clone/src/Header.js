import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <div className='header'>
            <img  className="header__logo" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            <div className="header__search">
        <input className="header__searchInput" type="text"/>
        <SearchIcon className="header__searchIcon" />
        {/*Logo*/}
        </div>
        <div className="header__nav"> 
        <div className='header__option'>
            <span 
            className='header__optionLine1'>Hello 
            Guest</span>
            <span 
            className='header__optionLine2'>Sign 
            In</span>
        </div>
        <div className='header__option'>
            <span 
            className='header__optionLine1'>Returns
            </span>
            <span 
            className='header__optionLine2'>&
             Orders</span>
        </div>
        <div className='header__option'>
            <span 
            className='header__optionLine1'>Your
            </span>
            <span 
            className='header__optionLine2'>Prime
            </span>            
        </div>
        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLine2
            header_basketCount">0</span>
        </div>

        </div>

        </div>
    )
}

export default Header
