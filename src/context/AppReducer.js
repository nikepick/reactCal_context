export default (state, action) => {
    switch (action.type) {
        case 'SET_CHAR':
            //console.log("state" ,state.chars);
            //console.log("payload", action.payload);
            return {
                ...state,
                chars: action.payload
            }
        case 'LINE1_CHAR':
            return {
                ...state,
                line1: state.line1 + action.payload
            }
        case 'LINE2_CHAR':
            return {
                ...state,
                line2: action.payload
            }
        case 'LINE3_CHAR':
            return {
                ...state,
                line3: state.line3 + action.payload
            }
        case 'SET_SYM':
            return {
                ...state,
                isSym: action.payload
            }
        case 'SET_RESULT':
            return {
                ...state,
                result: action.payload
            }
        case 'SET_JOKE':
            const { joke, emoji, result} = action.payload;
            return {
                ...state,
                line1: joke,
                line2: emoji,
                line3: ".",
                result: result,
            }
        case 'RESET':
            return {
                ...state,
                line1: "",
                line2: "",
                line3: "",
                result: "",
                isSym: false
            }
        default:
            return state;
    }
}