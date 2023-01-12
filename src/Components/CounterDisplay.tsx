import React, {useState} from 'react';
import {ChangeNumbersValue} from "./ChangeNumbersValue";

// type PropsType={
//
// }

export const CounterDisplay = () => {
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)

    const showStartNumberValue = () => {
        const StateString = localStorage.getItem('startValueToCounter')
        if (StateString !== null) {
            setStartValue(JSON.parse(StateString))
        }
    }

    return (
        <div>
            <ChangeNumbersValue showStartNumberValue={showStartNumberValue}/>
            <div>
                {startValue}
            </div>
            <button>Вперед!</button>
            <button>йОбнулись</button>
        </div>
    );
};