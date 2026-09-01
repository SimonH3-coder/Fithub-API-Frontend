import {useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:3000";

export function Searchpage() {
    const { data, error, loading } = useFetch(`${API_URL}/api/users`);
    const [Datasearch, setDatasearch] = useState([]);

    useEffect(() => {
        if (Array.isArray(data)) {
            setDatasearch(data);
            return;
        }
        if (data && Array.isArray(data.users)) {
            setDatasearch(data.users);
            return;
        }
        setDatasearch([]);
    }, [data]);

    if (loading) return <p>Henter users...</p>;
    if (error) return <p>Der opstod en fejl ved hentning af users.</p>;
    console.log("Datasearch", Datasearch);
    
    return (
        <div>
        <h1>Search</h1>
        {Datasearch.length === 0 ? (
            <p>Ingen users fundet.</p>
        ) : (
            Datasearch.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>A highly experienced yoya instructor
                        specializing in fluid Flow Yoga, guiding 
                        student width grace and mindfulness
                    </p>
                    {user.image?.url && (
                        <img
                src={`${API_URL}${user.image.url}`}
                alt={user.name}
                style={{ maxWidth: "300px", height: "auto" }}
              />
            )}
        </div>
        ))

        )}
    </div>
    )
}