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
                <div className='sign-up-wrapper'>
                    <Link to='/create-project'>
                        <span>Create Project</span>
                    </Link>
                </div>
                <div>
                    <Link to='/projects'>
                        <div>PROJECTS</div>
                    </Link>
                </div>
        </header>
    );
}

export default Header;