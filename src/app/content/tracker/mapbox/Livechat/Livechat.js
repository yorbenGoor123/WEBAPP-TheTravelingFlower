import React from 'react';
import style from './Livechat.module.css';
import Message from '../../../../components/message/message'
import Field from '../../../../components/field/field'
import message from '../../../../../assets/icons/message.svg'
import IconCross from '../../../../../assets/icons/cross.svg';
const Livechat = () => {
    return (
        <>
        <div className={style.livechat__container}>
        <img className={style.livechat__close} src={IconCross} alt="cross"></img>
            <div className={style.messages}>
           <Message avatar="https://avatars.dicebear.com/v2/identicon/sdfs.svg" content="This is so cool because it is cool and I love it because it is super super cool!!" name="John" />
           <Message avatar="https://avatars.dicebear.com/v2/identicon/sdfs.svg" content="This is so cool because it is cool and I love it because it is super super cool!!" name="John" />
           <Message avatar="https://avatars.dicebear.com/v2/identicon/sdfs.svg" content="This is so cool because it is cool and I love it because it is super super cool!!" name="John" />
           <Message avatar="https://avatars.dicebear.com/v2/identicon/sdfs.svg" content="This is so cool because it is cool and I love it because it is super super cool!!" name="John" />
           <Message avatar="https://avatars.dicebear.com/v2/identicon/sdfs.svg" content="This is so cool because it is cool and I love it because it is super super cool!!" name="John" />
           <Message avatar="https://avatars.dicebear.com/v2/identicon/sdfs.svg" content="This is so cool because it is cool and I love it because it is super super cool!!" name="John" />
           <Message avatar="https://avatars.dicebear.com/v2/identicon/sdfs.svg" content="This is so cool because it is cool and I love it because it is super super cool!!" name="John" />
           <Message avatar="https://avatars.dicebear.com/v2/identicon/sdfs.svg" content="This is so cool because it is cool and I love it because it is super super cool!!" name="John" />
           <Message avatar="https://avatars.dicebear.com/v2/identicon/sdfs.svg" content="This is so cool because it is cool and I love it because it is super super cool!!" name="John" />
        </div>
        <div className={style.input__wrapper}>
        <Field icon={message} value="type a message" width="50%" border="1px"/>
        </div>
    </div>
    </>
    );
};

export default Livechat;