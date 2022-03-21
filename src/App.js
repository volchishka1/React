import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import {initializeApp} from '../src/redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';





class App extends Component {
    componentDidMount () {
        this.props.initializeApp()
      }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper' >
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content' >
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
                    <Route path='/dialogs' render={ () => <DialogsContainer /> } />
                    <Route path='/users' render={ () => <UsersContainer /> } />
                    <Route path='/news' render={ () => <News /> } />
                    <Route path='/music' render={ () => <Music /> } />
                    <Route path='/settings' render={ () => <Settings /> } />
                    <Route path='/login' render={ () => <Login /> } />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized : state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
