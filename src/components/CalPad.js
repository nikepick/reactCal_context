import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import axios from 'axios'

export const CalPad = () => {

    const { isSym, line1, line2, line3} = useContext(GlobalContext);
    const { inline1, inline2, inline3, setIsSym, setResult,setJoke, resetF } = useContext(GlobalContext);
    const onClick = (e) => {
        e.preventDefault();
        if (!isSym) {
            inline1(e.target.innerText);
        } else {
            inline3(e.target.innerText);
        }
    }

    const onSymbol = (e) => {
        e.preventDefault();
        setIsSym(true);
        inline2(e.target.innerText);
    }

    const onEqual = (e) => {
        e.preventDefault();
        cal(line1, line2, line3);
    }

    const onAC = (e) => {
        e.preventDefault();
        resetF();
    }

    const getRandomInt =(max) => {
        return Math.floor(Math.random() * Math.floor(max));
      }
    const cal = (num1, sym, num2) => {
        var a = Number(num1);
        var b = Number(num2);
        if (sym === "+") {
            add(a, b);
        } else if (sym === "-") {
            sub(a, b);
        } else if (sym === "/") {
            div(a, b);
        } else if (sym === "x") {
            mul(a, b);
        } else { }
    }

    const add =(num1, num2) => {
        var res = num1 + num2;
        resultMaker(res);
    }
    const sub=(num1, num2)=> {
        var res = num1 - num2;
        resultMaker(res);
    }
    const mul=(num1, num2) =>{
        var res = num1 * num2;
        resultMaker(res);
    }
    const div=(num1, num2)=> {
        var res = num1 / num2;
        resultMaker(res);
    }

    const resultMaker=(ress)=> {
        setResult(ress);
        axios
        .get('https://api.npoint.io/fd024bc915e3f6fac514')
        .then(res => {
            var listMathJoke = res.data;
            var random = getRandomInt(listMathJoke.length - 1);
            var oneJoke = listMathJoke[random].line;
            var oneEmoji = listMathJoke[random].emoji;
            var resultFinal = `Your result for ${line1} ${line2} ${line3} = ${ress}`;
            const joke = {
                joke : oneJoke,
                emoji : oneEmoji,
                result : resultFinal
            }
            setJoke(joke);
        });
    }

    
    return (
        <div style={{ marginTop: '20px' }}>
            <div className="row">
                <div className="col-4">
                    <button
                        onClick={onClick} type="button" className="btn btn-outline-primary btn-block">1</button>
                </div>
                <div className="col-4">
                    <button onClick={onClick} type="button" className="btn btn-outline-primary btn-block">2</button>
                </div>
                <div className="col-4">
                    <button onClick={onClick} type="button" className="btn btn-outline-primary btn-block">3</button>
                </div>
            </div>

            <div style={{ marginTop: '20px' }}></div>
            <div className="row">
                <div className="col-4">
                    <button onClick={onClick} type="button" className="btn btn-outline-primary btn-block">4</button>
                </div>
                <div className="col-4">
                    <button onClick={onClick} type="button" className="btn btn-outline-primary btn-block">5</button>
                </div>
                <div className="col-4">
                    <button onClick={onClick} type="button" className="btn btn-outline-primary btn-block">6</button>
                </div>
            </div>

            <div style={{ marginTop: '20px' }}></div>
            <div className="row">
                <div className="col-4">
                    <button onClick={onClick} type="button" className="btn btn-outline-primary btn-block">7</button>
                </div>
                <div className="col-4">
                    <button onClick={onClick} type="button" className="btn btn-outline-primary btn-block">8</button>
                </div>
                <div className="col-4">
                    <button onClick={onClick} type="button" className="btn btn-outline-primary btn-block">9</button>
                </div>
            </div>

            <div style={{ marginTop: '20px' }}></div>
            <div className="row">
                <div className="col-4">
                    <button onClick={onAC} type="button" className="btn btn-outline-danger btn-block">AC</button>
                </div>
                <div className="col-4">
                    <button onClick={onClick} type="button" className="btn btn-outline-primary btn-block">0</button>
                </div>
                <div className="col-4">
                    <button onClick={onEqual} type="button" className="btn btn-outline-success btn-block">=</button>
                </div>
            </div>

            <div style={{ marginTop: '20px' }}></div>
            <div className="row">
                <div className="col-4">
                    <button onClick={onSymbol} type="button" className="btn btn-outline-info btn-block">+</button>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col">
                            <button onClick={onSymbol} type="button" className="btn btn-outline-info btn-block">-</button>
                        </div>
                        <div className="col">
                            <button onClick={onSymbol} type="button" className="btn btn-outline-info btn-block">x</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <button onClick={onSymbol} type="button" className="btn btn-outline-info btn-block">/</button>
                </div>
            </div>
        </div>
    )

}



