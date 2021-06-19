import React from 'react';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Users from '../../components/Users/Users';

import banner from '../../images/banner.png';


const MainPage = () => {
    return (
        <div>
            <section className="app-wrapper__content">
              <img src={banner} />
              <h1>Начните зарабатывать сегодня
                  НА БЛОКЧЕЙН-БАНКИНГЕ</h1>
              <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <Users />
            </section>
        </div>
    )
}

export default MainPage