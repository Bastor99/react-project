import logo from '../logo.svg'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.navPrincipal}>
            <div className={styles.primary}>
                <div className={styles.personalOrBusiness}>
                    <a>Personal</a>
                    <a>Business</a>
                </div>
                {/* logo */}
                <div className={styles.mainList}>
                    <div className={styles.logo}>
                        <img src={logo} alt="WealthSimple"></img>
                    </div>
                    <a>
                        <div className={styles.dropdown1}>
                            <button className={styles.dropbtn}>What we offer</button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                        </div>
                    </a>
                    <a>
                        <div className={styles.dropdown1_content}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </a>
                    <a>
                        <div className={styles.dropdown2}>
                            <button className={styles.dropbtn}>Benefits</button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                        </div>
                    </a>
                    <a>
                        <div className={styles.dropdown2_content}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </a>
                    <a>
                        <div className={styles.dropdown3}>
                            <button className={styles.dropbtn}>Learn</button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                        </div>
                    </a>
                    <a>
                        <div className={styles.dropdown3_content}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </a>
                    <a>Support</a>
                </div>
            </div>
            <div className={styles.navButtons}>
                <button>Log in</button>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar;