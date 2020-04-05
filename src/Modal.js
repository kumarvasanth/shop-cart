
import React from "react";
import { Modal,Button } from 'react-bootstrap';


class  MyVerticallyCenteredModal extends React.Component {
  
  
  render(){
   
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Transaction Successfull
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <h3>Total Cost:RS {this.props.total}</h3>
        </Modal.Body>
        <Modal.Footer>
        <h5>Thanks for shopping with us</h5>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

          
    );
    
  }
    
  }export default MyVerticallyCenteredModal;