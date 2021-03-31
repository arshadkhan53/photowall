import React,{Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import '../style/stylesheet.css';
import AddPhoto from './AddPhoto';
import {Route, Link, withRouter} from 'react-router-dom';
import Single from './Single';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Logout from './Logout';

class Main extends Component {
  constructor() {
    super();
    // @todo: to implement login fe
    this.state = {loading: true}
   
  }
   
    componentDidMount() {
      
      this.props.startLoadingPosts().then(() => {
          this.setState({
            loading: false
          })
      })
      this.props.startLoadingComments();
    }
    render() {
      return(
        <div>
          
          <Link className="title" to='/'><Title title= {"Photowall"} /> </Link>
          
          {
            this.props.authenticate.isLoggedIn &&  <div className="gear">
            <Link title="settings" to='/logout'>&#9881;</Link>
           </div>
          }
          
            {/* <Route exact path='/' render={(params) => (
                 <div>
                 <Photowall  {...this.props} {...params}/> 
             </div>
            )} /> */}

        <PrivateRoute  path='/'  component= {Photowall} {...this.props}  /> 

         <PrivateRoute path='/add-photo' component= {AddPhoto} {...this.props}  /> 
         
         <Route path="/login" render={(params) => (
           <Login {...this.props} {...params}/>
         )} />

        <Route path="/logout" render={(params) => (
           <Logout {...this.props} {...params}/>
         )} />


        {/* <Route path='/add-photo' render={({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
            )
        } />      */}

        {/* <Route path='/single/:id' render={(params) => (
           <Single loading = {this.state.loading} {...this.props} {...params}/>
        )}/> */}


        <PrivateRoute path='/single/:id' loading = {this.state.loading} component= {Single} {...this.props}  /> 

        </div>
      )
    }
  }

// using withRouter to make history function available without actually passing it.
  export default withRouter(Main)