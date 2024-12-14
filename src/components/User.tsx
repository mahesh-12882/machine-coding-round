import { useState } from "react";

type AuthUser = {
    username: string,
    age: number
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);//Type assertion

    const handleLogin = () => {
        setUser({
            username: "developer",
            age: 23
        })
    }

    return (
        <>
            <button type="button" onClick={handleLogin}>Click</button>
            <p>{user.username}</p>
            <p>{user.age}</p>
        </>
    )
}