// import React from "react";

type StatusProps = {
   status: "loading" | "success" | "error"
}

export const Status = (props:StatusProps)=>{
    let message;
    if(props.status === "loading"){
        message = "Loading...";
    }else if(props.status === "success") {
        message = "Success...";
    }else if(props.status === "error") {
        message = "Error...";
    }
    return(
        <div>
            <h2>Status:{message}</h2>
        </div>
    )
}