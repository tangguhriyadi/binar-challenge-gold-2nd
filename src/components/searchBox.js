import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Select from "react-select";

const SearchBox = ({ carData }) => {
  const categoryList = [
    {
      value: "2 - 4 orang",
      label: "2 - 4 orang",
    },
    {
      value: "4 - 6 orang",
      label: "4 - 6 orang",
    },
    {
      value: "6 - 8 orang",
      label: "6 - 8 orang",
    },
  ];
  const PriceList = [
    {
      value: "<400000",
      label: "<Rp.400.000",
    },
    {
      value: "400000-600000",
      label: "Rp.400.000 - Rp.600.000",
    },
    {
      value: ">600000",
      label: ">Rp.600.000",
    },
  ];
  const StatusList = [
    {
      value: null,
      label: "Disewa",
    },
  ];
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
      width: "208px",
      height: "32px",
      borderRadius: "2px",
    }),
    option: (styles) => {
      return { ...styles };
    },
    indicatorSeparator: (styles) => ({ ...styles, opacity: "0" }),
    menu: (styles) => ({ ...styles, width: "208px" }),
  };
  const colorStyles2 = {
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
  };
  return (
    <Container
      
      style={{ paddingLeft: "136px", paddingRight: "136px", marginTop: "-42px" }}
      fluid
    >
      <Form className="searchContainer">
        <div>
          <Form.Label className="font6">Nama Mobil</Form.Label>
          <Form.Control
            className="font6 selectBox"
            type="text"
            placeholder="Ketik nama/tipe mobil"
          />
        </div>
        <div>
          <Form.Label className="font6">Kategori</Form.Label>
          <Select
            styles={colorStyles}
            className="font7"
            theme={customTheme}
            options={categoryList}
            /* onChange={handleCategory} */
            placeholder="Masukan Kapasistas"
            isSearchable
          />
        </div>
        <div>
          <Form.Label className="font6">Harga</Form.Label>
          <Select
            styles={colorStyles2}
            className="font7"
            theme={customTheme}
            options={PriceList}
            /* onChange={handleCategory} */
            placeholder="Masukan Harga Sewa Per Hari"
            isSearchable
          />
        </div>
        <div>
          <Form.Label className="font6">Status</Form.Label>
          <Select
            styles={colorStyles}
            className="font7"
            theme={customTheme}
            options={StatusList}
            placeholder="Disewa"
            isSearchable
          />
        </div>
        <div className="buttonContainer">
          <Button type="submit" variant="primary" className="btn-cari font2">
            Cari Mobil
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default SearchBox;
