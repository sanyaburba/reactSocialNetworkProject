import styles from './Message.module.scss'
import React from "react";
import {Field, reduxForm} from "redux-form";


const Message = (props) => {

    let addNewMessage = (values) => {
        console.log(values.newMessageText);
        props.sendMessage(values.newMessageText)
    }

    return (

        <div className={styles.messages__item}>
            <div className={styles.messages__header}>
                <div className={styles.messages__header_row}>
                    <p>{props.name}</p>
                    <img src={props.img} alt=""/>
                </div>
            </div>
            <div className={styles.messages__body}>
                <div className={styles.messages__text}>
                    <p className={styles.userMessage}>{props.message}</p>
                    <p className={styles.myMessage}>{props.myMessage}</p>
                </div>
            </div>
            <div className={styles.messages__footer}>
                <div className={styles.messages__footer_row}>
                    <SendMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const SendMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessageText'} placeholder={'your message'}/>
            <button className={styles.btn}><img
                src="https://i.pinimg.com/originals/86/81/9b/86819b254efa34258c44b786be6f01d6.png" alt=""/>
            </button>
        </form>
    )
}

const SendMessageReduxForm = reduxForm({form: 'dialogSendMessageForm'})(SendMessageForm)

export default Message;
