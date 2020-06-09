import React from "react";
import s from './AddedPizzaItem.module.scss'

export const AddedPizza = ({id, name, price, img, removePizza, quantity, increasePizza, decreasePizza}) => {
    return (
        <div className={s.addedPizzaWrapper}>
            <div className={s.pizzaImage}>
                <img alt="pizza" src={img}/>
            </div>
            <div className={s.pizzaName}>
                {name}
            </div>
            <div className={s.pizzaCalculator}>
                <button onClick={() => decreasePizza(id)} >−</button>
                <span className={s.number}>{quantity}</span>
                <button onClick={() => increasePizza(id)}>+</button>
            </div>
            <div className={s.removePizza}>
                <button onClick={() => removePizza(id)}>Remove</button>
            </div>
            <div className={s.pizzaPrice}>
                {price * quantity}$
            </div>

        </div>
    )
}