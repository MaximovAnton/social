import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
    _state: {
        profilePage:{
            posts: [
                {id:1, message:'Hi how are you', likesCount: 3},
                {id:1, message:'i love you', likesCount: 3},
                {id:3, message:'i love you too', likesCount: 8}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name:'Vasya'},
                {id: 2, name:'Tanya'},
                {id: 3, name:'Dasha'}
            ],
            messages: [
                {id: 1, message:'YO YO'},
                {id: 2, message:'what are you doing'},
                {id: 3, message:'i am your best friend'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
            console.log('rerender')
    },
    getState(){
            return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action) 
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this.state)
    }
}

window.store = store

export default store