import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const Navigation = (props, context) => (
    <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/about">About</Link>/li>
        </ul>
    </div>
);

Navigation.PropTypes = {

};

export default Navigation;