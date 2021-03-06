import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Music from "./components/Music/Music";

const App = () => {
    return (
            <div className='app-wrapper'>
                <Header />
                <div className="wrapper">
                    <Navbar />
                    <Route path='/dialogs/:userId?'
                           render={ () => <DialogsContainer /> }/>
                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer /> }/>
                    <Route path='/users'
                           render={ () => <UsersContainer /> }/>
                    <Route path='/music'
                           render={ () => <Music /> }/>
                </div>
            </div>
        )
}

export default App;