export function increase() {
    return { type: 'INCREASE' };
}

export function decrease() {
    return { type: 'DECREASE' };
}

export function stepChanged( event ) {
    return {
        type: 'STEP_CHANGED',
        payload: event.target.value,
    }
}