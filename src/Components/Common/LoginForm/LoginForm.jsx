import React from 'react'
import { reduxForm, Field } from 'redux-form'

const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={'email'} component={"input"} />
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={'input'} />
            </div>
            <div>
                <Field type={"Checkbox"} name={'rememberMe'} component={'input'} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'Login'
})(Login)

export default LoginReduxForm