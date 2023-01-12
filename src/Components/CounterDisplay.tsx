import React, {useState} from 'react';
import {ChangeNumbersValue} from "./ChangeNumbersValue";
import {SuperButton} from "./SuperButton";


export const CounterDisplay = () => {
    const [maxValueCount, setMaxValueCount] = useState(1)
    const [startValueCount, setStartValueCount] = useState<number | null>(1)
    const [message, setMessage] = useState<string | null>(null)

    const showStartNumberValue = () => {
        const startValueString = localStorage.getItem('startValueToCounter')
        if (startValueString !== null) {
            setStartValueCount(JSON.parse(startValueString))
        }
        const maxValueString = localStorage.getItem('maxValueToCounter')
        if (maxValueString !== null) {
            setMaxValueCount(JSON.parse(maxValueString))
        }
    }

    const resetValueHandler = () => {
        let startValueFromLocalStorage = localStorage.getItem('startValueToCounter')
        if (startValueFromLocalStorage) {
            setStartValueCount(JSON.parse(startValueFromLocalStorage))
        }
        setMessage(null)
    }

    const onClickStartValue = () => {
        if (startValueCount) {
            setStartValueCount(startValueCount + 1)
        }
    }



    

    return (
        <div>
            <ChangeNumbersValue showStartNumberValue={showStartNumberValue}
                                setMessage={setMessage}
                                setStartValueCount={setStartValueCount}/>
            <div>
                {startValueCount}
                {message}
            </div>
            <SuperButton callback={onClickStartValue} name={"Вперед!"} stop={maxValueCount === startValueCount}/>
            <SuperButton callback={resetValueHandler} name={"Öбнулись"}/>
        </div>
    );
};