import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCourses } from '../lib/api';
import Banner from "../components/HomePage/Banner";
import Courses from "../components/HomePage/Courses";

class Index extends Component {
    componentDidMount() {
        this.props.getCourses();
    }

    render() {
        return (
            <div>
                <Banner />
                <Courses />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        courses: state.reducer.courses,
    };
}

const mapDispatchToProps = {
    getCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);