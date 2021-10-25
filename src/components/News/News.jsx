import styles from './News.module.scss'

const News = (props) => {
    return (
        <div>
            <div className={styles.post}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.userLogo}>
                            <img
                                src="https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/pPJdnUfWxE7OWLZ5vXuuwF-pqNbLesRZ_bOG7LuwKcDzOof2IgZnD7rrN8pG1l3iannW5bqtOhtdqzVNxzK8EClj.jpg?size=100x100&quality=95&crop=1080,630,864,864&ava=1"
                                alt=""/>
                        </div>
                        <div className={styles.userName}>
                            <p>Sanya</p>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, voluptates?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, voluptates?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, voluptates?
                        </div>
                        <div className={styles.media}>
                            <img
                                src="https://sun9-7.userapi.com/impg/kUCp2ulVCr6-vFrgPn9NX249Plp3--pW7R-RVQ/V6b_syXulUc.jpg?size=810x1080&quality=96&sign=094f55b1f0b860ab65cf9dfbfca85f2b&type=album"
                                alt=""/>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.footer__row}>
                            <div className={styles.likes}>
                                <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/like-512.png" alt=""/>
                                <p> 7234</p>
                            </div>
                            <div className={styles.reposts}>
                                <img src="https://cdn3.iconfinder.com/data/icons/social-network-actions/100/social-buttons-go-08-512.png" alt=""/>
                                <p> 34</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default News;
