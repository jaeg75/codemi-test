import React, { Component } from 'react';
import {Card, ListGroup, Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

class CaseCard extends Component {
    
    constructor(props) {
        super(props);
        this.state={
          covid19Data: [],
          recovered: []
        }
      }
    
    componentDidMount(){
    
        //Fetch Data API
        fetch('https://covid19.mathdro.id/api/')
        .then(res => res.json())
        .then(json => this.setState({
          covid19Data: json}));
  
        //Fetch Recovered Data API
        fetch('https://covid19.mathdro.id/api/recovered')
        .then(res => res.json())
        .then(json => this.setState({
          recovered: json}));
      }
    render() {
        return(
          <>
            <h4 class="row mt-5 ml-1">What Courses Do Yours Users Visit?</h4>  
            <div class="row mt-1 ml-1">
              <Card style={{ width: '47rem' }}>
                <ListGroup variant="flush">
                  <div class="row m-3">
                    <div class="col">
                      <p class="border-bottom py-2">
                        <strong>
                          Countries
                        </strong>
                      </p>
                      {this.state.recovered.slice(0, 9).map( item => (
                        <p class="text-success border-bottom py-2">{item.countryRegion}</p>
                      ))}
                    </div>
                    <div class="col">
                      <p class="border-bottom py-2">
                        <strong>
                          Recovered
                        </strong>
                      </p>
                      {this.state.recovered.slice(0, 9).map( item => (
                        <p class="border-bottom py-2">{item.recovered}</p>
                      ))}
                    </div>
                    <div class="col">
                      <p class="border-bottom py-2">
                        <strong>
                          Deaths
                        </strong>
                      </p>
                      {this.state.recovered.slice(0, 9).map( item => (
                        <p class="border-bottom py-2">{item.deaths}</p>
                      ))}
                    </div>
                  </div>
                </ListGroup>

                <Card.Footer>
                  <div class="row justify-content-between">
                  <div class="col-4">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      Last 7 Days
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Last 30 Days</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Last Years</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </div>
                  <div class="col-4 pt-2 text-success">
                    COURSE REPORT <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          </>
        );
    }
}

export default CaseCard;