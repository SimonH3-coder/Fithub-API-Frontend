import {useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { Slider } from "../components/slider/Slider";
import { SearchClass } from "../components/searchclass/SearchClass";
import style from "../pages/Searchpage.module.scss";

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
        <div className={style.searchpagecontainer}>
        <SearchClass />

        <h1 className={style.searchtitle}>Popular classes</h1>
        <Slider />

        <section className={style.searchtrainer}>
            <h2 className={style.heading}>Popular trainers</h2>
    

      
        {Datasearch.length === 0 ? (
            <p>Ingen users fundet.</p>
        ) : (
            Datasearch.map((user) => (
                <article className={style.cardtrainer} key={user.id}>
                    
                    {user.image?.url && (
                        <img
                        className={style.picture}
                src={`${API_URL}${user.image.url}`}
                alt={user.name}
                />
             )}
             <div className={style.details}>
             <h2>{user.name}</h2>
                    <p>A highly experienced yoya instructor
                        specializing in fluid Flow Yoga, guiding 
                        student width grace and mindfulness
                    </p>
                    </div>
                   
                </article>
            ))
            )}
        
    </section>
    </div>
    )
}