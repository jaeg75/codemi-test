import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import fetch from 'node-fetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

class ActiveUser extends Component{

  constructor(props) {
    super(props);
    this.state={
      covid19Data: [],
      confirmed: [],
      recovered: [],
      dailySeries: [],
      death: []
    }
  }

  componentDidMount(){

    //Fetch Covid19 Api
    fetch('https://covid19.mathdro.id/api/')
    .then(res => res.json())
    .then(json => this.setState({
    covid19Data: json}));
    
    //Fetch Deaths Case
    fetch('https://covid19.mathdro.id/api/deaths')
    .then(res => res.json())
    .then(json => this.setState({
    death: json}));
    
    //Fetch Confirmed Case
    fetch('https://covid19.mathdro.id/api/confirmed')
    .then(res => res.json())
    .then(json => this.setState({
    confirmed: json}));

    //Fetch Daily Time Series Keys and Values
    fetch('https://covid19.mathdro.id/api/daily/')
    .then(res => res.json())
    .then(json => this.setState({
    dailySeries: json}));
  }

  render(){
  
  const data = {
  labels: ['', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: '',
      barThickness: 6,
      data: [12, 19, 3, 5, 2, 3, 15, 5, 9, 14, 13, 9,15, 5, 9, 14, 13, 9, 14, 13],
      fontColor: '#fffff',
      backgroundColor: [
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
        '#8EB6F9',
      ],
      borderColor: [
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
      ],
      borderWidth: 1,
      options: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'rgb(255, 99, 132)'
            }
        }
    }
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

    return(
      <div class="mt-5">
        <Card bg="primary" text="light" className="mr-3" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text>
              Countries with confirmed cases
            </Card.Text>

            <Card.Title>
              <h1>
                {this.state.death.length}
              </h1>
            </Card.Title>

            <Card.Text>
              Page views per minutes
            </Card.Text>

            <div>
              <Bar data={data} options={options} />
            </div>

            <div class="border-bottom row justify-content-between mt-3">
              <p class="col-5">
                <b>
                  Countries
                </b>
              </p>
              <p class="col-5">
                <b>
                  Confirmed
                </b>
              </p>
            </div>

            {this.state.confirmed.slice(0, 15).map( item => (
            <div class="border-bottom row justify-content-between ml-1 mr-1">
              <Card.Text className="pt-2">
                {item.countryRegion}
              </Card.Text>

              <Card.Text className="pt-2">
                {item.confirmed}
              </Card.Text>
            </div>
            ))}
            
            <div class="row justify-content-end mt-3">
              <div class="col-8">
                REAL-TIME REPORT <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>

          </Card.Body>
        </Card>  
      </div>
    );
  }
}

export default ActiveUser;