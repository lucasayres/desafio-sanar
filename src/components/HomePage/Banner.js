import React, { Component } from 'react';
import "./Banner.scss";

class Banner extends Component {
    render() {
        return (
            <section className="banner jumbotron jumbotron-fluid">
                <div className="banner-overlay"></div>
                <div className="container-fluid text-center">
                    <h1 className="display-4 animated fadeInLeft">Todos os caminhos levam ao Sanarflix</h1>
                    <p className="pb-5 animated fadeInLeft">
                        Aprenda com professores referência na área da medicina.<br/>
                        Acelere seu aprendizado tendo acesso a plataforma em qualquer lugar, em diversos dispositivos.<br/>
                        Aprenda o que é importante para a realização dos seus objetivos.
                    </p>
                    <p><a href="#" className="btn btn-danger btn-lg btn-round-red animated bounceInDown">Assine agora</a></p>
                    <p><a href="#courses" className="btn btn-outline-light btn-round-outline animated bounceInDown">Conheça nossos cursos</a></p>
                </div>
            </section>
        );
    }
}

export default Banner;