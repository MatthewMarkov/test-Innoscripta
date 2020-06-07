import React from "react";
import s from './Cart.module.scss'
import {connect} from "react-redux";
import {AddedPizza} from "./AddedPizza";
import {removePizza} from "../redux/pizza-reducer";

const Cart = ({addedPizza, removePizza}) => {
    let sum = 0
    for(let i = 0; i < addedPizza.length; i ++) {
        sum += addedPizza[i].price
    }
const basketPizza = addedPizza.map((pizza) => (
            <AddedPizza key={pizza.id}
                        id={pizza.id}
                        name={pizza.name}
                        price={pizza.price}
                        img={pizza.img}
                        removePizza={removePizza}/>
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
            <div className={s.cartFooter}>
                <div>Total</div>
                <div>{sum}$</div>or <span>{sum*0.88}€</span>
            </div>
        </div>
    )
}
const mapDispatchToProps = (state) => ({
    addedPizza: state.pizzaManager.addedPizza
})
export default connect (mapDispatchToProps, {removePizza}) (Cart)