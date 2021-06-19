import React from 'react';

import { connect } from 'react-redux';

import { URL } from '../../utils/url.helper'

const Participants = () => {

    fetch(`${URL}/`)
        .then()
        .then()

    return (
        <div>

        </div>
    )
};

const mapStateToProps = (state) => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(UserEditPage);