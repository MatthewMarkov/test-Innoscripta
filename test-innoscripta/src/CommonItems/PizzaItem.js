import React, {useState} from "react";
import s from './PizzaItem.module.scss'

const PizzaItem= ({id, name, price, img, description, chosePizza}) => {
    const [isSelected, select] =useState(false)
    const addPizza = () => {
        chosePizza(id)
        select(true)
    }
    return (
        <div className={s.itemWrapper}>
            <div className={s.image}>
                <img alt='pizza' src={img}/>
            </div>
            <div className={s.pizzaInfo}>
                <div className={s.pizzaName}>{name}</div>
                <div className={s.pizzaDescription}>{description}</div>
                <div className={s.price}>price: {price}$</div>
                <button className={s.addButton} onClick={addPizza}>ADD</button>
                {isSelected && <div className={s.notif}>{name} pizza has been added to your basket!</div>}
            </div>

        </div>
    )
}

export default PizzaItem