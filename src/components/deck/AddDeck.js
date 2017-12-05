import React from 'react';
import {connect} from 'react-redux';


function AddDeckComponent({vcUnit, color, closeAlert}) {
    return (
        color !== 'NONE' &&
        <Alert text={`${vcUnit} received alarm`}
               onClose={closeAlert}
               style={{backgroundColor: color.toLowerCase()}}/>
    );
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDeckComponent);