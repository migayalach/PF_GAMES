import style from '../NotFound/NotFound.module.css';
import {NavLink} from 'react-router-dom';
import glitch from '../../assets/glitch-404.gif'

const NotFound = () => {
    return(
        <div className={style.container}>
                <img src={glitch}
                alt="not found"
                className={style.img}
                />
                <p className={style.text}>Oops! Page not found</p>
                <NavLink to='/'><button className={style.btn}>Back</button></NavLink>
        </div>
    )
}

export default NotFound;