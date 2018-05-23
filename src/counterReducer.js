const INITIAL_STATE = { step: 1, number: 0 };

export default function( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case 'STEP_CHANGED':
            return { ...state, step: +action.payload };
        case 'INCREASE':
            return { ...state, number: state.number + state.step };
        case 'DECREASE':
            return { ...state, number: state.number - state.step };
        default:
            return state;
    }
}