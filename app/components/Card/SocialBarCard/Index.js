import React, { Component } from 'react';
import {Card, ListGroup, Dropdown} from 'react-bootstrap';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Bar} from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: '',
        backgroundColor: '#8EB6F9',
        borderColor: '#ffffff',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

class SocialBarCard extends Component{
    render(){
        return(
          <>
            <h4 class="row mt-5 ml-1">How is your Social Activity</h4>  
            <div class="row mt-1 ml-1">
              <Card style={{ width: '47rem' }}>
                <div class="row my-3 mx-3">
                <div class="col text-muted">
                  <strong>
                    Discussion
                  </strong>
                </div>
                <div class="col text-muted">
                  <strong>
                    Blog Post
                  </strong>
                </div>
                <div class="col text-muted">
                  <strong>
                    Questions and Answers
                  </strong>
                </div>
                </div>
                <ListGroup variant="flush">
                  <Bar
                    data={data}
                    width={100}
                    height={300}
                    options={{
                      maintainAspectRatio: false
                    }}
                  />
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
          </>
        );
    }
}

export default SocialBarCard;