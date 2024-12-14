import React from "react";


export const Form = () => {
    const handdleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value)
    }

    const handdleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
            event.preventDefault();
            console.log(event.target)
    }


    return (
        <>
            <form onSubmit={handdleSubmit}>
                <input type="text" name="username" onChange={(event) => handdleChange(event)} />
                <button type="submit">Submit</button>

            </form>
        </>
    )
}