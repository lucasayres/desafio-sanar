import React, { Component } from 'react';
import { Button, Collapse, Form, Input, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { isLoggedIn, logout } from "../../../lib/auth";
import Link from "next/link";
import "./Menu.scss";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    checkLogged() {
        if (isLoggedIn()) {
            return true;
        }
        return false;
    }
    render() {
        const logged = this.checkLogged();
        return (
            <header>
                <Navbar className="navbar navbar-dark navbar-bg fixed-top" color="light" light expand="md">
                    <NavbarBrand>
                        <Link href="/">
                            <img className="nav-logo" src="/static/images/logo.png" alt="Sanarflix" />
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mr-2" />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link href="/">
                                    <a className='nav-link'>Início</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/sobre">
                                    <a className='nav-link'>Sobre o Sanarflix</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/perguntas-frequentes">
                                    <a className='nav-link'>Perguntas frequentes</a>
                                </Link>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="searchItem">
                                <Form inline className="search">
                                    <div className="input-group">
                                        <Input type="text" name="search" id="search" className="form-control" autoComplete="off" placeholder="Busque seu curso" />
                                        <div className="input-group-append">
                                            <Button><i className="material-icons">search</i></Button>
                                        </div>
                                    </div>
                                </Form>
                            </NavItem>
                            <NavItem className={logged ? 'hidden' : ''}>
                                <Link href="/entrar">
                                    <a className='nav-link'>Entrar</a>
                                </Link>
                            </NavItem>
                            <NavItem className={logged ? 'assine hidden' : 'assine'}>
                                <Link href="/assine">
                                    <a className="nav-link btn btn-danger btn-round">Assine</a>
                                </Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar className={logged ? '' : 'hidden'}>
                                <DropdownToggle nav caret className="profile">
                                    <img src="/static/images/user.png" alt="user"></img>
                                    <span>Olá Lucas</span>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem className="sair" onClick={logout}>
                                        Sair
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar className={logged ? '' : 'hidden'}>
                                <DropdownToggle nav>
                                    <i className="material-icons">notifications</i>
                                </DropdownToggle>
                                <DropdownMenu right className="notification">
                                    <DropdownItem>
                                        Olá, foi adicionado um novo módulo do curso de <b>Raciocínio Clínico</b>!
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}

export default Menu;