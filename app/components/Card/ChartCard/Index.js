import React, { Component } from 'react';
import {Card, Nav, Image, ListGroup, Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Line} from 'react-chartjs-2';
import { 
    faLongArrowAltUp,
    faLongArrowAltDown
  } from '@fortawesome/free-solid-svg-icons'

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

class ChartCard extends Component{
      render(){
          return(
            <div class="row mt-1 ml-1">
              <Card style={{ width: '47rem' }}>
                <div className="pl-5 pr-5 pt-5">
                  <div class="row">
                    <p class="col">
                      <b class="row text-muted">
                        Users
                      </b>
                      <h2 class="row">
                        <b >
                          234
                        </b>
                      </h2>
                      <p class=" row text-success">
                        <FontAwesomeIcon icon={faLongArrowAltUp}/> 0.2%
                      </p>
                      <p class="row text-muted">
                        vs Last 7 Days
                      </p>
                    </p>
                    <p class="col">
                      <b class="row text-muted">
                        Course Completed
                      </b>
                      <h2>
                        <b class="row text-muted">
                          5,700
                        </b>
                      </h2>
                      <p class=" row text-success">
                        <FontAwesomeIcon icon={faLongArrowAltUp}/> 0.2%
                      </p>
                    </p>
                    <p class="col">
                      <b class="row text-muted">
                        Plan Completed
                      </b>
                      <h2>
                        <b class="row text-muted">
                          1,400
                        </b>
                      </h2>
                      <p class=" row text-danger">
                      <FontAwesomeIcon icon={faLongArrowAltDown}/>0.2%
                      </p>
                    </p>
                    <p class="col">
                      <b class="row text-muted">
                        Learning Hour
                      </b>
                      <h2>
                        <b class="row text-muted">
                          22m 40s
                        </b>
                      </h2>
                      <p class=" row text-success">
                        <FontAwesomeIcon icon={faLongArrowAltUp}/>0.2%
                      </p>
                    </p>
                  </div>
                </div>

                <ListGroup variant="flush">
                  <Line data={data} />
                </ListGroup>

                <Card.Footer>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      Last 7 Days
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Last 30 Days</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Last Years</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Footer>
              </Card>
            </div>
          );
      }
  }

  export default ChartCard;