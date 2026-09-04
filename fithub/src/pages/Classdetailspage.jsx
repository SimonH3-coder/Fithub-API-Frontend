import {useFetch } from "../hooks/useFetch";
import { useParams } from "react-router";
import { NavLink } from "react-router";
import style from "../pages/Classdetailspage.module.scss";

const API_URL = "http://localhost:3000";

export function Classdetailspage() {
  const { id } = useParams();

  // 1. Henter det specifikke team ud fra ID
  const { data, error, loading } = useFetch(`${API_URL}/api/teams/${id}`);

  if (loading) return <p>Henter holddetaljer...</p>;
  if (error) return <p>Der kom en fejl ved hentning af holdet.</p>;
  if (!data || Object.keys(data).length === 0) return <p>Ingen hold kom frem.</p>;

  // 2. Hent billedstien (tjekker både data.image og data.user.image for sikkerheds skyld)
  const imagePath = data.image?.url || data.user?.image?.url;
  const fullImageUrl = imagePath ? `${API_URL}${imagePath}` : null;

  return (
    
  <main className={style.classdetailscontainer}>
    <section className={style.img3}>
       {/* 3. Billedvisning */}
      {fullImageUrl && (
        <img
          src={fullImageUrl}
          alt={data.name || "Hold billede"}
        />
      )}

      <div className={style.imgshow}>
        <h1>{data.name}</h1>

        <button className={style.button}>
          <NavLink to={`/schedule/${id}`}>Sign up</NavLink>
        </button>
      </div>
    </section>

    <section className={style.info}>
      <h2>Schedule</h2>

      <div className={style.time}>
        <strong>{data.day}</strong>
        <strong>{data.time}</strong>
      </div>

      <p>{data.description}</p>

      <h2>Trainer</h2>

      <div className={style.trainer}>
        {fullImageUrl && (
          <img src={fullImageUrl} alt={data.user?.name || "Træner"} />
        )}

        <div>
          <h3>{data.user?.name}</h3>
          <p>{data.user?.description}</p>
          <p> A highly experienced yoya instructor specializing
            in fluid Flow Yoga, guiding students with grace and mindfulness.
          </p>
        </div>
      </div>
    </section>
  </main>
);
}



 



