import { NavLink } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import style from "./Cards.module.scss";

export function Cards( { name } ) {
    

    const { data, isLoading, error } = useFetch(
    import.meta.env.VITE_PUBLIC_BASE_URL + "/api/teams"
  );
// Finder det første hold ud fra name og benytter som fallback
  const matchedTeam = data?.find((item) => {
    if (!name) return false;
    return item?.name?.toLowerCase() === name?.toLowerCase();
  }) || data?.[0];
  // Billede hentes ud fra team
  const imageUrl = matchedTeam?.image?.url;

// Bygger den fulde URL til billedet
  const fullImageUrl = imageUrl ? import.meta.env.VITE_PUBLIC_BASE_URL + imageUrl : null;

  if (isLoading) return <p>Indlæser...</p>;
  if (error) return <p>Fejl ved hentning af data</p>;



        return (
            
            <div className={style.teamCard}>
                {fullImageUrl ? (
        <img src={fullImageUrl} alt={matchedTeam?.name || "Team image"} />
      ) : (
        <p>Intet billede tilgængeligt</p>
      )}
      <h2>{matchedTeam?.name || "Intet hold valgt"}</h2>
            </div>
        )
    }
    
        

