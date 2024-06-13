import React, { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput]=useState("")
    const[recentPrompt,setRecentPrompt]=useState("");
    const [prevPrompts,setPrevPrompts]=useState([]);
    const[shorResult,setShowResult]=useState(false);
    const[loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState("");

    const onSent=async (prompt)=>{
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompts((prev) => [...prev, input]);
        const response=await run(input)
        setResultData(response)
        
        setLoading(false)
        setInput("")
    }
    
    
    const contextValue = {
        
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        shorResult,
        loading,
        resultData,
        input,
        setInput,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
