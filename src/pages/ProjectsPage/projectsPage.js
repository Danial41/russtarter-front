import React, {useState, useEffect} from 'react'

import {URL} from '../../utils/url.helper'
import {connect} from 'react-redux'

import ProjectItem from '../../components/ProjectItem/projectItem'

const ProjectsPage = (props) => {

    const [projects, setProjects] = useState([])

    console.log(projects);

    useEffect(() => {
        fetch(`${URL}/projects`, {
            headers: {
                Authorization: 'Bearer ' + props.user.token,
            }
        })
        .then(resp => resp.json())
        .then(data => setProjects(data.data))
    }, [])

    return (
        <div className='projects-keeper'>
            {projects.map((item) => {
                return <ProjectItem image={item.image} name={item.title} option={item.option} key={item.id} id={item.id} user={item.user.username}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(ProjectsPage);