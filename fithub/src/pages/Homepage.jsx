import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { Cards } from "../components/cards/Cards";
import { Slider } from "../components/slider/Slider"


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
      <Cards />
      <Slider />
    </div>
  );
}