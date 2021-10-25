import styles from './Login.module.scss'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.block}>
                <Field placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div className={styles.block}>
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div className={styles.block}>
                <Field type={"checkbox"} name={'rememberMe'} component={'input'}/> remember me
            </div>
            <div className={styles.block}>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>Hello thats Login PAGE</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default LoginPage;