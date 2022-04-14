const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name:'Vasya'},
        {id: 2, name:'Tanya'},
        {id: 3, name:'Dasha'}
    ],
    messages: [
        {id: 1, message:'YO YO'},
        {id: 2, message:'what are you doing'},
        {id: 3, message:'i am your best friend'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE: 
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id:4, message: body}]
            }
        default: 
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer