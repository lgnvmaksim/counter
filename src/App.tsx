import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState<number>(()=>{
            let valueAsString=localStorage.getItem('counterValue')
            if(valueAsString) {
                return JSON.parse(valueAsString)
            }else return 1
        }
    )
    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.getItem('counterValue')
    },[value])


    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue',)
        if (valueAsString) {
            setValue(JSON.parse(valueAsString))
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            {/*<button onClick={setToLocalStorageHandler}>setToLocalStorage</button>*/}
            {/*<button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>*/}
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
        </div>
    );
}

export default App;
