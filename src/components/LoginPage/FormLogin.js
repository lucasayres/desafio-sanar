import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { login } from "../../lib/auth";
import Router from 'next/router';
import "./FormLogin.scss";

class FormLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    submitForm(e) {
        e.preventDefault();
        if (login({email: this.state.email, password: this.state.password})) {
            Router.push('/');
        }
        else {
           this.toggle();
        }
    }

    render() {
        return (
            <Container className="container-login">
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <h2>Entrar no Sanarflix</h2><br />
                        <Form className="form-login" onSubmit={(e) => this.submitForm(e)}>
                            <Col>
                                <FormGroup>
                                    <Label>E-mail</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="E-mail (user@email.com)"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Senha</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Senha (123456)"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <Button type="submit" className="btn-round-login" block>Entrar</Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Erro</ModalHeader>
                    <ModalBody>
                        Usuário ou senha inválidos!
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Ok</Button>{' '}
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default FormLogin;