import React from 'react';

import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className='menu-wrapper'>
                <div className='sign-up-wrapper'>
                    <Link to='/create-project'>
                        <span>Create Project</span>
                    </Link>
                </div>
                <div id='projects'>
                    <Link to='/projects'>
                        <div>PROJECTS</div>
                    </Link>
                    <Link to='/profile'>
                        <div>PROFILE</div>
                    </Link>
                </div>
        </div>
    )
}

export default Menu