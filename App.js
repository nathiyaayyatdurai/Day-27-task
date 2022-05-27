import './App.css';
import {Container,Row,Col,Card,CardBody,ListGroup,ListGroupItem} from 'react-bootstrap'
import React,{useState} from 'react';
import { Button } from 'bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

 var card =[
   {
     cTitle:"Free",
     cPrice: "$0"
    
   },
   {
    cTitle:"Plux",
    cPrice: "$56"
   
  },
  {
    cTitle:"Pro",
    cPrice: "$86"
   
  },
 ];
function App() {
   return (
    <div className='pricing py-'>
          <Container>
            <Row>
                {card.map((user)=><Msg title={user}/>)}
            </Row>
          </Container>
       
    </div>
  );
}

function Msg({title}){
  return(
      <Col mb={4} lg={4}>
       <Card>
         <Card.Body>
           <h5 className="text-muted text-uppercase text-center">{title.cTitle}</h5>
            <h4 className=""> /month
            <span>{title.cPrice} </span>
            </h4>
            
            <hr/>
            <ListGroup>
              <span><i className ="fa fa-check"> &nbsp;</i>Single User</span>
              <span><i className ="fa fa-check" > &nbsp;</i>5GB Storage</span>
             <span><i className ="fa fa-check" >&nbsp;</i>Unlimited Public Projects</span>
              <span><i className ="fa fa-check" >&nbsp;</i>Community Access</span>
              <span><i class="fa fa-ban">&nbsp;</i>Unlimited Private Projects</span>
              <span><i class="fa fa-ban">&nbsp;</i>Dedicated Phone Support</span>
              <span><i class="fa fa-ban">&nbsp;</i>Free Subdomain</span>
              <span><i class="fa fa-ban">&nbsp;</i>Monthly Status Reports</span>
            </ListGroup>
            <div className="text-center">
            <button type="button" className="btn btn-primary">Button</button>
            </div>
         </Card.Body>
       </Card>
      </Col>
  )
}

export default App;
