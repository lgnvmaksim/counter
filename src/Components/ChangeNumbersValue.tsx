import React, {ChangeEvent, useEffect, useState} from 'react';
import {SuperButton} from "./SuperButton";

type PropsType = {
    showStartNumberValue: () => void
    setMessage: (title: string | null) => void
    setStartValueCount:(value:null)=>void

}

export const ChangeNumbersValue = ({showStartNumberValue,
                                       setMessage,
                                       setStartValueCount}: PropsType) => {

    const [maxValue, setMaxValue] = useState<number>(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            return JSON.parse(valueAsString)
        } else return 5
    })
    const [startValue, setStartValue] = useState<number>(() => {
        let valueAsString = localStorage.getItem('startValue')
        if (valueAsString) {
            return JSON.parse(valueAsString)
        } else return 1
    })

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.getItem('maxValue')
    }, [maxValue])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.getItem('startValue')
    }, [startValue])

    const onClickSaveValuesHandler = () => {
        localStorage.setItem('maxValueToCounter', JSON.stringify(maxValue))
        localStorage.setItem('startValueToCounter', JSON.stringify(startValue))
        showStartNumberValue()
        setMessage(null)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber)
        setMessage('Выбери уже че-нить и жмякай "Жмяк!"')
        setStartValueCount(null)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
        setMessage('Выбери уже че-нить и жмякай "Жмяк!"')
        setStartValueCount(null)
    }

     const checkCorrectValue = () => {
         let checkCorrectValue:boolean = (startValue === maxValue || startValue > maxValue || startValue <= 0 || maxValue <= 0);
         if (checkCorrectValue) {
             setMessage('Ата-та по рукам! Не может быть так! Верни корректные значения!')
         } return checkCorrectValue
     }



    return <div>
        <div>max value</div>
        <input type="number"
               value={maxValue}
               onChange={onChangeMaxValueHandler}/>
        <div>start value</div>
        <input type="number"
               value={startValue}
               onChange={onChangeStartValueHandler}/>
        <div><SuperButton callback={onClickSaveValuesHandler} name={'Жмяк!'} stop={checkCorrectValue()}/></div>
        <hr/>



    </div>

};