import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

export type FriendsPropsType = {
    message: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendsPropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <div className={s.imageAndTime}>
                    <img
                        id={'hw1-friend-avatar-' + props.message.id}
                        alt={'avatar'}
                        src={props.message.user.avatar}
                        className={s.avatar}/>
                    <div
                        id={'hw1-friend-time-' + props.message.id}
                        className={s.friendTime}
                    >
                        {props.message.message.time}
                    </div>
                </div>

                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        <h4>{props.message.user.name}</h4>
                    </div>
                    <p
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {props.message.message.text}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default FriendMessage
