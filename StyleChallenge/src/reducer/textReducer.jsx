export const initialState = {
    texts: [],
};

export const textReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TEXT":
            return {
                ...state,
                texts: [...state.texts, action.payload],
            };
        case "DELETE_TEXT":
            return {
                ...state,
                texts: state.texts.filter((text) => text.id !== action.payload),
            };
        default:
            return state;
    }
};