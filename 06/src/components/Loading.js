import React, { Component } from "react";
import PropTypes from 'prop-types';

class Loading extends Component {
    
    render() {
        return (<div className="loader" ref={el => this.$loading = el} >{this.props.message}</div>);
    }
}

Loading.propTypes = {
    message: PropTypes.string.isRequired
};

export default Loading;