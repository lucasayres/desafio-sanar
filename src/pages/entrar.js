import React, { Component } from 'react';
import { connect } from 'react-redux'
import FormLogin from "../components/LoginPage/FormLogin";

class Entrar extends Component {
    render() {
        return (
            <div>
                <FormLogin />
            </div>
        );
    }
}

export default connect(state => state)(Entrar)