import React from "react";
import s from './Cart.module.scss'
import {connect} from "react-redux";
import {AddedPizza} from "./AddedPizza";
import {decreasePizza, increasePizza, removePizza} from "../redux/pizza-reducer";
import {NavLink} from "react-router-dom";

const Cart = ({addedPizza, removePizza, increasePizza, decreasePizza}) => {
    let sum = 0
    for (let i = 0; i < addedPizza.length; i++) {
        sum += (addedPizza[i].price * addedPizza[i].quantity)
    }
    const basketPizza = addedPizza.map((pizza) => (
        <AddedPizza id={pizza.id}
                    name={pizza.name}
                    price={pizza.price}
                    quantity={pizza.quantity}
                    img={pizza.img}
                    removePizza={removePizza}
                    increasePizza={increasePizza}
                    decreasePizza={decreasePizza}/>
    ))
    return (
        <div className={s.cartWrapper}>
            <div className={s.cartHeader}>
                <p>Your basket</p>
                <div className={s.itemsCount}>You have {addedPizza.length} items in your basket</div>
            </div>
            <div className={s.cartBody}>
                {basketPizza}
            </div>
            <div className={s.totalPrice}>
                <div>TOTAL</div>
                <div>{sum}$/<span>{Math.ceil(sum * 0.88)}€</span></div>
            </div>
            {addedPizza.length > 0 &&
            <div className={s.confirmOrder}>
                <NavLink className={s.NavLink} to='/order'>CONFIRM ORDER</NavLink>
            </div>}
        </div>
    )
}
const mapDispatchToProps = (state) => ({
    addedPizza: state.pizzaManager.addedPizza
})
export default connect(mapDispatchToProps, {removePizza, increasePizza, decreasePizza})(Cart)