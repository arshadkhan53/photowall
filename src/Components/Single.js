import React, {Component} from 'react';
import Photo from './Photo';
import Comment from './Comment';

class Single extends Component {
    render() {
        const {match, posts} = this.props;
        const id = Number(match.params.id);
        const post = posts.find((post) => post.id === id);
        const comments = this.props.comments[id] || [];
        const index = posts.findIndex((post) => post.id === id);
        if(this.props.loading === true) {
            return <div>...Loading</div>
        }else if(post){
        return <div className="single-photo">
            <Photo post={post} {...this.props} index={index}/>
            <Comment startAddingComment = {this.props.startAddingComment} comments={comments} pid={id}/>
        </div>
        }else {
            return <h1>no post found!</h1>
        }

    }
}
export default Single;