import React, {useEffect, useState} from 'react';
import {SuperButton} from "./SuperButton";

type PropsType={
    showStartNumberValue:()=>void
}

export const ChangeNumbersValue = (props: PropsType) => {

    const [maxValue, setMaxValue] = useState<number>(() => {
            let valueAsString = localStorage.getItem('maxValue')
            if (valueAsString) {
                return JSON.parse(valueAsString)
            } else return 5
        }
    )
    const [startValue, setStartValue] = useState<number>(() => {
            let valueAsString = localStorage.getItem('startValue')
            if (valueAsString) {
                return JSON.parse(valueAsString)
            } else return 0
        }
    )

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
        props.showStartNumberValue()
    }


    return <div>
        <div>max value</div>
        <input type="number"
               value={maxValue}
               onChange={(e) => setMaxValue(e.currentTarget.valueAsNumber)}/>
        <div>start value</div>
        <input type="number"
               value={startValue}
               onChange={(e) => setStartValue(e.currentTarget.valueAsNumber)}/>
        <div><SuperButton callback={onClickSaveValuesHandler} name={'Жмяк!'}/></div>

        <hr/>



    </div>

};