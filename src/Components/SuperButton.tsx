import React from 'react';

type PropsType={
    callback:()=>void
    name:string
    stop?: boolean
}

export const SuperButton = ({callback, name, ...restProps}:PropsType) => {
    return <button onClick={callback}> {name}</button>
};