import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:3000";

export function Homepage() {
  const { data, error, loading } = useFetch(`${API_URL}/api/teams`);
  const [Datateams, setDatateams] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setDatateams(data);
      return;
    }

    if (data && Array.isArray(data.teams)) {
      setDatateams(data.teams);
      return;
    }

    setDatateams([]);
  }, [data]);

  if (loading) return <p>Henter teams...</p>;
  if (error) return <p>Der opstod en fejl ved hentning af teams.</p>;

  console.log("Datateams")

  return (
    <div>
      {Datateams.length === 0 ? (
        <p>Ingen teams fundet.</p>
      ) : (
        Datateams.map((team) => (
          <div key={team.id}>
            <h2>{team.name}</h2>

            {team.image?.url && (
              <img
                src={`${API_URL}${team.image.url}`}
                alt={team.name}
                style={{ maxWidth: "300px", height: "auto" }}
              />
            )}

            <p><p> placeholder placeholder  placeholder placeholder placeholder placeholder </p> </p>
          </div>
        ))
      )}
    </div>
  );
}