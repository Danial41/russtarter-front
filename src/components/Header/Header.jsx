import styles from "./Header.module.css";

import { Link } from "react-router-dom";

import Logo from '../../assets/pictures/logo.jpg'

function Header() {
    return (
        <header className={styles.header}>
            <Link to='/'>
                <img id='logo-pic' src={Logo} alt="Logo"/>
            </Link>
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
                    <Link to='/profile'>
                        <div>PROFILE</div>
                    </Link>
                </div>
        </header>
    );
}

export default Header;