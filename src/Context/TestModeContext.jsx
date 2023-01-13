import { createContext, useContext, useState } from "react";


const TestModeContext = createContext();

export const TestModeContextProvider = ({children})=>{

    const [testTime, setTestTime] = useState(15); // this can have a value of 15, 30 or 60

    const values = {
        testTime,
        setTestTime
    }


    return (<TestModeContext.Provider value={values}>{children}</TestModeContext.Provider>);
}

export const useTestMode = ()=> useContext(TestModeContext);