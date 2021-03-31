import React, {Component} from 'react';

class Login extends Component {

    constructor() {
        super();
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(event) {
        event.preventDefault();
        this.props.makeLogin(true);
        this.props.history.push('/');
    }

    render() {
        return <div>
                <form className="form" onSubmit={this.handleLogin}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button className="button" >Login</button>
                </form>
        </div>
    }
}
export default Login;