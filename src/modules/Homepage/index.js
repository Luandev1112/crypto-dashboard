import React, { Component } from "react";
import { connect } from "react-redux";

import { mapStateToProps } from './mappers';

class HomepageModule extends Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(HomepageModule);
