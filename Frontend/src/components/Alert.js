import React, { useContext } from 'react'
import {
    CAlert,
} from '@coreui/react'
import AlertContext from '../Alert/AlertContext';

export default function Alert(s) {
    const Context = useContext(AlertContext);
    const { alert } = Context;

    return (
    <>
        {console.log(123456)}
        {alert && <CAlert color={alert.type} style={{ position: "fixed", top: "50px", left: "38%", transition: "ease-in-out 5s" , zIndex:"1000000000"}}>{alert.message}</CAlert>}
        </>
    )
}
