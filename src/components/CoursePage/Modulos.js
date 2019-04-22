import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Alert, Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import "./Modulos.scss";

class Modulos extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: 0 };
    }
    toggle(e) {
        let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }
    render() {
        const { collapse } = this.state;
        const modules = this.props.modules;
        return (
            <section className="modulos-container">
                <Container>
                    <Row>
                        <Col md={{ size: 12 }}>
                            <div className="learn">
                                <Col md={{ size: 6 }}>
                                    <h4>O que você vai aprender</h4>
                                    <div className="alerts">
                                        <Alert color="success">
                                            Aprenderá a criar projetos web para desktop e mobile. Desde técnicas de Front End até Back End. São 13 cursos do ABSOLUTO zero ao profissional.
                                        </Alert>
                                        <Alert color="success">
                                            Conquiste a liberdade financeira trabalhando de casa.
                                        </Alert>
                                        <Alert color="success">
                                            Crie projetos web profissionais com as linguagens nas suas últimas versões. HTML5, CSS3, Javascript, ECMAScript 6, Bootstrap, PHP, PHP com AJAX e muito mais.
                                        </Alert>
                                        <Alert color="success">
                                            Estudo nos dias e horários que você quiser.
                                        </Alert>
                                    </div>

                                    <h4>Conteúdo do curso</h4>
                                    <div className="conteudo">
                                        {modules.map(result => {
                                            return (
                                                <Card style={{ marginBottom: '1rem' }} key={result.id}>
                                                    <CardHeader onClick={this.toggle} data-event={result.id}>
                                                        {result.nome}
                                                        <small style={{ float: 'right' }}>
                                                            <i className="material-icons">keyboard_arrow_down</i>
                                                        </small>
                                                    </CardHeader>
                                                    <Collapse isOpen={collapse === result.id}>
                                                        <CardBody>
                                                            {result.conteudos.map(function (item) {
                                                                return (
                                                                    <p className="item-conteudo" key={item.id}>
                                                                        {item.titulo}
                                                                    </p>
                                                                );
                                                            })}
                                                        </CardBody>
                                                    </Collapse>
                                                </Card>
                                            )
                                        })}
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        modules: state.reducer.modules,
    };
}

export default connect(mapStateToProps)(Modulos);