import styles from "./Header.module.css";

import { Link } from "react-router-dom";

import {connect} from 'react-redux';

import Logo from '../../assets/pictures/logo.jpg';
import Menu from '../Menu/menu'

const  Header = (props) => {
    console.log(props);
    return (
        <header className={styles.header}>
            <Link to='/'>
                <img id='logo-pic' src={Logo} alt="Logo"/>
            </Link>
            {!props.user ? (
            <div className='sign-up-wrapper'>
                <Link to='/sign-up'>
                    <span>SignUp</span>
                </Link>
                <Link>
                    <span>Login</span>
                </Link>
            </div>
            ) :
                (<Menu />
            )}

        </header>
    );
}

const mapStateToProps = (state) => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(Header);