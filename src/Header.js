import React from 'react'
import './Header.css'
import LOGO from './img/Amazon-Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();


    return (
        <div className='header'>
            <Link to="/">
            <img className='header__logo' src={LOGO} alt="" />
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Olá visitante!</span>
                    <span className='header__optionLineTwo'>Faça o Login</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Devoluções</span>
                    <span className='header__optionLineTwo'>Pedidos</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Sua</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>

                <Link to="/checkout">
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header