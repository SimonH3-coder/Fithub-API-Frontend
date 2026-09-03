import BurgerNavIcon from "../../assets/BurgerNavIcon.svg"
import BackIcon from "../../assets/BackIcon.svg"
import Union from "../../assets/Union.svg"
import {NavLink} from "react-router";
import { useState } from "react";
import style from "./Navigation.module.scss";


export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [isLogin, setLogin] = useState(false)
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
        event.currentTarget.reset()
    }
    function logout() {
        setLogin(false)
        setIsOpen(false)
    }

return (
<>
<button className = {style.burgerButton}
onClick={()=> setIsOpen(true)}
aria-label= "Åben navigationmenu"
>
    <img src={BurgerNavIcon} alt="burger menu icon" />

</button>

{isOpen && (
    <div className={style.close}>
        <button className={style.closeButton}
        onClick={()=> setIsOpen(false)}
        aria-label= "Luk navigationmenu"
        >
            <img src={Union} alt="close icon" />
            <img src={BackIcon} alt="back icon" />
        </button>

        <nav className={style.navigation}>
            <NavLink to= "/home">Home</NavLink>
             <NavLink to=  "/search">Search</NavLink>
        

        {isLogin && (
            <NavLink to="/schedule/1">My Schedule</NavLink>
        )}
        {!isLogin ? (
            <>
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
        ) : (
            <button
            className={style.logoutButton}
            onClick={logout}
            >
                Log out
            </button>
        )}
        </nav>
    </div>
)}
</>

)
}

