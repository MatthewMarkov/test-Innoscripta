import React from "react";
import s from './Receipt.module.scss'
import {connect} from "react-redux";
import PizzaBillItem from "./PizzaBillItem";
import {getReceipt} from "../redux/pizza-reducer";
import {NavLink} from "react-router-dom";

const Receipt = ({addedPizza, userInfo, getReceipt}) => {
    const pizzaItems = addedPizza.map((item) => (
        <PizzaBillItem name={item.name} quantity={item.quantity} price={item.price}/>
    ))
    let sum = 0
    for (let i = 0; i < addedPizza.length; i++) {
        sum += (addedPizza[i].price * addedPizza[i].quantity)
    }
    return (
        <div className={s.receiptWrapper}>
            <div className={s.conformation}>Dear {userInfo.name}, your order has been successfully confirmed!</div>
            <div className={s.userInfo}>
                <div>Delivery address: {userInfo.address}</div>
            </div>
            <div className={s.billHeader}>Your bill:</div>
            <div className={s.bill}>
                <div className={s.billItems}>
                    {pizzaItems}
                </div>
                <div className={s.total}>
                    <div><strong>Total:</strong></div>
                    <div><strong>{sum + 5}$</strong>(including 5$ delivery cost)</div>
                </div>
            </div>
            <NavLink className={s.getBill} to='/menu' onClick={() => getReceipt()}>GOT IT</NavLink>
        </div>
    )
}
const mapStateToProps = (state) => ({
    addedPizza: state.pizzaManager.addedPizza,
    userInfo: state.pizzaManager.userInfo
})
export default connect(mapStateToProps, {getReceipt})(Receipt)