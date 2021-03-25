import React, { Component } from 'react';
import {Nav, Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faSun, 
  faChartArea, 
  faGem,  
  faChartLine, 
  faBullhorn, 
  faStarHalfAlt,
  faEnvelope,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

const learning = [
    {
      tab: 'Courses',
      logo: faGem,
      notif: 21
    },
    {
      tab: 'Learning Plans',
      logo: faInfoCircle
    }
  ]
  
  const manage = [
    {
      tab: 'Users',
      logo: faUser
    },
    {
      tab: 'Skills',
      logo: faSun
    },
    {
      tab: 'Reports',
      logo: faChartArea
    },
    {
      tab: 'Analytics',
      logo: faChartLine
    },
    {
      tab: 'Annoucements',
      logo: faBullhorn
    }
  ]
  
  const configure = [
    {
      tab: 'Points',
      logo: faStarHalfAlt
    },
    {
      tab: 'Reward',
      logo: faSun
    },
    {
      tab: 'Email Templates',
      logo: faEnvelope
    },
    {
      tab: 'Company Info',
      logo: faInfoCircle
    },
    {
      tab: 'Billing',
      logo: faUser
    }
  ]

class Tab extends Component{
    render(){
        return(
          <div class="col-2 flex-wrap">
            <Nav defaultActiveKey="/home" className="flex-column row bg-white shadow-sm">
              <Nav.Link><b class="text-success">Home</b></Nav.Link>
            
              <Nav.Link className="text-secondary"><b>Learning</b></Nav.Link>
              {learning.map( item => (
                <Nav.Link className="text-secondary"> 
                  <div class="row px-1 justify-content-between">
                    <div class="col">
                      <FontAwesomeIcon icon={item.logo} className="mr-1"/> 
                      {item.tab}
                    </div>  
                  
                    <Badge variant="danger">
                      {item.notif}
                    </Badge>
                  </div>
                </Nav.Link>
              ))}

              <div class="border-top my-3"/>
  
              <Nav.Link className="text-secondary"><b>Manager</b></Nav.Link>
              {manage.map( item => (
                <Nav.Link className="text-secondary"><FontAwesomeIcon icon={item.logo} /> {item.tab}</Nav.Link>
              ))}

              <div class="border-top my-3"/>
  
              <Nav.Link className="text-secondary"><b>Configure</b></Nav.Link>
              {configure.map( item => (
                <Nav.Link className="text-secondary"><FontAwesomeIcon icon={item.logo} /> {item.tab}</Nav.Link>
              ))}
            
            </Nav>
          </div>
        );
    }
}

export default Tab;