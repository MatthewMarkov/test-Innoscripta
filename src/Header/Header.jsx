import React from "react";
import s from './Header.module.scss'
import user from './../images/user.png'
import cart from './../images/shopping-cart-solid.svg'
import logo from './../images/innoscripta pizza.png'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Header = ({addedPizza}) => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.logo}>
                <img alt='logo' src={logo}/>
            </div>
            <div className={s.userInfo}>
                <div><img className={s.userImage} alt='user' src={user}/></div>
                <div><span>Mike</span></div>
                <NavLink className={s.cartLink} to="/cart"><img  alt='cart' src={cart}/></NavLink>
            </div>
            <div className={s.menuLink}>
                <NavLink className={s.menuNavLink} to="/menu">MENU</NavLink>
            </div>
            <div className={s.basketLink}>
                <NavLink className={s.basketNavLink} to="/cart">BASKET</NavLink>
                {addedPizza.length > 0 && <div className={s.basketItemsNumber}> {addedPizza.length}</div>}
            </div>

            <div className={s.redLine}></div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    addedPizza: state.pizzaManager.addedPizza
})
export default connect(mapStateToProps, {}) (Header)