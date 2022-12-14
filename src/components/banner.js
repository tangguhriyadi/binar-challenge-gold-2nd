import React from 'react'
import { Row, Col, Button} from 'react-bootstrap'
import carbg from '../icon/carbg.svg'
import {Link} from 'react-router-dom'

const Banner = ({showButton}) => {
    
  return (
    
        <Row className="bannerRow" style={{margin:'0', minHeight:'440px', backgroundColor:'#F1F3FF'}}>
            <Col className="bannerLeft" style={{paddingLeft:'136px', paddingTop:'118px', paddingRight:'16px'}} md={6}>
                <h1 className='font1'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <div className='font2' style={{marginTop:'16px', marginBottom:'16px'}}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</div>
                {showButton ? (<Button as={Link} to="/search" className='btn1' style={{marginTop:'16px'}}>Mulai Sewa Mobil</Button>) : (<Button as={Link} to="/" className='btn1' style={{marginTop:'16px'}}>Kembali</Button>)}
                
                
            </Col>
            <Col className="d-flex justify-content-end align-items-end" style={{paddingLeft:'16px', paddingRight:'0px', }} md={6}>
                <img src={carbg} className="bannerImg" alt="car" loading="lazy" style={{width:'100%', height:'auto'}} />
            </Col>
        </Row>
    
  )
}

export default Banner