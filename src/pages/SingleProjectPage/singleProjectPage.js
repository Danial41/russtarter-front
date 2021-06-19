import React, {useEffect, useState} from 'react'

import {URL} from '../../utils/url.helper'

import JoinTeam from '../../components/JoinTeam/joinTeam';

const SingleProjectPage = (props) => {

    console.log(props);

    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(`${URL}projects/${props.match.params.id}`)
            .then(res => res.json())
            .then(data => setProject(data.data))
            .catch(err => console.log(err))
    }, [])

    

    return (
        <div>
            <img src={project.image} />
            <div>Название: {project.name}</div>
            <div>Отрасль: {project.option}</div>
            <div>Описание: {project.description}</div>
            <JoinTeam />
        </div>
    )
}

export default SingleProjectPage