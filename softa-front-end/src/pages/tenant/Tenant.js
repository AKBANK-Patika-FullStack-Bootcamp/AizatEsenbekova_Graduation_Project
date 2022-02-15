import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import SelectBlock from "../../components/select-block/SelectBlock";
import TenantList from "../../components/tenant-list/TenantList";

const Tenant = () => {
const [selectedBlock,setSelectedBlock]=useState(0);
const [selectedFloor,setSelectedFloor]=useState(0);
  return (
    <div>
      <Container>
           <SelectBlock blockChanger={setSelectedBlock} floorChanger={setSelectedFloor}/>

          <Row className="mt-5">
            <Col>
               <TenantList  selectedBlock={selectedBlock} selectedFloor={selectedFloor}/>
            </Col>
          </Row>
      
    
      </Container>


    
    </div>
  );
};

export default Tenant;
