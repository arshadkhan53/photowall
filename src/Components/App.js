// this file contain connecting component to store or state
// also contain action bind by which we directly access action without dispatch function i.e shortcut
import {connect} from 'react-redux';
import Main from './Main'
import * as actions from '../redux/actions';
import {bindActionCreators} from 'redux';
const mapStateToProps = function (state) {
    // we should avoid assignig entire state,or we should call it entire state.
    return {
        posts: state.posts,
        comments : state.comments,
        authenticate : state.authenticate
    }
}

function mapDispatchToProps(dispatch) {
    // it binds all action with dispatch so that we can directly make call to action. 
    // instead of this.props.dispatch(action()) we can say this.props.action();
    return bindActionCreators(actions,dispatch);
}
// we dont need withRoute frunction because its been fixed in latest version of react route.
export default connect(mapStateToProps, mapDispatchToProps)(Main)