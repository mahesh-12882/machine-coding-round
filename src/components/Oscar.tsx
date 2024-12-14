import { FC } from 'react';

type OscarProps = {
    children:React.ReactNode
}

export const Oscar:FC<OscarProps> = (props) => {
    return (
         <>
            {props.children}
         </>
     )
}