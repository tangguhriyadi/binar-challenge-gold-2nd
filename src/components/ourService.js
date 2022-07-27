import React from "react";
import { Row, Col } from "react-bootstrap";
import ficheck from "../icon/ficheck.svg";

const OurServices = () => {
  return (
    <Row
      id="ourServices"
      style={{ marginTop: "105px" }}
      className="d-flex justify-content-center serviceRow"
    >
      <Col style={{paddingRight:'43px'}} md={6} className="d-flex justify-content-end serviceLeft">
        <div>
        <img
          className="girl"
          src="images/img_service.png"
          alt="girl"
          loading="lazy"
        />
        </div>
        
      </Col>
      <Col className="serviceRight" style={{paddingLeft:'43px'}} md={6}>
        
        <h2
          style={{ maxWidth: "468px", marginBottom: "24px", marginTop: "36px" }}
          className="font4 serviceRightHead"
        >
          Best Car Rental for any kind of trip in (Lokasimu)!
        </h2>
     
        
        <p style={{ maxWidth: "468px" }} className="font2">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <div className="font2" style={{marginBottom:'16px'}}>
          <img style={{marginRight:'14px'}} className="serviceItem" src={ficheck} alt="check" loading="lazy" /> Sewa
          Mobil Dengan Supir di Bali 12 Jam
        </div>
        <div className="font2" style={{marginBottom:'16px'}}>
          <img style={{marginRight:'14px'}} className="serviceItem" src={ficheck} alt="check" loading="lazy" /> Sewa
          Mobil Lepas Kunci di Bali 24 Jam
        </div>
        <div className="font2" style={{marginBottom:'16px'}}>
          <img style={{marginRight:'14px'}} className="serviceItem" src={ficheck} alt="check" loading="lazy" /> Sewa
          Mobil Jangka Panjang Bulanan
        </div>
        <div className="font2" style={{marginBottom:'16px'}}>
          <img style={{marginRight:'14px'}} className="serviceItem" src={ficheck} alt="check" loading="lazy" /> Gratis
          Antar - Jemput Mobil di Bandara
        </div>
        <div className="font2" style={{marginBottom:'16px'}}>
          <img style={{marginRight:'14px'}} className="serviceItem" src={ficheck} alt="check" loading="lazy" /> Layanan
          Airport Transfer / Drop In Out
        </div>
      </Col>
    </Row>
  );
};

export default OurServices;
