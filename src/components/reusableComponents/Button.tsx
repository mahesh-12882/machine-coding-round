import React from "react";

type ButtonProps = {
    handdleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
export const Button = (props:ButtonProps)=>{
    return(
        <>
          <button type="button" onClick={props.handdleClick}/>
        </>
    )
}