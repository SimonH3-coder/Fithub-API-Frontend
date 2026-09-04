import {useFetch} from "../hooks/useFetch";
import { useParams } from "react-router";
import { NavLink } from "react-router";
import style from  "../pages/Schulepage.module.scss";

const API_URL = "http://localhost:3000";


export function Schulepage() {
    const { id } = useParams();

    // Der hentes henter særlige team ud fra ID
    const { data, error, loading } = useFetch(`${API_URL}/api/teams/${id}`);

    if (loading) return <p>Henter schuledetaljer...</p>;
    if (error) return <p>Der kom en fejl ved hentning af schuledetajler.</p>;
    if (!data || Object.keys(data).length === 0) return <p>Ingen schuledetaljer kom frem.</p>
    
    
    return (
        <div className={style.schulecontainer}>
        <p><strong>Dag:</strong> {data.day}</p>
        <p><strong>Tid:</strong> {data.time}</p>
        <NavLink to="/class/:id">Flex Yoya Workout</NavLink>
        <p><strong>Dag:</strong> {data.day}</p>
        <p><strong>Tid:</strong> {data.time}</p>
        <NavLink to="/class/:id">Flex Yoya Workout</NavLink>
        <p><strong>Dag:</strong> {data.day}</p>
        <p><strong>Tid:</strong> {data.time}</p>
        <NavLink to="/class/:id">Flex Yoya Workout</NavLink>
       
      </div>
    )
}