import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from "next/link";
import "./Courses.scss";

class Courses extends Component {

    createCarousel = (courses) => {
        let carousel = []

        for (let i = 0; i < courses.length; i++) {
            carousel.push(
                <Link href="/curso" key={courses[i].id}>
                    <div className="tile">
                        <div className="tile__media">
                            <img className="tile__img" src="/static/images/4671538161298.medium.jpg" alt={courses[i].nome} />
                        </div>
                        <div className="tile__details">
                            <div className="tile__title">
                                {courses[i].nome}
                            </div>
                        </div>
                    </div>
                </Link>
            )
        }

        return carousel;
    }

    render() {
        const courses = this.props.courses;
        return (
            <div id="courses" className="courses">
                <h2>Novidades</h2>
                <div className="row">
                    <div className="row__inner">
                        {this.createCarousel(courses)}
                    </div>
                </div>

                <h2>Tudo sobre diabetes</h2>
                <div className="row">
                    <div className="row__inner">
                        {this.createCarousel(courses)}
                    </div>
                </div>

                <h2>Mais acessados</h2>
                <div className="row">
                    <div className="row__inner">
                        {this.createCarousel(courses)}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        courses: state.reducer.courses,
    };
}

export default connect(mapStateToProps)(Courses);