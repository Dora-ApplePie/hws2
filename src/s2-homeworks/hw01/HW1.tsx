import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import s from './HW1.module.css'

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserType
    message: MessagesType
}

export type UserType = {
    avatar: string
    name: string
}

export type MessagesType = {
    text: string
    time: string
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Patricia Dark',  // можно менять
    },
    message: {
        text: 'Hello, I want to meet with you, bro!', // можно менять
        time: new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'}),
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Wilhelm Conrad', // можно менять
    },
    message: {
        text: 'Hello, my dear friend, what about nachos tomorrow?', // можно менять
        time: new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'}),
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div className={s.chatBody}>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                    {/*для автоматической проверки дз (не менять)*/}
                    <MessageSender M={Message}/>
                </div>
            </div>
        </div>
    )
}

export default HW1
