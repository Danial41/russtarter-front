import React from 'react';

const PendingUserCard = (props) => {
    return (
        <div className='user-pending'>
            <div>Имя: {props.username}</div>
            <img id="pending-user-pic" src={props.image} />
            <div>Статус: {props.status}</div>
        </div>
    )
}

export default PendingUserCard