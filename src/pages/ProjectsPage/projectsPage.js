import React, {useState, useEffect} from 'react'

import {URL} from '../../utils/url.helper'

import ProjectItem from '../../components/ProjectItem/projectItem'

const ProjectsPage = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(`${URL}projects`)
        .then(resp => resp.json())
        .then(data => setProjects(data.data))
    }, [])

    return (
        <div className='projects-keeper'>
            {projects.map((item) => {
                return <ProjectItem image={item.image} name={item.name} option={item.option} user={item.user.fio} key={item.id} id={item.id}/>
            })}
        </div>
    )
}

export default ProjectsPage