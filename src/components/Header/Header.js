import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../images/Logo.jpg'
class HeaderTop extends Component {
    render() {
        return (
            <div className="HeaderTop">
                <Container>
                    <Row>
                        <Col xs="3">
                            <img className="img-logo" src={logo} alt="IMG" />
                        </Col>
                        <Col className="navbox" xs="9">
                            <Row className="navrow">
                                <Col id="phim" className="navitem" >
                                    <a href="/Phim">PHIM</a>
                                </Col>
                                <Col id="lichchieu" className="navitem" >
                                    <a href="/Lichchieu">LỊCH CHIẾU</a>
                                </Col>
                                <Col id="rapvagia" className="navitem" >
                                    <a href="/RapvaGia">RẠP VÀ GIÁ</a>
                                </Col>
                                <Col id="tintuc" className="navitem" >
                                    <a href="/Tintuc">TIN TỨC</a>
                                </Col>
                                <Col id="gioithieu" className="navitem" >
                                    <a href="/Gioithieu">GIỚI THIỆU</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HeaderTop;