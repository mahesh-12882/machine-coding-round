import React from "react";

type InputProps = {
    handdleChange:(event:React.ChangeEvent<HTMLInputElement>,id:number)=>void
}
export const Input = (props:InputProps)=>{
    return(
        <>
          <input type="text" name="username" onChange={(event)=>props.handdleChange(event,2)}/>
        </>
    )
}