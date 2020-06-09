import React from "react";
import s from './PizzaBillItem.module.scss'

const PizzaBillItem = ({name, quantity, price}) => (
        <div className={s.itemWrapper}>
            <div>
                {name} ({quantity})
            </div>
            <div>
                {price * quantity}$
            </div>
        </div>
    )
export default PizzaBillItem
