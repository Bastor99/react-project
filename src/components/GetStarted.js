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
            <div className={styles.info}>
                <div>
                    <h2>Low fees meet higher yields</h2>
                    <p>
                        Your money’s always making more with low-fee investing and
                        high-interest savings.
                    </p>
                </div>
                <div>
                    <h2>Unmatched access</h2>
                    <p>
                        Get sophisticated investment opportunities traditionally reserved
                        for industry insiders and the ultra-wealthy.
                    </p>
                </div>
                <div>
                    <h2>Smart & simple</h2>
                    <p>
                        In just a few taps, set your financial goals in motion,
                        and let our easy-to-use products handle the rest.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;