import styles from './styles/GetStarted.module.css'
import img from '../getStartedImg.png'

function GetStarted() {
    return (
        <div className={styles.fullBody}>
            <div className={styles.mainElements}>
                <div className={styles.texts}>
                    <h1>Your money’s</h1>
                    <h1>worth more</h1>
                    <div className={styles.paragraphs}>
                        <p>Get the most out of your money with smart investing</p>
                        <p>products and personalized advice to build long-</p>
                        <p>term wealth.</p>
                    </div>
                    <button>Get started</button>
                </div>
                <div className={styles.mainImage}>
                    <img src={img}></img>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;