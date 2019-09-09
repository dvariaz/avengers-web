import React, { Component } from "react";
import { connect } from 'react-redux';
import { setCurrentSection } from '../../store/routing/actions.js';
import { withRouter } from 'react-router-dom';
// import styles from './Trailer.module.scss';

class TrailerPage extends Component {
    componentDidMount() {
        this.props.updateSection(this.props.location.pathname);
    }

    render(){
        return(
            <div className="Container">
                <h1>This is the trailer</h1>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateSection: section => dispatch(setCurrentSection(section))
});

export default withRouter(connect(null,mapDispatchToProps)(TrailerPage));