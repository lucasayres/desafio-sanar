import React, { Component } from 'react';
import "./Info.scss";

class Info extends Component {
    render() {
        return (
            <div className="row info">
                <div className="info-col col-md-8 offset-md-2">
                    <div className="video-container">
                        <iframe src="https://www.youtube-nocookie.com/embed/AJ0P2joRyEk?rel=0" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <p className="info-p">
                        Olá, tudo bom? Se você está por aqui, deve estar se perguntando o que é o SanarFlix e como podemos te ajudar. Então vamos começar a responder pelo final. O SanarFlix foi concebido, pois nós sabemos as dificuldades envolvidas na sua rotina de estudante de medicina.<br /><br />
                        Em resumo, muito é fruto de um extenso volume de assuntos que lhe é apresentado em um curto espaço de tempo. Quando esse fato é associado à pressão por resultados imediatos das avaliações e da incerteza de uma adequada preparação para lidar com vidas no futuro, gera insegurança e prejuízos pessoais. Por isso, o SanarFlix será seu maior aliado. Nós somos a maior plataforma de educação médica no Brasil e tudo foi pensado para te acompanhar e te auxiliar durante toda a sua faculdade de medicina.<br /><br />
                        Como? Simplesmente lhe disponibilizando:
                    </p>
                    <div className="beneficios">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/static/images/beneficios/01.png" alt="" />
                            </div>
                            <div className="col-md-4">
                                <img src="/static/images/beneficios/02.png" alt="" />
                            </div>
                            <div className="col-md-4">
                                <img src="/static/images/beneficios/03.png" alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/static/images/beneficios/04.png" alt="" />
                            </div>
                            <div className="col-md-4">
                                <img src="/static/images/beneficios/05.png" alt="" />
                            </div>
                            <div className="col-md-4">
                                <img src="/static/images/beneficios/06.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <p className="info-p">
                        Toda semana novas aulas e novos materiais são acrescentados à plataforma. Confira todo conteúdo disponível clicando em <b>Todos os Cursos</b> ou em <b>O que já está disponível?</b>. Experimente o SanarFlix e descubra o que é ter uma rotina de estudos otimizada!
                    </p>
                </div>
            </div>
        );
    }
}

export default Info;