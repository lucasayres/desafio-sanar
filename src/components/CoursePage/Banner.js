import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./Banner.scss";

class Banner extends Component {
    render() {
        return (
            <section className="banner-course jumbotron jumbotron-fluid">
                <div className="banner-overlay"></div>
                <Container>
                    <Row>
                        <Col md={{ size: 7 }}> 
                            <div className="container-fluid text-left">
                                <p className="intro">Sobre o curso</p>
                                <h1 className="display-4">Emergências Médicas Sanar</h1>
                                <p className="pb-5">
                                    Por estar dentro da rotina de boa parte dos recém-formados, as emergências médicas são um dos temas mais procurados pelos estudantes medicina. Prepare-se também!
                                </p>
                                <div className="icons-course">
                                    <div className="icon-c">
                                        <i className="material-icons">video_library</i>
                                        <p>Vídeos</p>
                                        <p>60</p>
                                    </div>
                                    <div className="icon-c">
                                        <i className="material-icons">picture_as_pdf</i>
                                        <p>Leitura</p>
                                        <p>32</p>
                                    </div>
                                    <div className="icon-c">
                                        <i className="material-icons">cloud_download</i>
                                        <p>Documentos</p>
                                        <p>0</p>
                                    </div>
                                    <div className="icon-c">
                                        <i className="material-icons">assignment_turned_in</i>
                                        <p>Questões</p>
                                        <p>0</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={{ size: 5 }}>
                            <div className="background-video">
                                <div className="video-container">
                                    <iframe src="https://www.youtube-nocookie.com/embed/AJ0P2joRyEk?rel=0" frameBorder="0" allowFullScreen></iframe>
                                </div>
                                <div className="info-video text-center">
                                    <p className="price">R$ 24,90 / mês</p>
                                    <div className="cancel-container">
                                        <p className="cancel">
                                            <i className="material-icons">done</i>
                                            <span>Cancele quando quiser!</span>
                                        </p>
                                    </div>
                                    <p className="assine">
                                        <a href="#" className="btn btn-round-red">Assine agora</a>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Banner;