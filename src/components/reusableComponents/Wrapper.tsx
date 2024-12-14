// import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
export const Wrapper = () => {
    return (
        <>
                <Input handdleChange={(event,id)=>{console.log(event.currentTarget.value,id)}}/>
                <Button handdleClick={(event)=>{console.log(event.type)}}/>
        </>


    )
}