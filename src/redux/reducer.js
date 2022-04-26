export function reducer(state=[], action) {
    switch (action.type) {
        case "Load":
            return [...action.payload];
        default:
            return state;
    }

}