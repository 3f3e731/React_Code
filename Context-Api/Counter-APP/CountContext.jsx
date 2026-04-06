import { createContext, useCallback, useMemo, useReducer } from "react";

export const CountContext = createContext();

const initialState = {
    count: Number(localStorage.getItem("count")) || 0
}

function reducer(state, action) {
    switch (action.type) {
        case "INC":
            return { count: state.count + action.payload };
        case "DESC":
            return { count: state.count - action.payload };
        case "RESET":
            return { count: action.payload };
        case "INCBY":
            return { count: state.count + action.payload };
        default:
            return state;
    }
}
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const IncreaseCount = useCallback(() => {
        dispatch({ type: "INC", payload: 1 });
    }, [])
    const DecreaseCount = useCallback(() => {
        dispatch({ type: "DESC", payload: 1 });
    }, [])
    const ResetCount = useCallback(() => {
        dispatch({ type: "RESET", payload: 0 });
    }, [])
    const IncreaseBy = useCallback((num) => {
        dispatch({ type: "INCBY", payload: num })
    }, [])

    const value = useMemo(() => ({
        state,
        IncreaseCount,
        DecreaseCount,
        ResetCount,
        IncreaseBy
    }), [state, IncreaseCount, DecreaseCount, ResetCount, IncreaseBy])
    return (
        <CountContext.Provider value={value}>
            {children}
        </CountContext.Provider>
    )
}