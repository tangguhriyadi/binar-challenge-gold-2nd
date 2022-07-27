import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import complete from "../icon/complete.svg";
import icon_price from "../icon/icon_price.svg";
import icon_24hrs from "../icon/icon_24hrs.svg";
import icon_professional from "../icon/icon_professional.svg";

const WhyUs = () => {
  return (
    <Container
      id="whyUs"
      className="whyContainer"
      style={{
        marginTop: "118px",
        paddingLeft: "136px",
        paddingRight: "136px",
      }}
      fluid
    >
      <h2 style={{ marginBottom: "16px" }} className="font4">
        Why Us?
      </h2>
      <h3 style={{ marginBottom: "24px" }} className="font2">
        Mengapa harus pilih Binar Car Rental?
      </h3>
      <Row
        className="d-flex justify-content-between whyRow"
        style={{ margin: "0" }}
      >
        <Col className="whyUsBox" xl={3}>
          <img
            style={{ marginBottom: "16px" }}
            src={complete}
            alt="complete"
            loading="lazy"
          />
          <div className="font5" style={{ marginBottom: "16px" }}>Mobil Lengkap</div>
          <p className="font2">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
        </Col>
        <Col className="whyUsBox" xl={3}>
          <img
            style={{ marginBottom: "16px" }}
            src={icon_price}
            alt="price"
            loading="lazy"
          />
          <div className="font5" style={{ marginBottom: "16px" }}>Harga Murah</div>
          <p className="font2">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
        </Col>
        <Col className="whyUsBox" xl={3}>
          <img
            style={{ marginBottom: "16px" }}
            src={icon_24hrs}
            alt="icon_24hrs"
            loading="lazy"
          />
          <div className="font5" style={{ marginBottom: "16px" }}>Layanan 24 Jam</div>
          <p className="font2">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
        </Col>
        <Col className="whyUsBox" xl={3}>
          <img
            style={{ marginBottom: "16px" }}
            src={icon_professional}
            alt="icon_professional"
            loading="lazy"
          />
          <div className="font5" style={{ marginBottom: "16px" }}>Supir Profesional</div>
          <p className="font2">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUs;
