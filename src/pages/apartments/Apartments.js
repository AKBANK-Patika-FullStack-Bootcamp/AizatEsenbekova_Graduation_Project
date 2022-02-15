import React,{useState} from 'react'
import { Container, Row, Col } from "reactstrap";
import Apartmenslist from '../../components/apartments-list/Apartmenslist';
import SelectBlock from "../../components/select-block/SelectBlock";



const Apartments = () => {
  const [selectedBlock,setSelectedBlock]=useState(0);
  const [selectedFloor,setSelectedFloor]=useState(0);
  
  return (
    <div>  
      <Container>
           <SelectBlock blockChanger={setSelectedBlock} floorChanger={setSelectedFloor}/>

          <Row className="mt-5">
            <Col>
               <Apartmenslist selectedBlock={selectedBlock} selectedFloor={selectedFloor}/>
            </Col>
          </Row>
 
    
      </Container>
 
    </div>
  )

}

export default Apartments;