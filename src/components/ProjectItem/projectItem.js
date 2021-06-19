import React from 'react'

import {Link} from 'react-router-dom'

const ProjectItem = (props) => {

    const {image, user, name, id} = props

    return (
        <div className='project-wrapper'>
            <Link id='item-link' to={`/projects/${id}`}>
                <span id='project-title'>ПРОЕКТЫ</span>
                <span id='project-name'>{name}</span>
                <img id='project-pic' src={image} />
                <div className='description-wrapper'>
                    <div>Автор: {user}</div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectItem