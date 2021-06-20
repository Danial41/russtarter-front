import React from 'react';

const PersonalData = (props) => {
    console.log(props);
    return(
        <div>
            <div>{props.name}</div>
            <div>{props.address}</div>
        </div>
    )
}

export default PersonalData