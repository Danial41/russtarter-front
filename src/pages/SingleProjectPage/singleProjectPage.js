import React, {useEffect, useState} from 'react'

import { connect } from "react-redux";

import {URL} from '../../utils/url.helper'

import JoinTeam from '../../components/JoinTeam/joinTeam';

const SingleProjectPage = (props) => {

    console.log(props);

    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(`${URL}/projects/${props.match.params.id}`, {
            headers: {
                Authorization: 'Bearer ' + props.user.token
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProject(data.data)
            })
            .catch(err => console.log(err))
    }, [])

    

    return (
        <div>
            <img src={project.image} />
            <div>Название: {project.title}</div>
            <div>Описание: {project.description}</div>
            <div>Cумма для сбора: {project.total_sum}</div>
            <JoinTeam {...props} />
        </div>
    )
}

const mapStateToProps = (state) => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(SingleProjectPage);