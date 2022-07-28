import React from 'react'
import {Container, Accordion} from 'react-bootstrap'

const Faq = () => {
  return (
    <Container className="faqContainer" style={{paddingLeft:'136px', paddingRight:'136px', marginTop:'100px'}} fluid>
        <div className="d-flex justify-content-center faqContainer2">
            <div className="faqLeft" style={{width:'500px'}}>
                <h2 className="font4 faqHead" style={{marginBottom:'16px'}}>Frequently Asked Question</h2>
                <p className="font2 faqText" style={{paddingRight:'132px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing  elit</p>
            </div>
            <div className="faqRight" style={{width:'668px'}}>
            <Accordion className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  <p className="mb-0 font2" >
                    Apa saja syarat yang dibutuhkan?{" "}
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className="mb-0 font2" >
                    Berapa hari minimal sewa mobil lepas kunci?{" "}
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className="mb-0 font2" >
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?{" "}
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className="mb-0 font2" >
                    Apakah Ada biaya antar-jemput?{" "}
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className="mb-0 font2" >
                    Bagaimana jika terjadi kecelakaan
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
        </div>

    </Container>
  )
}

export default Faq