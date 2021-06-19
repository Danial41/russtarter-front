import React, {useState} from 'react'

const UserEditPage = (props) => {

    const [warning, setWarning] = useState();

    const [allValues, setAllValues] = useState({
        first_name: '',
        last_name: '',
        patronymic: '',
        birthday: '',
        charachteristics: 'Активный поиск'
    });

    const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
        console.log(allValues);
    }

    const handleChange = (event) => {
      const { value } = event.target;
      setAllValues({...allValues, charachteristics: event.target.value});
    };

    const createProjectHandler = (e) => {
        e.preventDefault()

        const formData = new FormData();
        if (allValues.first_name) formData.append('first_name', allValues.first_name);
        if (allValues.last_name) formData.append('last_name', allValues.last_name);
        if (allValues.patronymic) formData.append('patronymic', allValues.patronymic);
        if (allValues.birthday) formData.append('birthday', allValues.birthday);
        if (allValues.charachteristics) formData.append('charachteristics', allValues.charachteristics);

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
                          <label>День Рождения</label>
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Назовите проект"
                            name="birthday"
                            onChange={changeHandler}
                          />
                        </div>

                        <label>Характеристики</label>
                        <select className="form-group" onChange={handleChange}>
                            <option value="Активный поиск" name="charachteristics">Активный поиск</option>
                            <option value="Инвестор" name="charachteristics">Инвестор</option>
                        </select>

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