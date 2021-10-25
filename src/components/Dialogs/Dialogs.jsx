import styles from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import MessageContainer from "./Message/MessageContainer";

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} text={dialog.text}
                                   img={dialog.img}/>);
    let messagesElements = state.messagesData
        .map(message => <MessageContainer message={message.message} key={message.id} name={message.name} id={message.id}
                                          img={message.img}
                                          myMessage={message.myMessage} newMessageText={message.newMessageText}
                                          sendMessage={message.sendMessage}/>);

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.content}>
                    <div className={styles.dialogs__items}>
                        {dialogsElements}
                    </div>
                    <div className={styles.messages}>
                        <div>{messagesElements}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;
