import { Outlet } from "react-router"
import { Navigation } from "../components/Navigation/Navigation"

export function Mainlayout() {
    return (
        <>
        < Navigation />
        <Outlet />
        </>
    )
}