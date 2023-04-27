import React, { useState } from 'react'
import formContext from './FormContext'
const FormState = (props) => {
    const [mode, setMode] = useState("");
    const [dist, setDist] = useState("");
    return (
        <formContext.Provider value={{ mode, setMode, dist, setDist }}>
            {props.children}

        </formContext.Provider>
    )
}

export default FormState