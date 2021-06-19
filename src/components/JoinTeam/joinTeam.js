import React from 'react';

import { URL } from '../../utils/url.helper';

const JoinTeam = (props) => {

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
            <button>Join The Team</button>
        </div>
    )
}

export default JoinTeam