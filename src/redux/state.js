import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 12 },
                { id: 2, message: "It's my first post.", likesCount: 11 },
            ],
            newPostText: ""
            
        },
        dialogsPage: {
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
            ],
            newMessageBody: "" 
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);        
    }
}
  
export default store;
window.store = store;