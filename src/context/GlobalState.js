import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    chars: "",
    line1:"",
    line2:"",
    line3:"",
    result:"",
    isSym: false
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    function charSender(char) {
        dispatch({
            type: 'SET_CHAR',
            payload: char
        });
    }

    function inline1(char) {
        dispatch({
            type: 'LINE1_CHAR',
            payload: char
        });
    }
    function inline2(char) {
        dispatch({
            type: 'LINE2_CHAR',
            payload: char
        });
    }
    function inline3(char) {
        dispatch({
            type: 'LINE3_CHAR',
            payload: char
        });
    }

    function setIsSym(bool) {
        dispatch({
            type: 'SET_SYM',
            payload: bool
        });
    }

    function setResult(char) {
        dispatch({
            type: 'SET_RESULT',
            payload: char
        });
    }

    function setJoke(joke) {
        dispatch({
            type: 'SET_JOKE',
            payload: joke
        });
    }

    function resetF() {
        dispatch({
            type: 'RESET',
        });
    }



    return (<GlobalContext.Provider value={{
        chars: state.chars,
        isSym: state.isSym,
        line1:state.line1,
        line2:state.line2,
        line3:state.line3,
        result:state.result,
        setJoke,
        setResult,
        inline1,
        inline2,
        inline3,
        setIsSym,
        resetF,
        charSender
    }}>
        {children}
    </GlobalContext.Provider>);
}