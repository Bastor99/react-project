import styles from './styles/TrustSection.module.css'
import img from '../trustImg.png'

function TrustSection() {
    return (
        <div className={styles.trustSection}>
            <div className={styles.mainContent}>
                <div>
                    <img src={img}></img>
                </div>
                <div className={styles.textContent}>
                    <h2>Trusted by</h2><h2>over 3 million</h2><h2>Canadians</h2>
                    <p>
                        Our business model is simple: put our clients’ interests first.
                        Sure, that means never charging commissions on trades and offering industry-leading interest on
                        your chequing account, but it also means a lot more. Like total transparency into your investments
                        and an innovative cost structure that ensures we only do well when you do.
                    </p>
                </div>
            </div>
            <div className={styles.info}>
                <div>
                    <h2> $50+ billion</h2>
                    <p>Assets under administration</p>
                </div>
                <div>
                    <h2>$1 million</h2>
                    <p>CDIC coverage on eligible deposits</p>
                </div>
                <div>
                    <h2>4x lower</h2>
                    <p>Management fees than the average Canadian mutual fund</p>
                </div>
            </div>
        </div>
    )
}

export default TrustSection;