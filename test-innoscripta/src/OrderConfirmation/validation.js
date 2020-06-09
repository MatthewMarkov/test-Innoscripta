import React     from "react";
import s from './OrderConfirmation.module.scss'

export const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.surname) {
        errors.surname = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.address) {
        errors.address = 'Required'
    }
    if (!values.phone) {
        errors.phone = 'Required'
    }
    return errors
}
export const renderField = ({input, label, type, meta: { touched, error, warning }}) => {
    return (
        <div>
            <label>{label}</label>
            <div className={s.validation}>
                <input className={s.input} {...input} placeholder={label} type={type} />
                {touched &&
                ((error && <div>{error}</div>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
}
