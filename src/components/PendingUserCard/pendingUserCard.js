import React from 'react';

const PendingUserCard = (props) => {
    return (
        <div>
            <div>{props.username}</div>
            <div>{props.image}</div>
            <div>{props.status}</div>
        </div>
    )
}

export default PendingUserCard