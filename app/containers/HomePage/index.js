/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component } from 'react';
import {Jumbotron, Image, Container} from 'react-bootstrap';
import ActiveUser from '../.././components/Card/ActiveUser';
import ChartCard from '../.././components/Card/ChartCard';
import Tab from '../.././components/Tab';
import CaseCard from '../.././components/Card/CaseCard';
import ChartBarCard from '../.././components/Card/ChartBarCard';
import SocialBarCard from '../.././components/Card/SocialBarCard';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Bar} from 'react-chartjs-2';
class Homepage extends Component {
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
      console.log("recovered " + JSON.stringify(this.state.recovered))
      return(
        <div class="m-3">

        <div class="row">
        
          <Tab/>

          <div class="col-7">

            <h4 class="row ml-1">Codemi Home</h4> 
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={87}
              totalSlides={2}
              interval={10000}
              isPlaying={true}
            >
              <Slider>
                <Slide index={0}>
                  <Image src={this.state.covid19Data.image} fluid /> 
                  <Jumbotron fluid className="shadow-sm">
                    <Container>
                      <h3 className="py-5 px-3">
                        <strong>Source : </strong> {this.state.covid19Data.source}
                      </h3>
                    </Container>
                  </Jumbotron>
                </Slide>
                <Slide index={1}><ChartCard/></Slide>
              </Slider>
            </CarouselProvider>
                
            <CaseCard/>

            <ChartBarCard/>
            
            <SocialBarCard/>
            
          </div>
        
          {/*Active user Card*/}
          <ActiveUser/>

        </div>

        </div>
      );
    }
}

export default Homepage;
