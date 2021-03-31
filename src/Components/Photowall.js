import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Photowall(props) {
    return(
    <div>
        <Link className="addIcon" to="/add-photo">  </Link>
        <div className="photoGrid">
            {props.posts
            .sort(function(x,y) {
                // If you want to sord in decending order of a props, here its id prop.
                return y.id - x.id
            })
            .map((post, index) => <Photo key={post.id} post={post} {...props} index={index}/> )
            }
        </div>
    </div>
    )
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default Photowall;

