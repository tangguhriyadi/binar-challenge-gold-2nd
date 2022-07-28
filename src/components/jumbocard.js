import React from 'react'
import {Container, Row} from 'react-bootstrap'

const Jumbocard = () => {
  return (
    <Container className="jumboContainer" fluid>
        <div className="jumbocard text-center">
            <Row md={12}>
            <h1 className="font1" style={{marginBottom:'16px', padding:'0'}}>Sewa Mobil di (Lokasimu) Sekarang</h1>
            </Row>
            <Row md={12} className="d-flex justify-content-center">
            <p style={{maxWidth:'468px', padding:'0'}} className="font2 jumbotext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </Row>
            <Row md={12}  style={{marginTop:'52px'}} className="d-flex justify-content-center btncard">
            <div className='btn1'>Mulai Sewa Mobil</div>
            </Row>
        </div>

    </Container>
  )
}

export default Jumbocard