import { useState } from "react"


export function Theme(){

    const[dark, setTheme]=useState(true)

    const changeTheme=()=>{
        setTheme(!dark)
    }

    return(<>
    <h1>THEME CHANGE</h1>
        
        <button onClick={()=>changeTheme()}>{dark? 'DARK':'LIGHT'}</button>
    </>)
}