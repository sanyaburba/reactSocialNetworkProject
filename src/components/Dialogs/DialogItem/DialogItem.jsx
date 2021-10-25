import styles from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <NavLink to={path}>
            <div className={styles.dialog__item}>
                <div className="content">
                    <div className={styles.dialog__row}>
                        <div className={styles.dialog__userLogo}>
                            <img src={props.img} alt=""/>
                        </div>
                        <div className={styles.dialog__body}>
                            <h2 className={styles.userName}>{props.name}</h2>
                            <p className={styles.userMessage}>{props.text}</p>

                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}


export default DialogItem;
