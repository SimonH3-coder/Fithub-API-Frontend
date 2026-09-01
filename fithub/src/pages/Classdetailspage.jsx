import {useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";



const API_URL = "http://localhost:3000";



export function Classdetailspage() {
    
    const { data, error, loading } = useFetch(`${API_URL}/api/teams/${id}`);
    const [Datadetails, setDatadetails] = useState([]);
    useEffect(() => {
        if (Array.isArray(data)) {
            setDatadetails(data);
            return;
        }
        if (data && Array.isArray(data.teams.id)) {
            setDatadetails(data.teams.id);
            return;
        }
        setDatadetails([]);
    }, [data]);

    if (loading) return <p>Henter teams id...</p>;
    if (error) return <p>Der kom en fejl ved hentning af teams id.</p>;
    
    console.log("Datadetails")
    return (
        
      <div>
        <h3>Schedule.</h3>
            {Datadetails.length === 0 ? (
                <p>Ingen teams fundet.</p>
                
              
                
            ) : (
                <div>
                {Datadetails.map((team) => (
                    <div key={team.id}>
                    <p>{team.day}</p>
                    <p>{team.time}</p>
                    </div>
                    ))}
        </div>
    )}
    </div>
    )
}