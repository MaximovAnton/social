import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.posts}>
                <div className={s.item}>
                    <img src="https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-30.jpg" alt="ava" />
                    {props.message}
                    <div>
                        <span>Like</span>
                    </div>
                </div>
            </div>
}

export default Post