import React from 'react';
import s from './styles/counter.module.css'
import {CounterDisplay} from "./Components/CounterDisplay/CounterDisplay";

export const Counter = () => {

    return (
        <div>
            <header className={s.header}>
                <h1>Super Counter by Max </h1>
            </header>
            <div className={s.container}>
                <CounterDisplay/>
            </div>
            <footer className={s.footer}>Полностью авторская разработка. Все права защищены(с)</footer>
        </div>
    )
}