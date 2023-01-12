import React, {useState} from 'react';
import {ChangeNumbersValue} from "./ChangeNumbersValue";
import {SuperButton} from "./SuperButton";


export const CounterDisplay = () => {
    const [maxValueCount, setMaxValueCount] = useState(1)
    const [startValueCount, setStartValueCount] = useState<number | null>(null)
    const [message, setMessage] = useState<string | null>('Нажми на "Жмяк! и узри магию!')


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
        if (startValueFromLocalStorage !== null) {
            setStartValueCount(JSON.parse(startValueFromLocalStorage))
        }
        setMessage(null)
    }

    const onClickStartValue = () => {
        if (startValueCount) {
            setStartValueCount(startValueCount + 1)
        }
    }


    let blockButton: boolean = false
    let disabledButtonToReset = () => {
        if (startValueCount === maxValueCount) {
            blockButton = false
        } else if (message !== null) {
            blockButton = true
        }
        return blockButton
    }

    let disabledButtonToStart = () => {
        if (startValueCount === maxValueCount) {
            blockButton = true
        } else if (message !== null) {
            blockButton = true
        }
        return blockButton
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
            <SuperButton callback={onClickStartValue} name={"Вперед!"} stop={disabledButtonToStart()}/>
            <SuperButton callback={resetValueHandler} name={"Öбнулись"} stop={disabledButtonToReset()}/>
        </div>
    );
};