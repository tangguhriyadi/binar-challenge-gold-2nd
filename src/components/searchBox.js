import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
/* import Select from "react-select"; */
/* import {categoryList, PriceList, StatusList} from '../utils/constant' */

const SearchBox = ({ carData }) => {
  
  /* const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#C9E7CA",
        primary: "#5CB85F",
      },
    };
  }; */
  /* const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      width: "208px",
      height: "32px",
      borderRadius: "2px",
    }),
    option: (styles) => {
      return { ...styles };
    },
    indicatorSeparator: (styles) => ({ ...styles, opacity: "0" }),
    menu: (styles) => ({ ...styles, width: "208px" }),
  }; */
  /* const colorStyles2 = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      width: "219px",
      height: "32px",
      borderRadius: "2px",
    }),
    option: (styles) => {
      return { ...styles };
    },
    indicatorSeparator: (styles) => ({ ...styles, opacity: "0" }),
    menu: (styles) => ({ ...styles, width: "219px" }),
  }; */
  return (
    <Container
      id="search"
      style={{ paddingLeft: "196px", paddingRight: "196px", marginTop: "-42px" }}
      fluid
    >
    <Row className="rowSearch">
      <Col className="p-0 d-flex justify-content-between" lg={11}>
      <div>asd</div> 
      <div>asd</div> 
      <div>asd</div> 
      </Col>
      <Col className="p-0" lg={1}>
asd
      </Col>

    </Row>
     
    </Container>
  );
};

export default SearchBox;
