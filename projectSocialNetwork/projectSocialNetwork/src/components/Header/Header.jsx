import React from 'react';
import s from './Header.module.css';
import avatarProfile from "../../assets/images/profile/avatar2.jpg";
import logo from "../../assets/images/header/logo.png";
import search from "../../assets/images/header/header_search.png";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerLeft}>
                <div className={s.header__logo}>
                    <img src={logo} alt=""/>
                </div>
                <div className={s.header__input}>
                    <img src={search} alt=""/>
                    <input type="text" placeholder="Search for something here..."/>
                </div>
            </div>
            <div className={s.headerLeft}>
                <div className={s.header__profile}>
                    <div className={s.header__name}>
                        Seleh Ahmed
                    </div>
                    <div className={s.header__photo}>
                        <img src={avatarProfile} alt=""/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;