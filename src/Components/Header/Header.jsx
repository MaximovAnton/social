import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://cdn1.iconfinder.com/data/icons/people-in-the-park-having-fun-1/66/23-512.png" alt={'logo'} className={s.logo} />

        <div className={s.loginBlock}>
            {props.isAuth ?
                <div>
                    <div>
                        <span>{props.login}</span>
                    </div>
                    <button onClick={props.logout}>Log Out</button>
                </div>
                : <NavLink to={'/login'}>login</NavLink>}
        </div>

    </header>
}

export default Header