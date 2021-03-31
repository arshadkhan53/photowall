import React , {Component} from 'react';

class Comment extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const comment = event.target.elements.comment.value;
        this.props.startAddingComment(comment,this.props.pid);
        event.target.elements.comment.value = '';
    }

    render() {
        return <div>
            {
                this.props.comments.map((comment, index) => {
                    return <p className="comment-thread" key={index}>{comment}</p>
                 })
            }
        <form className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="comment" name="comment"/>
            <input type="submit" hidden/>
        </form></div>
    }
}

export default Comment;