import React from 'react'

import {Link} from 'react-router-dom'

const ProjectItem = (props) => {

    const {image, option, user, name, id} = props

    return (
        <div className='project-wrapper'>
            <Link id='item-link' to={`/projects/${id}`}>
                <span id='project-title'>ПРОЕКТЫ</span>
                <span id='project-name'>{name}</span>
                <img id='project-pic' src={image} />
                <div className='description-wrapper'>
                    <div>Отрасль: {option}</div>
                    <div>Автор: {user}</div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectItem