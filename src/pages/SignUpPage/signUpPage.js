import React, { Component } from "react";

import { connect } from "react-redux";
import { setUser } from "../../redux/user/user.actions";

import {LOCAL_URL, URL} from '../../utils/url.helper'

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    image: null,
    warning: "",
  };

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: img
      });
    }
  };

  register = (e) => {
    e.preventDefault();

    const formData = new FormData();
        if (this.state.username) formData.append('username', this.state.username);
        if (this.state.email) formData.append('email', this.state.email);
        if (this.state.password) formData.append('password', this.state.password);
        if (this.state.password_confirmation) formData.append('password_confirmation', this.state.password_confirmation);
        if (this.state.image) formData.append('image', this.state.image);

    fetch(`${URL}/users`, {
      method: "POST",
      mode: "cors",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          this.setState({ warning: data.error });
        } else {
          console.log(data);
          this.props.setUser(data);
          this.setState({
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            image: "",
            warning: "Account was created",
          });
          setTimeout(() => {
            this.setState({ warning: "" });
            this.props.history.push(`/profile/${data.user.id}`);
          }, 1000);
        }
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
            <h3>Регистрация</h3>
          <form onSubmit={this.register}>

            <div>
              <span className="warning">{this.state.warning}</span>
            </div>

            <div className="form-group">
              <label>Имя Пользователя:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Имя пользователя"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Электронная почта:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Пароль:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Пароль"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Подтвердите Пароль:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Подтверждение Пароля"
                name="password_confirmation"
                value={this.state.password_confirmation}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Аватар</label>
              <input
                type="file"
                className="form-control"
                placeholder="Грузи пикчу"
                name="image"
                onChange={this.onImageChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (value) => dispatch(setUser(value)),
});

export default connect(null, mapDispatchToProps)(SignUp);