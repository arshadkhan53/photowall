import React, {Component} from 'react'

class AddPhoto extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            'id': Number(new Date()),
            'description' : description,
            'imageLink' : imageLink
        }
    
        if (description && imageLink) {
               //this.props.addPhoto(post);
               this.props.startAddingPost(post);
               this.props.history.push('/');
                // since main component is wraped in browser route , and we are passing all props to children
               // history is directly available to props.
               // this.props.history.push('/'); debug why not working .
        }

    }
    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button className="button" >POST</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;