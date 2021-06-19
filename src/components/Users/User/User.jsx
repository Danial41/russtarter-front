import React from 'react';
import styles from './User.module.css';

function User() {
    return (
        <div className={styles.user}>
            <a href="#">
                <img className={styles.avatar} src="https://image.flaticon.com/icons/png/512/149/149071.png" />
                <span>Name</span>
            </a>
        </div>
    );
}

export default User;