import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "410px",
    slidesToShow: 1,
    slideToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1214,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerPadding: "320px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <Container
      id="testimonial"
      style={{ padding: "0", marginTop: "100px" }}
      fluid
    >
      <h2 className="font4 text-center" style={{ marginBottom: "16px" }}>
        Testimonial
      </h2>
      <h3 style={{ marginBottom: "40px" }} className="font2 text-center">
        Berbagai review positif dari para pelanggan kami
      </h3>
      <Slider ref={sliderRef} {...settings}>
        <div className="testimonialBox">
          <Row
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100%" }}
          >
            <Col md={3} className="d-flex justify-content-center">
              <img src="images/john.png" alt="rate" />
            </Col>
            <Col md={8} >
              <Row>
                <Col  className="slickStar" style={{ padding: "0", marginBottom: "8px" }}>
                  <img src="images/Rate.png" alt="rate" loading="lazy" />
                </Col>
              </Row>
              <Row className="slickP">
                <Col 
                  className="font2"
                  style={{
                    maxWidth: "415px",
                    padding: "0",
                    marginBottom: "8px",
                  }}
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "0" }} className="font3 slickN">
                  John Dee 32, Bromo
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="testimonialBox">
          <Row
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100%" }}
          >
            <Col md={3} className="d-flex justify-content-center">
              <img src="images/dee.png" alt="rate" />
            </Col>
            <Col md={8}>
              <Row>
                <Col className="slickStar" style={{ padding: "0", marginBottom: "8px" }}>
                  <img src="images/Rate.png" alt="rate" loading="lazy" />
                </Col>
              </Row>
              <Row className='slickP'>
                <Col
                  className="font2 "
                  style={{
                    maxWidth: "415px",
                    padding: "0",
                    marginBottom: "8px",
                  }}
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "0" }} className="font3 slickN">
                  John Dee 32, Bromo
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="testimonialBox">
          <Row
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100%" }}
          >
            <Col md={3} className="d-flex justify-content-center">
              <img src="images/john.png" alt="rate" />
            </Col>
            <Col md={8}>
              <Row>
                <Col className="slickStar" style={{ padding: "0", marginBottom: "8px" }}>
                  <img src="images/Rate.png" alt="rate" loading="lazy" />
                </Col>
              </Row>
              <Row className="slickP">
                <Col
                  className="font2 "
                  style={{
                    maxWidth: "415px",
                    padding: "0",
                    marginBottom: "8px",
                  }}
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "0" }} className="font3 slickN">
                  John Dee 32, Bromo
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="testimonialBox">
          <Row
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100%" }}
          >
            <Col md={3} className="d-flex justify-content-center">
              <img src="images/dee.png" alt="rate" />
            </Col>
            <Col md={8}>
              <Row>
                <Col className="slickStar" style={{ padding: "0", marginBottom: "8px" }}>
                  <img src="images/Rate.png" alt="rate" loading="lazy" />
                </Col>
              </Row>
              <Row className="slickP">
                <Col
                  className="font2"
                  style={{
                    maxWidth: "415px",
                    padding: "0",
                    marginBottom: "8px",
                  }}
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "0" }} className="font3 slickN">
                  John Dee 32, Bromo
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Slider>
      <div className="text-center arrows">
        <img
          src="images/Leftbuttonwhite.png"
          alt="left"
          style={{ cursor: "pointer", marginRight: "12px" }}
          onClick={() => sliderRef.current.slickPrev()}
        ></img>

        <img
          src="images/Rightbuttongreen.png"
          alt="right"
          style={{ cursor: "pointer", marginLeft: "12px" }}
          onClick={() => sliderRef.current.slickNext()}
        ></img>
      </div>
    </Container>
  );
};

export default Testimonial;
