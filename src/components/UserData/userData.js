import React from 'react'

import {connect} from 'react-redux'

import { Link } from "react-router-dom";

import lvlPic from '../../assets/pictures/lvl.png'

const Userdata = (props) => {

    return (
        <div className='user-profile'>
            <div className='avatar-and-fio'>
                <img className='user-pic' src={props.user.user.image} />
                <div className='fio'>{props.user.user.username.split(" ").map(word => <div>{word}</div>)}</div>
            </div>
            <img id='lvl' src={lvlPic} />
            <Link to='/edit'>
                <button id='edit-btn'>Редактировать</button>
            </Link>
            <div className='charachteristics'>
                <h2>Базовые Характеристики</h2>
                <h3>Профессиональные навыки</h3>
                <h3>Достижения</h3>
                <h3>Уровень</h3>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.currentUser,
});

export default connect(mapStateToProps)(Userdata);