import {NavLink} from "react-router";

export function Cards( {
    id, name, image }) {

        function getClass(teamArray) {
            const  teamClass = teamArray.filter((item) =>
                item.name.image.includes("Team"),
        )
        if (teamCard.length > 0) return teamClass
        return teamArray[0]
        }
        const team = getClass({id, name, image})

        return (
            <NavLink to={`/class/${id}`}>
            <div className={style.teamCard}>
            <figure>
                <img src={team [0]?.image.filename}></img>
            </figure>
            <section>
                <p>{team.id}</p>
                <p>{team[0]?.name}</p>
            </section>
            </div>
            </NavLink>
        )
    }
        

