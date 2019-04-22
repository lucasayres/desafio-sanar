import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import SliderArrow from '../shared/SliderArrow/SliderArrow'
import "./Teachers.scss";

class Teachers extends Component {
    render() {
        var settings = {
            centerMode: true,
            prevArrow: <SliderArrow classNames="arrow arrow-left" to="keyboard_arrow_left" />,
            nextArrow: <SliderArrow classNames="arrow arrow-right" to="keyboard_arrow_right" />,
            infinite: true,
            speed: 600,
            slidesToShow: 7,
            slidesToScroll: 1,
            variableWidth: true,
            transformEnabled: true
        };
        const teachers = this.props.teachers;
        return (
            <div className="teachers text-center">
                <h4>Conheça nossos professores</h4>
                <div className="slider-teachers">
                    <Slider {...settings}>
                        {teachers.map(result => {
                            return (
                                <div className="teacher" key={result.id}>
                                    <div className="teacher-info">
                                        <img src={result.imagem} alt={result.nome} />
                                        <h5>{result.nome}</h5>
                                        <p>
                                            Cardiologista
                                            <br/>
                                            Formado pela USP
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <a href="#" className="btn btn-danger btn-lg btn-round-red">Assine agora</a>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      teachers: state.reducer.teachers,
  };
}

export default connect(mapStateToProps)(Teachers);