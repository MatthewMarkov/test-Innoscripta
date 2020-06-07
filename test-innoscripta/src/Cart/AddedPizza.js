import React from "react";
import s from './AddedPizzaItem.module.scss'

export const AddedPizza = ({id, name, price, img, removePizza}) => {
    return (
        <div className={s.addedPizzaWrapper}>
            <div className={s.pizzaImage}>
                <img alt="pizza" src={img}/>
            </div>
            <div className={s.pizzaName}>
                {name}
            </div>
            <div className={s.removePizza}>
                <button onClick={() => removePizza(id)}>Remove</button>
            </div>
            <div className={s.pizzaPrice}>
                {price}
            </div>

        </div>
    )
}