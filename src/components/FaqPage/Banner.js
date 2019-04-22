import React, { Component } from 'react';
import "./Banner.scss";

class Banner extends Component {
    render() {
        return (
            <section className="banner-question jumbotron jumbotron-fluid">
                <div className="banner-overlay"></div>
                <div className="container-fluid text-center">
                    <p>
                        Perguntas frequentes
                    </p>
                    <h1 className="display-5">Olá, Seja bem-vindo ao SanarFlix!</h1>
                </div>
            </section>
        );
    }
}

export default Banner;