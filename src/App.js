import './App.css';
import Navbar from './Components/Navbar/Navbar'
import UsersContainer from './Components/Users/UsersContainer';
import { Route } from 'react-router-dom'
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/login';
import NewPage from './Components/NewPage/NewPage';
import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { initializeApp } from './Redux/app-reducer'
import Preloader from './Components/Common/Preloader/Preloader'
import { withSuspense } from './Hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="App-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route exact path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
          <Route exact path="/users" render={() => <UsersContainer />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/NewPage" render={() => <NewPage />} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  isFetching: state.usersPage.isFetching
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
