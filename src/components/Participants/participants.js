import React, { useState } from 'react';

import { connect } from 'react-redux';

import { URL } from '../../utils/url.helper';

import PendingUserCard from '../PendingUserCard/pendingUserCard'

const Participants = (props) => {

    const [participants, setParticipants] = useState([])

    fetch(`${URL}/pending_participants/${props.match.params.id}`, {
        headers: {
            Authorization: 'Bearer ' + props.user.token
        }
    })
        .then(resp => resp.json())
        .then(data => {
            setParticipants(data.data)
        })

    return (
        <div className='user-pending-wrapper'>
            {participants.map((item) => {
                return <PendingUserCard username={item.user.username} image={item.user.image} status={item.status} />
            })}
        </div>
    )
};

const mapStateToProps = (state) => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(Participants);