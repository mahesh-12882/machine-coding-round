// import React from "react";

type PersonListProps = {
    names: {
        first: string,
        last: string,
        address?:string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    console.log("props>>>>>",props);
    return (
        <div>
            {props.names.map((name) => (
                <h2>{name.first} {name.last} {name.address}</h2>
            ))}
        </div>
    )
}