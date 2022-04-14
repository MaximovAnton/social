import { addPostActionCreator} from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPostContainer: (newPosts) => {
            dispatch(addPostActionCreator(newPosts))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer