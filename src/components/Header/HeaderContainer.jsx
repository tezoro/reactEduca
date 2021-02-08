import { logout } from '../../redux/auth-reducer'
import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {
   render() {
      return (
         <Header {...this.props} />
      )
   }
}

let mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login
})

export default connect(mapStateToProps, { logout })(HeaderContainer)   