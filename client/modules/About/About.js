import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum tristique commodo. Etiam accumsan, lorem nec blandit efficitur, neque est tincidunt enim, et tincidunt dolor urna a justo.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
