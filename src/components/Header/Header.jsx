import styles from "./Header.module.css";

import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <a href="#">
                <img src="" alt="Logo"/>
            </a>
                <div className='sign-up-wrapper'>
                    <Link to='/sign-up'>
                      <span>SignUp</span>
                    </Link>
                    <Link>
                      <span>Login</span>
                    </Link>
                </div>
        </header>
    );
}

export default Header;