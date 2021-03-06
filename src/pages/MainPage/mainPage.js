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
              <h1>Получите кредит или инвестиции на свой проект прямо сегодня! или Дайте деньги в крудит или проинвестируйте в проверенные проекты!</h1>
              <p>
                Социальная сеть с рейтингом пользователей на основе источников информации о финансовом состоянии, об экономической деятельности и других источников информации, на примере соц сетей. С возможностью объединения в проекты с целью получения инвестиций или кредитов, или инвестирования и кредитования.
              </p>
              <Users />
            </section>
        </div>
    )
}

export default MainPage