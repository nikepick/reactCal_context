import React, { Component } from 'react'
import { CalPad } from './CalPad'
import { CalScreen } from './CalScreen'


export class Calculator extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <CalScreen />
                    <CalPad />
                </div>
            </div>
        )
    }
}



export default Calculator
