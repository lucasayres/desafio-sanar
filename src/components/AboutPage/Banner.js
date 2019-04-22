import React, { Component } from 'react';
import "./Banner.scss";

class Banner extends Component {
    render() {
        return (
            <section className="banner-about jumbotron jumbotron-fluid">
                <div className="banner-overlay"></div>
                <div className="container-fluid text-center">
                    <p>
                        Sobre o SanarFlix
                    </p>
                    <h1 className="display-5">Olá, Seja bem-vindo ao SanarFlix!</h1>
                </div>
            </section>
        );
    }
}

export default Banner;