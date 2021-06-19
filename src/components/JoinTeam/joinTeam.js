import React from 'react';

import { URL } from '../../utils/url.helper';

const JoinTeam = (props) => {

    console.log(props.match.params.id);

    const senRequest = () => {
        fetch(`${URL}/join_team/${props.match.params.id}`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + props.user.token,
                'Content-Type': 'application/json',
            }
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <button onClick={senRequest}>Join The Team</button>
        </div>
    )
}

export default JoinTeam