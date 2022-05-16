import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let onHumanChange = (e) => {
        props.onHumanChangeDialog(props.id);
    }

    return <div className={s.dialog + ' ' + s.active}>

        <NavLink to={'/dialogs/' + props.id} onClick={onHumanChange}>{props.name}</NavLink>
    </div>
}

export default DialogItem;