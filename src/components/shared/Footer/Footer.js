import React, { Component } from 'react';
import Link from "next/link";
import "./Footer.scss";

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
    render() {
        return (
            <footer className="footer">
                <div className="container text-center">
                    <div className="footer-container">
                        <div className="buttons">
                            <Link href="/sobre">
                                <a>
                                    <i className="material-icons">people</i>
                                    <span>Sobre o Sanarflix</span>
                                </a>
                            </Link>
                            <Link href="/fale-conosto">
                                <a>
                                    <i className="material-icons">drafts</i>
                                    <span>Fale conosco</span>
                                </a>
                            </Link>
                            <Link href="/perguntas-frequentes">
                                <a>
                                    <i className="material-icons">send</i>
                                    <span>Perguntas frequentes</span>
                                </a>
                            </Link>
                            <Link href="/blog">
                                <a>
                                    <i className="material-icons">format_align_left</i>
                                    <span>Blog</span>
                                </a>
                            </Link>
                        </div>

                        <div className="social">
                            <a href="https://www.instagram.com/sanarflix.med" target="_blank" title="Instagram">
                                <img src="/static/images/instagram.svg" alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com/sanarflix.med" target="_blank" title="Facebook">
                                <img src="/static/images/facebook.svg" alt="Facebook" />
                            </a>
                            <a href="https://www.youtube.com/channel/UC9nRs5w7Qk-kUZqlryrasjA" target="_blank" title="Youtube">
                                <img src="/static/images/youtube.svg" alt="Youtube" />
                            </a>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© SanarFlix 2018 - Todos os Direitos Reservados</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Menu;