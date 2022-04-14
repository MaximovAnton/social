import Post from './Post/Post'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {maxLength, required} from '../../../utils/validators/validator'


const MyPosts = React.memo((props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount} />)

    let addPost = (values) => {
        props.addPostContainer(values.rer) 
    }

    return <div>
        MyPosts
        <div>
            New Posts
        </div>
        <AddNewPostRedux onSubmit={addPost}/>
        {postsElements}
    </div>
})

const maxLength15 = maxLength(15)

const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field  component='textarea' 
                    name='rer' 
                    placeholder='Enter your message' 
                    validate={[required, maxLength15]}/>

            <button> AddPost </button>
        </form>
    )
}

const AddNewPostRedux = reduxForm({ form: 'AddPostForm' })(AddNewPost)

export default MyPosts