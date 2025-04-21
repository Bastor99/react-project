import styles from './WealthsimpleTax.module.css';
import img from '../bannerImage.png'

function WealthsimpleTax() {
    return (
        <div className={styles.taxPrincipal}>
            <div className={styles.title}>
                <h1>WEALTHSIMPLE TAX</h1>
            </div>
            <div className={styles.mainBanner}>
                <h1>The smartest place</h1>
                <h1>to file your taxes</h1>
                <p>From auto-fill to auto-save, Wealthsimple Tax makes</p>
                <p>filing quick, seamless, and (almost sort of) enjoyable.</p>
            </div>
            <div className={styles.bannerButtons}>
                <button>Start filing</button>
                <button>See all benefits</button>
            </div>
            <div className={styles.bannerImage}>
                <img src={img}></img>
            </div>
        </div>
    )
}

export default WealthsimpleTax;