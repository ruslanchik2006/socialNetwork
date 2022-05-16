import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import avatarProfile from "../../assets/images/profile/avatar2.jpg";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem onHumanChangeDialog={props.onHumanChangeDialog} name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = state.dialogs[props.dialogsPage.dialogNumber-1].messages.map( m => <Message message={m.message} key={m.id} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div className={s.post}>
                    <div className={s.post__up}>
                        <img src={avatarProfile} alt="" className={s.post__img}/>
                        <input value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'
                               type="text"/>
                    </div>
                    <div className={s.post__button}>
                        <button onClick={onSendMessageClick} href="">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;