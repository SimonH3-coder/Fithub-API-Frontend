import BurgerNavIcon from "../../assets/BurgerNavIcon.svg"
import BackIcon from "../../assets/BackIcon.svg"
import {NavLink, Navigate } from "react-router";
import { useState } from "react";


export function Navigation() {
    const [Login, setLogin] = useState(false)
    const [error, setError] = useState("")

    async function login(event) {
        event.preventDefault()
        setError("")

        const formData = new FormData(event.currentTarget)

        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password"),
            }),
        })
        if (response.ok) {
            setError("Hvis Email og password er skrevet forkert")
            return;
        }
        setLogin(true)
    }
    if (Login) {
        return <Navigate to="/login" />;
    }

return (
<>
<img src={BurgerNavIcon} alt="burger menu icon" />
<img src={BackIcon} alt="back icon" />

    <NavLink to= "/home">Home</NavLink>
    <NavLink to=  "/search">Search</NavLink>
    <h1>Log in</h1>
    <form onSubmit={login}>
        <input 
        id = "email"
        type = "email"
        name = "email"
        placeholder = "Email"
        required/>
        <input 
        id = "password"
        type = "password"
        name = "password"
        placeholder = "Password"
        required/>
        <button type="submit">Log in</button>
    </form>
    {error && <p>{error}</p>}
    

</>
)


}

