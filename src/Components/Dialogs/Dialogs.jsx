import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {
    const DialogItem = (props) => {
        let path = /Dialogs/ + props.id
        return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        )
    }

    const Message = (props) => {
        return (<div className={s.message}> {props.message} </div>)
    }

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)

    let AddNewMessage = (values) => {
        if(values.newMessageBody){
           props.sendMessage(values.newMessageBody) 
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={AddNewMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field component='textarea' name='newMessageBody' placeholder='Enter your message' />

            <button >SendMessage</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddmessageForm' })(AddMessageForm)

export default Dialogs