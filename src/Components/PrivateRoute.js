import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
        const Component = this.props.component;
        return (
            <Route exact path={this.props.path}  render={(params) => (
                 this.props.authenticate.isLoggedIn ? <Component {...this.props} {...params}/> :  <Redirect to="/login"/>
            )}/>
             
        )
    }
}
export default PrivateRoute;