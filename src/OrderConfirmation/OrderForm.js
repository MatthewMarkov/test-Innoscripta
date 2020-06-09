import s from "./OrderConfirmation.module.scss";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {renderField, validate} from "./validation";

const OrderForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
             <Field label="Name" name="name" component={renderField} type="text"/>
             <Field label="Surname" name="surname" component={renderField} type="text"/>
             <Field label="Email" name="email" component={renderField} type="email"/>
             <Field label="Address" name="address" component={renderField} type="text"/>
             <Field label="Phone" name="phone" component={renderField} type="tel"/>
               <button type="submit" disabled={props.submitting}>SUBMIT ALL</button>

        </form>
    )
}

const OrderFormContainer = reduxForm({form: 'userInfo', validate})(OrderForm)
export default OrderFormContainer