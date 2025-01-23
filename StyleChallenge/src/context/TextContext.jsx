import { createContext, useReducer } from "react";
import { textReducer, initialState } from "../reducer/textReducer";

export const TextContext = createContext();

export const TextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(textReducer, initialState);

    return (
        <TextContext.Provider value={{ state, dispatch }}>
            {children}
        </TextContext.Provider>
    );
};