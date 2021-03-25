import React from 'react';
import {Navbar, Col, Row, Image, Badge, Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBell
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>
      <Navbar bg="light shadow-sm" className="justify-content-between">
        
          <Col xs={3}>
            <Navbar.Brand href="#home">Codemi Test</Navbar.Brand>
          </Col>

          <Col xs={2}>
            <Row>
              <div class="d-inline my-2 mx-2">
              <Col xs={2}>
                <Row className="position-relative">     
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    <Badge variant="danger" >18</Badge>
                  </span>
                  <FontAwesomeIcon icon={faBell}/> 
                </Row>
              </Col>
              </div>

              <Col xs={4}>
                <Row>
                  <Col xs={2}>
                    <Image src="holder.js/171x180" roundedCircle />
                  </Col>
                  <Col xs={2}>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
    
                      </Dropdown.Toggle>
                    </Dropdown>
                  </Col>
                </Row>
              </Col>

            </Row>
          </Col>
        
      </Navbar>
    </div>
  );
}

export default Header;
