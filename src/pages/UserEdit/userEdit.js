import React, {useState} from 'react'

import { URL } from "../../utils/url.helper";

import { connect } from 'react-redux';

const UserEditPage = (props) => {

    const token = 'c63a5276874a8e4e68583996b0a2d68444d29e78';

    
    const [warning, setWarning] = useState();
    
    const [allValues, setAllValues] = useState({
      first_name: '',
      last_name: '',
      patronymic: '',
      birthday: '',
      charachteristics: 'Активный поиск',
      region_id: '',
      snils: '',
      egrul: '',
      active_search: false,
      investor: false
    });
    
    const query = `${allValues.snils}`

    const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
    }

    const handleChange = (event) => {
      const { value } = event.target;
      setAllValues({...allValues, charachteristics: event.target.value});
    };

    const checkboxesHandler = () => {

    }

    const createProjectHandler = (e) => {
        e.preventDefault()

        console.log(`${allValues.last_name} ${allValues.first_name} ${allValues.patronymic}`);

        const formData = new FormData();
        if (allValues.first_name) formData.append('first_name', allValues.first_name);
        if (allValues.last_name) formData.append('last_name', allValues.last_name);
        if (allValues.patronymic) formData.append('patronymic', allValues.patronymic);
        if (allValues.birthday) formData.append('birthday', allValues.birthday);
        if (allValues.region_id) formData.append('region_id', allValues.region_id);
        if (allValues.snils) formData.append('snils', allValues.snils);
        if (allValues.egrul) formData.append('egrul', allValues.egrul);
        if (allValues.active_search) formData.append('active_search', allValues.active_search);
        if (allValues.investor) formData.append('investor', allValues.investor);


        fetch(`${URL}/edit`, {
            method: 'PUT',
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
            console.log('success');
            props.history.push('./profile')
            if (allValues.snils) {
              fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', {
                method: 'POST',
                mode: "cors",
                headers: {
                  'Content-Type': 'application/json',
                  "Accept": 'application/json',
                  Authorization: 'Token ' + token,
                },
                body: JSON.stringify({query: query})
              })
              .then(resp => resp.json())
              .then(data => console.log(data))
            }
          }
        })
        .catch(err => console.log(err));
    }

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
                          <label>Имя</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Имя"
                            name="first_name"
                            onChange={changeHandler}
                          />
                        </div>
                        
                        <div className="form-group">
                          <label>Фамилия</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Фамилия"
                            name="last_name"
                            onChange={changeHandler}
                          />
                        </div>

                        <div className="form-group">
                          <label>Отчество</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Отчество"
                            name="patronymic"
                            onChange={changeHandler}
                          />
                        </div>

                        <div className="form-group">
                          <label>Код региона</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="код региона"
                            name="region_id"
                            onChange={changeHandler}
                          />
                        </div>

                        <div className="form-group">
                          <label>СНИЛС</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="СНИЛС"
                            name="snils"
                            onChange={changeHandler}
                          />
                        </div>

                        <div className="form-group">
                          <label>ЕГРЮЛ</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="ЕГРЮЛ"
                            name="egrul"
                            onChange={changeHandler}
                          />
                        </div>

                        <div className="form-group">
                          <label>День Рождения</label>
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Назовите проект"
                            name="birthday"
                            onChange={changeHandler}
                          />
                        </div>
                        <div>
                          <div>
                            <div>Характеристики</div>
                            <input type="checkbox" id="scales" name="active_search" onChange={(e) => setAllValues({...allValues, active_search: !allValues.active_search})} />
                            <label htmlFor="active_search">Активный Поиск</label>
                          </div>

                          <div>
                            <input type="checkbox" id="horns" name="investor" onChange={(e) => setAllValues({...allValues, investor: !allValues.investor})} />
                            <label htmlFor="active_search">Инвестор</label>
                          </div>
                        </div>
                        <label></label>
                        
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

export default connect(mapStateToProps)(UserEditPage);