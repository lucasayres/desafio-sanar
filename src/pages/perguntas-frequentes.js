import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../components/FaqPage/Banner';
import Faq from '../components/FaqPage/Faq';
import { Container } from 'reactstrap';

class Questions extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Container>
          <Faq />
        </Container>
      </div>
    );
  }
}

export default connect(state => state)(Questions)