import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeachers } from '../lib/api';
import Banner from "../components/AboutPage/Banner";
import Info from "../components/AboutPage/Info";
import Teachers from "../components/AboutPage/Teachers";
import { Container } from 'reactstrap';

class Sobre extends Component {
  componentDidMount() {
    this.props.getTeachers();
  }

  render() {
    return (
      <div>
        <Banner />
        <Container>
          <Info />
        </Container>
        <Teachers />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      teachers: state.reducer.teachers,
  };
}

const mapDispatchToProps = {
  getTeachers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sobre);