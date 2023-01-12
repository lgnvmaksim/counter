import React from 'react';
import {ChangeNumbersValue} from "./Components/ChangeNumbersValue";
import s from './styles/counter.module.css'
import {CounterDisplay} from "./Components/CounterDisplay";

export const Counter = () => {
    return <div className={s.counter}>
        <h1>Super Counter by Max </h1>
        <CounterDisplay/>
        {/*<ChangeNumbersValue />*/}
        <div>Полностью авторская разработка. Все права защищены(с)</div>
    </div>
}