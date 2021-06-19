import React, {useState} from 'react'

const UserEditPage = (props) => {

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

    console.log(allValues.investor, allValues.active_search, allValues.egrul, allValues.region_id, allValues.snils);

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


        fetch(`${URL}projects`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            setWarning(data.message)
          } else {
            props.history.push('./projects')
            console.log(data);
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
                            <label for="scales">Активный Поиск</label>
                          </div>

                          <div>
                            <input type="checkbox" id="horns" name="investor" onChange={(e) => setAllValues({...allValues, investor: !allValues.investor})} />
                            <label for="horns">Инвестор</label>
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

export default UserEditPage