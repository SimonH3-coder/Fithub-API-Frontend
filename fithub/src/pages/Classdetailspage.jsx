import {useFetch } from "../hooks/useFetch";

import { useParams } from "react-router";
import { NavLink } from "react-router";

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
    <div className="class-details-container">
      {/* 3. Billedvisning */}
      {fullImageUrl ? (
        <img
          src={fullImageUrl}
          alt={data.name || "Hold billede"}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
      ) : (
        <p>Intet billede tilgængeligt</p>
      )}
      <button><NavLink to="/schedule">Sign Up</NavLink></button>

      {/* Holdets detaljer */}
      <h2>{data.name}</h2>
      <p>{data.description}</p>

      <div className="info">
        <p><strong>Dag:</strong> {data.day}</p>
        <p><strong>Tid:</strong> {data.time}</p>
        {data.maxParticipants && (
          <p><strong>Maks deltagere:</strong> {data.maxParticipants}</p>
        )}
      </div>

      {/* Træner information */}
      {data.user?.name && (
        <p><strong>Træner:</strong> {data.user.name}</p>
      )}
    </div>
  );
}


