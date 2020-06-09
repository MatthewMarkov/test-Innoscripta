import React from "react";
import s from './Menu.module.scss'
import {connect} from "react-redux";
import PizzaItem from "../CommonItems/PizzaItem";
import {chosePizza} from "../redux/pizza-reducer";

const Menu = (props) => {
    const PizzaList = props.pizzaList.map((pizza) => (
        <PizzaItem id={pizza.id}
                   name={pizza.name}
                   price={pizza.price}
                   img={pizza.img}
                   description={pizza.description}
                   chosePizza={props.chosePizza}/>
    ))
    return (
        <div className={s.menu}>
            {PizzaList}
        </div>
    )
}
const mapStateToProps = (state) => ({
    pizzaList: state.pizzaManager.pizzaArray
})
export default connect(mapStateToProps, {chosePizza})(Menu)