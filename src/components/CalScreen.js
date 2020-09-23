import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const CalScreen = () => {
    const { line1,line2,line3,result} = useContext(GlobalContext);
    

    return (
        <div>
            <div className="row">
                <input type='text' style={inputStyle} readOnly value={line1}></input>
            </div>
            <div className="row">
                <input type='text' style={inputStyle} readOnly value={line2}></input>
            </div>
            <div className="row">
                <input type='text' style={inputStyle} readOnly value={line3}></input>
            </div>
            <div className="row">
                <input type='text' style={inputStyle} readOnly value={result}></input>
            </div>
        </div>
    )
}

const inputStyle = {
    backgroundColor: '#ffffff',
    border: 'none',
    height: '50px',
    width: '100%'
}

