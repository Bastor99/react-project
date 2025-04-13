import logo from '../logo.svg'

function Navbar() {
    return (
        <div>
            <div class="personalOrBusiness">
                <ul>
                    <li>Personal</li>
                    <li>Business</li>
                </ul>
            </div>
            <div class="mainList">
                <ul>
                    {/* logo */}
                    <li><img src={logo}></img></li>
                    <li>
                        <div class="dropdown1">
                            <button class="dropbtn">What we offer</button>
                        </div>
                        <div class="dropdown1-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown2">
                            <button class="dropbtn">Benefits</button>
                        </div>
                        <div class="dropdown1-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown3">
                            <button class="dropbtn">Learn</button>
                        </div>
                        <div class="dropdown1-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </li>
                    <li>Support</li>
                    <li>
                        <div class="navButtons">
                            <button>Log in</button>
                            <button>Get Started</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;