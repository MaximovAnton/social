import React from "react";
import LoginReduxForm from "../Common/LoginForm/LoginForm";
import { connect } from 'react-redux'
import { login } from "../../Redux/auth-reducer";
import { Redirect } from 'react-router-dom'

const Login = ({isAuth, login}) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>LOGGIIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)

