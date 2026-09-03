import {useFetch} from "../../hooks/useFetch";
import { NavLink } from "react-router";
import style from "./Slider.module.scss";



const API_URL = "http://localhost:3000";

export function Slider() {
    const { data, error, loading } = useFetch(`${API_URL}/api/teams`);
    
    const sliderData = data?.filter((team) => team?.image?.url) || [];
    
   

    if (loading) return <p>Henter slider data...</p>;
    if (error) return <p>Der opstod en fejl ved hentning af slider data.</p>;
    if (!sliderData || Object.keys(data).length === 0) return <p>Ingen slider og team data kommer frem.</p>
  

    

 

    return (
            <section className={style.sliderContainer}>
                
                
                <div className={style.slider}>
                {sliderData.map((team) => {
                    const imageUrl = `${API_URL}${team.image.url}`;

                    return (
                        <article className={style.sliderCard}key={team.id}>
                            <NavLink to={`/class/${team.id}`}>
                        <img
                            src={imageUrl}
                            alt={team.name || "Team billede"}
                        />
                        </NavLink>
                        <h2>{team.name}</h2>
                        
                        <div className={style.infoBar}>
                        <div className={style.info} />
                        </div>
                        </article>
                    )
                })}
                </div>
                </section>

        
    )
}
