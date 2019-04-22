import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getModules } from '../lib/api';
import Banner from "../components/CoursePage/Banner";
import Modulos from "../components/CoursePage/Modulos";

class Curso extends Component {
    componentDidMount() {
        this.props.getModules();
    }

    render() {
        return (
            <div>
                <Banner />
                <Modulos />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modules: state.reducer.modules,
    };
}

const mapDispatchToProps = {
    getModules,
};

export default connect(mapStateToProps, mapDispatchToProps)(Curso);