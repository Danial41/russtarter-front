import React, { useState } from 'react'

import {connect} from 'react-redux'

import {URL, LOCAL_URL} from '../../utils/url.helper'


const ProjectCreationPage = (props) => {

    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [warning, setWarning] = useState();
    const [totalSum, setTotalSum] = useState();

    console.log(image);

    const createProjectHandler = (e) => {
        e.preventDefault()

        const formData = new FormData();
        if (image) formData.append('image', image);
        if (title) formData.append('title', title);
        if (description) formData.append('description', description);
        if (totalSum) formData.append('total_sum', totalSum);

        fetch(`${URL}/projects`, {
            method: 'POST',
            body: formData,
            headers: {
              Authorization: 'Bearer ' + props.user.token,
            }
        })
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            setWarning(data.message)
          } else {
            props.history.push('./projects')
          }
        })
        .catch(err => console.log(err));
    }

    const clearFields = () => {
        setImage();
    }

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setImage(img);
        }
    };

    return (
        <div>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Создание проекта</h3>
                    <form onSubmit={createProjectHandler}>

                        <div>
                          <span className="warning">{warning}</span>
                        </div>

                        <div className="form-group">
                          <label>Название проекта</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Назовите проект"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label>Описание проекта</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Опишите проект"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label>Описание проекта</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Сколько необходимо на реализацию проекта?"
                            name="totalSum"
                            onChange={(e) => setTotalSum(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label>Картинка</label>
                          <input
                            type="file"
                            className="form-control"
                            placeholder="Грузи пикчу"
                            name="image"
                            onChange={onImageChange}
                          />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                          Создать
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(ProjectCreationPage);