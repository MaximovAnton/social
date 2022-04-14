import preloader from '../../../assets/images/preloader.svg'
import s from '../../Users/Users.module.css'

const Preloader = (props) => {
    return (
        <img src={preloader}  className={s.preloader} alt={'img'}/>
    )
}
export default Preloader