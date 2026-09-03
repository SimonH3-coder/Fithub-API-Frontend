import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router";


import style from "./SearchClass.module.scss";

const API_URL = "http://localhost:3000";

export function SearchClass() {
    

    const { data, error, loading } = useFetch(`${API_URL}/api/teams`);
    const [Textsearch, setTextsearch] = useState("");

    const searchData = data?.filter((data) => 
    data?.name && Textsearch && data?.name.toLowerCase().includes(Textsearch.toLowerCase()) ||
    data?.day &&  Textsearch && data?.day.toLowerCase().includes(Textsearch.toLowerCase()) ||
    data?.time && Textsearch && data?.time.toLowerCase().includes(Textsearch.toLowerCase()) ||
    data?.description && Textsearch && data?.description.toLowerCase().includes(Textsearch.toLowerCase()) ||
    data?.user?.name && Textsearch && data?.user?.name.toLowerCase().includes(Textsearch.toLowerCase())) || [];

    if (loading) return <p>Henter search data...</p>;
    if (error) return <p>Der kom en fejl ved hentning af search data.</p>;

    return (
        <section className={style.searchContainer}>
        <h1>Enter keyword and press enter</h1>
        
        <form onSubmit ={(e) => e.preventDefault()}>
            <label className={style.boxSearch}>

                <span></span>
            <input 
            type="search"
            placeholder="Search classes"
            value={Textsearch}
            onChange={(e) => setTextsearch(e.target.value)}
            />
            </label>
        </form>
        <div className={style.writes}>

            {Textsearch && searchData.length === 0 ? (
            <p> ”Your search did
not give any results. Try to search for something else.”
</p>
            ) : (
                searchData.map((data) => (
                    <article className={style.write} key={data.id}>
                        <NavLink to={`/class/${data.id}`}>
                    
                        <h2>{data.name}</h2>
                        </NavLink>
                        
                        <p>Indstruktør: {data.user?.name}</p>
                        <p><strong>Dag:</strong> {data.day}</p>
                        <p><strong>Tid:</strong> {data.time}</p>
                        <p>{data.description}</p>

                    </article>
                ))
            )}
        </div>



        </section>
    )
}