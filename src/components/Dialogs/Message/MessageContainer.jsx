import {sendMessageActionCreate} from "../../../Redux/dialogsReducer";
import Message from "./Message";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        messagesPage: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageActionCreate(newMessageText))
        }
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)
export default MessageContainer;
