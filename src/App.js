import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/signUpPage";
import MainPage from './pages/MainPage/mainPage';
import ProjectCreationPage from "./pages/ProjectCreationPage/projectCreation";
import UserEditPage from './pages/UserEdit/userEdit';
import ProjectsPage from './pages/ProjectsPage/projectsPage';
import SingleProjectPage from './pages/SingleProjectPage/singleProjectPage';
import ProfilePage from "./pages/ProfilePage/profilePage";

function App(props) {
  return (
      <div className="app-wrapper">
          <Route exact path='/sign-up' component={SignUpPage} />
          <Route path='/' component={Header} />
          <Route exact path='/' component={MainPage} />
          <Route exact path='/create-project' component={ProjectCreationPage} />
          <Route exact path='/edit' component={UserEditPage} />
          <Route exact path='/projects' component={ProjectsPage} />
          <Route exact path='/projects/:id' component={SingleProjectPage} {...props} />
          <Route exact path='/profile' component={ProfilePage} {...props} />
      </div>
  );
}

export default App;
