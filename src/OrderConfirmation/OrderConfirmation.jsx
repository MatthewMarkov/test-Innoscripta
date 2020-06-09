import React from "react";
import s from './OrderConfirmation.module.scss'
import OrderFormContainer from "./OrderForm";
import {connect} from "react-redux";
import {submitFormData} from "../redux/pizza-reducer";
import {withRouter} from 'react-router'
import {compose} from "redux";


const OrderConfirmation = (props) => {
    const onSubmitData = (value) => {
        props.submitFormData(value)
        props.history.push('/receipt')
    }
    return (
        <div className={s.OrderConfirmationWrapper}>
            <div className={s.warning}>Please fill in the information below</div>
            <OrderFormContainer onSubmit={onSubmitData}/>
        </div>
    )
}


export default compose(connect(null, {submitFormData}), withRouter)(OrderConfirmation)