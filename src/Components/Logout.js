import React, {Component} from 'react';

class Logout extends Component {

    constructor() {
        super();
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(event) {
        event.preventDefault();
        this.props.makeLogout(false);
        this.props.history.push('/login');
    }

    render() {
        return <div>
                <form className="form" onSubmit={this.handleLogout}>
                    <button className="button" >Logout</button>
                </form>
        </div>
    }
}
export default Logout;