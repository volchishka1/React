const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra' },
        { id: 3, message: 'Your' },
        { id: 4, message: 'Yo' },
    ],
    dialogs: [
        { id: 1, name: 'Roma' },
        { id: 2, name: 'Maryia' },
        { id: 3, name: 'Andrey' },
        { id: 4, name: 'Katya' },
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state, 
                newMessageBody: action.body
            };
        case SEND_MESSAGE: 
            return {
                ...state, 
                messages: [...state.messages, { id: 5, message: action.newMessageBody }], 
            };     
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;