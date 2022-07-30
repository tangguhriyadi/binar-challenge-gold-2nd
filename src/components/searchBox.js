import React, {useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import Select from "react-select";
import { categoryList, PriceList, StatusList } from "../utils/constant";

const SearchBox = ({ carData }) => {
  const [show, setShow] = useState(false)
  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#C9E7CA",
        primary: "#5CB85F",
      },
    };
  };
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      minWidth: "208px",
      /* height: "32px", */
      borderRadius: "2px",
      cursor: "pointer",
    }),
    option: (styles) => {
      return { ...styles, cursor: "pointer" };
    },
    indicatorSeparator: (styles) => ({ ...styles, opacity: "0" }),
    menu: (styles) => ({ ...styles, minWidth: "208px" }),
  };
  const colorStyles2 = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      minWidth: "219px",
      /* height: "32px", */
      borderRadius: "2px",
      cursor: "pointer",
    }),
    option: (styles) => {
      return { ...styles, cursor: "pointer" };
    },
    indicatorSeparator: (styles) => ({ ...styles, opacity: "0" }),
    menu: (styles) => ({ ...styles, minWidth: "219px" }),
  };
  const onHighlight = () => {
    setShow(true)
  }
  const offHighlight = () => {
    setShow(false)
  }
  return (
    <Container
      id="search"
      
      style={{
        paddingLeft: "196px",
        paddingRight: "196px",
        marginTop: "-42px",
      }}
      fluid
    >
      <Form id={show ? "highlight" : null} onFocus={onHighlight} onBlur={offHighlight} className="d-flex justify-content-between rowSearch">
        <div>
          <Form.Label style={{marginBottom:'4px'}} className="font7">Nama Mobil</Form.Label>
          <Form.Control
            className="selectBox font7"
            type="text"
            placeholder="Ketik nama/tipe mobil"
          />
        </div>
        <div>
          <Form.Label style={{marginBottom:'4px'}} className="font7">Kategori</Form.Label>
          <Select
            options={categoryList}
            styles={colorStyles}
            className="font7"
            placeholder="Masukan Kapasitas Mobil"
            theme={customTheme}
          />
        </div>
        <div>
          <Form.Label style={{marginBottom:'4px'}} className="font7">Harga</Form.Label>
          <Select
            options={PriceList}
            styles={colorStyles2}
            className="font7"
            placeholder="Masukan Harga Sewa Per Hari"
            theme={customTheme}
          />
        </div>
        <div>
          <Form.Label style={{marginBottom:'4px'}} className="font7">Status</Form.Label>
          <Select
            options={StatusList}
            styles={colorStyles}
            className="font7"
            placeholder="Disewa"
            theme={customTheme}
          />
        </div>
        <div className="d-flex flex-column-reverse">
        <Button className="searchButton font2" type="submit" variant="none">
          Cari Mobil
        </Button>
        </div>
        
      </Form>
    </Container>
  );
};

export default SearchBox;
