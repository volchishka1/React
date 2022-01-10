import React from 'react'
import s from './../Dialogs.module.css';


const Message = (props) => {

    let newMyMessage = React.createRef();

    let addMessage = () => {
        let mes = newMyMessage.current.value;
        alert(mes);
    }
     return (
         <div>
             <div className={s.dialog}>{props.message}</div>
         </div>
     )
}

export default Message;