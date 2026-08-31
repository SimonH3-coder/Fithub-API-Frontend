import cover2 from "../assets/cover2.jpg"
import cover1 from "../assets/cover1.jpg"
import {NavLink} from "react-router";
import style from "./Frontpage.module.scss"

export function Frontpage() {
    return (
        <>
        <main className={style.frontpage}>
        <section className={style.phone1}>
        <div className={style.girl1}>
<img src={cover2} alt="cover2" className={style.girlImage} />
<div className={style.traning}>
        <h1 className={style.title}>Believe <span>Yourself</span>
        </h1>
        <div className={style.subtitle}>
            <span className={style.words}/>
        <p>Train like a pro</p>
        </div>
        </div>
        </div>
        <div className={style.picture2}>
<img src={cover1} alt="cover1" className={style.pictureImage} />
<button className={style.startButton}><NavLink to="/home">Start Training</NavLink></button>
</div>
</section>
</main>

        
        </>
       
      

    )
}